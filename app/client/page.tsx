 "use client"
 import React from "react";

const Clients: React.FC = () => {
  const clientsList = [
    "33/11kV Substation, Electronic city.",
    "M/S MRPL, Mangalore.",
    "M/S NESTLE, Nanjanagudu.",
    "M/S 24 MW, Krishna Hydro Energy Yadagiri.",
    "M/S 24 MW, Brandavana Hydro Energy Shimoga.",
    "M/S 100 MW, BPCL, Mumbai.",
    "M/S Reitzel India Pvt Ltd, Kunigal.",
    "M/S Indospanish Test Food Pvt Ltd, Kunigal.",
    "20MW TATA Solar Power Plant Siraguppa, Bellary.",
    "Reheja Residency, Bangalore.",
    "Sun Flag Steel Co. Ltd, Bandara, Maharashtra.",
    "66/11kV KPTCL Sub Station Hosapalya, Soluru.",
  ];

  return (
    <div className="clients-section">
      <div className="header">
        <h1>Clients</h1>
        <p>
          <a href="/">Home</a> &gt; <span>Clients</span>
        </p>
      </div>
      <div className="content">
        <h2>Our Clients:</h2>
        <ul>
          {clientsList.map((client, index) => (
            <li key={index} className="client-item">
              <span>✔</span> {client}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .clients-section {
          padding: 20px;
          font-family: Arial, sans-serif;
           background-color:  #F7AFAC;
        }
        .header h1 {
          font-size: 5rem;
          margin: 0;
        }
        .header p {
          margin: 5px 0;
          color: gray;
        }
        .header a {
          color: #0070f3;
          text-decoration: none;
        }
        .content h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          

        }
        .content ul {
          list-style-type: none;
          padding: 0;
        }
        .client-item {
          font-size: 1rem;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
        }
        .client-item span {
          color: green;
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default Clients;
