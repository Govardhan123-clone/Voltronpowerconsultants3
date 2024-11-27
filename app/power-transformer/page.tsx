'use client';

import { useState } from 'react';
import TransformerDetails from './components/TransformerDetails/page';
import BookingForm from './components/BookingForm/page';
//import OilFiltration from './components/OilFiltration/page'; // Importing Oil Filtration sub-component

export default function PowerTransformerPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="transformer-page">
      {/* Power Transformer Image */}
      <img
        src="/images/power-transformer.jpg" // Update with your image path
        alt="Power Transformer"
        className="transformer-image"
      />

      <h1>Power Transformer</h1>

      {/* Transformer Details */}
      <TransformerDetails />

      {/* Oil Filtration Sub-component */}
      <section className="oil-filtration-section">
        <h2>Oil Filtration Service</h2>
        
      </section>

      {/* Book a Service Button */}
      <button
        onClick={() => setShowBookingForm(true)}
        className="book-button"
      >
        Book a Service
      </button>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          service="Power Transformer"
          onClose={() => setShowBookingForm(false)}
        />
      )}

      {/* Internal CSS */}
      <style jsx>{`
        .transformer-page {
          padding: 20px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .transformer-image {
          width: 100%;
          max-width: 600px;
          height: auto;
          margin: 0 auto 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
        }

        .oil-filtration-section {
          margin-top: 40px;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: left;
        }

        .oil-filtration-section h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #0070f3;
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
          transition: background-color 0.3s;
        }

        .book-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
