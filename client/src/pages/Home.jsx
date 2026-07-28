import TodayReflection from '../components/TodayReflection';
import YoungScientists from '../components/YoungScientists';
import EvolutionOfMath from '../components/EvolutionOfMath';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* <section className="thought-of-day">
        <div className="thought-content announcement-card">
          <span className="thought-label">📢 Archived Event</span>
          <blockquote>
            The "Hunger in North Texas" panel was held earlier this year and
            has been moved to the Archive.
          </blockquote>
          <div className="thought-meta">
            <small>
              <Link to="/archive">See archived events</Link>
            </small>
          </div>
        </div>
      </section> */}
      <TodayReflection />
      <EvolutionOfMath />
      <YoungScientists />
    </>
  );
}

export default Home;
