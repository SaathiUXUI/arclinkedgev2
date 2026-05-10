import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, projectType, budget, message } = await req.json();

    // Check if required env variables are present
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials missing in environment variables");
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }

    // Configure Hostinger SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Arclink Edge Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "hello@arclinkedge.com",
      subject: `New Project Inquiry from ${name} (${company})`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #ffffff; }
            .header { background-color: #0052FF; padding: 40px; text-align: left; border-radius: 12px 12px 0 0; }
            .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
            .content { padding: 40px; border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 12px 12px; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #888888; margin-bottom: 12px; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; }
            .field { margin-bottom: 16px; }
            .label { font-size: 14px; color: #666666; margin-bottom: 4px; }
            .value { font-size: 16px; font-weight: 600; color: #1a1a1a; }
            .message-box { background-color: #f9f9f9; padding: 24px; border-radius: 8px; border: 1px solid #eeeeee; white-space: pre-wrap; font-size: 15px; color: #333333; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #999999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Project Inquiry</h1>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color: #0052FF; text-decoration: none;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company || "Not specified"}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Project Details</div>
                <div class="field">
                  <div class="label">Project Type</div>
                  <div class="value">${projectType}</div>
                </div>
                <div class="field">
                  <div class="label">Budget Range</div>
                  <div class="value">${budget}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Message</div>
                <div class="message-box">${message}</div>
              </div>

              <div class="footer">
                <p>This inquiry was sent via the Arclink Edge contact form.</p>
                <p>&copy; ${new Date().getFullYear()} Arclink Edge. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
