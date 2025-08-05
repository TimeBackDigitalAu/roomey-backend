import { stripe } from "@better-auth/stripe";
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
import Stripe from "stripe";
import ConfirmationEmail from "../services/react-email/confirmation-email.js";
import OtpEmail from "../services/react-email/otp-email.js";
import { generateTemplate, StripeHelper } from "./helper";
import prisma from "./prisma";
import { redis } from "./redis";
import { sendEmail } from "./resend";

const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

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
  trustedOrigins: [process.env.APP_URL!],
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }) => {
      const tokenUrl = `${url}?token=${token}`;
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        html: ConfirmationEmail({
          magicLink: tokenUrl,
        }),
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
      const tokenUrl = `${url}?token=${token}`;
      await sendEmail({
        to: email,
        subject: "Reset your password",
        html: ConfirmationEmail({
          magicLink: tokenUrl,
        }),
      });
    },
    sendMagicLink: async ({ user, url, token }) => {
      const tokenUrl = `${url}?token=${token}`;
      await sendEmail({
        to: user.email,
        subject: `Login to your ${process.env.APP_NAME} account`,
        html: ConfirmationEmail({
          magicLink: tokenUrl,
        }),
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
          html: generateTemplate(OtpEmail({ validationCode: otp })),
        });
      },
    }),
    admin({
      adminRoles: ["admin"],
      roles: {
        admin: {
          authorize: () => ({ success: true }),
          statements: {
            "*": ["*"],
          },
        },
      },
      defaultRole: "user",
    }),
    haveIBeenPwned(),
    openAPI(),
    organization(),
    magicLink({
      sendMagicLink: async ({ email, url, token }) => {
        const tokenUrl = `${url}?token=${token}`;
        await sendEmail({
          to: email,
          subject: "Login to your account",
          html: ConfirmationEmail({
            magicLink: tokenUrl,
          }),
        });
      },
    }),
    stripe({
      stripeClient,
      onEvent: async (event: Stripe.Event) => {
        await StripeHelper(event);
      },
      stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
      subscription: {
        enabled: true,
        plans: async () => {
          const plans = await prisma.plan.findMany();

          return plans.map((plan) => ({
            name: plan.name,
            priceId: plan.priceId ?? undefined,
          }));
        },
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
  schema: {
    auth: {
      schema: "auth_schema",
    },
    stripe: {
      schema: "stripe_schema",
    },
    organization: {
      schema: "organization_schema",
    },
    public: {
      schema: "public",
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET!,
  },
});
