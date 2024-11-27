"use client"
import { useState } from "react";

// ClientComponent.tsx
export const ClientComponent = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <button onClick={toggleMap}>
        {showMap ? 'Hide' : 'Show'} Map
      </button>

      {showMap && (
        <div className="map-container">
          {/* Embed a map or use a map API, e.g., Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=...your-map-embed-url..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      )}
    </div>
  );
};
