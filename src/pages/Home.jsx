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
  { icon: house, name: 'Standard Cleaning' },
  { icon: broom, name: 'Deep Clean' },
  { icon: box, name: 'Move-In / Move-Out Cleaning' },
  { icon: stars, name: 'Priority Cleaning' },
  { icon: building, name: 'Organization & Decluttering' },
  { icon: cowhat, name: 'Handyman Services' },
];

const membershipPlans = [
  {
    medal: '🥉',
    name: 'Basic Reset',
    cadence: 'One cleaning every month',
    accent: 'bronze',
    prices: [
      ['Up to 1,500 sq ft', '$180/month'],
      ['1,501–2,500 sq ft', '$240/month'],
      ['2,501–3,500 sq ft', '$300/month'],
    ],
  },
  {
    medal: '🥈',
    name: 'Balance',
    cadence: 'Two cleanings every month',
    accent: 'silver',
    featured: true,
    prices: [
      ['Up to 1,500 sq ft', '$320/month'],
      ['1,501–2,500 sq ft', '$420/month'],
      ['2,501–3,500 sq ft', '$520/month'],
    ],
  },
  {
    medal: '🥇',
    name: 'Weekly Refresh',
    cadence: 'One cleaning every week',
    accent: 'gold',
    prices: [
      ['Up to 1,500 sq ft', '$560/month'],
      ['1,501–2,500 sq ft', '$720/month'],
      ['Over 2,500 sq ft', 'Contact Us for a Custom Quote'],
    ],
  },
];

const membershipBenefits = [
  ['✦', 'First cleaning upgraded to a Deep Clean'],
  ['◷', 'Priority scheduling'],
  ['⌂', 'Recurring scheduled service'],
  ['$', 'Member pricing on eligible add-on services'],
];

const bookingSteps = [
  'Complete the membership intake form on Cal.com.',
  'We review your home information.',
  'We send your Stripe recurring subscription link.',
  'Subscribe securely through Stripe.',
  'We schedule your recurring cleanings.',
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
      {/* ── MEMBERSHIP HERO ── */}
      <section className="hero membership-hero" id="membership">
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
            <img src={logo} alt="Southern Shine Clean Co. TX" />
          </div>
          <span className="hero-eyebrow">Our Flagship Recurring Service</span>
          <h1 className="hero-title">Southern Standard<br /><em>Membership</em></h1>
          <div className="divider" />
          <p className="hero-sub">
            Keep your home consistently clean with recurring professional cleaning designed around your lifestyle.
          </p>
          <div className="hero-ctas">
            <a href="https://cal.com/sscleanco.tx" className="btn-gold membership-hero-cta">
              Join the Southern Standard Membership
            </a>
            <a href="#one-time-services" className="hero-secondary-link">Looking for a one-time clean? <span>View services ↓</span></a>
          </div>
          <p className="hero-payment-note">No payment is collected on this website. We’ll review your intake before sending a secure Stripe subscription link.</p>
        </div>
      </section>

      {/* ── RIBBON STRIP ── */}
      <div className="ribbon">
        {['✦ Consistent Care', '✦ Priority Scheduling', '✦ Member-Only Value'].map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {/* ── MEMBERSHIP PLANS ── */}
      <section className="membership-section" aria-labelledby="membership-plans-title">
        <div className="section-inner">
          <div className="membership-header">
            <span className="section-tag">Choose Your Rhythm</span>
            <h2 id="membership-plans-title">A cleaner home, on your schedule.</h2>
            <div className="divider" />
            <p>Simple monthly membership pricing based on your home’s square footage.</p>
          </div>
          <div className="membership-grid">
            {membershipPlans.map((plan) => (
              <article className={`membership-card ${plan.accent} ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured && <span className="membership-popular">Most Popular</span>}
                <div className="membership-card-head">
                  <span className="membership-medal" aria-hidden="true">{plan.medal}</span>
                  <h3>{plan.name} Membership</h3>
                  <p>{plan.cadence}</p>
                </div>
                <div className="membership-prices">
                  {plan.prices.map(([size, price]) => (
                    <div className="membership-price-row" key={size}>
                      <span>{size}</span>
                      <strong className={price.includes('Custom Quote') ? 'custom-price' : ''}>{price}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="membership-quote-note">Weekly Refresh homes larger than 2,500 sq ft: <a href="https://cal.com/sscleanco.tx">contact us for a custom quote.</a></p>
        </div>
      </section>

      {/* ── MEMBERSHIP BENEFITS & PROCESS ── */}
      <section className="membership-details">
        <div className="section-inner membership-details-grid">
          <div className="benefits-panel">
            <span className="section-tag">Always Included</span>
            <h2>Membership makes clean feel effortless.</h2>
            <div className="benefit-list">
              {membershipBenefits.map(([icon, benefit]) => (
                <div className="benefit-item" key={benefit}>
                  <span aria-hidden="true">{icon}</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="process-panel">
            <span className="section-tag">How It Works</span>
            <h2>Personal review. Secure subscription. Reliable service.</h2>
            <ol className="membership-steps">
              {bookingSteps.map((step, index) => (
                <li key={step}><span>{index + 1}</span><p>{step}</p></li>
              ))}
            </ol>
            <a href="https://cal.com/sscleanco.tx" className="btn-gold">Start My Membership Intake</a>
          </div>
        </div>
      </section>

      {/* ── ONE-TIME SERVICES ── */}
      <section className="one-time-section" id="one-time-services" aria-labelledby="one-time-title">
        <div className="section-inner">
          <div className="one-time-header">
            <span className="section-tag">Need Just One Visit?</span>
            <h2 id="one-time-title">One-Time Services</h2>
            <div className="divider" />
            <p>Membership is our signature way to care for your home, but we’re still happy to help with one-time needs.</p>
          </div>
          <div className="one-time-grid">
            {services.map(({ icon, name }) => (
              <div className="one-time-card" key={name}>
                <img src={icon} alt="" aria-hidden="true" />
                <h3>{name}</h3>
              </div>
            ))}
            {new Date() < new Date(2026, 7, 1) && (
              <div className="one-time-card">
                <span className="service-symbol" aria-hidden="true">♨</span>
                <h3>Laundry Service</h3>
                <small>Available through July 31</small>
              </div>
            )}
          </div>
          <Link to="/services" className="btn-primary">Explore One-Time Services</Link>
        </div>
      </section>

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
            <h2>Make clean your new standard.</h2>
            <p>Tell us about your home and we’ll match you with the right membership.</p>
            <a href="https://cal.com/sscleanco.tx" className="btn-gold">Join the Southern Standard</a>
          </div>
          <MagnoliaDecor className="cta-mag flip" />
        </div>
      </section>
    </main>
  );
}
