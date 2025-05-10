import './style.css';
import CustomerFooter from '../customer/CutomerFooter';
import Wedding from '../customer/Wedding.jpg'
import Concert from '../customer/Concert.jpg'
import Birthday3 from '../customer/Birthday3.jpg'
import Conference from '../customer/Conference.jpg'

export default function Home() {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Elevate Events</h1>
          <p>Crafting unforgettable moments with elegance, culture, and perfection across India.</p>
          <a href="/contact" className="hero-btn">Start Planning</a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="home-highlights">
        <h2>Why Choose Us</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            🕌
            <h3>Traditional Elegance</h3>
            <p>Rooted in Indian culture, we design events with spiritual and regional charm.</p>
          </div>
          <div className="highlight-card">
            🧠
            <h3>Creative Planning</h3>
            <p>Innovative themes and seamless coordination for modern & cultural events alike.</p>
          </div>
          <div className="highlight-card">
            🌍
            <h3>Pan India Reach</h3>
            <p>From Delhi to Kochi, we bring events to life across 50+ cities.</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="home-services">
        <h2>Our Specialities</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={Wedding} alt="Indian Wedding" />
            <h3>Big Fat Indian Weddings</h3>
          </div>
          <div className="service-card">
            <img src={Conference} alt="Corporate Event" />
            <h3>Corporate & Seminars</h3>
          </div>
          <div className="service-card">
            <img src={Concert} alt="Cultural Event" />
            <h3>Cultural & Festive Events</h3>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"My daughter's wedding was like a dream. Thank you Elevate!"</p>
            <h4>— Meena Joshi, Jaipur</h4>
          </div>
          <div className="testimonial-card">
            <p>"Their planning made our product launch stress-free and elegant."</p>
            <h4>— Ramesh Iyer, Mumbai</h4>
          </div>
          <div className="testimonial-card">
            <p>"They handled our Durga Puja with cultural grace and punctuality."</p>
            <h4>— Sushmita Ghosh, Kolkata</h4>
          </div>
        </div>
      </section>
      <CustomerFooter/>
    </div>
  );
}
