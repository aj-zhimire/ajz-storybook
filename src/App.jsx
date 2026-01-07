import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HungerAnnouncement from './components/HungerAnnouncement'
import TodayReflection from './components/TodayReflection'
import YoungScientists from './components/YoungScientists'
import FollowCard from './components/FollowCard'
import './styles.css'

function App() {
  return (
    <>
      <Header />
      
      <main className="container">
        <Hero />
        
        <HungerAnnouncement />
        
        <TodayReflection />
        
        <YoungScientists />
        
        <FollowCard />
      </main>
      
      <Footer />
    </>
  )
}

export default App
