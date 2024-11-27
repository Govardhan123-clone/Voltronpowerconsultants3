'use client';

import { useState } from 'react';

interface BookingFormProps {
  service: string; // The service being booked
  onClose: () => void; // Callback to close the form
}

const BookingForm: React.FC<BookingFormProps> = ({ service, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const availableTimes = [
    '3:00 PM',
    '3:15 PM',
    '3:30 PM',
    '3:45 PM',
    '4:00 PM',
    '4:15 PM',
    '4:30 PM',
    '4:45 PM',
    '5:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time!');
      return;
    }
    alert(`Booking Confirmed!\nService: ${service}\nDate: ${selectedDate}\nTime: ${selectedTime}`);
    onClose(); // Close the form after booking
  };

  return (
    <div className="booking-form">
      <h2>Book {service}</h2>
      <form onSubmit={handleSubmit}>
        {/* Date Picker */}
        <div className="form-group">
          <label htmlFor="date">Select a Date</label>
          <input
            id="date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>

        {/* Time Slots */}
        <div className="form-group">
          <label>Select a Time</label>
          <div className="time-slots">
            {availableTimes.map((time) => (
              <button
                type="button"
                key={time}
                className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Submit and Close Buttons */}
        <div className="actions">
          <button type="submit" className="submit-button">
            Confirm Booking
          </button>
          <button type="button" className="close-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>

      <style jsx>{`
        .booking-form {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .time-slots {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .time-slot {
          padding: 10px 15px;
          background: #fff;
          border: 1px solid #0070f3;
          border-radius: 4px;
          color: #0070f3;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
        }
        .time-slot:hover {
          background: #0070f3;
          color: #fff;
        }
        .time-slot.selected {
          background: #0070f3;
          color: #fff;
        }
        .actions {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }
        .submit-button,
        .close-button {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .submit-button {
          background: #0070f3;
          color: #fff;
        }
        .submit-button:hover {
          background: #005bb5;
        }
        .close-button {
          background: #f44336;
          color: #fff;
        }
        .close-button:hover {
          background: #d32f2f;
        }
      `}</style>
    </div>
  );
};

export default BookingForm;
