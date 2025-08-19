import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Query,
    Req,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterUserDto, ResendVerificationDto, VerifyPhoneDto } from './dto/auth.schema';

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

@ApiTags('Authentication')
@Controller('auth')
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user with simultaneous verification' })
  @ApiResponse({
    status: 201,
    description: 'User registered successfully. Verification codes sent.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: 409,
    description: 'Email or phone number already registered',
  })
  public async registerUser(@Body() body: RegisterUserDto, @Req() req: Request): Promise<unknown> {
    const ip = this.getClientIP(req);
    const userAgent = req.get('User-Agent');

    return this.authService.registerUser(body, ip, userAgent);
  }

  @Get('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify email with magic link token' })
  @ApiResponse({
    status: 200,
    description: 'Email verified successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid or expired token',
  })
  public async verifyEmail(@Query('token') token: string, @Req() req: Request): Promise<unknown> {
    if (!token) {
      throw new BadRequestException('Token is required');
    }

    const ip = this.getClientIP(req);
    const userAgent = req.get('User-Agent');

    return this.authService.verifyEmail(token, ip, userAgent);
  }

  @Post('verify-phone')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verify phone number with OTP' })
  @ApiResponse({
    status: 200,
    description: 'Phone number verified successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid OTP or user not found',
  })
  public async verifyPhone(@Body() body: VerifyPhoneDto, @Req() req: Request): Promise<unknown> {
    const ip = this.getClientIP(req);
    const userAgent = req.get('User-Agent');

    return this.authService.verifyPhone(body.email, body.otp, ip, userAgent);
  }

  @Post('resend-verification')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend verification code (email or phone)' })
  @ApiResponse({
    status: 200,
    description: 'Verification code resent successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request or already verified',
  })
  public async resendVerification(
    @Body() body: ResendVerificationDto,
    @Req() req: Request
  ): Promise<unknown> {
    const ip = this.getClientIP(req);
    const userAgent = req.get('User-Agent');

    return this.authService.resendVerification(body.email, body.type, ip, userAgent);
  }

  @Get('verification-status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get verification status by email' })
  @ApiResponse({ status: 200, description: 'Verification status fetched' })
  @ApiResponse({ status: 400, description: 'Invalid email or user not found' })
  public async getVerificationStatus(@Query('email') email: string): Promise<unknown> {
    if (!email) {
      throw new BadRequestException('Email is required');
    }
    return this.authService.getVerificationStatus(email);
  }

  @Get('profile')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
  })
  public getProfile(@Req() req: AuthenticatedRequest): unknown {
    // Type guard to ensure user exists and has the expected structure
    if (!req.user || typeof req.user !== 'object') {
      throw new BadRequestException('User not authenticated');
    }

    const user = req.user;

    if (!user.id || !user.email) {
      throw new BadRequestException('Invalid user data');
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  private getClientIP(req: Request): string {
    return (
      (req.headers['x-forwarded-for'] as string) ??
      req.connection.remoteAddress ??
      req.socket.remoteAddress ??
      'unknown'
    );
  }
}
