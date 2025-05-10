

export default function CustomerFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Column */}
        <div className="footer-section about">
          <h3>Elevate Events</h3>
          <p>
            We bring your celebrations to life across India — from weddings to corporate events with elegance and cultural essence.
          </p>
        </div>

        {/* Middle Column */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/customerregistration">Register</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>📍 Mumbai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@elevateevents.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Elevate Events | All rights reserved
      </div>
    </footer>
  );
}
