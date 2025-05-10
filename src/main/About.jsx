import './About.css';
import CustomerFooter from '../customer/CutomerFooter';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Elevate Events</h1>
        <p>Transforming your celebrations into unforgettable memories across India.</p>
      </section>

      {/* About Overview */}
      <section className="about-overview">
        <h2>Who We Are</h2>
        <p>
          Elevate Events is India’s leading event management platform. Whether it's a wedding in Jaipur,
          a corporate seminar in Bangalore, or a cultural fest in Delhi — we bring your ideas to life
          with precision and style rooted in Indian traditions.
        </p>
        <img
          src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458"
          alt="Indian Wedding Event"
          className="overview-img"
        />
      </section>

      {/* Services */}
      <section className="services">
        <h2>What We Offer</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Shaadi & Celebrations</h3>
            <p>From Haldi to Reception, we manage your wedding events with elegance and culture.</p>
          </div>
          <div className="card">
            <h3>Corporate & Conferences</h3>
            <p>Flawlessly organized professional gatherings tailored for Indian industries and startups.</p>
          </div>
          <div className="card">
            <h3>Festivals & Cultural Events</h3>
            <p>Celebrate Navratri, Diwali, Holi, and more with perfect logistical execution.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Team Member" />
            <h4>Sneha Iyer</h4>
            <p>Founder & Creative Head</p>
          </div>
          <div className="member">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" alt="Team Member" />
            <h4>Arjun Patel</h4>
            <p>Operations & Logistics</p>
          </div>
          <div className="member">
            <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507" alt="Team Member" />
            <h4>Meera Desai</h4>
            <p>Client Relations & Decor</p>
          </div>
        </div>
      </section>
      <CustomerFooter/>
    </div>
  );
}
