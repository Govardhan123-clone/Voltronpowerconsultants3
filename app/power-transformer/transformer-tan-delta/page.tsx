// /app/power-transfer/transformer-tan-delta/page.tsx
'use client';

import { useState } from 'react';
import BookingForm from '../components/BookingForm/page';

export default function TransformerTanDeltaPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="transformer-tan-delta-page">
      {/* Header Section */}
      <header className="header-section">
        <img
          src="/image/7d1937bf-b9bc-4d9b-a598-7dc5d110b39d.jfif"  // Image path in the public folder
          alt="Transformer Tan Delta Service"
          className="service-image"
        />
        <div className="service-description">
          <h1>Transformer Tan Delta</h1>
          <p>
            Transformer Tan Delta testing is crucial for assessing the insulation condition of transformer bushings and other electrical components. 
            This diagnostic test helps identify potential issues before they become critical failures.
          </p>
          <p className="price">₹15,000.00</p>
          <button
            onClick={() => setShowBookingForm(true)}
            className="book-button"
          >
            Book a Service
          </button>
        </div>
      </header>

      {/* Booking Form */}
      {showBookingForm && (
        <BookingForm
          service="Transformer Tan Delta"
          price="₹15,000.00"
          onClose={() => setShowBookingForm(false)}
        />
      )}

      {/* Styles */}
      <style jsx>{`
        .transformer-tan-delta-page {
          font-family: Arial, sans-serif;
        }
        .header-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background-color: #f4f4f4;
          border-bottom: 1px solid #ddd;
        }
        .service-image {
          max-width: 50%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .service-description {
          max-width: 45%;
          margin-left: 20px;
        }
        h1 {
          font-size: 32px;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .price {
          font-size: 20px;
          font-weight: bold;
          color: #0070f3;
          margin-bottom: 20px;
        }
        .book-button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .book-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
