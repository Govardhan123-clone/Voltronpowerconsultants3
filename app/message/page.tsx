"use client";

import { useState } from "react";

const MessagePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState({
    message: "",
    type: "", // 'success' or 'error'
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate email format
  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate phone format (optional)
  const isValidPhone = (phone: string) => /^\d{10}$/.test(phone);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    if (!isValidEmail(formData.email)) {
      setStatus({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      setStatus({ message: "Please enter a valid 10-digit phone number.", type: "error" });
      return;
    }

    if (!formData.agree) {
      setStatus({ message: "You must agree to the terms and conditions.", type: "error" });
      return;
    }

    try {
      // Simulate form submission (e.g., API call)
      setStatus({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", phone: "", message: "", agree: false });
    } catch (error) {
      console.error(error);
      setStatus({ message: "An error occurred. Please try again.", type: "error" });
    }
  };

  return (
    <div className="message-page">
      <h1>Send a Message</h1>
      <p>An email will be sent to the owner.</p>
      <form onSubmit={handleSubmit} className="message-form">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={!formData.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Tell us about your request *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            I agree with the Terms & Conditions and the Privacy & Cookies Policy of UENI and any applicable Terms and Conditions of VOLTRON POWER CONSULTANTS. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </label>
        </div>

        <button type="submit">Send Message</button>
      </form>

      {status.message && (
        <p className={`status-message ${status.type}`}>{status.message}</p>
      )}

      {/* Internal CSS */}
      <style jsx>{`
        .message-page {
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        h1 {
          font-size: 2rem;
          color: #333;
        }

        p {
          font-size: 1rem;
          color: #555;
        }

        .message-form {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          font-size: 1rem;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .status-message {
          margin-top: 20px;
          font-size: 1rem;
          padding: 10px;
          border-radius: 5px;
        }

        .status-message.success {
          color: #155724;
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
        }

        .status-message.error {
          color: #721c24;
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
        }
      `}</style>
    </div>
  );
};

export default MessagePage;
