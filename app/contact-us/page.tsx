// app/contact-us/page.js

'use client';
export default function ContactUs() {
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <h2>Reg. Office</h2>
          <p>No. 277, Sri Kalabairaweshwara Building</p>
          <p>9th Cross, Balaji Layout, Nelagadhranahalli, Karihobanahalli, Bengaluru, Karnataka, 560073</p>
          <p><strong>Phone:</strong> 096328 94606</p>
          <p><strong>Email:</strong> <a href="mailto:info.voltronpower@gmail.com">info.voltronpower@gmail.com</a></p>
        </div>
  
        <style jsx>{`
          .contact-container {
            max-width: 1500px;
            margin: 0 auto;
            padding: 20px;
            background: #1A43BF;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          h1 {
            text-align: center;
            margin-bottom: 20px;
          }
          .contact-details {
            font-size: 18px;
            color: white;
          }
          p {
            margin: 10px 0;
          }
          a {
            color: #0070f3;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    );
  }
  