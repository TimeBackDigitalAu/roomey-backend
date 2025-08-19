// user.dto.ts
import { createZodDto } from "nestjs-zod";
import {
    CreateUserSchema,
    GenerateMagicLinkSchema,
    GetUserSchema,
    RefreshTokenSchema,
    RegisterUserSchema,
    RequestPasswordResetSchema,
    ResendVerificationSchema,
    SendVerificationEmailSchema,
    SignInSchema,
    SignOutSchema,
    VerifyEmailSchema,
    VerifyPhoneSchema,
} from "./auth.dto";

export class CreateUserDto extends createZodDto(CreateUserSchema) {}

export class SignInDto extends createZodDto(SignInSchema) {}

export class SignOutDto extends createZodDto(SignOutSchema) {}

export class RefreshTokenDto extends createZodDto(RefreshTokenSchema) {}

export class VerifyEmailDto extends createZodDto(VerifyEmailSchema) {}

export class RequestPasswordResetDto extends createZodDto(
  RequestPasswordResetSchema
) {}

export class ResetPasswordDto extends createZodDto(
  RequestPasswordResetSchema
) {}

export class SendVerificationEmailDto extends createZodDto(
  SendVerificationEmailSchema
) {}

export class GenerateMagicLinkDto extends createZodDto(
  GenerateMagicLinkSchema
) {}

export class GetUserDto extends createZodDto(GetUserSchema) {}

// Add missing DTOs
export class RegisterUserDto extends createZodDto(RegisterUserSchema) {}

export class ResendVerificationDto extends createZodDto(ResendVerificationSchema) {}

export class VerifyPhoneDto extends createZodDto(VerifyPhoneSchema) {}
