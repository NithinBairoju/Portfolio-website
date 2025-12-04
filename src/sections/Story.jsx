import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section id="story" className="py-40 bg-primary-black flex items-center justify-center min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <div className="mb-16">
          <span className="text-primary-lime font-mono text-sm uppercase tracking-widest">// Intro</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-white leading-[1.1] mb-16 tracking-tight">
            I'm a versatile <span className="text-primary-lime">Software Engineer</span> who partners with founders to <span className="text-primary-lime">build complete applications from idea to deployment</span>. I focus on clear interfaces, sharp decisions, and fast execution.
          </h2>

          <div className="flex flex-col items-center gap-12">
            {/* <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed text-balance">
              Bringing your vision to life quickly and efficiently—whether it's fintech, healthcare, or AI infrastructure—I've got it covered, delivering smooth and effective solutions from start to finish.
            </p> */}

            <a 
              href="#work" 
              className="px-10 py-4 border border-gray-700 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-sm uppercase tracking-widest"
            >
              See my Work
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Story;
