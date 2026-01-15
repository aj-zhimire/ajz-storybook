import { Link, useLocation } from 'react-router-dom';
function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <div className="logo" />
          <div>
            <div className="title">AJZ Storybook</div>
            <div className="tagline">essays, science experiments, notes, music</div>
          </div>
        </div>
        <nav className="menu">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          <Link to="/hunger-in-texas" className={location.pathname === '/hunger-in-texas' ? 'active' : ''}>Hunger in Texas</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
