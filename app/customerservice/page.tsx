'use client';

import { useState } from 'react';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-content">
        <div className="service-item">
          <h2>Testing and Transformer Oil Filtration</h2>
          <p>
            We provide comprehensive testing and transformer oil filtration services, ensuring
            the reliability and longevity of your equipment.
          </p>
          <button className="inquire-btn" onClick={handleModalToggle}>
            Inquire Now
          </button>
        </div>

        <div className="service-item">
          <h2>Calibration</h2>
          <p>
            Our calibration services guarantee precise and accurate equipment performance
            to meet industrial standards.
          </p>
          <button className="inquire-btn" onClick={handleModalToggle}>
            Inquire Now
          </button>
        </div>
      </div>



      {/* Modal Form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Please Fill This Form to Get a Quotation</h2>
            <form>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="text" name="mobile" placeholder="Your Mobile Number" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="send-btn">
                  Send
                </button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={handleModalToggle}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
