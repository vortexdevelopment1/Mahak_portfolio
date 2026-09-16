import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MoreProjects from './components/MoreProjects';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="page-wrapper">
      <div className="portfolio-card">
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <Skills />
      </div>
      <Experience />
      <div className="portfolio-card">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-projects" element={<MoreProjects />} />
      </Routes>
    </BrowserRouter>
  );
}
