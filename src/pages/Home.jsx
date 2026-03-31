import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import kitchenBefore from '../assets/kitchen-before.jpg';
import kitchenAfter from '../assets/kitchen-after.jpg';
import bathroomBefore from '../assets/bathroom-before.jpg';
import bathroomAfter from '../assets/bathroom-after.jpg';
import closetBefore from '../assets/closet1.jpg';
import closetAfter from '../assets/closet2.jpg';
import showerBefore from '../assets/shower1.jpg';
import showerAfter from '../assets/shower2.jpg';
import cowhat from '../assets/cowhat.png';
import flower from '../assets/flower.png';
import stars from '../assets/stars.png';
import house from '../assets/house.png';
import broom from '../assets/broom.png';
import box from '../assets/box.png';
import building from '../assets/building.png';
import './Home.css';

/* ── Inline SVG decorations ── */
function MagnoliaDecor({ className = '' }) {
  return (
    <svg className={`magnolia-svg ${className}`} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* stem */}
      <path d="M100 220 Q95 160 90 120 Q85 80 100 40" stroke="#7a9e7e" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* leaves */}
      <ellipse cx="78" cy="140" rx="28" ry="14" fill="#7a9e7e" opacity="0.7" transform="rotate(-30 78 140)"/>
      <ellipse cx="118" cy="120" rx="26" ry="12" fill="#5e8a62" opacity="0.6" transform="rotate(20 118 120)"/>
      <ellipse cx="82" cy="90" rx="22" ry="10" fill="#7a9e7e" opacity="0.65" transform="rotate(-15 82 90)"/>
      {/* petals */}
      <ellipse cx="100" cy="55" rx="18" ry="32" fill="white" opacity="0.95" transform="rotate(-15 100 55)"/>
      <ellipse cx="118" cy="60" rx="18" ry="32" fill="white" opacity="0.9" transform="rotate(15 118 60)"/>
      <ellipse cx="82" cy="60" rx="18" ry="32" fill="white" opacity="0.9" transform="rotate(-40 82 60)"/>
      <ellipse cx="110" cy="45" rx="16" ry="28" fill="white" opacity="0.85" transform="rotate(35 110 45)"/>
      <ellipse cx="90" cy="42" rx="16" ry="28" fill="white" opacity="0.85" transform="rotate(-35 90 42)"/>
      {/* center */}
      <circle cx="100" cy="62" r="10" fill="#c9973a" opacity="0.9"/>
      <circle cx="100" cy="62" r="6" fill="#e8b86d"/>
    </svg>
  );
}

function BluebonnetDecor({ className = '' }) {
  return (
    <svg className={`bluebonnet-svg ${className}`} viewBox="0 0 80 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* stem */}
      <path d="M40 180 Q38 140 40 100" stroke="#7a9e7e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* small leaves */}
      <ellipse cx="28" cy="145" rx="16" ry="7" fill="#7a9e7e" opacity="0.7" transform="rotate(-35 28 145)"/>
      <ellipse cx="52" cy="130" rx="16" ry="7" fill="#5e8a62" opacity="0.65" transform="rotate(35 52 130)"/>
      {/* bluebonnet florets - stacked */}
      {[0,16,32,48,64,78].map((y, i) => (
        <g key={i} transform={`translate(0, ${y})`}>
          <ellipse cx="40" cy="25" rx="8" ry="5" fill="#4a6fa5" opacity={0.9 - i * 0.08}/>
          <ellipse cx="28" cy="30" rx="7" ry="4.5" fill="#3d5c8a" opacity={0.85 - i * 0.08}/>
          <ellipse cx="52" cy="30" rx="7" ry="4.5" fill="#3d5c8a" opacity={0.85 - i * 0.08}/>
          <ellipse cx="40" cy="36" rx="6" ry="4" fill="#2e4a73" opacity={0.8 - i * 0.08}/>
          {/* white tip */}
          <ellipse cx="40" cy="21" rx="4" ry="2.5" fill="white" opacity="0.6"/>
        </g>
      ))}
    </svg>
  );
}

const whyCards = [
  {
    icon: <img src={cowhat} alt="cowboy hat" style={{ width: '6rem', height: '6rem', objectFit: 'contain', marginBottom: '-2.2rem' }} />,
    title: 'Texas Tough Standards',
    body: 'We don\'t cut corners. Every clean is held to the same gold standard, because your home deserves nothing less than the best.',
  },
  {
    icon: <img src={flower} alt="flower" style={{ width: '6rem', height: '6rem', objectFit: 'contain', marginBottom: '-2.2rem' }} />,
    title: 'Southern Hospitality',
    body: 'From your first call to the final wipe-down, we treat your home like our own, with care, respect, and a warm Texas smile.',
  },
  {
    icon: <img src={stars} alt="stars" style={{ width: '6rem', height: '6rem', objectFit: 'contain', marginBottom: '-2.2rem' }} />,
    title: 'Spotless Guarantee',
    body: 'Not satisfied? We\'ll come back and make it right. No fuss, no fees. Your happiness is our promise.',
  },
];

const services = [
  { icon: <img src={house} alt="house" style={{ width: '2rem', height: '2rem', objectFit: 'contain', verticalAlign: 'middle' }} />, name: 'Standard Clean' },
  { icon: <img src={broom} alt="broom" style={{ width: '2rem', height: '2rem', objectFit: 'contain', verticalAlign: 'middle' }} />, name: 'Deep Clean' },
  { icon: <img src={box} alt="box" style={{ width: '2rem', height: '2rem', objectFit: 'contain', verticalAlign: 'middle' }} />, name: 'Move-In / Move-Out' },
  { icon: <img src={building} alt="building" style={{ width: '2rem', height: '2rem', objectFit: 'contain', verticalAlign: 'middle' }} />, name: 'Commercial Clean' },
];

const beforeAfterPairs = [
  { label: 'Kitchen Deep Clean',   before: kitchenBefore, after: kitchenAfter },
  { label: 'Bathroom Restoration', before: bathroomBefore, after: bathroomAfter },
  { label: 'Closet Organization', before: closetBefore, after: closetAfter },
  { label: 'Shower Deep Clean', before: showerBefore, after: showerAfter },
];

export default function Home() {
  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-texture" />
        <div className="hero-decor hero-decor-left">
          <BluebonnetDecor />
          <MagnoliaDecor />
        </div>
        <div className="hero-decor hero-decor-right">
          <MagnoliaDecor className="flip" />
          <BluebonnetDecor />
        </div>

        <div className="hero-content">
          <div className="hero-logo-wrap">
            <img src={logo} alt="Southern Shine Logo" style={{ width: '340px', height: 'auto' }} />
          </div>
          <h1 className="hero-title">
            A Cleaner Home,<br />
            <em>the Southern Way.</em>
          </h1>
          <div className="divider" />
          <p className="hero-sub">
            Professional home &amp; commercial cleaning rooted in Texas charm.
            We bring the shine, you enjoy the time.
          </p>
          <div className="hero-ctas">
            <Link to="/book" className="btn-gold">Book a Clean</Link>
            <Link to="/services" className="btn-primary">Our Services</Link>
          </div>
        </div>
      </section>

      {/* ── RIBBON STRIP ── */}
      <div className="ribbon">
        {['✦ Locally Owned', '✦ Eco-Friendly Products', '✦ Satisfaction Guaranteed'].map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {/* ── WHY CHOOSE US ── */}
      <section className="why-section">
        <div className="section-inner">
          <div className="why-header">
            <span className="section-tag">Why Southern Shine</span>
            <h2>Clean You Can Count On</h2>
            <div className="divider" />
            <p className="why-intro">
              We bring Texas-sized dedication to every home we touch, with the warmth and attention to detail only a Southern company can offer.
            </p>
          </div>
          <div className="why-cards">
            {whyCards.map(({ icon, title, body }) => (
              <div className="why-card" key={title}>
                <div className="why-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="services-preview">
        <div className="services-preview-bg" />
        <div className="section-inner services-preview-inner">
          <div className="sp-text">
            <span className="section-tag">What We Offer</span>
            <h2>Every Room, Every Corner</h2>
            <div className="divider divider-left" />
            <p>
              From a quick refresh to a full deep clean, we've got a service for every need and every budget. All done with Southern pride and a commitment to spotless results.
            </p>
            <ul className="sp-list">
              {services.map(({ icon, name }) => (
                <li key={name}><span>{icon}</span> {name}</li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary" style={{ marginTop: '28px' }}>
              View All Services
            </Link>
          </div>
          <div className="sp-visual">
            <div className="sp-badge">
              <div className="sp-badge-inner">
                <span className="sp-badge-num">100%</span>
                <span className="sp-badge-label">Satisfaction<br />Guaranteed</span>
                <span className="sp-badge-star">★★★★★</span>
              </div>
            </div>
            <div className="sp-floral-wrap">
              <MagnoliaDecor />
              <BluebonnetDecor />
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="ba-section">
        <div className="section-inner">
          <div className="ba-header">
            <span className="section-tag">Our Results</span>
            <h2>Before &amp; After</h2>
            <div className="divider" />
            <p className="ba-intro">
              See the Southern Shine difference, every room transformed with care, precision, and Texas pride.
            </p>
          </div>

          <div className="ba-grid">
            {beforeAfterPairs.map(({ label, before, after }) => (
              <div className="ba-pair" key={label}>
                <div className="ba-label-bar">{label}</div>
                <div className="ba-images">
                  {/* BEFORE */}
                  <div className="ba-img-wrap">
                    <span className="ba-tag ba-tag-before">Before</span>
                    {before ? (
                      <img src={before} alt={`Before, ${label}`} className="ba-img" />
                    ) : (
                      <div className="ba-placeholder">
                        <span className="ba-placeholder-icon">📷</span>
                        <span>Photo coming soon</span>
                      </div>
                    )}
                  </div>
                  {/* DIVIDER ARROW */}
                  <div className="ba-arrow">→</div>
                  {/* AFTER */}
                  <div className="ba-img-wrap">
                    <span className="ba-tag ba-tag-after">After</span>
                    {after ? (
                      <img src={after} alt={`After, ${label}`} className="ba-img" />
                    ) : (
                      <div className="ba-placeholder ba-placeholder-after">
                        <span className="ba-placeholder-icon">✨</span>
                        <span>Photo coming soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <MagnoliaDecor className="cta-mag" />
          <div className="cta-text">
            <h2>Ready for a Home That Shines?</h2>
            <p>Book your clean today and let Southern Shine do the rest.</p>
            <Link to="/book" className="btn-gold">Schedule My Clean</Link>
          </div>
          <MagnoliaDecor className="cta-mag flip" />
        </div>
      </section>
    </main>
  );
}
