export default function TodayReflection() {
  return (
    <section className="thought-of-day">
      <div className="thought-content">
        <span className="thought-label">Today's Reflection</span>
        <blockquote>
          "The important thing is not to stop questioning. Curiosity has its own reason for existing." by Albert Einstein
        </blockquote>
        <div className="thought-meta">
          <small>
            Oct 4, 2025 •{' '}
            <a href="https://youtu.be/cRmbwczTC6E" target="_blank" rel="noopener">
              🎥 Watch: The Power of Curiosity
            </a>
          </small>
        </div>
      </div>
      {/* Wide sunset photo under Today's Reflection */}
      <img src="assets/placeholder.jpg" alt="Beautiful sunset landscape" className="wide-sunset" />
    </section>
  )
}
