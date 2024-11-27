'use client';

export default function AmenitiesPage() {
  const amenities = [
    { 
      title: '24/7 Availability', 
      description: 'Our services are available around the clock to support your needs.',
      icon: '/image/24.png', // Replace with your icon file path
    },
    { 
      title: 'Fast and Flexible Service', 
      description: 'We provide quick, reliable, and adaptable services to suit your requirements.',
      icon: '/image/14105061.png', // Replace with your icon file path
    },
    { 
      title: 'Client-Specific Work Schedule', 
      description: 'We adapt our work schedule to match your unique project needs.',
      icon: '/image/155.png', // Replace with your icon file path
    },
    { 
      title: 'On-site or Offsite Testing Calibration Support', 
      description: 'Flexible testing and calibration services either on-site or remotely.',
      icon: '/image/166.png', // Replace with your icon file path
    },
    { 
      title: 'One Stop Solutions', 
      description: 'We provide comprehensive solutions for all your testing and calibration needs.',
      icon: '/image/177.jfif', // Replace with your icon file path
    },
    { 
      title: 'Safety is Essential', 
      description: 'Our services help prevent accidents by ensuring equipment safety.',
      icon: '/image/188.jfif', // Replace with your icon file path
    },
  ];

  return (
    <div className="amenities-container">
      <h1>Amenities</h1>
      <div className="amenities-list">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <img 
              src={amenity.icon} 
              alt={amenity.title} 
              className="amenity-icon" 
            />
            <div className="amenity-info">
              <h2>{amenity.title}</h2>
              <p>{amenity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .amenities-container {
          padding: 20px;
          font-family: Arial, sans-serif;
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #333;
        }

        .amenities-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .amenity-item {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: transform 0.3s ease-in-out;
        }

        .amenity-item:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .amenity-icon {
          width: 50px;
          height: 50px;
          margin-right: 20px;
        }

        .amenity-info h2 {
          font-size: 1.4rem;
          color: #0070f3;
          margin-bottom: 10px;
        }

        .amenity-info p {
          font-size: 1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
}
