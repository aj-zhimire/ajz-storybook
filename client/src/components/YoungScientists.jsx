import './YoungScientists.css';

function YoungScientists() {
  return (
    <section className="grid">
      <article className="card">
        <h2>Understanding Sound for Young Scientists</h2>
        <div className="meta">
          Sep 20, 2025 · 3 min read · <span className="badge">Science</span>
        </div>
        <p>
          Why can't we hear what dogs hear? Explore the amazing world of sound waves, frequency, and how different
          animals experience sound! Perfect for curious middle schoolers.
        </p>

        <div className="learning-resources">
          <div className="resource-links">
            <a
              href="https://www.youtube.com/watch?v=TsQL-sXZOLc"
              target="_blank"
              rel="noopener"
              className="resource-link video"
            >
              How Sound Works (3 min)
            </a>
            <a
              href="https://www.youtube.com/watch?v=_2By2ane2I4"
              target="_blank"
              rel="noopener"
              className="resource-link video"
            >
              Animal Hearing vs Human Hearing
            </a>
            <a
              href="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600"
              target="_blank"
              rel="noopener"
              className="resource-link image"
            >
              Frequency Chart
            </a>
          </div>

          <div className="fun-facts">
            <h4>Quick Facts:</h4>
            <ul>
              <li><strong>Dogs hear:</strong> 67Hz to 45,000Hz</li>
              <li><strong>Humans hear:</strong> 20Hz to 20,000Hz</li>
              <li><strong>Elephants hear:</strong> Really low sounds we can't!</li>
              <li><strong>Sound travels:</strong> about 343 meters per second</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

export default YoungScientists;