export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} AJZ Storybook — all content &copy; their respective authors.</p>
      </div>
    </footer>
  )
}
