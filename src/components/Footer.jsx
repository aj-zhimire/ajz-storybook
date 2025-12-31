import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; <span>{currentYear}</span> AJZ Storybook — all content &copy; their respective authors.</p>
        <p className="muted">Built with React, Vite, and modern web technologies.</p>
      </div>
    </footer>
  );
}