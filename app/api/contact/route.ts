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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0052FF;">New Inquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Budget Range:</strong> ${budget}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
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
