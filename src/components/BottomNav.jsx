import React from 'react';

export default function BottomNav({ dates, setSelectedDate }) {
  return (
    <nav>
      <div className="date-picker-container">
        <input
          type="date"
          className="center-me"
          placeholder="Select Date"
        />
      </div>

      <div>
        {dates.map((date, index) => (
          <button
            key={index}
            className="nav-card"
            onClick={() => setSelectedDate(date)} // Allows me to pass the date data to parent and then to sibling component. This will allow me to select each date button and it will display the data for THAT date.
          >
            <p>{date}</p>
            
          </button>
        ))}
      </div>
    </nav>
  );
}