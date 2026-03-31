import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Floral divider */}
      <div className="footer-floral">
        <span className="floral-line" />
        <span className="floral-icon">✿</span>
        <span className="floral-line" />
      </div>

      <div className="footer-inner">
        <div className="footer-brand">
<p className="footer-tagline">Bringing Texas-clean to your doorstep</p>
          <p className="footer-location">📍 Proudly serving Texas</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/book">Book Now</Link>
        </div>

        <div className="footer-contact">
          <h4>Get in Touch</h4>
          <p>📞 (903) 456-5126</p>
          <p>✉️ southernshinecleancotx@gmail.com</p>
          <p>🕐 Mon – Sat: 7am – 7pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Southern Shine Clean Co TX · All rights reserved</p>
        <p>Made with <span className="heart">♥</span> in Texas</p>
      </div>
    </footer>
  );
}
