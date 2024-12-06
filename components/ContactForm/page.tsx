'use client';

import { useState, useEffect } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  agree: boolean;
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    agree: false,
  });

  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.grecaptcha) {
      window.grecaptcha.ready(() => {
        console.log('reCAPTCHA is ready');
      });
    }
  }, []);

  const handleChange = (e: ChangeEvent) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.agree) {
      setStatus('You must agree to the terms and conditions.');
      return;
    }

    try {
      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
        { action: 'submit' }
      );

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', agree: false });
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Failed to send the message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <label>
          Your Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          I agree with the Terms & Conditions and Privacy Policy.
        </label>
        <div id="recaptcha-container" />
        <button type="submit">Send Message</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
