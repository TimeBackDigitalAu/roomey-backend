import { Injectable } from "@nestjs/common";
import { resend } from "../../services/resend/resend";
import { SendEmailDto } from "./dto/email.schema";

@Injectable()
export class EmailService {
  constructor() {}

  async sendEmail(sendEmailDto: SendEmailDto) {
    const { to, subject, html } = sendEmailDto;

    await resend.emails.send({
      from: "Test <no-reply@elevateglobal.app>",
      to: to,
      subject: subject,
      html: html,
    });

    return {
      message: "Email sent successfully",
    };
  }
}
