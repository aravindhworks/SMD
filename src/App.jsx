import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import PaintingBooths from './pages//products/PaintingBooths';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/painting-booths" element={<PaintingBooths />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;