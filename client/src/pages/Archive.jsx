import { Link } from 'react-router-dom';
import './IntuitTutor.css';

function Archive() {
  const items = [
    {
      title: 'Intuit Math and Science Tutor',
      path: '/intuit-tutor',
      excerpt: 'Private tutoring in math and physics for high school and college students.'
    },
    {
      title: 'Hunger in North Texas',
      path: '/hunger-in-texas',
      excerpt: 'A public panel discussion and community resources around food insecurity.'
    },
    {
      title: 'Hamro Foolbari Academy',
      path: '/hamro-foolbari',
      excerpt: 'A nonprofit community school project and proof-of-concept in Ramechhap, Nepal.'
    }
  ];

  return (
    <section className="archive-page">
      <h1>Archive</h1>
      <p className="subtitle">Older pages moved to the archive for site clarity.</p>
      <div className="archive-list">
        {items.map((it) => (
          <article key={it.path} className="tutor-card">
            <h2>{it.title}</h2>
            <p>{it.excerpt}</p>
            <p>
              <Link to={it.path}>View page</Link>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Archive;
