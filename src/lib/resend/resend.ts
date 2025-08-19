import { Injectable } from "@nestjs/common";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { appConfig } from "../../config/app-config";

export const resend = new Resend(appConfig.RESEND_API_KEY);

@Injectable()
export class ResendService {
  private readonly resend: Resend;

  constructor() {
    this.resend = resend;
  }

  async sendEmail(sendEmailDto: {
    to: string;
    subject: string;
    html: React.ReactNode;
    from: string;
  }) {
    const { to, subject, html, from } = sendEmailDto;

    const htmlRendered = await render(html);

    await this.resend.emails.send({
      from: from,
      to: to,
      subject: subject,
      html: htmlRendered,
    });

    return {
      message: "Email sent successfully",
    };
  }

  async sendVerificationEmail(to: string, token: string) {
    return this.sendEmail({
      to,
      subject: "Verify your email",
      html: `<p>Click <a href="${appConfig.WEBSITE_URL}/verify-email?token=${token}">here</a> to verify your email.</p>`,
      from: appConfig.APP_EMAIL,
    });
  }

  async sendPasswordResetEmail(to: string, token: string) {
    return this.sendEmail({
      to,
      subject: "Reset your password",
      html: `<p>Click <a href="${appConfig.WEBSITE_URL}/reset-password?token=${token}">here</a> to reset your password.</p>`,
      from: appConfig.APP_EMAIL,
    });
  }

  async sendWelcomeEmail(to: string, name: string) {
    return this.sendEmail({
      to,
      subject: "Welcome to Roomey!",
      html: `<p>Hi ${name}, welcome to Roomey! We're excited to have you on board.</p>`,
      from: appConfig.APP_EMAIL,
    });
  }
}
