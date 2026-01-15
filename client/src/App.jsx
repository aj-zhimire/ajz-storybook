import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import HungerInTexas from './pages/HungerInTexas';
import HamroFoolbari from './pages/HamroFoolbari';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home here */}
          <Route path="/about" element={<About />} />
          <Route path="/hunger-in-texas" element={<HungerInTexas />} />
          <Route path="/hamro-foolbari" element={<HamroFoolbari />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
