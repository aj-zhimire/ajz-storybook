import Header from './components/Header'
import Hero from './components/Hero'
import YoungScientists from './components/YoungScientists'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <YoungScientists />
        {/* TODO: Add TodayReflection component */}
      </main>
      <Footer />
    </>
  )
}

export default App
