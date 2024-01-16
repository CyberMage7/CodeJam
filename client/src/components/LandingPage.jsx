import React from 'react'
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Work from './Work';
import "./LandingPage.css";
export default function LandingPage() {
  return (
    
      <div className="App" id="app">
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>

  )
}
