import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Email configuration from environment variables
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com"
const SMTP_PORT = Number.parseInt(process.env.SMTP_PORT || "587")
const SMTP_SECURE = process.env.SMTP_SECURE === "true"
const SMTP_USER = "saqib.symits@gmail.com"
const SMTP_PASS = "fzin sgtl bram hekr"
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "saqibishfaquekhi@gmail.com"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if SMTP credentials are configured
    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .field-value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📧 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From your portfolio website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Name:</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">📋 Subject:</div>
                <div class="field-value">${subject}</div>
              </div>
              <div class="field">
                <div class="field-label">💬 Message:</div>
                <div class="field-value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="footer">
                <p>This email was sent from your portfolio contact form</p>
                <p>Reply directly to this email to respond to ${name}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: emailHtml,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    })

    console.log("✅ Email sent successfully:", info.messageId)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("❌ Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    )
  }
}
