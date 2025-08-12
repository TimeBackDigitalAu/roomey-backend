import { render } from "@react-email/render";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (sendEmailDto: {
  to: string;
  subject: string;
  html: React.ReactNode;
}) => {
  const { to, subject, html } = sendEmailDto;

  const htmlRendered = await render(html);

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: to,
    subject: subject,
    html: htmlRendered,
  });

  return {
    message: "Email sent successfully",
  };
};
