import { useState, useEffect } from 'react';
//import './CustomerProfile.css';
import CustomerFooter from './CutomerFooter';

export default function CustomerProfile() {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  if (!customer) {
    return (
      <div className="profile-loading">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* Profile Card */}
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h2>{customer.name}</h2>
        <p className="username">@{customer.username}</p>

        <div className="profile-details">
          <p><strong>Gender:</strong> {customer.gender}</p>
          <p><strong>DOB:</strong> {customer.dob}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Mobile:</strong> {customer.mobileno}</p>
          <p><strong>Location:</strong> {customer.location}</p>
        </div>
      </div>

      {/* Side Panel */}
      <div className="profile-side">
        <h3>Customer Tips</h3>
        <ul>
          <li>🎉 View your bookings anytime</li>
          <li>📅 Schedule new events easily</li>
          <li>💬 Contact managers directly</li>
          <li>⭐ Update your preferences</li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1618244973423-1a349b2a69c6"
          alt="Event vibe"
          className="side-image"
        />
      </div>
      <CustomerFooter/>
    </div>
  );
}
