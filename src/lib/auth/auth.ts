import { stripe } from "@better-auth/stripe";
import { betterAuth, BetterAuthPlugin, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {
  admin,
  captcha,
  createAuthMiddleware,
  emailOTP,
  haveIBeenPwned,
  magicLink,
  openAPI,
  phoneNumber,
} from "better-auth/plugins";
import Stripe from "stripe";
import { appConfig } from "../../config/app-config";
import { ConfirmationEmail } from "../../react-email/confirmation-email";
import { OtpEmail } from "../../react-email/otp-email";
import { ResetPasswordEmail } from "../../react-email/reset-password-email";
import {
  ac,
  admin as adminRole,
  agency,
  lister,
  seeker,
} from "../auth/permission";
import { generateTemplate, StripeHelper } from "../helper.js";
import { prisma } from "../prisma/prisma";
import { redis } from "../redis/redis";
import { sendEmail } from "../resend/resend";
import { stripe as stripeClient } from "../stripe/stripe";
import { sendSMS } from "../twillio/twillio";

export const auth: ReturnType<typeof betterAuth> = betterAuth({
  appName: appConfig.APP_NAME,
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      if (ctx.path.startsWith("/sign-up") || ctx.path.startsWith("/sign-in")) {
        const newSession = ctx.context.newSession;

        if (newSession) {
          await prisma.user_table.update({
            where: { id: newSession.user.id },
            data: {
              user_last_login_at: new Date(),
            },
          });
        }
      }
    }),
  },
  advanced: {
    cookiePrefix: `${appConfig.APP_NAME}-AUTH`,
  },
  user: {
    modelName: "user_table",
    fields: {
      id: "user_id",
      name: "user_name",
      email: "user_email",
      emailVerified: "user_email_verified",
      image: "user_image",
      createdAt: "user_created_at",
      updatedAt: "user_updated_at",
      role: "user_role",
      banned: "user_banned",
      banReason: "user_ban_reason",
      banExpires: "user_ban_expires",
      stripeCustomerId: "user_stripe_customer_id",
      phoneNumber: "user_phone_number",
      phoneNumberVerified: "user_phone_number_verified",
      twoFactorEnabled: "user_two_factor_enabled",
      accounts: "user_account_tables",
    },
    additionalFields: {
      user_is_onboarded: {
        type: "boolean",
        defaultValue: false,
      },
      user_phone_number: {
        type: "string",
        defaultValue: "",
      },
    },
  },
  account: {
    modelName: "user_account_table",
    fields: {
      id: "user_account_id",
      accountId: "user_account_account_id",
      providerId: "user_account_provider_id",
      userId: "user_account_user_id",
      accessToken: "user_account_access_token",
      refreshToken: "user_account_refresh_token",
      idToken: "user_account_id_token",
      accessTokenExpiresAt: "user_account_access_token_expires_at",
      scope: "user_account_scope",
      password: "user_account_password",
      createdAt: "user_account_created_at",
      updatedAt: "user_account_updated_at",
    },
  },
  verification: {
    modelName: "verification_table",
    fields: {
      id: "verification_id",
      identifier: "verification_identifier",
      value: "verification_value",
      expiresAt: "verification_expires_at",
      createdAt: "verification_created_at",
      updatedAt: "verification_updated_at",
    },
  },
  subscription: {
    modelName: "subscription_table",
    fields: {
      id: "subscription_id",
      plan: "subscription_plan",
      referenceId: "subscription_reference_id",
      stripeCustomerId: "subscription_stripe_customer_id",
      stripeSubscriptionId: "subscription_stripe_subscription_id",
      status: "subscription_status",
      periodStart: "subscription_period_start",
      periodEnd: "subscription_period_end",
      cancelAtPeriodEnd: "subscription_cancel_at_period_end",
      // seats: "subscription_seats", // include if Better Auth expects it
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: appConfig.GOOGLE_CLIENT_ID,
      clientSecret: appConfig.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins: [appConfig.WEBSITE_URL],
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 1000 * 60 * 10, // 10 minutes
    sendVerificationEmail: async ({ url, user, token }) => {
      const tokenUrl = `${url}?token=${token}`;
      await sendEmail({
        to: user.email,
        subject: "Verify your Roomey account",
        html: ConfirmationEmail({
          magicLink: tokenUrl,
          name: user.name,
        }),
        from: `${appConfig.APP_EMAIL}`,
      });
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
    expiresIn: 1000 * 60 * 10, // 10 minutes
    sendResetPassword: async ({ user, url, token }) => {
      const tokenUrl = `${url}?token=${token}`;
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        html: ResetPasswordEmail({
          magicLink: tokenUrl,
          name: user.name,
        }),
        from: `${appConfig.APP_EMAIL}`,
      });
    },
    onPasswordReset: async ({ user }) => {
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        html: "password reset",
        from: `${appConfig.APP_EMAIL}`,
      });
    },
    sendMagicLink: async ({
      user,
      url,
      token,
    }: {
      user: User;
      url: string;
      token: string;
    }) => {
      const tokenUrl = `${url}?token=${token}`;
      await sendEmail({
        to: user.email,
        subject: `Login to your ${process.env.APP_NAME} account`,
        html: ConfirmationEmail({
          magicLink: tokenUrl,
        }),
        from: `${appConfig.APP_EMAIL}`,
      });
    },
  },
  plugins: [
    phoneNumber({
      schema: {
        user: {
          fields: {
            phoneNumber: "user_phone_number",
            phoneNumberVerified: "user_phone_number_verified",
          },
        },
      },
      sendOTP: async ({ phoneNumber, code }) => {
        await sendSMS({
          to: phoneNumber,
          message: `Your Roomey verification code is ${code}. This code will expire in 10 minutes. if you didn't request this code, please ignore this message.`,
        });
      },
    }),
    emailOTP({
      allowedAttempts: 5,
      expiresIn: 300,
      async sendVerificationOTP({ email, otp }) {
        await sendEmail({
          to: email,
          subject: "Verify your email address",
          html: generateTemplate(OtpEmail({ validationCode: otp })),
          from: `${appConfig.APP_EMAIL}`,
        });
      },
    }),
    admin({
      schema: {
        user: {
          fields: {
            role: "user_role",
            banned: "user_banned",
            banReason: "user_ban_reason",
            banExpires: "user_ban_expires",
          },
        },
      },
      ac,
      adminRoles: ["admin"],
      roles: {
        admin: adminRole,
        seeker,
        agency,
        lister,
      },
      defaultRole: "seeker",
    }) as unknown as BetterAuthPlugin,
    haveIBeenPwned(),
    openAPI(),
    magicLink({
      sendMagicLink: async ({ email, url, token }) => {
        const tokenUrl = `${url}?token=${token}`;
        await sendEmail({
          to: email,
          subject: "Login to your account",
          html: ConfirmationEmail({
            magicLink: tokenUrl,
          }),
          from: `${appConfig.APP_EMAIL}`,
        });
      },
    }),
    stripe({
      schema: {
        user: {
          fields: {
            stripeCustomerId: "user_stripe_customer_id",
          },
        },
        subscription: {
          fields: {
            id: "subscription_id",
            plan: "subscription_plan",
            referenceId: "subscription_reference_id",
            stripeCustomerId: "subscription_stripe_customer_id",
            stripeSubscriptionId: "subscription_stripe_subscription_id",
            status: "subscription_status",
            periodStart: "subscription_period_start",
            periodEnd: "subscription_period_end",
            cancelAtPeriodEnd: "subscription_cancel_at_period_end",
            seats: "subscription_seats",
          },
        },
      },
      stripeClient,
      onEvent: async (event: Stripe.Event) => {
        await StripeHelper(event);
      },
      stripeWebhookSecret: appConfig.STRIPE_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
      subscription: {
        enabled: true,
        plans: async () => {
          const plans = await prisma.plan_table.findMany();

          return plans.map((plan) => ({
            name: plan.plan_name,
            priceId: plan.plan_price_id ?? undefined,
          }));
        },
      },
    }),
    captcha({
      provider: "cloudflare-turnstile", // or google-recaptcha, hcaptcha
      secretKey: process.env.TURNSTILE_SECRET_KEY!,
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
  schema: {
    auth: {
      schema: "auth_schema",
    },
    stripe: {
      schema: "stripe_schema",
    },
    public: {
      schema: "public",
    },
  },
  jwt: {
    secret: appConfig.JWT_SECRET,
  },
});
