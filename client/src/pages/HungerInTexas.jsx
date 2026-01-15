import './HungerInTexas.css';

function HungerInTexas() {
  return (
    <section className="hunger-in-texas">
      <h2>Hunger in North Texas</h2>
      <div className="event-card">
        <div className="event-details">
          <h3>Facts • Policy • Community Action</h3>
          <p className="subtitle">A Public Panel Discussion on Food Insecurity</p>
          <div className="event-info">
            <p><strong>Hosted by:</strong> Ajay Ghimire, Unique Toastmasters Club, Frisco TX</p>
            <p>
              <strong>Featuring:</strong>{" "}
              <a href="https://ntfb.org" target="_blank" rel="noopener noreferrer">
                North Texas Food Bank
              </a>
            </p>
            <h4>Panel Topics</h4>
            <div className="topics-rsvp-row">
              <ul>
                <li>Hunger in Texas statistics and impact</li>
                <li>NTFB mission &amp; community impact</li>
                <li>SNAP Changes and policy updates</li>
                <li>Community action opportunities</li>
              </ul>
              <div className="rsvp-inline">
                <div className="qr-container">
                  <img
                    src="/assets/rsvp-qr-code.png"
                    alt="RSVP QR Code"
                    className="qr-code-small"
                  />
                </div>
                <p className="rsvp-email-link">
                  <a href="mailto:UniqueTMFrisco@gmail.com,contact@ajayzhimire.app?subject=RSVP%20-%20Hunger%20in%20North%20Texas%20Event">
                    📧 Email RSVP
                  </a>
                </p>
              </div>
            </div>
            <div className="event-datetime">
              <p><strong>📅 Date:</strong> Friday, January 30, 2026</p>
              <p><strong>🕐 Time:</strong> 7:00 AM - 7:45 AM</p>
              <p><strong>📍 Location:</strong> Rosa&apos;s Café, 12275 Custer Rd, Frisco, TX</p>
            </div>
            <p className="event-note">Live Audience Q&amp;A • Live Streaming Available</p>
            <div className="partners">
              <p>
                <em>
                  In partnership with Toastmasters International and North Texas Food Bank
                </em>
              </p>
              <p className="tagline">
                Awareness leads to action. Action leads to impact.
              </p>
            </div>
            <div className="officials-invited">
              <h4>Officials Invited</h4>
              <p>
                Invitations have been extended to federal, state, and City of Frisco officials. Attendance is voluntary, and confirmations are pending.
              </p>
            </div>
            <div className="links">
              <a href="https://unique.toastmastersclubs.org" target="_blank" rel="noopener noreferrer">
                unique.toastmastersclubs.org
              </a>{" "}
              |{" "}
              <a href="https://ntfb.org" target="_blank" rel="noopener noreferrer">
                ntfb.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HungerInTexas;
