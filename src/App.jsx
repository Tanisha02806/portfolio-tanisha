import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
