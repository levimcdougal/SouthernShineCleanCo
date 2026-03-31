import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo / Brand */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Southern Shine Logo" style={{ width: '100px', height: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${pathname === to ? 'active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/book" className="btn-navy nav-cta">Book Now</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-link ${pathname === to ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link to="/book" className="btn-gold mobile-cta" onClick={() => setOpen(false)}>
          Book Now
        </Link>
      </div>
    </header>
  );
}
