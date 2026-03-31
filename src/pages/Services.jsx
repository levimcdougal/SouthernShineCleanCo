import { Link } from 'react-router-dom';
import house from '../assets/house.png';
import box from '../assets/box.png';
import stars from '../assets/stars.png';
import './Services.css';

const services = [
  {
    icon: <img src={house} alt="house" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} />,
    name: 'Standard Clean',
    tagline: 'The everyday refresh',
    description: 'Transparent, simple pricing — no quotes required for standard maintenance cleans!',
    baseRate: '$200',
    baseDesc: 'Covers travel, professional supplies, and your first 2 hours',
    additionalRate: '$30/hr after the initial 2 hours',
    estimates: [
      { label: 'Small Homes / Apartments (2–3 hrs)', range: '$200 – $230' },
      { label: 'Average Family Homes (4–5 hrs)', range: '$260 – $290' },
      { label: 'Large Estates (6+ hrs)', range: '$320+' },
    ],
    includes: [
      'Kitchen: Countertops, appliance exteriors, sinks & floors',
      'Bathrooms: Sanitizing toilets, showers, tubs & vanities',
      'Living Areas: Dusting all reachable surfaces, vacuuming & mopping',
      'Trash removal & general tidying in every room',
    ],
    addons: [
      'Deep Clean Upgrade: +$50 (Baseboards, blinds & vents)',
      'Interior Oven: $35',
      'Interior Fridge: $30',
      'Interior Windows: $5–$10 per window',
      'Load of Laundry (Wash & Fold): $25',
      'Pet Hair Removal (Heavy): $30',
    ],
    price: 'Starting at $200',
    popular: false,
  },
  {
    icon: <img src={stars} alt="stars" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} />,
    name: 'Deep Clean',
    tagline: 'Top-to-bottom brilliance',
    description: 'A "top-to-bottom" restorative service. No quotes required — just thorough, high-intensity cleaning to get your home back to its best.',
    baseRate: '$300',
    baseDesc: 'Covers travel, heavy-duty supplies, and your first 3 hours',
    additionalRate: '$45/hr after the initial 3 hours',
    estimates: [
      { label: 'Small Homes / Apartments (3–4 hrs)', range: '$300 – $345' },
      { label: 'Average Family Homes (5–7 hrs)', range: '$390 – $480' },
      { label: 'Large Estates (8+ hrs)', range: '$525+' },
    ],
    includes: [
      'Everything in a Standard Clean',
      'Kitchen & Bath: Deep scrubbing of grout lines, limescale & soap scum removal, cabinet exterior detailing',
      'The Details: Hand-wiping baseboards, door frames, window sills & light switches',
      'High Dusting: Ceiling fans, light fixtures & air vents',
      'Living Areas: Dusting decor, vacuuming upholstery & wiping blinds',
    ],
    addons: [
      'Interior Oven: $35',
      'Interior Fridge: $30',
      'Interior Windows: $5–$10 per window',
      'Inside Kitchen Cabinets: $50 (Must be empty)',
      'Wall Washing: $40 per room',
      'Garage Sweep & Tidy: $45',
    ],
    note: 'Pro-Tip: Deep cleans require more physical labor and specialized degreasers. While a maintenance clean maintains the shine, a deep clean finds the shine again.',
    price: 'Starting at $300',
    popular: true,
  },
  {
    icon: <img src={box} alt="box" style={{ width: '5rem', height: '5rem', objectFit: 'contain' }} />,
    name: 'Move-In / Move-Out',
    tagline: 'Fresh starts, clean slates',
    description: 'An intensive, empty-home detail designed to ensure a "white glove" finish for new occupants or to secure your security deposit.',
    baseRate: '$350',
    baseDesc: 'Covers travel, heavy-duty supplies, and your first 3 hours',
    additionalRate: '$50/hr after the initial 3 hours',
    estimates: [
      { label: 'Small Homes / Apartments (4–5 hrs)', range: '$400 – $450' },
      { label: 'Average Family Homes (6–8 hrs)', range: '$500 – $600' },
      { label: 'Large Estates (9+ hrs)', range: '$650+' },
    ],
    includes: [
      'Inside Everything: Deep cleaning all kitchen cabinets, bathroom vanities, linen closets & wardrobes',
      'Appliances: Full interior & exterior detailing of oven & refrigerator/freezer',
      'Total Surfaces: Scrubbing all floors & wiping down walls to remove scuffs & dust',
      'Detailing: Hand-wiping every baseboard, door frame, window sill, light switch & outlet cover',
      'Sanitization: High-intensity disinfection of all sinks, tubs, showers & toilets',
    ],
    addons: [
      'Interior Windows: $5–$10 per window',
      'Garage Deep Clean: $60 (Sweeping & cobweb removal)',
      'Patio/Porch Sweep: $30',
      'Carpet Steam Cleaning: Custom quote',
    ],
    note: 'For best results, electricity and water must be on, and the home must be completely free of furniture and personal belongings.',
    price: 'Starting at $350',
    popular: false,
  },
];


export default function Services() {
  return (
    <main className="services-page">
      {/* ── PAGE HEADER ── */}
      <section className="page-header">
        <div className="page-header-bg" />
        <div className="page-header-content">
          <span className="section-tag">What We Offer</span>
          <h1>Our Cleaning Services</h1>
          <div className="divider" />
          <p>Every service is performed with eco-friendly products, professional-grade equipment, and a whole lot of Southern heart.</p>
        </div>
      </section>

      {/* ── SERVICE PANELS ── */}
      <section className="services-panels-section">
        {services.map((s, i) => (
          <div className={`service-panel ${i % 2 === 1 ? 'panel-alt' : ''}`} key={s.name}>
            <div className="services-section-inner panel-inner">
              <div className="panel-left">
                <div className="panel-title-row">
                  <span className="panel-icon">{s.icon}</span>
                  <h3 className="panel-name">{s.name}</h3>
                </div>
                <p className="panel-tagline">{s.tagline}</p>
                <p className="panel-desc">{s.description}</p>

                {s.baseRate && (
                  <div className="panel-pricing">
                    <div className="panel-rate-row">
                      <span className="panel-rate-label">Base Rate</span>
                      <span className="panel-rate-value">{s.baseRate}</span>
                    </div>
                    <p className="panel-rate-note">{s.baseDesc}</p>
                    <p className="panel-rate-note">+ {s.additionalRate}</p>
                    {s.estimates && (
                      <div className="panel-estimates">
                        {s.estimates.map((e) => (
                          <div className="panel-estimate-row" key={e.label}>
                            <span>{e.label}</span>
                            <strong>{e.range}</strong>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="panel-right">
                <div className="panel-block">
                  <h4 className="panel-block-title">What's Included</h4>
                  <ul className="panel-list">
                    {s.includes.map((item) => (
                      <li key={item}><span className="panel-check">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>

                {s.addons && (
                  <div className="panel-block">
                    <h4 className="panel-block-title">Add-Ons</h4>
                    <ul className="panel-list panel-list-addons">
                      {s.addons.map((a) => (
                        <li key={a}><span className="panel-plus">+</span>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {s.note && <p className="panel-note">{s.note}</p>}

                <Link to="/book" className={s.popular ? 'btn-gold panel-btn' : 'btn-primary panel-btn'}>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>



      {/* ── SERVICE AREA ── */}
      <section className="trust-strip">
        <div className="services-section-inner trust-inner">
          <div className="trust-item">
            <span className="trust-icon trust-bullet">✦</span>
            <div>
              <strong>Based in Poetry, TX</strong>
              <p>Proudly local &amp; Texas-rooted</p>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon trust-bullet">✦</span>
            <div>
              <strong>30-Mile Service Radius</strong>
              <p>We come to you</p>
            </div>
          </div>
          <div className="trust-item">
            <span className="trust-icon trust-bullet">✦</span>
            <div>
              <strong>Beyond 30 Miles?</strong>
              <p>A small fuel fee applies</p>
            </div>
          </div>
        </div>
      </section>

      <div className="services-divider-line" />

      {/* ── CTA ── */}
      <section className="services-cta">
        <h2>Not sure which service you need?</h2>
        <p>Give us a call or book a service, we'll help you pick the perfect clean for your home.</p>
        <div className="services-cta-btns">
          <Link to="/book" className="btn-gold">Book a Clean</Link>
        </div>
      </section>
    </main>
  );
}
