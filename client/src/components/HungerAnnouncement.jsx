function HungerAnnouncement() {
  return (
    <section className="thought-of-day">
      <div className="thought-content announcement-card">
        <span className="thought-label">📢 Upcoming Event</span>
        <blockquote>
          "Join us for a crucial conversation on Hunger in North Texas - A Public Panel Discussion on Food Insecurity with{" "}
          <a href="https://ntfb.org" target="_blank" rel="noopener noreferrer">
            North Texas Food Bank
          </a>
          "
        </blockquote>
        <div className="thought-meta">
          <small>
            Friday, January 30, 2026 • 7:00 AM - 7:45 AM •{" "}
            <a href="/hunger-in-texas">📋 Learn More &amp; RSVP</a> •{" "}
            <a href="/hunger-panel-event.ics" download>📅 Add to Calendar</a>
          </small>
        </div>
      </div>
    </section>
  );
}

export default HungerAnnouncement;