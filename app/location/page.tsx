// /app/location/page.tsx
"use client";
import dynamic from 'next/dynamic';

// Dynamically import ClientComponent with ssr: false to only render on the client-side
const ClientComponent = dynamic(() => import('./component/ClientComponent/page').then(mod => mod.ClientComponent), { ssr: false });


export default function LocationPage() {
  return (
    <div className="location-page">
      <h1>Our Location</h1>
      <p>Visit us at the following address:</p>
      <address>
        123 Business Karnataka, Bangalore, India, 12345
      </address>
      
      <h2>Location Map</h2>
      <p>Below is the map of our location:</p>
      {/* The ClientComponent will be rendered only on the client side */}
      <ClientComponent />

      {/* Internal CSS */}
      <style jsx>{`
        .location-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .location-page h1 {
          font-size: 2rem;
          color: #333;
        }

        .location-page p {
          font-size: 1rem;
          color: #555;
        }

        .location-page address {
          font-style: normal;
          font-size: 1.2rem;
          color: #333;
        }

        .map-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button {
          padding: 10px 20px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
