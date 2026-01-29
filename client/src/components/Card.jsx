import React from 'react';
import './Card.css';

const Card = ({ children }) => (
  <section className="card-section">
    <div className="card-content">
      {children}
    </div>
  </section>
);

export default Card;