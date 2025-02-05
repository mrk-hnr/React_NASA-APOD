import React from 'react';

export default function BottomNav({ dates, setSelectedDate }) {
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <nav>
      <div className="date-picker-container">
        <input
          type="date"
          className="center-me"
          placeholder="Select Date"
          onChange={handleDateChange}
        />
      </div>

      <div>
        {dates.map((date, index) => (
          <button
            key={index}
            className="nav-card"
            onClick={() => setSelectedDate(date)}
          >
            <p>{date}</p>
          </button>
        ))}
      </div>
    </nav>
  );
}