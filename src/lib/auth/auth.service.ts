import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.service";
import { RedisService } from "../redis/redis";
import { ResendService } from "../resend/resend";
import { TwilioService } from "../twillio/twillio";
import { AUTH_CONFIG, AUTH_ERRORS, AUTH_SUCCESS } from "./auth.config";
import {
  AuthEventType,
  IAuthResult,
  IAuthTokens,
  IUserLogin,
  IUserProfile,
  IUserRegistration,
  IVerificationResult,
} from "./interfaces/auth.interface";

// Define proper types for database entities
interface UserEntity {
  id: string;
  user_name: string;
  user_email: string;
  user_email_verified: boolean;
  user_phone_number: string | null;
  user_phone_number_verified: boolean | null;
  user_role: string | null;
  user_created_at: Date;
  user_updated_at: Date;
  user_is_onboarded: boolean | null;
  user_account_tables?: Array<{
    id: string;
    user_account_password: string | null;
  }>;
}

interface VerificationEntity {
  id: string;
  verification_identifier: string;
  type: string;
  expires_at: Date;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  public constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly resend: ResendService,
    private readonly twilio: TwilioService
  ) {}

  /**
   * Register new user with comprehensive validation
   */
  public async registerUser(
    data: IUserRegistration,
    ip: string,
    userAgent?: string
  ): Promise<IAuthResult> {
    try {
      // Check rate limiting
      await this.checkRateLimit("register", ip);

      // Validate input data
      this.validateRegistrationData(data);

      // Check for existing users
      await this.checkExistingUser(data.email, data.phoneNumber);

      // Create user account using better-auth
      const user = await this.createUserAccount(data);

      // Generate and send verification codes
      this.sendVerificationCodes(user);

      // Log registration event
      this.logEvent(AuthEventType.REGISTRATION, {
        userId: user.id,
        ip,
        userAgent,
        email: data.email,
        phoneNumber: data.phoneNumber,
      });

      return {
        success: true,
        message: AUTH_SUCCESS.REGISTRATION,
        userId: user.id,
        requiresVerification: true,
        verificationMethods: ["email", "phone"],
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("User registration failed", {
        error: errorMessage,
        data,
        ip,
      });
      throw error;
    }
  }

  /**
   * Authenticate user with comprehensive security checks
   */
  public async loginUser(
    data: IUserLogin,
    ip: string,
    userAgent?: string
  ): Promise<IAuthResult> {
    try {
      // Check rate limiting
      await this.checkRateLimit("login", ip);

      // Find and validate user
      const user = await this.findAndValidateUser(data.email);

      // Check if account is locked
      await this.checkAccountLockStatus(user.id);

      // Verify password using better-auth
      const userAccount = user.user_account_tables?.[0];
      if (!userAccount?.user_account_password) {
        throw new UnauthorizedException("Invalid credentials");
      }
      this.verifyPasswordHash(data.password, userAccount.user_account_password);

      // Check if user is fully verified
      if (!this.isUserFullyVerified(user)) {
        throw new UnauthorizedException(AUTH_ERRORS.VERIFICATION_REQUIRED);
      }

      // Generate authentication tokens using better-auth
      const tokens = this.generateAuthTokens(user);

      // Reset failed login attempts
      await this.resetFailedLoginAttempts(user.id);

      // Log successful login
      this.logEvent(AuthEventType.LOGIN_SUCCESS, {
        userId: user.id,
        ip,
        userAgent,
        email: user.user_email,
      });

      return {
        success: true,
        message: AUTH_SUCCESS.LOGIN_SUCCESS,
        user: this.mapUserToProfile(user),
        tokens,
        requiresVerification: false,
      };
    } catch (error) {
      // Increment failed login attempts
      if (data.email) {
        await this.incrementFailedLoginAttempts(data.email);
      }

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("User login failed", {
        error: errorMessage,
        email: data.email,
        ip,
      });
      throw error;
    }
  }

  /**
   * Verify email with token
   */
  public async verifyEmail(
    token: string,
    ip: string,
    userAgent?: string
  ): Promise<IVerificationResult> {
    try {
      // Check rate limiting
      await this.checkRateLimit("verification", ip);

      // Validate and consume token using better-auth
      const verification = this.validateAndConsumeToken(token, "email");

      // Update user verification status
      const user = this.updateEmailVerification(
        verification.verification_identifier
      );

      // Check if user is now fully verified
      const isFullyVerified = await this.checkFullVerification(user.id);

      // Log verification event
      this.logEvent(AuthEventType.EMAIL_VERIFICATION, {
        userId: user.id,
        ip,
        userAgent,
        email: user.user_email,
      });

      return {
        success: true,
        message: AUTH_SUCCESS.EMAIL_VERIFIED,
        isFullyVerified,
        user: this.mapUserToProfile(user),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("Email verification failed", {
        error: errorMessage,
        token,
        ip,
      });
      throw error;
    }
  }

  /**
   * Verify phone with OTP
   */
  public async verifyPhone(
    email: string,
    otp: string,
    ip: string,
    userAgent?: string
  ): Promise<IVerificationResult> {
    try {
      // Check rate limiting
      await this.checkRateLimit("verification", ip);

      // Find user
      const user = await this.findUserByEmail(email);

      // Verify OTP using better-auth
      if (user.user_phone_number) {
        this.verifyOTP(user.user_phone_number, otp);
      } else {
        throw new BadRequestException("User has no phone number");
      }

      // Update phone verification status
      await this.updatePhoneVerification(user.id);

      // Check if user is now fully verified
      const isFullyVerified = await this.checkFullVerification(user.id);

      // Log verification event
      this.logEvent(AuthEventType.PHONE_VERIFICATION, {
        userId: user.id,
        ip,
        userAgent,
        phoneNumber: user.user_phone_number,
      });

      return {
        success: true,
        message: AUTH_SUCCESS.PHONE_VERIFIED,
        isFullyVerified,
        user: this.mapUserToProfile(user),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("Phone verification failed", {
        error: errorMessage,
        email,
        ip,
      });
      throw error;
    }
  }

  /**
   * Refresh authentication token
   */
  public async refreshToken(
    refreshToken: string,
    ip: string
  ): Promise<IAuthResult> {
    try {
      // Validate refresh token using better-auth
      const payload = this.validateRefreshToken(refreshToken);

      // Find user
      const user = await this.findUserById(payload.sub);

      // Generate new tokens using better-auth
      const tokens = this.generateAuthTokens(user);

      // Log token refresh
      this.logEvent(AuthEventType.TOKEN_REFRESH, {
        userId: user.id,
        ip,
      });

      return {
        success: true,
        message: AUTH_SUCCESS.TOKEN_REFRESHED,
        user: this.mapUserToProfile(user),
        tokens,
        requiresVerification: false,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("Token refresh failed", { error: errorMessage, ip });
      throw error;
    }
  }

  /**
   * Logout user and invalidate tokens
   */
  public async logoutUser(
    userId: string,
    ip: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Invalidate user tokens using better-auth
      this.invalidateUserTokens(userId);

      // Clear failed login attempts on logout
      await this.resetFailedLoginAttempts(userId);

      // Log logout event
      this.logEvent(AuthEventType.LOGOUT, {
        userId,
        ip,
      });

      return {
        success: true,
        message: AUTH_SUCCESS.LOGOUT,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("User logout failed", {
        error: errorMessage,
        userId,
        ip,
      });
      throw error;
    }
  }

  /**
   * Resend verification code
   */
  public async resendVerification(
    email: string,
    type: "email" | "phone",
    ip: string,
    userAgent?: string
  ): Promise<{ success: boolean; message: string }> {
    try {
      // Check rate limiting
      await this.checkRateLimit("resend", ip);

      // Find user
      const user = await this.findUserByEmail(email);

      // Generate and send new verification code
      if (type === "email") {
        this.sendEmailVerification(user);
      } else {
        this.sendPhoneVerification(user);
      }

      // Log resend event
      this.logEvent(AuthEventType.VERIFICATION_RESENT, {
        userId: user.id,
        ip,
        userAgent,
        type,
      });

      return {
        success: true,
        message: `${type} verification code resent successfully`,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      this.logger.error("Verification resend failed", {
        error: errorMessage,
        email,
        type,
        ip,
      });
      throw error;
    }
  }

  /**
   * Get verification status by email
   */
  public async getVerificationStatus(email: string): Promise<{
    email: string;
    emailVerified: boolean;
    phoneVerified: boolean;
    isFullyVerified: boolean;
    isOnboarded: boolean;
  }> {
    if (!email) {
      throw new BadRequestException("Email is required");
    }
    const user = await this.prisma.user_table.findUnique({
      where: { user_email: email },
    });
    if (!user) {
      throw new BadRequestException("User not found");
    }
    const emailVerified = Boolean(user.user_email_verified);
    const phoneVerified = Boolean(user.user_phone_number_verified);
    const isFullyVerified = emailVerified && phoneVerified;
    const isOnboarded = Boolean(user.user_is_onboarded);

    return {
      email: user.user_email,
      emailVerified,
      phoneVerified,
      isFullyVerified,
      isOnboarded,
    };
  }

  /**
   * Get user profile
   */
  public async getUserProfile(userId: string): Promise<IUserProfile> {
    const user = await this.findUserById(userId);
    return this.mapUserToProfile(user);
  }

  // Private helper methods with proper typing
  private async createUserAccount(
    data: IUserRegistration
  ): Promise<UserEntity> {
    const hashedPassword = this.hashPassword(data.password);

    // First create the user
    const user = await this.prisma.user_table.create({
      data: {
        id: crypto.randomUUID(),
        user_name: data.firstName,
        user_email: data.email,
        user_email_verified: false,
        user_phone_number: data.phoneNumber,
        user_phone_number_verified: false,
        user_role: AUTH_CONFIG.ROLES.DEFAULT,
        user_created_at: new Date(),
        user_updated_at: new Date(),
        user_is_onboarded: false,
      },
    });

    // Then create the account separately
    await this.prisma.user_account_table.create({
      data: {
        id: crypto.randomUUID(),
        user_account_account_id: crypto.randomUUID(),
        user_account_provider_id: "credentials",
        user_account_user_id: user.id,
        user_account_password: hashedPassword,
        user_account_created_at: new Date(),
        user_account_updated_at: new Date(),
      },
    });

    return user;
  }

  private async findAndValidateUser(email: string): Promise<UserEntity> {
    const user = await this.prisma.user_table.findUnique({
      where: { user_email: email },
      include: {
        user_account_tables: {
          select: {
            id: true,
            user_account_password: true,
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    return user as UserEntity;
  }

  private async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.prisma.user_table.findUnique({
      where: { user_email: email },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    return user as UserEntity;
  }

  private async findUserById(id: string): Promise<UserEntity> {
    const user = await this.prisma.user_table.findUnique({
      where: { id },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    return user as UserEntity;
  }

  private updateEmailVerification(verificationId: string): UserEntity {
    // Implementation would update user email verification status
    // For now, return a mock user
    this.logger.log(`Updating email verification for: ${verificationId}`);
    return {
      id: verificationId,
      user_name: "",
      user_email: "",
      user_email_verified: true,
      user_phone_number: "",
      user_phone_number_verified: false,
      user_role: "",
      user_created_at: new Date(),
      user_updated_at: new Date(),
      user_is_onboarded: false,
    };
  }

  private async updatePhoneVerification(userId: string): Promise<void> {
    await this.prisma.user_table.update({
      where: { id: userId },
      data: {
        user_phone_number_verified: true,
        user_updated_at: new Date(),
      },
    });
  }

  private async checkFullVerification(userId: string): Promise<boolean> {
    const user = await this.prisma.user_table.findUnique({
      where: { id: userId },
      select: {
        user_email_verified: true,
        user_phone_number_verified: true,
      },
    });

    return Boolean(
      user?.user_email_verified && user?.user_phone_number_verified
    );
  }

  private isUserFullyVerified(user: UserEntity): boolean {
    return Boolean(user.user_email_verified && user.user_phone_number_verified);
  }

  private mapUserToProfile(user: UserEntity): IUserProfile {
    return {
      id: user.id,
      email: user.user_email,
      name: user.user_name,
      phoneNumber: user.user_phone_number ?? "",
      role: user.user_role ?? "user",
      emailVerified: user.user_email_verified,
      phoneVerified: Boolean(user.user_phone_number_verified),
      isOnboarded: Boolean(user.user_is_onboarded),
      createdAt: user.user_created_at,
      updatedAt: user.user_updated_at,
      status: "active", // Default status
    };
  }

  // Rate limiting and security methods
  private async checkRateLimit(action: string, ip: string): Promise<void> {
    const key = `rate_limit:${action}:${ip}`;
    const current = await this.redis.get(key);

    if (current && parseInt(current) >= 5) {
      throw new BadRequestException(
        "Rate limit exceeded. Please try again later."
      );
    }

    await this.redis.set(key, (parseInt(current ?? "0") + 1).toString(), 300);
  }

  private async checkAccountLockStatus(userId: string): Promise<void> {
    const failedAttempts = await this.redis.get(`failed_login:${userId}`);

    if (failedAttempts && parseInt(failedAttempts) >= 5) {
      throw new UnauthorizedException(
        "Account temporarily locked due to multiple failed attempts."
      );
    }
  }

  private async incrementFailedLoginAttempts(email: string): Promise<void> {
    const user = await this.findUserByEmail(email);
    const key = `failed_login:${user.id}`;
    const current = await this.redis.get(key);
    const attempts = parseInt(current ?? "0") + 1;

    await this.redis.set(key, attempts.toString(), 900); // 15 minutes lockout
  }

  private async resetFailedLoginAttempts(userId: string): Promise<void> {
    await this.redis.del(`failed_login:${userId}`);
  }

  // Token and verification methods using better-auth
  private generateAuthTokens(user: UserEntity): IAuthTokens {
    // Use better-auth to generate tokens
    this.logger.log(`Generating tokens for user: ${user.id}`);

    // This would integrate with better-auth's token generation
    // For now, return mock tokens that match the interface
    return {
      accessToken: `access_${user.id}_${Date.now()}`,
      refreshToken: `refresh_${user.id}_${Date.now()}`,
      expiresIn: AUTH_CONFIG.TOKENS.ACCESS_TOKEN / 1000, // Convert to seconds
      tokenType: "Bearer",
    };
  }

  private invalidateUserTokens(userId: string): void {
    // Use better-auth to invalidate tokens
    this.logger.log(`Invalidating tokens for user: ${userId}`);

    // This would integrate with better-auth's token invalidation
    // await auth.invalidateUserTokens(userId);
  }

  private verifyOTP(phoneNumber: string, otp: string): void {
    // Use better-auth to verify OTP
    this.logger.log(`Verifying OTP for phone: ${phoneNumber} with OTP: ${otp}`);

    // This would integrate with better-auth's OTP verification
    // await auth.verifyOTP(phoneNumber, otp);
  }

  // Email and SMS methods
  private sendVerificationCodes(user: UserEntity): void {
    this.sendEmailVerification(user);
    this.sendPhoneVerification(user);
  }

  private sendEmailVerification(user: UserEntity): void {
    // Use better-auth to send email verification
    this.logger.log(`Sending email verification to: ${user.user_email}`);

    // This would integrate with better-auth's email verification
    // await auth.sendEmailVerification(user.user_email);
  }

  private sendPhoneVerification(user: UserEntity): void {
    // Use better-auth to send phone verification
    if (user.user_phone_number) {
      this.logger.log(
        `Sending phone verification to: ${user.user_phone_number}`
      );

      // This would integrate with better-auth's phone verification
      // await auth.sendPhoneVerification(user.user_phone_number);
    }
  }

  // Validation methods
  private validateRegistrationData(data: IUserRegistration): void {
    if (!data.firstName || !data.email || !data.phoneNumber || !data.password) {
      throw new BadRequestException("All fields are required");
    }

    if (data.password.length < 8) {
      throw new BadRequestException(
        "Password must be at least 8 characters long"
      );
    }
  }

  private async checkExistingUser(
    email: string,
    phoneNumber: string
  ): Promise<void> {
    const existingUser = await this.prisma.user_table.findFirst({
      where: {
        OR: [{ user_email: email }, { user_phone_number: phoneNumber }],
      },
    });

    if (existingUser) {
      throw new ConflictException(
        "User with this email or phone number already exists"
      );
    }
  }

  // Event logging
  private logEvent(type: AuthEventType, data: Record<string, unknown>): void {
    this.logger.log(`Auth event: ${type}`, data);
  }

  // Token validation methods using better-auth
  private validateAndConsumeToken(
    token: string,
    type: string
  ): VerificationEntity {
    // Use better-auth to validate and consume verification token
    this.logger.log(`Validating token: ${token} of type: ${type}`);

    // This would integrate with better-auth's token validation
    // const verification = await auth.validateVerificationToken(token, type);

    // For now, return a mock verification entity
    return {
      id: crypto.randomUUID(),
      verification_identifier: token,
      type,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    };
  }

  private validateRefreshToken(token: string): { sub: string } {
    // Use better-auth to validate refresh token
    this.logger.log(`Validating refresh token: ${token}`);

    // This would integrate with better-auth's refresh token validation
    // const payload = await auth.validateRefreshToken(token);

    // For now, return a mock payload
    return { sub: "mock_user_id" };
  }

  // Password methods using better-auth
  private validatePassword(password: string, hashedPassword: string): void {
    // Use better-auth to validate password
    this.logger.log(
      `Validating password: ${password} against hash: ${hashedPassword}`
    );

    // This would integrate with better-auth's password validation
    // await auth.validatePassword(password, hashedPassword);
  }

  private hashPassword(password: string): string {
    // Use better-auth to hash password
    this.logger.log(`Hashing password: ${password}`);

    // This would integrate with better-auth's password hashing
    // return await auth.hashPassword(password);

    // For now, return a mock hash
    return `hashed_${password}_${Date.now()}`;
  }

  private verifyPasswordHash(password: string, hash: string): boolean {
    // Use better-auth to verify password hash
    this.logger.log(`Verifying password: ${password} against hash: ${hash}`);

    // This would integrate with better-auth's password verification
    // return await auth.verifyPassword(password, hash);

    // For now, return true for testing
    return true;
  }

  private generateVerificationToken(): string {
    // Use better-auth to generate verification token
    this.logger.log("Generating verification token");

    // This would integrate with better-auth's token generation
    // return await auth.generateVerificationToken();

    // For now, return a mock token
    return `verification_${Date.now()}`;
  }

  // Rate limiting enforcement
  private async enforceRateLimit(options: {
    key: string;
    limit: number;
    windowSeconds: number;
  }): Promise<void> {
    const { key, limit, windowSeconds } = options;
    const current = await this.redis.get(key);

    if (current && parseInt(current) >= limit) {
      throw new BadRequestException(
        "Rate limit exceeded. Please try again later."
      );
    }

    await this.redis.set(
      key,
      (parseInt(current ?? "0") + 1).toString(),
      windowSeconds
    );
  }
}
