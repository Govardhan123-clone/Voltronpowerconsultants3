import { NextRequest, NextResponse } from 'next/server';

type FormData = {
  name: string;
  email: string;
  phone: string;
  agree: boolean;
  recaptchaToken: string;
};

export async function POST(req: NextRequest) {
  try {
    // Parse request body with explicit type
    const { name, email, phone, agree, recaptchaToken }: FormData = await req.json();

    // Validate required fields
    if (!name || !email || !agree || !recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecretKey) {
      throw new Error('RECAPTCHA_SECRET_KEY is not set in environment variables.');
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: recaptchaSecretKey,
          response: recaptchaToken,
        }).toString(),
      }
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
