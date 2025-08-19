export interface IAuthEvent {
  event: string;
  userId: string;
  ip: string;
  metadata?: Record<string, unknown>;
}

export interface IUserVerification {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  role?: string;
  phoneNumber?: string;
}

export interface IRegistrationData {
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface IVerificationResult {
  message: string;
  isFullyVerified: boolean;
  user: IUserVerification;
}

export interface IRegistrationResult {
  message: string;
  userId: string;
  email: string;
  phoneNumber: string;
}

export interface IVerificationStatus {
  email: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  isFullyVerified: boolean;
  isOnboarded: boolean;
}

export interface IResendResult {
  message: string;
}

export interface IWelcomeMessage {
  message: string;
  user: IUserVerification;
}
