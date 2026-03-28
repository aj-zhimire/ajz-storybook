import { CONTACT_EMAILS, CONTACT_MAILTO } from "../constants/contact";

function About() {
  return (
    <section className="about-page">
      <h1>About Me</h1>
      <section className="card about-card">
        <p>
          I began my PhD in Finance as a hobby. It soon grew into a passion for
          knowledge and self-learning. It has helped me understand the power of
          experiments to uncover economical chanllenges, the catalysts behind it
          and solutions.
        </p>

        <p>
          I work as a data architect professionally and research the
          intersection of technology, investments and asset pricing. My first
          research is to aid with policy proposals on Investements as it relates
          to underserved and marginalized community.
        </p>
        <p>
          I will share essays, blogs discussion threads and reflections drawn
          from both lived and learned experiences.
        </p>
        <p>I hope to see you around!</p>
        <p style={{ marginTop: 30 }}>
          <strong>stay in touch:</strong>{" "}
          <a href={CONTACT_MAILTO.main}>
            {Array.isArray(CONTACT_EMAILS.main)
              ? CONTACT_EMAILS.main.join(", ")
              : CONTACT_EMAILS.main}
          </a>
        </p>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <img
            src="/assets/profile.jpeg"
            alt="Ajay Zhimire"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: "3px solid var(--border)",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </section>
  );
}

export default About;
