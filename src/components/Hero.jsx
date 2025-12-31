import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const wordCloudRef = useRef(null);

  useEffect(() => {
    // Word cloud animation logic
    const words = "By Doin' -a Sawon's Chemistry Corner.".split(' ');
    const cloudEl = wordCloudRef.current;
    
    if (cloudEl) {
      cloudEl.innerHTML = '';
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.animationDelay = `${i * 0.1}s`;
        cloudEl.appendChild(span);
      });
    }
  }, []);

  return (
    <section className="hero">
      <div className="card hero-card">
        <span className="kicker">Welcome</span>
        <h2>Learn, share and grow!</h2>
        <p>
          Experiments in learning: transforming math lessons with stories rather than numbers, 
          exploring new topics that can be practiced and shared.
        </p>

        <div className="word-cloud-wrap" aria-hidden="false">
          <div ref={wordCloudRef} className="word-cloud" aria-hidden="true"></div>
          <div className="word-cloud-fallback visually-hidden">
            By Doin' -a Sawon's Chemistry Corner.
          </div>
        </div>
      </div>
    </section>
  );
}