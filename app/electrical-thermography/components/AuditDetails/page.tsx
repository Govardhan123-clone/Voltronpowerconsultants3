"use client"
const AuditDetails = () => {
    return (
      <div className="details">
        <h2>About the Service</h2>
        <p>
          Our Electrical Thermography Audit is designed to ensure the safety and efficiency of your electrical systems. Using advanced infrared imaging, we detect potential issues before they become costly problems.
        </p>
        <ul>
          <li>Identify hot spots in electrical systems</li>
          <li>Ensure equipment safety and efficiency</li>
          <li>Reduce the risk of unexpected downtime</li>
          <li>Comprehensive reporting and recommendations</li>
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
  
  export default AuditDetails;
  