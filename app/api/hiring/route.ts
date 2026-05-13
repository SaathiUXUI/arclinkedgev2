import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, engagement, duration, requirements, role } = await req.json();

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email credentials missing in environment variables");
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const roleTitle = role || "Dedicated Talent";

    const mailOptions = {
      from: `"Arclink Edge Hiring" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || "hello@arclinkedge.com",
      subject: `${roleTitle} Dedicated Inquiry from ${name} (${company || "N/A"})`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.5; color: #1a1a1a; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0; }
            .header { background-color: #0052FF; padding: 24px 30px; text-align: left; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.01em; text-transform: uppercase; }
            .header p { color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px; font-weight: 500; }
            .content { padding: 30px; }
            .section { margin-bottom: 32px; }
            .section-title { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: #0052FF; margin-bottom: 16px; border-bottom: 2px solid #0052FF; padding-bottom: 6px; display: inline-block; }
            .field { margin-bottom: 20px; }
            .label { font-size: 12px; font-weight: 600; color: #888888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
            .value { font-size: 16px; font-weight: 500; color: #000000; }
            .message-text { font-size: 15px; color: #333333; line-height: 1.7; white-space: pre-wrap; margin-top: 10px; }
            .footer { padding: 20px 30px; background-color: #f8f8f8; border-top: 1px solid #eeeeee; text-align: left; font-size: 11px; color: #999999; }
            .footer p { margin: 4px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${roleTitle} Dedicated Inquiry</h1>
              <p>Hiring request via Arclink Edge</p>
            </div>
            <div class="content">
              <div class="section">
                <div class="section-title">Client Details</div>
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}" style="color: #0052FF; text-decoration: none; font-weight: 600;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Company / Brand</div>
                  <div class="value">${company || "Not specified"}</div>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Hiring Scope</div>
                <div class="field">
                  <div class="label">Engagement Model</div>
                  <div class="value">${engagement || "Not selected"}</div>
                </div>
                <div class="field">
                  <div class="label">Duration</div>
                  <div class="value">${duration || "Not selected"}</div>
                </div>
              </div>

              <div class="section" style="margin-bottom: 0;">
                <div class="section-title">Requirements / Tech Stack</div>
                <div class="message-text">${requirements || "No specific requirements provided."}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent via Arclink Edge Hiring Portal &bull; ${new Date().toLocaleDateString()}</p>
              <p>&copy; Arclink Edge. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending hiring inquiry email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
