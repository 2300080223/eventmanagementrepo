import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './CustomerRegistration.css'; // Add this line
import CustomerFooter from './CutomerFooter';

export default function CustomerRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/customer/registration`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: ''
        });
      }
    } catch (error) {
      if (error.response) {
        setMessage('');
        setError(error.response.data);
      } else {
        setMessage('');
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="registration-container">
      {/* Left Panel */}
      <div className="registration-info">
        <h2>Join Elevate Events</h2>
        <p>Plan, customize, and manage your events effortlessly with us.</p>
        <ul>
          <li>🎉 Hassle-Free Event Planning</li>
          <li>📅 Book & Track Your Events</li>
          <li>📍 Get Local Vendor Support</li>
          <li>💬 Receive Instant Updates</li>
          <li>📱 Mobile Friendly Platform</li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1622555781241-e61fe0c877e1"
          alt="Event registration"
          className="info-image"
        />
      </div>

      {/* Right Panel */}
      <div className="registration-form">
        <h3>Customer Registration</h3>
        {
          message ? (
            <p className="success">{message}</p>
          ) : (
            <p className="error">{error}</p>
          )
        }
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />

          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Date of Birth</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />

          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />

          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />

          <label>Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />

          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />

          <button type="submit">Register</button>
        </form>
      </div>
      <CustomerFooter/>
    </div>
  );
}
