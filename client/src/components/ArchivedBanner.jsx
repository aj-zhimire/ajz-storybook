function ArchivedBanner({ date }) {
  return (
    <div className="archived-banner">
      <div className="container">
        <p>
          <strong>Archived:</strong> This page was archived{date ? ` — ${date}` : '.'} It is kept for reference.
        </p>
      </div>
    </div>
  );
}

export default ArchivedBanner;
