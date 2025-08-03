import { SendEmailDto } from "../api/email/dto/email.schema";
import { resend } from "../services/resend/resend";

export const sendEmail = async (sendEmailDto: SendEmailDto) => {
  const { to, subject, html } = sendEmailDto;

  await resend.emails.send({
    from: "Elevate Global <noreply@help.elevateglobal.app>",
    to: to,
    subject: subject,
    html: html,
  });

  return {
    message: "Email sent successfully",
  };
};
