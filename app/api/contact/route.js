import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, phone, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New Message from ${name} - ${subject}`,
      text: `Phone: ${phone}\n\n${message}`,
    });

    return Response.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { success: false, message: 'Email send failed' },
      { status: 500 }
    );
  }
}
