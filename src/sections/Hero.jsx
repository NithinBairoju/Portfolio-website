import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown, Linkedin, Github, FileText } from 'lucide-react';
import heroImage from '../assets/hero_image.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Scroll Animation for Text
  const { scrollY } = useScroll();
  const textX = useTransform(scrollY, [0, 1000], ["0%", "-50%"]);

  // Mouse Parallax for Image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const imageX = useSpring(mouseX, springConfig);
  const imageY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position relative to center (range -1 to 1)
      const xPct = (clientX / innerWidth - 0.5) * 2;
      const yPct = (clientY / innerHeight - 0.5) * 2;
      
      // Move image slightly opposite to mouse (parallax)
      mouseX.set(xPct * 20); // Move up to 20px horizontally
      mouseY.set(yPct * 20); // Move up to 20px vertically
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen flex flex-col px-6 lg:px-12 py-8 overflow-hidden bg-primary-black text-white">
      
      {/* Top Nav */}
      <nav className="flex justify-between items-center z-50 relative">
        <span className="font-mono text-sm tracking-widest uppercase text-gray-400">© 2025</span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-mono text-sm tracking-widest uppercase">
          <a href="#projects" className="hover:text-primary-lime transition-colors">Projects</a>
          <a href="#story" className="hover:text-primary-lime transition-colors">About</a>
          <a href="#contact" className="hover:text-primary-lime transition-colors">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-50"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
            }`}
          ></span>
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-0 bg-blue-600 z-40 md:hidden flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-8 text-center">
          <a 
            href="#projects" 
            onClick={() => setIsMenuOpen(false)}
            className="text-white font-mono text-2xl tracking-widest uppercase hover:text-primary-lime transition-colors"
          >
            Projects
          </a>
          <a 
            href="#story" 
            onClick={() => setIsMenuOpen(false)}
            className="text-white font-mono text-2xl tracking-widest uppercase hover:text-primary-lime transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="text-white font-mono text-2xl tracking-widest uppercase hover:text-primary-lime transition-colors"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Main Content - Layered Layout */}
      <div className="flex-1 relative flex items-center justify-center mt-10 md:mt-0 overflow-hidden">
        
        {/* Layer 1: Scroll-based Text (Background) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-0 pointer-events-none select-none overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            style={{ x: textX }}
          >
            {[...Array(4)].map((_, i) => (
              <h1 key={i} className="text-[15vw] md:text-[18vw] leading-none font-outfit font-bold text-white/10 tracking-tighter mr-12">
                SOFTWARE—ENGINEER
              </h1>
            ))}
          </motion.div>
        </div>

        {/* Layer 2: Image (Centered & Grayscale) with Mouse Parallax */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ x: imageX, y: imageY }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 w-[80vw] md:w-[60vw] lg:w-[45vw] h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden grayscale contrast-125"
        >
           <img 
             src={heroImage} 
             alt="Nithin Bairoju"
             className="w-full h-full object-contain object-bottom"
           />
           {/* Gradient Overlay for blending */}
           <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-transparent to-transparent opacity-40"></div>
        </motion.div>

        {/* Floating Role Text */}
        <div className="absolute bottom-[15%] right-[10%] z-30 text-right hidden md:block">
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white leading-tight">
            // NITHIN <br/>BAIROJU
          </h2>
        </div>

        {/* Socials / Left Bottom */}
        <div className="absolute bottom-8 left-6 z-50 flex flex-col gap-4">
          <a href="https://linkedin.com/in/nithin-bairoju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
            <Linkedin size={16} /> Linkedin
          </a>
          <a href="https://github.com/NithinBairoju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
            <Github size={16} /> Github
          </a>
          <a href="/NithinBairoju.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
            <FileText size={16} /> Resume
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;
