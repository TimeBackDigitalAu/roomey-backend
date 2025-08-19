import { appConfig } from '../../config/app-config';

/**
 * Authentication configuration constants
 */
export const AUTH_CONFIG = {
  // Session & Cookie settings
  SESSION: {
    COOKIE_PREFIX: `${appConfig.APP_NAME}-AUTH`,
    SECURE: appConfig['NODE_ENV'] === 'production',
    HTTP_ONLY: true,
    SAME_SITE: 'lax' as const,
    MAX_AGE: 30 * 24 * 60 * 60 * 1000, // 30 days
  },

  // Token settings
  TOKENS: {
    ACCESS_TOKEN: 15 * 60 * 1000, // 15 minutes
    REFRESH_TOKEN: 7 * 24 * 60 * 60 * 1000, // 7 days
    VERIFICATION_TOKEN: 24 * 60 * 60 * 1000, // 24 hours
  },

  // OTP settings
  OTP: {
    LENGTH: 6,
    EXPIRY: 10 * 60, // 10 minutes in seconds
    MAX_ATTEMPTS: 3,
  },

  // Security settings
  SECURITY: {
    MAX_LOGIN_ATTEMPTS: 5,
    ACCOUNT_LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_REQUIRE_UPPERCASE: true,
    PASSWORD_REQUIRE_LOWERCASE: true,
    PASSWORD_REQUIRE_NUMBERS: true,
    PASSWORD_REQUIRE_SPECIAL_CHARS: false,
  },

  // Rate limiting
  RATE_LIMITS: {
    REGISTRATION: { WINDOW: 15 * 60, MAX_ATTEMPTS: 3 }, // 15 minutes, 3 attempts
    LOGIN: { WINDOW: 5 * 60, MAX_ATTEMPTS: 5 }, // 5 minutes, 5 attempts
    VERIFICATION: { WINDOW: 5 * 60, MAX_ATTEMPTS: 3 }, // 5 minutes, 3 attempts
    RESEND: { WINDOW: 60, MAX_ATTEMPTS: 1 }, // 1 minute, 1 attempt
  },

  // User roles
  ROLES: {
    DEFAULT: 'user',
    ADMIN: 'admin',
    MODERATOR: 'moderator',
  },

  // Verification settings
  VERIFICATION: {
    EMAIL_REQUIRED: true,
    PHONE_REQUIRED: true,
    BOTH_REQUIRED: true,
  },
};

/**
 * Authentication success messages
 */
export const AUTH_SUCCESS = {
  REGISTRATION:
    'User registered successfully. Please verify your email and phone number.',
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT: 'Logout successful',
  EMAIL_VERIFIED: 'Email verified successfully',
  PHONE_VERIFIED: 'Phone number verified successfully',
  TOKEN_REFRESHED: 'Token refreshed successfully',
  VERIFICATION_SENT: 'Verification code sent successfully',
} as const;

/**
 * Authentication error messages
 */
export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid email or password',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  PHONE_ALREADY_EXISTS: 'Phone number already registered',
  ACCOUNT_LOCKED: 'Account temporarily locked due to multiple failed attempts',
  VERIFICATION_REQUIRED:
    'Please verify your email and phone number before logging in',
  INVALID_OTP: 'Invalid or expired OTP',
  INVALID_TOKEN: 'Invalid or expired verification token',
  RATE_LIMIT_EXCEEDED: 'Too many attempts. Please try again later.',
  WEAK_PASSWORD: 'Password does not meet security requirements',
} as const;
