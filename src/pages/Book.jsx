import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';
import './Book.css';



export default function Book() {

  const policies = [
    {
      icon: '📸',
      title: '1. Intake Required',
      content: (
        <p>To receive a quote, please provide photos or a walkthrough video, the service address, approximate square footage (if known), pets in the home, and any special requests. Quotes are based on the information provided before arrival.</p>
      ),
    },
    {
      icon: '🧼',
      title: '2. Scope of Work',
      content: (
        <p>Services are limited to the agreed scope. Heavy lifting, mold or biohazard work, deep restoration, pest cleanup, and unlisted tasks are not included unless quoted. Any requested changes will be discussed before work continues.</p>
      ),
    },
    {
      icon: '💰',
      title: '3. Deposit, Payment & Refunds',
      content: (
        <>
          <ul>
            <li>A 50% deposit is required to secure your appointment.</li>
            <li>No deposit means the appointment is not reserved.</li>
            <li>The remaining balance is due immediately after service.</li>
            <li>Accepted payment methods: cash, Cash App, Zelle, and Tap to Pay.</li>
          </ul>
          <p><strong>Refund processing:</strong> If a refund is issued, it may take 5–10 business days to appear in your account. Timing is determined by your bank or payment processor and is outside Southern Shine Clean Co. TX’s control.</p>
        </>
      ),
    },
    {
      icon: '⏰',
      title: '4. Scheduling & Access',
      content: (
        <p>Arrival windows apply. If access is not provided within 15 minutes, the appointment may be treated as a cancellation. Additional fees may apply for long carries or parking difficulties.</p>
      ),
    },
    {
      icon: '📅',
      title: '5. Cancellation Policy',
      content: (
        <ul>
          <li><strong>72 hours or more:</strong> the deposit may be refunded or transferred.</li>
          <li><strong>Less than 72 hours:</strong> 50% of the deposit is retained.</li>
          <li><strong>Same-day cancellation or no-show:</strong> the full deposit is forfeited.</li>
        </ul>
      ),
    },
    {
      icon: '🐾',
      title: '6. Home Conditions',
      content: (
        <p>All conditions must be disclosed, including pets, clutter, pests, hazards, and heavy buildup. Undisclosed conditions may affect pricing, service time, or our ability to complete the agreed work.</p>
      ),
    },
    {
      icon: '📷',
      title: '7. Photos',
      content: (
        <p>Before-and-after photos may be taken for quality control. Photos will only be used for marketing with your permission.</p>
      ),
    },
    {
      icon: '✓',
      title: '8. Satisfaction Policy',
      content: (
        <p>Please report any missed areas within 24 hours of service. After that period, the service is considered complete.</p>
      ),
    },
    {
      icon: '🚗',
      title: '9. Additional Fees',
      content: (
        <p>Additional fees may apply for travel, long carries, parking difficulties, or severe undisclosed conditions. Any added fees will be communicated before work continues.</p>
      ),
    },
  ];

  return (
    <main className="book-page">


      {/* ── BEFORE YOU BOOK ── */}
      <section className="booking-intro" aria-labelledby="before-booking-title">
        <div className="booking-intro-inner">
          <span className="section-tag">A Smooth Start</span>
          <h1 id="before-booking-title">Before You Book</h1>
          <p className="booking-intro-copy">A few details help us prepare an accurate quote and give your home the <span className="keep-together">attention it deserves.</span></p>
          <div className="booking-checklist">
            <div><span>✓</span> Photos or a walkthrough video</div>
            <div><span>✓</span> Service address and approximate square footage</div>
            <div><span>✓</span> Pets, special requests, and home conditions</div>
            <div><span>✓</span> A 50% deposit to reserve your appointment</div>
          </div>
          <a className="policy-jump-link" href="#booking-policies">Review our complete booking policies ↓</a>
        </div>
      </section>


      {/* ── CAL.COM CALENDAR ── */}
      <section className="book-cal-section">
        <div className="book-cal-inner">
          <span className="section-tag">Schedule Online</span>
          <h2>Pick a Date & Time</h2>
          <div className="divider" />
          <iframe
            src="https://cal.com/sscleanco.tx"
            width="100%"
            height="800"
            frameBorder="0"
            title="Southern Shine Clean Co. appointment calendar"
          />
          <p className="booking-agreement">By requesting an appointment, you acknowledge the Booking &amp; Service Policies below. An appointment is not secured until the required deposit is received.</p>
        </div>
      </section>

      {/* ── BOOKING POLICIES ── */}
      <section className="booking-policies-section" id="booking-policies" aria-labelledby="booking-policies-title">
        <div className="booking-policies-inner">
          <span className="section-tag">Please Review</span>
          <h2 id="booking-policies-title">Booking &amp; Service Policies</h2>
          <p className="booking-policies-lead">Clear expectations help us provide dependable, high-standard service. Select each policy to read the details.</p>
          <div className="divider" />
          <div className="policy-list">
            {policies.map((policy) => (
              <details className="policy-item" key={policy.title}>
                <summary>
                  <span className="policy-icon" aria-hidden="true">{policy.icon}</span>
                  <span>{policy.title}</span>
                  <span className="policy-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="policy-content">{policy.content}</div>
              </details>
            ))}
          </div>
          <p className="policy-thanks">Thank you for choosing Southern Shine Clean Co. TX — high-standard cleaning, Texas strong.</p>
        </div>
      </section>

      {/* ── CONTACT REACH OUT ── */}
      <section className="book-steps-section">
        <div className="book-steps-inner">
          <span className="section-tag">Not Finding What You're Looking For?</span>
          <h2>We Offer Custom Jobs & Personalized Pricing</h2>
          <p className="book-steps-sub">Call, email, or text us today to get started on your unique project.</p>
          <div className="divider" />
          <div className="book-steps">
            <div className="book-step">
              <div className="book-step-num">📞</div>
              <h4>Call Us</h4>
              <p><a href="tel:9034565126" className="contact-link">(903) 456-5126</a></p>
              <p><a href="tel:9452387087" className="contact-link">(945) 238-7087</a></p>
            </div>
            <div className="book-step" style={{maxWidth:'400px'}}>
              <div className="book-step-num">✉️</div>
              <h4>Email Us</h4>
              <p style={{textAlign:'center'}}><a href="mailto:southernshinecleancotx@gmail.com" className="contact-link">southernshinecleancotx@gmail.com</a></p>
            </div>
            <div className="book-step">
              <div className="book-step-num">💬</div>
              <h4>Text Us</h4>
              <p><a href="sms:9034565126" className="contact-link">(903) 456-5126</a></p>
              <p><a href="sms:9452387087" className="contact-link">(945) 238-7087</a></p>
            </div>
          </div>
        </div>
      </section>


      {/* ── PHOTO GALLERY ── */}
      <section className="book-gallery-section">
        <div className="book-gallery-inner">
          <div className="gallery-header">
            <span className="section-tag">Our Work</span>
            <h2>See the Southern Shine Difference</h2>
            <div className="divider" />
          </div>
          <div className="gallery-grid">
            <img src={services1} alt="Cleaned room" className="gallery-img" />
            <img src={services2} alt="Cleaned room" className="gallery-img" />
            <img src={services3} alt="Cleaned room" className="gallery-img" />
          </div>
        </div>
      </section>

      {/* ── CLOSING NOTE ── */}
      <section className="book-closing">
        <div className="aside-floral">✿</div>
        <h3>We can't wait to make your home shine!</h3>
        <p>Southern Shine Clean Co TX — rooted in Poetry, TX and proud to serve our neighbors.</p>
      </section>

    </main>
  );
}
