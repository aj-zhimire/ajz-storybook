import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        {/* TODO: Add TodayReflection and YoungScientists components */}
      </main>
      <Footer />
    </>
  )
}

export default App
