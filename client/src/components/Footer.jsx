import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} AJZ Storybook — all content &copy; their respective authors.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
