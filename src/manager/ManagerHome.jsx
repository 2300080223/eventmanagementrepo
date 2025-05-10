import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ViewEventsByManager from './ViewEventsByManager';
import ManagerProfile from './ManagerProfile'
import ViewBookings from './ViewBookings'


export default function ManagerHome() {
  const [manager, setManager] = useState({});

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
    }
  }, []);

  return (
    <div className="manager-home">
      {/* Welcome Banner */}
      <section className="manager-welcome">
        <h2>Welcome, {manager.name} 👨‍💼</h2>
        <p>Manage your events, clients, and reports from one smart dashboard.</p>
      </section>

      {/* Dashboard Cards */}
      <section className="manager-cards">
        <div className="card">
          📁
          <h3>Manage Bookings</h3>
          <p>View and approve customer event requests.</p>
          <Link to="/ViewEventsByManager" className="button-link">Go to Bookings</Link>
        </div>
        <div className="card">
          👥
          <h3>Booking List</h3>
          <p>View all registered Bookings and Verify them.</p>
          <Link to="/ViewBookings" className="button-link">View Customers</Link>
        </div>
        <div className="card">
          📊
          <h3>Profile</h3>
          <p>Manager Profile</p>
          <Link to="/ManagerProfile" className="button-link">View Profile</Link>
        </div>
      </section>

      {/* Summary */}
      <section className="manager-summary">
        <h4>Today’s Summary</h4>
        <ul>
          <li>✅ 3 new bookings pending approval</li>
          <li>📩 2 customer messages received</li>
          <li>📅 5 events scheduled this week</li>
        </ul>
      </section>
    </div>
  );
}
