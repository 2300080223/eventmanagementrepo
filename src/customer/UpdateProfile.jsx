import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import CustomerFooter from './CutomerFooter';


export default function UpdateProfile() {
  const [formData, setFormData] = useState({
    id: '',
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

  useEffect(() => {
    const storedCustomer = sessionStorage.getItem('customer');
    if (storedCustomer) {
      setFormData(JSON.parse(storedCustomer));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.url}/customer/updateprofile`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        sessionStorage.setItem('customer', JSON.stringify(formData));
      }
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data : "An unexpected error occurred.");
    }
  };

  return (
    <div className="update-container">
      
      {/* Left Info Panel */}
      <div className="update-info">
        <h2>Why Update Your Profile?</h2>
        <ul>
          <li>📅 Get personalized event suggestions</li>
          <li>🎁 Enjoy member-exclusive offers</li>
          <li>📍 Get local vendor deals</li>
          <li>💬 Receive real-time updates</li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1603775020644-eb8decd7995c"
          alt="Event showcase"
          className="info-image"
        />
      </div>

      {/* Right Form Panel */}
      <div className="update-form-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="Profile"
          className="update-avatar"
        />
        <h3 className="update-heading">Update Profile</h3>
        {message ? (
          <p className="update-success">{message}</p>
        ) : (
          <p className="update-error">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="update-form">
          <label>Full Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />

          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required disabled>
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
          <input type="text" id="username" value={formData.username} onChange={handleChange} required disabled />

          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />

          <label>Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />

          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />

          <button type="submit">Update</button>
        </form>
      </div>
      <CustomerFooter/>
    </div>
  );
}
