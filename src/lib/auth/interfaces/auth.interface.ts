/**
 * Authentication system interfaces
 * Following enterprise patterns with proper typing and documentation
 */

export interface IUserRegistration {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
  password: string;
  captchaToken?: string;
  termsAccepted: boolean;
  marketingConsent?: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
  captchaToken?: string;
  rememberMe?: boolean;
}

export interface IAuthResult {
  success: boolean;
  message: string;
  userId?: string;
  user?: IUserProfile;
  tokens?: IAuthTokens;
  requiresVerification: boolean;
  verificationMethods?: string[];
}

export interface IUserProfile {
  id: string;
  email: string;
  name: string;
  lastName?: string;
  phoneNumber?: string;
  role: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  isOnboarded: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  status: string;
  preferences?: IUserPreferences;
}

export interface IUserPreferences {
  language: string;
  timezone: string;
  notifications: INotificationPreferences;
  privacy: IPrivacySettings;
}

export interface INotificationPreferences {
  email: boolean;
  sms: boolean;
  push: boolean;
  marketing: boolean;
}

export interface IPrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends';
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
}

export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
}

export interface IVerificationResult {
  success: boolean;
  message: string;
  isFullyVerified: boolean;
  user: IUserProfile;
}

export interface IVerificationRequest {
  email: string;
  type: 'email' | 'phone';
  captchaToken?: string;
}

export interface IPasswordResetRequest {
  email: string;
  captchaToken?: string;
}

export interface IPasswordReset {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IProfileUpdate {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  preferences?: Partial<IUserPreferences>;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IEnable2FA {
  phoneNumber: string;
  otp: string;
}

export interface IVerify2FA {
  otp: string;
}

export interface IAuthEvent {
  type: AuthEventType;
  userId: string;
  ip: string;
  userAgent?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
  sessionId?: string;
}

export interface ISecurityAudit {
  userId: string;
  action: string;
  ip: string;
  userAgent?: string;
  success: boolean;
  failureReason?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

export interface IRateLimitInfo {
  key: string;
  current: number;
  limit: number;
  resetTime: Date;
  blocked: boolean;
  blockExpiry?: Date;
}

export interface ILoginAttempt {
  email: string;
  ip: string;
  userAgent?: string;
  success: boolean;
  failureReason?: string;
  timestamp: Date;
}

export interface IAccountLockout {
  userId: string;
  reason: string;
  lockedAt: Date;
  expiresAt: Date;
  attempts: number;
  ip: string;
}

export interface IDeviceSession {
  id: string;
  userId: string;
  deviceId: string;
  deviceName?: string;
  deviceType?: string;
  ip: string;
  userAgent?: string;
  lastActive: Date;
  createdAt: Date;
  expiresAt: Date;
  isActive: boolean;
}

export interface IAuthMetrics {
  totalUsers: number;
  activeUsers: number;
  verifiedUsers: number;
  failedLoginAttempts: number;
  accountLockouts: number;
  securityIncidents: number;
  lastUpdated: Date;
}

export interface IAuthHealth {
  database: boolean;
  redis: boolean;
  email: boolean;
  sms: boolean;
  rateLimiting: boolean;
  lastCheck: Date;
}

export interface IAuthConfig {
  session: ISessionConfig;
  rateLimit: IRateLimitConfig;
  tokens: ITokenConfig;
  otp: IOTPConfig;
  password: IPasswordConfig;
  roles: IRoleConfig;
  verification: IVerificationConfig;
  security: ISecurityConfig;
}

export interface ISessionConfig {
  cookiePrefix: string;
  secure: boolean;
  httpOnly: boolean;
  sameSite: 'strict' | 'lax' | 'none';
  maxAge: number;
}

export interface IRateLimitConfig {
  windowMs: number;
  maxRequests: Record<string, number>;
  blockDuration: number;
}

export interface ITokenConfig {
  emailVerification: number;
  phoneVerification: number;
  passwordReset: number;
  magicLink: number;
  refreshToken: number;
  accessToken: number;
}

export interface IOTPConfig {
  length: number;
  expiry: number;
  maxAttempts: number;
  resendCooldown: number;
}

export interface IPasswordConfig {
  minLength: number;
  maxLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecialChars: boolean;
}

export interface IRoleConfig {
  default: string;
  admin: string;
  agency: string;
  lister: string;
  seeker: string;
}

export interface IVerificationConfig {
  requireEmail: boolean;
  requirePhone: boolean;
  requireBothForOnboarding: boolean;
}

export interface ISecurityConfig {
  requireCaptcha: boolean;
  captchaProvider: string;
  enableHIBP: boolean;
  enable2FA: boolean;
  maxLoginAttempts: number;
  accountLockoutDuration: number;
}

export enum AuthEventType {
  REGISTRATION = 'REGISTRATION',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT = 'LOGOUT',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  PHONE_VERIFICATION = 'PHONE_VERIFICATION',
  VERIFICATION_RESENT = 'VERIFICATION_RESENT',
  PASSWORD_RESET = 'PASSWORD_RESET',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  PROFILE_UPDATE = 'PROFILE_UPDATE',
  ACCOUNT_LOCKOUT = 'ACCOUNT_LOCKOUT',
  ACCOUNT_UNLOCK = 'ACCOUNT_UNLOCK',
  TOKEN_REFRESH = 'TOKEN_REFRESH',
  TOKEN_INVALIDATION = 'TOKEN_INVALIDATION',
  TWO_FACTOR_ENABLE = 'TWO_FACTOR_ENABLE',
  TWO_FACTOR_DISABLE = 'TWO_FACTOR_DISABLE',
  DEVICE_ADDED = 'DEVICE_ADDED',
  DEVICE_REMOVED = 'DEVICE_REMOVED',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  SUSPICIOUS_ACTIVITY = 'SUSPICIOUS_ACTIVITY',
  SECURITY_ALERT = 'SECURITY_ALERT',
}

export enum AuthStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  BANNED = 'banned',
  PENDING_VERIFICATION = 'pending_verification',
  LOCKED = 'locked',
}

export enum VerificationStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  FAILED = 'failed',
  EXPIRED = 'expired',
}

export enum SecurityLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}
