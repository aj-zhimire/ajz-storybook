function About() {
  return (
    <section className="about-page">
      <h1>About Me</h1>
      <section className="card about-card">
        <p>
          I began my PhD as a hobby. It soon grew into a passion for knowledge and self-learning. For me, learning is a way to keep pace with social and technological change while exploring what it means to be human.
        </p>
        <p>
          I'm fascinated by the human mind, its choices, behaviors, short term and long term memory storage.
        </p>
        <p>
          I work as a data architect professionally and research the intersection of technology and human behavior. My first research is asset-pricing and behavioral finance, rational vs irrational decision making.
        </p>
        <p>
          I will share essays, blogs discussion threads and reflections drawn from both lived and learned experiences.
        </p>
        <p>
          I hope to see you around!
        </p>
        <p style={{ marginTop: 30 }}>
          <strong>stay in touch:</strong> <a href="mailto:ajay@ajayzhimire.app">ajay@ajayzhimire.app</a>
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
              objectFit: "cover"
            }}
          />
        </div>
      </section>
    </section>
  );
}

export default About;
