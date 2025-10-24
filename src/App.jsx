import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const moveCursor = (e) => {
      if(cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor"></div>

      {/* Main App content */}
      <div className="App">
        <Navbar />
        <Hero />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
