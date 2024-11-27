'use client';

export default function OpeningHours() {
  const hours = [
    { day: 'Sunday', time: 'Closed' },
    { day: 'Monday', time: '9:00 AM - 6:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 6:00 PM' },
    { day: 'Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { day: 'Today', time: '1:00 AM - 7:00 PM' },
  ];

  return (
    <div className="opening-hours-container">
      <h1>Opening Hours</h1>
      <table className="hours-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((entry, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            >
              <td>{entry.day}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Internal CSS */}
      <style jsx>{`
        .opening-hours-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 1.8rem;
          color: #333;
        }

        .hours-table {
          width: 100%;
          border-collapse: collapse;
        }

        .hours-table th,
        .hours-table td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .hours-table th {
          background-color: #007bff;
          color: #fff;
          font-size: 1rem;
        }

        .hours-table tr.even-row {
          background-color: #f9f9f9;
        }

        .hours-table tr.odd-row {
          background-color: #eaeaea;
        }

        .hours-table td {
          color: #555;
        }
      `}</style>
    </div>
  );
}
