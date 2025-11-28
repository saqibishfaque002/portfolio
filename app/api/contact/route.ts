import { NextResponse } from "next/server"

// Dummy email configuration - Replace with your actual email service
const RECIPIENT_EMAIL = "saqibishfaquekhi@gmail.com"
const SMTP_USER = "demo@example.com"
const SMTP_PASS = "demo_password_123"

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

    // In a real application, you would send an email here using a service like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - Amazon SES
    // - Nodemailer with SMTP

    // Example with console logging (for demonstration)
    console.log("📧 New Contact Form Submission:")
    console.log("From:", name, `<${email}>`)
    console.log("Subject:", subject)
    console.log("Message:", message)
    console.log("---")

    // Simulate email sending with dummy credentials
    console.log("SMTP Config (Demo):")
    console.log("  User:", SMTP_USER)
    console.log("  Pass:", SMTP_PASS)
    console.log("  To:", RECIPIENT_EMAIL)

    /*
    // Uncomment and configure when ready to use a real email service:
    
    // Example with Resend (recommended):
    // npm install resend
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
