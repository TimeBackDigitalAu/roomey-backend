import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {
  admin,
  emailOTP,
  haveIBeenPwned,
  magicLink,
  openAPI,
  organization,
} from "better-auth/plugins";
import { redis } from "./redis";
import { sendEmail } from "./resend";

const prisma = new PrismaClient();

export const auth: ReturnType<typeof betterAuth> = betterAuth({
  user: {
    additionalFields: {
      role: {
        type: "string",
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  trustedOrigins: ["http://localhost:3000"],
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        html: `Click the link to verify your email: ${url}?token=${token}`,
      });
    },
  },
  cookies: {
    session_token: {
      name: "session_token",
    },
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPasswordEmail: async ({ email, url, token }) => {
      await sendEmail({
        to: email,
        subject: "Reset your password",
        html: `Click the link to reset your password: ${url}?token=${token}`,
      });
    },
    sendMagicLink: async ({ user, url, token }) => {
      await sendEmail({
        to: user.email,
        subject: `Login to your ${process.env.APP_NAME} account`,
        html: `Click the link to login: ${url}?token=${token}`,
      });
    },
  },

  plugins: [
    emailOTP({
      allowedAttempts: 5,
      expiresIn: 300,
      async sendVerificationOTP({ email, otp }) {
        await sendEmail({
          to: email,
          subject: "Verify your email address",
          html: `Your verification code is: ${otp}`,
        });
      },
    }),
    admin(),
    haveIBeenPwned(),
    openAPI(),
    organization(),
    magicLink({
      sendMagicLink: async ({ email, url, token }) => {
        await sendEmail({
          to: email,
          subject: "Login to your account",
          html: `Click the link to login: ${url}?token=${token}`,
        });
      },
    }),
  ],
  secondaryStorage: {
    get: async (key) => {
      const value = await redis.get(key);
      return value ? value : null;
    },
    set: async (key, value, ttl) => {
      if (ttl) await redis.set(key, value, "EX", ttl);
      else await redis.set(key, value);
    },
    delete: async (key) => {
      await redis.del(key);
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
});
