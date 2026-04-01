import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';
import './Book.css';



export default function Book() {

  return (
    <main className="book-page">


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
          />
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
