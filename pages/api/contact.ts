import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;

export default async function ContactAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  console.log(req.body);
  const { fullName, email, message, subject } = req.body;

  if (!fullName || !email || !message || !subject) {
    return res
      .status(400)
      .json({ error: "Bad Request: Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail = await transporter.sendMail({
      from: user,
      to: `${email}, ${user}`,
      subject: `${subject} | Form confirmation`,
      html: `
          <!DOCTYPE html>
          <html>
          <head>
            <title>${subject}</title>
          </head>
          <body>
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Hello ${fullName},</h2>
              <p>Thank you for getting in touch.</p>
              <p>Here is the message you sent:</p>
              <blockquote>
                ${message}
              </blockquote>
              <p>I'll get back to you as soon as possible.</p>
              <p>Best regards,</p>
              <p>Eliezer Ruiz</p>
            </div>
          </body>
          </html>
        `,
    });

    console.log("Email sent successfully:", mail.response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
