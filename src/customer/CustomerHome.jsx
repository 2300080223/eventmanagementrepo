import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
// import './CustomerHome.css';
import CustomerFooter from './CutomerFooter';
import BookedEvents from './BookedEvents';
import Birthday1 from './Birthday1.jpg'
import Wedding from './Wedding.jpg'
import Conference from './Conference.jpg'


export default function CustomerHome() {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  return (
    <div className="customer-home-container">
      {/* Welcome Banner */}
      <section className="welcome-banner">
        <h2>Welcome, {customer.name} 👋</h2>
        <p>We’re excited to help you craft your next unforgettable event!</p>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <div className="action-card">
          📅
          <h3>My Bookings</h3>
          <p>Check your current and past bookings in one place.</p>
          <button>
            <Link to="/BookedEvents" style={{ textDecoration: 'none', color: 'inherit' }}>
              View Bookings
            </Link>
          </button>
        </div>
        <div className="action-card">
          🔔
          <h3>Upcoming Events</h3>
          <p>Stay updated with your upcoming events and milestones.</p>
          <button><Link to="/ViewAllEvents" style={{ textDecoration: 'none', color: 'inherit' }}>
            See Calendar</Link></button>
        </div>
        <div className="action-card">
          ✍️
          <h3>New Booking</h3>
          <p>Ready for your next event? Start a new booking request now.</p>
          <button>Book Now</button>
        </div>
      </section>

      {/* Event Suggestions */}
      <section className="suggestions">
        <h2>Popular Event Ideas</h2>
        <div className="suggestion-cards">
          <div className="suggestion-card">
            <img src={Wedding} alt="Wedding" />
            <h4>Traditional Indian Wedding</h4>
          </div>
          <div className="suggestion-card">
            <img src={Conference} alt="Corporate" />
            <h4>Corporate Conference</h4>
          </div>
          <div className="suggestion-card">
            <img src={Birthday1} alt="Birthday" />
            <h4>Birthday Celebration</h4>
          </div>
        </div>
      </section>
      <CustomerFooter/>
    </div>
  );
}