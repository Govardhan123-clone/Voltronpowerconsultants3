"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const Footer: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const qrValue = 'https://yourwebsite.com'; // Replace with your desired value
    QRCode.toDataURL(qrValue)
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('Error generating QR code:', err));
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
    



          <h5>Contact Us</h5>
          <ul>
            <li>
              <span>Address:</span>
              <p>Plot No. A 223, 5th Floor, Road No. 16 V, Nehru Nagar, Wagle Industrial Estate, Thane (W)-400604</p>
            </li>
            <li>
              <span>Phone:</span>
              <p>+91 22 6942 1100</p>
            </li>
            <li>
              <span>E-Mail:</span>
              <p><a href="mailto:tumkuteviaks2017@gamil.com">tender@mirajespl.com</a></p>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Scan Our QR Code</h5>
          {qrCodeUrl && (
            <img
              src={qrCodeUrl}
              alt="QR Code"
              style={{ width: '128px', height: '128px' }}
            />
          )}
          <p>
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our Website
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
