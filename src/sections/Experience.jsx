import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="work" className="py-32 bg-primary-black text-white">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        
        {/* Section Label */}
        <div className="mb-20 border-b border-gray-800 pb-4">
          <span className="text-primary-lime font-mono text-sm uppercase tracking-widest">// Experience</span>
        </div>

        {/* List Item 01 */}
        <div className="group border-b border-gray-800 py-8 flex flex-col lg:flex-row gap-12 lg:items-start transition-colors hover:border-primary-lime/50">
          
          {/* Number - Massive Outline */}
          <div className="lg:w-1/4">
            <span className="text-[12rem] leading-[0.8] font-outfit font-bold text-transparent stroke-text group-hover:text-primary-lime/5 transition-colors duration-500 select-none">
              01
            </span>
          </div>

          {/* Role & Company */}
          <div className="lg:w-1/3 pt-2">
            <h3 className="text-5xl font-outfit font-bold mb-4 text-white group-hover:text-primary-lime transition-colors">
              Xploar.ai
            </h3>
            <p className="text-2xl text-gray-400 font-light mb-2">Software Engineer</p>
            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">2025 — Present</p>
          </div>

          {/* Description / List */}
          <div className="lg:w-1/3 pt-6">
            <ul className="space-y-2 text-gray-400 font-light leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-lime flex-shrink-0"></span>
                <span>Designed and developed complete backend system using Java</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-lime flex-shrink-0"></span>
                <span>Integrated Java backend with React frontend using REST APIs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-lime flex-shrink-0"></span>
                <span>Built scalable architecture handling thousands of concurrent AI requests with 99.9% uptime</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
      
      {/* Stroke Text Utility */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #333;
        }
        .group:hover .stroke-text {
          -webkit-text-stroke: 2px #84CC16;
        }
      `}</style>
    </section>
  );
};

export default Experience;
