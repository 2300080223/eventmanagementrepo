import React from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './customer.css';

export default function EventCard({ event }) {
  const navigate = useNavigate();

  const handleBookClick = () => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }
    navigate(`/bookevent?eventid=${event.id}`);
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img
          src={`${config.url}/event/image/${event.id}`}
          alt={event.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x180.png?text=No+Image";
          }}
        />
        <div className="event-date">₹ {event.cost}</div>
      </div>
      <div className="event-card-content">
        <h4>{event.title}</h4>
        <p className="event-company">{event.manager.company_name}</p>
        <p className="event-location">{event.manager.company_location}</p>
        <p className="event-category">{event.category}</p>
        <button className="book-button" onClick={handleBookClick}>Book</button>
      </div>
    </div>
  );
}