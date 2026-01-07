export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="brand">
            <div className="logo"></div>
            <div>
              <div className="title">AJZ Storybook</div>
              <div className="tagline">essays, science experiments, notes, music</div>
            </div>
          </div>
          <div className="menu">
            <a href="/index.html">Home</a>
            <a href="/pages/about.html">About</a>
            <a href="/pages/hunger-in-texas.html">Hunger in Texas</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
