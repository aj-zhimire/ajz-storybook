import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <header className="header">
      <div className="container nav">
        <div className="brand">
          <div className="logo"></div>
          <div>
            <div className="title">AJZ Storybook</div>
            <div className="tagline">essays, science experiments, notes, music</div>
          </div>
        </div>
        <nav className="menu">
          <a className="active" href="/">Home</a>
          <a href="/about">About</a>
          <section id="follow-card" className="follow-section">
            <button 
              id="followBtn" 
              className="follow-btn" 
              onClick={toggleFollow}
              title="Follow for updates" 
              aria-label="Follow for updates"
            >
              <span id="followIcon" className="btn-icon">⭐</span>
            </button>
          </section>
        </nav>
      </div>
    </header>
  );
}