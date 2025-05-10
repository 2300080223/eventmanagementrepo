import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './Contact.css'; // Link to your CSS
import CustomerFooter from '../customer/CutomerFooter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
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
      const response = await axios.post(`${config.url}/sendemail`, formData);
      setMessage(response.data);
      setError('');
      setFormData({
        name: '',
        subject: '',
        message: '',
        email: '',
        mobileno: '',
        location: ''
      });
    } catch (err) {
      setError('Failed to send email');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <div className="contact-container">
      {/* Left Side Info */}
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have questions about organizing your event? Looking for the perfect team to handle your big day? 
          Reach out and let Elevate Events handle the rest.
        </p>
        <ul>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Email:</strong> contact@elevateevents.in</li>
          <li><strong>Head Office:</strong> 4th Floor, Orchid Tower, Mumbai, India</li>
          <li><strong>Timings:</strong> Mon–Sat | 10:00 AM – 6:00 PM</li>
        </ul>
        <img 
          src="https://images.unsplash.com/photo-1562072548-2c46a0419e4c" 
          alt="Event planning team" 
          className="contact-image"
        />
      </div>

      {/* Right Side Form */}
      <div className="contact-form">
        <h3>Contact Us</h3>
        {message ? (
          <p className="success">{message}</p>
        ) : (
          <p className="error">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />

          <label>Subject</label>
          <input type="text" id="subject" value={formData.subject} onChange={handleChange} required />

          <label>Message</label>
          <input type="text" id="message" value={formData.message} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />

          <label>Mobile No</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />

          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />

          <button type="submit">Submit</button>
        </form>
      </div>
      <CustomerFooter/>
    </div>
  );
}
