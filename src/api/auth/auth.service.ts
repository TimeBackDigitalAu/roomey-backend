import {
  BadRequestException,
  ConflictException,
  Injectable,
} from "@nestjs/common";
import { z } from "zod";
import { appConfig } from "../../config/app-config";
import { generateTemplate } from "../../lib/helper";
import { RedisService } from "../../lib/redis/redis";
import { ResendService } from "../../lib/resend/resend";
import { TwilioService } from "../../lib/twillio/twillio";
import { PrismaService } from "../../prisma/prisma.service";
import { ConfirmationEmail } from "../../react-email/confirmation-email";
import { AUTH_CONSTANTS } from "./constants/auth.constants";
import { RegisterUserDto } from "./dto/auth.schema";
import { IRegistrationResult } from "./interfaces/auth.interface";

// Validation schemas
const registrationSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name too long"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(10, "Invalid phone number")
    .max(15, "Phone number too long"),
});

const otpVerificationSchema = z.object({
  email: z.string().email("Invalid email address"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

@Injectable()
export class AuthService {
  public constructor(
    private readonly prisma: PrismaService,
    private readonly resendService: ResendService,
    private readonly twilioService: TwilioService,
    private readonly redisService: RedisService
  ) {}

  /**
   * Get user by email
   */
  public async getUserByEmail(email: string): Promise<unknown> {
    const user = await this.prisma.user_table.findUnique({
      where: { user_email: email },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    return user;
  }

  /**
   * Enhanced registration with simultaneous email and phone verification
   */
  public async registerUser(
    data: RegisterUserDto,
    ip: string,
    userAgent?: string
  ): Promise<IRegistrationResult> {
    // Rate-limit registration attempts per IP (3 in 15 minutes)
    await this.enforceRateLimit({
      key: `register:${ip}`,
      limit: 3,
      windowSeconds: 15 * 60,
    });
    // Validate input
    const validatedData = registrationSchema.parse(data);

    // Check if user already exists
    const existingUser = await this.prisma.user_table.findFirst({
      where: {
        OR: [
          { user_email: validatedData.email },
          { user_phone_number: validatedData.phoneNumber },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.user_email === validatedData.email) {
        throw new ConflictException("Email already registered");
      }
      if (existingUser.user_phone_number === validatedData.phoneNumber) {
        throw new ConflictException("Phone number already registered");
      }
    }

    // Create user with pending verification
    const userId = crypto.randomUUID();
    await this.prisma.user_table.create({
      data: {
        id: userId,
        user_name: validatedData.firstName,
        user_email: validatedData.email,
        user_email_verified: false,
        user_phone_number: validatedData.phoneNumber,
        user_phone_number_verified: false,
        user_role: "seeker", // Default role
        user_created_at: new Date(),
        user_updated_at: new Date(),
        user_is_onboarded: false,
      },
    });

    // Generate verification tokens
    const emailToken = crypto.randomUUID();
    const phoneOTP = this.generateOTP();

    // Store OTP in Redis with expiration (10 minutes)
    await this.redisService.set(
      `otp:${validatedData.phoneNumber}`,
      phoneOTP,
      600
    );

    // Send magic link email
    const magicLinkUrl = `${appConfig.WEBSITE_URL}/verify-email?token=${emailToken}`;
    await this.resendService.sendEmail({
      to: validatedData.email,
      subject: "Verify your email address - Roomey",
      html: await generateTemplate(
        ConfirmationEmail({
          magicLink: magicLinkUrl,
        })
      ),
      from: appConfig.APP_EMAIL,
    });

    // Send OTP SMS
    await this.twilioService.sendSMS({
      to: validatedData.phoneNumber,
      message: `Your Roomey verification code is: ${phoneOTP}. This code expires in 10 minutes.`,
    });

    // Store email verification token
    await this.prisma.verification_table.create({
      data: {
        id: crypto.randomUUID(),
        verification_identifier: validatedData.email,
        verification_value: emailToken,
        verification_expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
        verification_created_at: new Date(),
        verification_updated_at: new Date(),
      },
    });

    // Log registration event
    this.logAuthEvent("REGISTRATION", userId, ip, {
      userAgent,
      email: validatedData.email,
      phone: validatedData.phoneNumber,
    });

    return {
      message:
        "Registration successful. Please check your email and phone for verification.",
      userId,
      email: validatedData.email,
      phoneNumber: validatedData.phoneNumber,
    };
  }

  /**
   * Verify email with magic link
   */
  public async verifyEmail(
    token: string,
    ip: string,
    userAgent?: string
  ): Promise<unknown> {
    const verification = await this.prisma.verification_table.findFirst({
      where: {
        verification_value: token,
        verification_expires_at: { gt: new Date() },
      },
    });

    if (!verification) {
      throw new BadRequestException("Invalid or expired verification token");
    }

    // Update user email verification status
    const user = await this.prisma.user_table.update({
      where: { user_email: verification.verification_identifier },
      data: { user_email_verified: true, user_updated_at: new Date() },
    });

    // Delete used verification token
    await this.prisma.verification_table.delete({
      where: { id: verification.id },
    });

    // Log verification event
    this.logAuthEvent("EMAIL_VERIFICATION", user.id, ip, {
      userAgent,
      email: user.user_email,
    });

    // Check if both verifications are complete
    const isFullyVerified = await this.checkFullVerification(user.id);

    return {
      message: "Email verified successfully",
      isFullyVerified,
      user: {
        id: user.id,
        name: user.user_name,
        email: user.user_email,
        emailVerified: user.user_email_verified ?? false,
        phoneVerified: user.user_phone_number_verified ?? false,
      },
    };
  }

  /**
   * Verify phone with OTP
   */
  public async verifyPhone(
    email: string,
    otp: string,
    ip: string,
    userAgent?: string
  ): Promise<unknown> {
    // Rate-limit OTP verification attempts per phone (3 in 5 minutes)
    // We will obtain phone number after fetching the user
    const validatedData = otpVerificationSchema.parse({ email, otp });

    // Get user
    const user = await this.prisma.user_table.findUnique({
      where: { user_email: validatedData.email },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    // Enforce per-phone verification attempts rate limit now that we know the phone
    if (user.user_phone_number) {
      await this.enforceRateLimit({
        key: `otp-verify:${user.user_phone_number}`,
        limit: 3,
        windowSeconds: 5 * 60,
      });
    }

    // Check if phone is already verified
    if (user.user_phone_number_verified) {
      throw new BadRequestException("Phone number already verified");
    }

    // Verify OTP from Redis
    const storedOTP = await this.redisService.get(
      `otp:${user.user_phone_number}`
    );
    if (!storedOTP || storedOTP !== validatedData.otp) {
      throw new BadRequestException("Invalid OTP");
    }

    // Update phone verification status
    await this.prisma.user_table.update({
      where: { id: user.id },
      data: { user_phone_number_verified: true, user_updated_at: new Date() },
    });

    // Remove OTP from Redis
    await this.redisService.del(`otp:${user.user_phone_number}`);

    // Log verification event
    this.logAuthEvent("PHONE_VERIFICATION", user.id, ip, {
      userAgent,
      phone: user.user_phone_number,
    });

    // Check if both verifications are complete
    const isFullyVerified = await this.checkFullVerification(user.id);

    return {
      message: "Phone number verified successfully",
      isFullyVerified,
      user: {
        id: user.id,
        name: user.user_name,
        email: user.user_email,
        emailVerified: user.user_email_verified ?? false,
        phoneVerified: true,
      },
    };
  }

  /**
   * Check if user is fully verified and show welcome message
   */
  public async checkFullVerification(userId: string): Promise<boolean> {
    const user = await this.prisma.user_table.findUnique({
      where: { id: userId },
    });

    if (!user) return false;

    const isFullyVerified =
      Boolean(user.user_email_verified) &&
      Boolean(user.user_phone_number_verified);

    if (isFullyVerified && !user.user_is_onboarded) {
      // Mark user as onboarded
      await this.prisma.user_table.update({
        where: { id: userId },
        data: { user_is_onboarded: true, user_updated_at: new Date() },
      });

      // Send welcome email
      await this.resendService.sendWelcomeEmail(
        user.user_email,
        user.user_name
      );

      // Send welcome SMS
      if (user.user_phone_number) {
        await this.twilioService.sendWelcomeSMS(
          user.user_phone_number,
          user.user_name
        );
      }
    }

    return isFullyVerified;
  }

  /**
   * Get welcome message for fully verified users
   */
  public async getWelcomeMessage(userId: string): Promise<unknown> {
    const user = await this.prisma.user_table.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    if (!user.user_email_verified || !user.user_phone_number_verified) {
      throw new BadRequestException("User not fully verified");
    }

    return {
      message: `Hi ${user.user_name}, welcome to Roomey. Here's the next step — are you looking for a room, or do you have one to rent?`,
      user: {
        id: user.id,
        name: user.user_name,
        email: user.user_email,
        phoneNumber: user.user_phone_number,
        role: user.user_role,
      },
    };
  }

  /**
   * Resend verification codes
   */
  public async resendVerification(
    email: string,
    type: "email" | "phone",
    ip: string,
    userAgent?: string
  ): Promise<unknown> {
    // Cooldown to prevent spam: 60s per type+email/phone
    const cooldownKey = `resend:${type}:${email}`;
    const exists = await this.redisService.exists(cooldownKey);
    if (exists) {
      throw new BadRequestException(
        "Please wait before requesting another code"
      );
    }
    const user = await this.prisma.user_table.findUnique({
      where: { user_email: email },
    });

    if (!user) {
      throw new BadRequestException("User not found");
    }

    if (type === "email" && !user.user_email_verified) {
      // Generate new email verification token
      const emailToken = crypto.randomUUID();
      const magicLinkUrl = `${appConfig.WEBSITE_URL}/verify-email?token=${emailToken}`;

      // Store new verification token
      await this.prisma.verification_table.create({
        data: {
          id: crypto.randomUUID(),
          verification_identifier: email,
          verification_value: emailToken,
          verification_expires_at: new Date(Date.now() + 10 * 60 * 1000),
          verification_created_at: new Date(),
          verification_updated_at: new Date(),
        },
      });

      // Send new magic link email
      await this.resendService.sendEmail({
        to: email,
        subject: "Verify your email address - Roomey",
        html: await generateTemplate(
          ConfirmationEmail({
            magicLink: magicLinkUrl,
          })
        ),
        from: appConfig.APP_EMAIL,
      });

      this.logAuthEvent("EMAIL_RESEND", user.id, ip, { userAgent, email });
      // Set resend cooldown
      // 60 seconds cooldown for email resend
      await this.redisService.set(cooldownKey, "1", 60);
    } else if (type === "phone" && !user.user_phone_number_verified) {
      // Generate new phone OTP
      const phoneOTP = this.generateOTP();
      await this.redisService.set(
        `otp:${user.user_phone_number}`,
        phoneOTP,
        600
      );

      // Send new OTP SMS
      if (user.user_phone_number) {
        await this.twilioService.sendSMS({
          to: user.user_phone_number,
          message: `Your new Roomey verification code is: ${phoneOTP}. This code expires in 10 minutes.`,
        });
      }

      this.logAuthEvent("PHONE_RESEND", user.id, ip, {
        userAgent,
        phone: user.user_phone_number,
      });
      // 60 seconds cooldown for phone resend
      await this.redisService.set(cooldownKey, "1", 60);
    } else {
      throw new BadRequestException(`${type} is already verified`);
    }

    return {
      message: `${type} verification code resent successfully`,
    };
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
    return {
      email,
      emailVerified,
      phoneVerified,
      isFullyVerified,
      isOnboarded: Boolean(user.user_is_onboarded),
    };
  }

  /**
   * Simple Redis-backed rate limiter
   */
  private async enforceRateLimit(params: {
    key: string;
    limit: number;
    windowSeconds: number;
  }): Promise<void> {
    const { key, limit, windowSeconds } = params;
    const currentRaw = await this.redisService.get(key);
    const current = currentRaw ? parseInt(currentRaw, 10) : 0;
    if (current >= limit) {
      throw new BadRequestException(
        "Too many attempts. Please try again later"
      );
    }
    const next = current + 1;
    // If new counter, set with TTL; otherwise just update value keeping TTL (approximate via setex)
    await this.redisService.set(key, String(next), windowSeconds);
  }

  /**
   * Generate 6-digit OTP
   */
  private generateOTP(): string {
    return Math.floor(
      AUTH_CONSTANTS.OTP.GENERATION_MIN +
        Math.random() *
          (AUTH_CONSTANTS.OTP.GENERATION_MAX -
            AUTH_CONSTANTS.OTP.GENERATION_MIN)
    ).toString();
  }

  /**
   * Log authentication events for security auditing
   */
  private logAuthEvent(
    event: string,
    userId: string,
    ip: string,
    metadata?: Record<string, unknown>
  ): void {
    try {
      // Note: auth_log_table will be available after Prisma generation
      // For now, we'll log to console

      console.log("Auth Event:", {
        event,
        userId,
        ip,
        metadata,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Failed to log auth event:", error);
    }
  }
}
