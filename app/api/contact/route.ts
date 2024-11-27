export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; phone: any; agree: any; recaptchaToken: any; }> | { name: any; email: any; phone: any; agree: any; recaptchaToken: any; }; }) {
    const { name, email, phone, agree, recaptchaToken } = await req.json();
  
    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );
  
    const recaptchaData = await recaptchaResponse.json();
  
    if (!recaptchaData.success) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid reCAPTCHA token.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  
    // Log the submission (or send email/save to database)
    console.log('Contact Form Submitted:', { name, email, phone, agree });
  
    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  