import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const from = process.env.TWILIO_FROM!;
const client = new Twilio(accountSid, authToken);

@Injectable()
export class TwilioService {
  private readonly client: Twilio;
  private readonly fromNumber: string;

  constructor() {
    this.client = client;
    this.fromNumber = from;
  }

  async sendSMS(sendSMSDto: { to: string; message: string }) {
    try {
      const { to, message } = sendSMSDto;

      await this.client.messages.create({
        body: message,
        from: this.fromNumber,
        to: to,
      });

      return message;
    } catch (error) {
      throw new Error('Failed to send SMS', { cause: error });
    }
  }

  async sendVerificationSMS(to: string, otp: string) {
    const message = `Your verification code is: ${otp}. This code will expire in 10 minutes.`;
    return this.sendSMS({ to, message });
  }

  async sendPasswordResetSMS(to: string, otp: string) {
    const message = `Your password reset code is: ${otp}. This code will expire in 10 minutes.`;
    return this.sendSMS({ to, message });
  }

  async sendWelcomeSMS(to: string, name: string) {
    const message = `Hi ${name}, welcome to Roomey! We're excited to have you on board.`;
    return this.sendSMS({ to, message });
  }
}
