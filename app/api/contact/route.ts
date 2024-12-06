import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, email, phone, agree, recaptchaToken } = await req.json();

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );

    const recaptchaData = await recaptchaResponse.json();

    // Check reCAPTCHA verification result
    if (!recaptchaData.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid reCAPTCHA token.' },
        { status: 400 }
      );
    }

    // Log the submission (or send email/save to database)
    console.log('Contact Form Submitted:', { name, email, phone, agree });

    // Respond with success message
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
