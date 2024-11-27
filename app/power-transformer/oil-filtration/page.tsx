// /app/power-transfer/oil-filtration/page.tsx
'use client';

import { useState } from 'react';
import BookingForm from './components/BookingForm/page';

export default function OilFiltrationPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="oil-filtration-page">
      {/* Header Section */}
      <header className="header-section">
        <img
          src="/image/6bfea502-68da-4f92-ad6c-225c3aa215d1.jpg"  // Image path in the public folder
          alt="Oil Filtration Service"
          className="service-image"
        />
        <div className="service-description">
          <h1>Oil Filtration</h1>
          <p>
            Oil Filtration is a crucial maintenance process for transformers and other electrical equipment,
            removing contaminants and improving the oil’s insulating properties. Our expert filtration services 
            ensure the longevity and efficiency of your equipment.
          </p>
          <p className="price">₹12,000.00</p>
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
          service="Oil Filtration"
          price="₹,200.00"
          onClose={() => setShowBookingForm(false)}
        />
      )}

      {/* Styles */}
      <style jsx>{`
        .oil-filtration-page {
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
