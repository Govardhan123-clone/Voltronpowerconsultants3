"use client"
const TransformerDetails = () => {
    return (
      <div className="details">
        <h2>About the Service</h2>
        <p>
          We provide comprehensive solutions for Power Transformer Sales & Services, including installation, maintenance, and repair. Our team ensures maximum efficiency and reliability for your electrical systems.
        </p>
        <ul>
          <li>Sales of new and refurbished power transformers</li>
          <li>Custom installation to meet client specifications</li>
          <li>Preventive and corrective maintenance</li>
          <li>Emergency repair services</li>
        </ul>
        <style jsx>{`
          .details {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          }
          h2 {
            margin-bottom: 15px;
            font-size: 24px;
          }
          p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 10px;
          }
          ul {
            list-style: disc;
            padding-left: 20px;
          }
          li {
            margin-bottom: 8px;
          }
        `}</style>
      </div>
    );
  };
  
  export default TransformerDetails;
  