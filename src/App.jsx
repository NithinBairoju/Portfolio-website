import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Philosophy from './sections/Philosophy';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Now from './sections/Now';
import Contact from './sections/Contact';
import Cursor from './components/Cursor';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-primary-black text-white min-h-screen selection:bg-primary-lime selection:text-black">
      <Cursor />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-900 z-50">
        <div 
          className="h-full bg-primary-lime transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Story />
        <Philosophy />
        <Experience />
        <Projects />
        <Skills />
        <Now />
        <Contact />
      </main>
    </div>
  );
}

export default App;
