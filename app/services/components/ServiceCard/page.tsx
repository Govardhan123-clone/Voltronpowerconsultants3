"use client"
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => {
  return (
    <div className="service-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={link}>
        <button className="view-button">Learn More</button>
      </Link>

      <style jsx>{`
        .service-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .service-card:hover {
          transform: translateY(-5px);
        }
        h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }
        p {
          font-size: 16px;
          margin-bottom: 15px;
        }
        .view-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        .view-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
