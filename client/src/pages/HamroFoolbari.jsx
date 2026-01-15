import './HamroFoolbari.css';

function HamroFoolbari() {
  return (
    <section className="hamro-foolbari">
      <h1>Hamro Foolbari Academy</h1>
      <p className="subtitle">Education is a right! • Ramechhap, Nepal</p>

      <section className="card">
        <h2>Summary</h2>
        <img
          src="/assets/ramechhape.jpeg"
          alt="Ramechhap backdrop for the concept school"
          className="hamro-hero"
        />
        <p>
          Hamro Foolbari is a nonprofit school system focused on education through doing,
          civic awareness, and community ownership. It begins with a proof-of-concept school
          in Ramechhap, designed for disciplined, transparent replication across underserved regions.
        </p>
      </section>

      <section className="card">
        <h2>Mission &amp; Vision</h2>
        <p>
          <strong>Mission:</strong> Establish a community-anchored, nonprofit school and
          learning hub in Ramechhap that delivers education through doing, integrates civic
          literacy, and serves as a scalable model for underserved regions.
        </p>
        <p>
          <strong>Vision:</strong> Children who can think, build, question, and participate
          meaningfully in their communities.
        </p>
      </section>

      <section className="card">
        <h2>Core Principles</h2>
        <ul>
          <li>Education by doing</li>
          <li>Civic awareness as a parallel track</li>
          <li>Local teachers and governance</li>
          <li>Transparency by default</li>
          <li>No political or religious affiliation</li>
        </ul>
      </section>

      <section className="card">
        <h2>Current Status</h2>
        <p>
          Phase 0 — Foundation &amp; local engagement, focused on governance, community legitimacy,
          and disciplined planning.
        </p>
      </section>

      <section className="card">
        <h2>Current Actions</h2>
        <ul>
          <li>Build local governance and decision-making structure</li>
          <li>Develop community partnerships and legitimacy</li>
          <li>Finalize the Phase 0 execution plan and documentation</li>
          <li>Prepare for proof-of-concept launch in Ramechhap</li>
        </ul>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <p>Questions or volunteering?</p>
        <a className="contact-button" href="mailto:EducationIsOurRight@ajayzhimire.app">
          Email: EducationIsOurRight@ajayzhimire.app
        </a>
      </section>
    </section>
  );
}

export default HamroFoolbari;
