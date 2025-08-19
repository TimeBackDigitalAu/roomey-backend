import "dotenv/config";
import { z } from "zod";

export const appConfigSchema = z.object({
  NODE_ENV: z
    .enum(["development", "staging", "production"])
    .default("development"),
  APP_NAME: z.string().default("Roomey Backend Service"),
  APP_VERSION: z.string().default("1.0.0"),
  APP_EMAIL: z.string().email(),
  PORT: z.coerce.number().default(8080),
  HOST: z.string().default("0.0.0.0"),
  WEBSITE_URL: z.string().url(),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  LOG_SERVICE: z.string().default("roomey-backend"),
  DEBUG: z.coerce.boolean().default(false),
  RATE_LIMIT_TTL: z.coerce.number().default(60),
  RATE_LIMIT_LIMIT: z.coerce.number().default(100),
  CORS_ORIGINS: z
    .string()
    .default("http://localhost:3000,http://localhost:3001")
    .transform((val) => val.split(",").map((origin) => origin.trim())),
  API_KEY_HEADER: z.string().default("X-API-Key"),
  // Database
  DATABASE_URL: z.string().url(),
  DATABASE_POOL_MIN: z.coerce.number().default(2),
  DATABASE_POOL_MAX: z.coerce.number().default(10),
  DATABASE_TIMEOUT: z.coerce.number().default(30000),
  // Redis
  REDIS_URL: z.string().url(),
  REDIS_TTL: z.coerce.number().default(3600),
  REDIS_MAX_RETRIES: z.coerce.number().default(3),
  // Auth
  REFRESH_TOKEN_EXPIRES_IN: z.string().default("30d"),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  TURNSTILE_SECRET_KEY: z.string().min(1),
  // Payment
  STRIPE_SECRET_KEY: z.string().min(1),
  STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  // Communication
  RESEND_API_KEY: z.string().min(1),
  TWILIO_ACCOUNT_SID: z.string().min(1),
  TWILIO_AUTH_TOKEN: z.string().min(1),
  TWILIO_FROM: z.string().min(1),
});

export type AppConfig = z.infer<typeof appConfigSchema>;

// Parse and validate configuration
export const appConfig = appConfigSchema.parse(process.env);

// Helper function to get environment-specific config
export const isProduction = appConfig.NODE_ENV === "production";
export const isDevelopment = appConfig.NODE_ENV === "development";
export const isStaging = appConfig.NODE_ENV === "staging";

// Validate critical production configurations
if (isProduction) {
  if (!process.env["DATABASE_URL"]) {
    throw new Error("DATABASE_URL is required in production");
  }
}
