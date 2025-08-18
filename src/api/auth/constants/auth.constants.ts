export const AUTH_CONSTANTS = {
  OTP: {
    LENGTH: 6,
    EXPIRY_SECONDS: 600, // 10 minutes
    GENERATION_MIN: 100000,
    GENERATION_MAX: 999999,
  },
  VERIFICATION: {
    EMAIL_EXPIRY_MS: 10 * 60 * 1000, // 10 minutes
  },
  ROLES: {
    DEFAULT: "seeker",
    AVAILABLE: ["seeker", "lister", "agency", "admin"] as const,
  },
  MESSAGES: {
    REGISTRATION_SUCCESS:
      "Registration successful. Please check your email and phone for verification.",
    EMAIL_VERIFIED: "Email verified successfully",
    PHONE_VERIFIED: "Phone number verified successfully",
    VERIFICATION_RESENT: "Verification code resent successfully",
    WELCOME:
      "Hi {name}, welcome to Roomey. Here's the next step — are you looking for a room, or do you have one to rent?",
  },
  EVENTS: {
    REGISTRATION: "REGISTRATION",
    EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
    PHONE_VERIFICATION: "PHONE_VERIFICATION",
    EMAIL_RESEND: "EMAIL_RESEND",
    PHONE_RESEND: "PHONE_RESEND",
  },
} as const;

export type UserRole = (typeof AUTH_CONSTANTS.ROLES.AVAILABLE)[number];
export type AuthEventType =
  (typeof AUTH_CONSTANTS.EVENTS)[keyof typeof AUTH_CONSTANTS.EVENTS];
