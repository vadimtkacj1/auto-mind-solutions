import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    // 1. Validate environment variables
    const { EMAIL_SERVER_HOST, EMAIL_SERVER_PORT, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD, EMAIL_TO } = process.env;

    if (!EMAIL_SERVER_HOST || !EMAIL_SERVER_PORT || !EMAIL_SERVER_USER || !EMAIL_SERVER_PASSWORD) {
      console.error("Missing email configuration env variables");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const body = await request.json();
    const { name, phone } = body;

    // 2. Input validation
    if (!name?.trim() || name.trim().length < 2) {
      return NextResponse.json({ error: "שם חייב להכיל לפחות 2 תווים" }, { status: 400 });
    }

    // Clean phone number and validate using Israeli regex
    const cleanPhone = phone?.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;

    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json({ error: "מספר טלפון לא תקין" }, { status: 400 });
    }

    // 3. Transporter configuration (Optimized for Namecheap & Cloudflare)
    const transporter = nodemailer.createTransport({
      host: EMAIL_SERVER_HOST,
      port: Number(EMAIL_SERVER_PORT),
      // Use secure: true for port 465, false for 587
      secure: EMAIL_SERVER_PORT === "465",
      auth: {
        user: EMAIL_SERVER_USER,
        pass: EMAIL_SERVER_PASSWORD,
      },
      tls: {
        // Necessary for some Node.js environments to prevent certificate validation errors
        rejectUnauthorized: false,
      },
    });

    // 4. Email template configuration
    // Support multiple recipient emails separated by commas
    const recipientEmails = EMAIL_TO
      ? EMAIL_TO.split(",")
          .map((email) => email.trim())
          .filter((email) => email)
      : ["vadim.tkach1378@gmail.com", "misha.kaspler@gmail.com"];

    // Ensure both emails are always included
    const defaultEmails = ["vadim.tkach1378@gmail.com", "misha.kaspler@gmail.com"];
    const allRecipients = Array.from(new Set([...defaultEmails, ...recipientEmails]));

    const mailOptions = {
      from: `"Assistant" <${EMAIL_SERVER_USER}>`,
      to: allRecipients.join(", "), // Send to all specified emails
      subject: `New Lead: ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee;">
          <div style="background-color: #1c3664; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">פנייה חדשה מהאתר</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="font-size: 18px;"><strong>פרטי הלקוח:</strong></p>
            <hr />
            <p><strong>שם מלא:</strong> ${name}</p>
            <p><strong>טלפון:</strong> <a href="tel:${cleanPhone}">${phone}</a></p>
            <div style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
              <small style="color: #666;">
                This is an automated message from the contact form at avi-mashkanta.com
              </small>
            </div>
          </div>
        </div>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: unknown) {
    // Log detailed error info for debugging in the server console
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorCode =
      error && typeof error === "object" && "code" in error ? (error as { code?: string }).code : undefined;
    const errorCommand =
      error && typeof error === "object" && "command" in error ? (error as { command?: string }).command : undefined;

    console.error("SMTP Error Details:", {
      message: errorMessage,
      code: errorCode,
      command: errorCommand,
    });

    return NextResponse.json({ error: "Internal Server Error", details: errorMessage }, { status: 500 });
  }
}
