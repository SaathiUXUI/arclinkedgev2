import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import nodemailer from "nodemailer";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, country, message, source } = await req.json();

    // Basic Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required fields." },
        { status: 400 }
      );
    }

    // 1. Get client IP address
    const forwarded = req.headers.get("x-forwarded-for");
    let ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    if (ip === "::1" || ip === "127.0.0.1") {
      // Dummy public IP for local testing/development
      ip = "8.8.8.8"; 
    }

    // 2. Resolve IP Geolocation & ISP
    let location = "Localhost/Unknown";
    let isp = "Local ISP/Unknown";

    if (ip && ip !== "127.0.0.1" && ip !== "::1" && !ip.startsWith("192.168.") && !ip.startsWith("10.")) {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,org,as`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData.status === "success") {
            location = `${geoData.city || ""}, ${geoData.regionName || ""}, ${geoData.country || ""}`.replace(/^,\s*|,\s*$/g, "");
            isp = geoData.org || geoData.as || "Unknown Network";
          }
        }
      } catch (err) {
        console.error("IP Geolocation resolution failed:", err);
      }
    }

    // 3. Save to Sanity CMS if token is present
    let sanitySaved = false;
    const writeToken = process.env.SANITY_WRITE_TOKEN;

    if (writeToken) {
      try {
        const writeClient = createClient({
          projectId,
          dataset,
          apiVersion,
          token: writeToken,
          useCdn: false, // false is required for write mutations
        });

        await writeClient.create({
          _type: "lead",
          name,
          email,
          phone,
          company: company || "",
          country: country || "",
          message: message || "",
          source: source || "popup",
          ipAddress: ip,
          location,
          isp,
          submittedAt: new Date().toISOString(),
        });
        sanitySaved = true;
      } catch (err: any) {
        console.error("Failed to write lead to Sanity:", err.message);
        // We will still send email as a fallback
      }
    } else {
      console.warn("SANITY_WRITE_TOKEN is missing. Skipping Sanity CRM entry.");
    }

    // 4. Send Email Notification (Nodemailer SMTP Fallback / Duplicate)
    let emailSent = false;
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST || "smtp.hostinger.com",
          port: Number(process.env.EMAIL_PORT) || 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Arclink Edge Lead Capture" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || "hello@arclinkedge.com",
          subject: `🔥 New Lead Captured: ${name} (${company || "Individual"})`,
          replyTo: email,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: 'Inter', sans-serif; line-height: 1.5; color: #1a1a1a; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
                .header { background: linear-gradient(135deg, #0052FF 0%, #002D9C 100%); padding: 24px 30px; text-align: left; }
                .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
                .content { padding: 30px; }
                .section-title { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #0052FF; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; }
                .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; }
                .field { margin-bottom: 15px; }
                .label { font-size: 11px; font-weight: 600; color: #718096; text-transform: uppercase; margin-bottom: 2px; }
                .value { font-size: 15px; font-weight: 500; color: #1a202c; }
                .msg-box { background-color: #f7fafc; padding: 15px; border-radius: 6px; border: 1px dashed #cbd5e0; margin-top: 10px; font-size: 14px; white-space: pre-wrap; }
                .footer { padding: 15px 30px; background-color: #f7fafc; font-size: 11px; color: #a0aec0; text-align: center; border-top: 1px solid #e2e8f0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Lead Alert!</h1>
                </div>
                <div class="content">
                  <div class="section-title">Lead Information</div>
                  <div class="field">
                    <div class="label">Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}" style="color: #0052FF; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Phone Number</div>
                    <div class="value"><a href="tel:${phone}" style="color: #0052FF; text-decoration: none;">${phone}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Company / Org</div>
                    <div class="value">${company || "Not Provided"}</div>
                  </div>
                  <div class="field">
                    <div class="label">Selected Country</div>
                    <div class="value">${country || "Not Provided"}</div>
                  </div>

                  <div class="section-title" style="margin-top: 25px;">Traffic & Geo Tracking</div>
                  <div class="field">
                    <div class="label">Source Trigger</div>
                    <div class="value" style="text-transform: capitalize;">${source}</div>
                  </div>
                  <div class="field">
                    <div class="label">IP Address</div>
                    <div class="value">${ip}</div>
                  </div>
                  <div class="field">
                    <div class="label">Resolved Location</div>
                    <div class="value">${location}</div>
                  </div>
                  <div class="field">
                    <div class="label">ISP / Network</div>
                    <div class="value">${isp}</div>
                  </div>

                  ${message ? `
                    <div class="section-title" style="margin-top: 25px;">Audit / Request Details</div>
                    <div class="msg-box">${message}</div>
                  ` : ''}
                </div>
                <div class="footer">
                  <p>Arclink Edge Lead Engine • Captured on ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (err: any) {
        console.error("Email sending failed:", err.message);
      }
    }

    return NextResponse.json(
      {
        success: true,
        sanitySaved,
        emailSent,
        message: sanitySaved
          ? "Lead captured in Sanity CRM and notification sent."
          : "Lead received. (Sanity write skipped, email status: " + emailSent + ")",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Critical error in leads API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
