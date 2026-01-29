// filepath: /Users/pushpaghimire/ajz-storybook/client/src/components/EvolutionOfMathCard.jsx
import React, { useState } from 'react';
import Card from './Card';

export default function EvolutionOfMath() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <h2>Evolution of Math</h2>

      <div className="meta">
        Sep 20, 2025 · 3 min read · <span className="badge">Math</span>
      </div>
      <blockquote>
        Mathematics began as a survival tool for counting and measuring. Over time, it evolved into structured systems that stabilized societies and eventually into an abstract science seeking universal truth.
      </blockquote>

      {expanded && (
        <div className="card-expand">
          <ul>
            <li>
              Tallies → counting for trade and time. —
              <a href="https://www.britannica.com/topic/history-of-mathematics" target="_blank" rel="noopener noreferrer">Britannica</a>
            </li>
            <li>
              Mesopotamia: symbols & base‑60 time/angles. —
              <a href="https://www.britannica.com/science/sexagesimal-system" target="_blank" rel="noopener noreferrer">Britannica</a>
            </li>
            <li>
              Egypt: practical geometry for land & measurement. —
              <a href="https://www.britannica.com/topic/geometry/History-of-geometry" target="_blank" rel="noopener noreferrer">Britannica</a>
            </li>
            <li>
              Greeks: shift to abstraction, logic, and proof. —
              <a href="https://plato.stanford.edu/entries/greek-mathematics/" target="_blank" rel="noopener noreferrer">Stanford</a>
            </li>
          </ul>
        </div>
      )}

      <div className="card-meta">
        <small>
          <button
            type="button"
            className="card-meta-link"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        </small>
      </div>
    </Card>
  );
}
