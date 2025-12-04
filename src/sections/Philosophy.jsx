import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const principles = [
    {
      id: '01',
      title: 'PROBLEM FIRST',
      subtitle: 'TECH SECOND',
      description: 'MongoDB vs PostgreSQL? Depends on the problem. I don\'t marry frameworks.',
    },
    {
      id: '02',
      title: 'DESIGN',
      subtitle: 'BEATS BUGS',
      description: 'Two days of design beats two weeks of bugs. Good architecture isn\'t optional. It\'s survival.',
    },
    {
      id: '03',
      title: 'SHIP, LEARN',
      subtitle: 'FIX IT',
      description: 'Perfect code ships never. Real feedback beats theory every time.',
    },
    {
      id: '04',
      title: 'CODE IS',
      subtitle: 'COMMUNICATION',
      description: 'If my teammate can\'t understand it, I failed. Docs aren\'t optional.',
    },
  ];

  return (
    <section id="philosophy" className="py-32 bg-primary-black text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-20 border-b border-gray-800 pb-4">
          <h2 className="text-5xl md:text-[9vw] leading-[0.8] font-outfit font-bold text-white tracking-tighter">
            WHAT I<br />
            <span className="text-primary-lime">BELIEVE</span>
          </h2>
          <div className="hidden md:block text-right mb-2">
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
              // Core Principles<br />& Values
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-800">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="group relative p-6 md:p-12 border-r border-b border-gray-800 hover:bg-gray-900/30 transition-colors duration-500"
            >
              <div className="flex flex-col h-full justify-between gap-12">
                
                {/* Top: ID & Title */}
                <div>
                  <span className="block font-outfit font-bold text-6xl text-transparent stroke-text mb-8 opacity-30 group-hover:opacity-100 group-hover:text-primary-lime group-hover:stroke-text-none transition-all duration-500">
                    {principle.id}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold leading-none mb-2 break-words">
                    {principle.title}
                  </h3>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold leading-none text-gray-600 group-hover:text-white transition-colors duration-500 break-words">
                    {principle.subtitle}
                  </h3>
                </div>

                {/* Bottom: Description */}
                <div className="relative">
                  <div className="w-12 h-[1px] bg-primary-lime mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <p className="text-gray-400 font-light text-sm md:text-base lg:text-lg leading-relaxed max-w-md group-hover:text-gray-300 transition-colors">
                    {principle.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
