import './IntuitTutor.css';

function IntuitTutor() {
  return (
    <section className="tutor-page">
      <div className="tutor-hero">
        <img
          className="tutor-logo"
          src="/assets/Intuit/think-intuit.png"
          alt="Intuit Math and Science Tutor"
        />
        <div>
          <p className="tutor-kicker">Private Tutoring</p>
          <h1>Intuit Math and Science Tutor</h1>
          <p className="tutor-subtitle">
            Math and physics tutoring for high school and college students
          </p>
          <p className="tutor-intro">
            Intuitive and analytical tutoring in math and science, grounded in
            theory, experiments, data, and real-world applications.
          </p>
          <a className="tutor-cta" href="mailto:ajay@ajayzhimire.app">
            Contact by email
          </a>
        </div>
      </div>

      <div className="tutor-grid">
        <article className="tutor-card">
          <h2>Teaching Style</h2>
          <p>
            I teach with both intuition and analysis. Concepts are introduced
            through patterns, experiments, and data, then developed with a
            careful analytical process so students understand both why an idea
            works and how to apply it confidently.
          </p>
        </article>

        <article className="tutor-card">
          <h2>Subjects and Levels</h2>
          <p>
            I teach algebra, calculus, and physics for high school and college
            students.
          </p>
        </article>

        <article className="tutor-card">
          <h2>Focused Support</h2>
          <p>
            Sessions can be tailored for SAT preparation, high school
            credit-by-exam preparation, or specific projects and assignments
            that need careful, goal-oriented support.
          </p>
        </article>

        <article className="tutor-card">
          <h2>Background</h2>
          <p>
            My background is in research in a quantitative field. That shapes my
            tutoring style: clear reasoning, strong fundamentals, and attention
            to how theory connects to problem solving in practice.
          </p>
        </article>

        <article className="tutor-card">
          <h2>Venue</h2>
          <p>
            Sessions are held at a library, offering a quiet and focused space
            for learning.
          </p>
        </article>

        <article className="tutor-card">
          <h2>Availability</h2>
          <p>
            Monday to Friday: 5pm to 8pm
            <br />
            Saturday: 8am to noon
          </p>
        </article>

        <article className="tutor-card tutor-contact-card">
          <h2>Get In Touch</h2>
          <div className="tutor-contact-layout">
            <div>
              <p>
                Email{' '}
                <a href="mailto:ajay@ajayzhimire.app">ajay@ajayzhimire.app</a>{' '}
                to discuss learning goals, subject needs, availability, and
                scheduling.
              </p>
              <p className="tutor-contact-note">
                You can also scan the QR code to start an email directly.
              </p>
            </div>
            <img
              className="tutor-qr"
              src="/assets/Intuit/contact-email-qr.png"
              alt="QR code to email ajay@ajayzhimire.app"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

export default IntuitTutor;
