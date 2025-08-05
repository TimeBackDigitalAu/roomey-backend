import { render } from "@react-email/render";
import { resend } from "../services/resend/resend";

export const sendEmail = async (sendEmailDto: {
  to: string;
  subject: string;
  html: React.ReactNode;
}) => {
  const { to, subject, html } = sendEmailDto;

  const htmlRendered = await render(html);

  await resend.emails.send({
    from: "Test <noreply@help.elevateglobal.app>",
    to: to,
    subject: subject,
    html: htmlRendered,
  });

  return {
    message: "Email sent successfully",
  };
};
