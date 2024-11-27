'use client';

import { useState } from 'react';
// import AuditDetails from './oil-filtration/components/page';
//import TransformerDetails from './components/TransformerDetails/page';
import BookingForm from './components/BookingForm/page';

export default function ElectricalThermographyPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="audit-page">
      <img
        src="/image/baeb4831-f384-4922-bab9-1afaa0a8765e.jfif" // Update the path to match your image location
        alt="Power Transformer"
        className="transformer-image"
      />
      <h1>Power - Transformer</h1>
      
      <button
        onClick={() => setShowBookingForm(true)}
        className="book-button"
      >
        Book a Service
      </button>
      {showBookingForm && (
        <BookingForm
          service="Electrical Thermography "
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <style jsx>{`
        .audit-page {
          padding: 20px;
          text-align: center; /* Center-aligns content */
        }
        .transformer-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          margin: 0 auto 20px;
          border-radius: 8px;
        }
        h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }
        .book-button {
          margin-top: 20px;
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
