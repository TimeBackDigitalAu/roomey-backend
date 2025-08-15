import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const from = process.env.TWILIO_FROM!;
const client = new Twilio(accountSid, authToken);

export const sendSMS = async (sendSMSDto: { to: string; message: string }) => {
  try {
    const { message } = sendSMSDto;

    await client.messages.create({
      body: message,
      from: from,
      to: "+18777804236",
    });

    return message;
  } catch (error) {
    throw new Error("Failed to send SMS", { cause: error });
  }
};
