import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import projectDashboard from '../assets/illustrations/project-dashboard.png';
import upscBlog from '../assets/illustrations/upsc-blog.png';
import backendArch from '../assets/illustrations/backend-arch.png';

const Projects = () => {
  const projects = [
    {
      id: '01',
      title: 'XPLOAR',
      subtitle: 'Live · 2025–Present',
      description: 'Backend serving AI workloads in production. Built to scale before it needed to.',
      tech: ['Spring Boot', 'Redis', 'Microservices'],
      link: 'https://app.xploar.ai',
      image: projectDashboard
    },
    {
      id: '02',
      title: 'UPSC',
      subtitle: 'Deployed',
      description: 'AI content engine. Taught me how to work with LLMs without losing my mind.',
      tech: ['Java 21', 'Gemini API', 'React'],
      link: 'https://github.com/NithinBairoju/AIBolgger',
      image: upscBlog
    },
    {
      id: '03',
      title: 'BANKING',
      subtitle: 'Shipped',
      description: 'Transaction system that handles money. Because nothing teaches security like real stakes.',
      tech: ['Spring Security', 'PostgreSQL', 'JWT'],
      link: 'https://github.com/NithinBairoju/tracw',
      image: backendArch
    }
  ];

  return (
    <section id="projects" className="py-32 bg-primary-black overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        
        {/* Section Header - Editorial Style */}
        <div className="flex justify-between items-end mb-20 border-b border-gray-800 pb-4">
          <h2 className="text-5xl md:text-[10vw] leading-[0.8] font-outfit font-bold text-white tracking-tighter">
            WHAT I'VE<br />
            <span className="text-primary-lime">BUILT</span>
          </h2>
          <div className="hidden md:block text-right mb-2">
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
              // Engineering<br />Showcase 2025
            </p>
          </div>
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[50vh] md:h-[70vh] w-full bg-gray-900 overflow-hidden border border-gray-800 hover:border-primary-lime transition-colors duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                
                {/* Top: ID & Tech */}
                <div className="flex justify-between items-start">
                  <span className="font-outfit font-bold text-4xl text-transparent stroke-text-white group-hover:text-primary-lime group-hover:stroke-text-none transition-all duration-300">
                    {project.id}
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border border-gray-800 px-2 py-1 bg-black/50 backdrop-blur-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Title & Desc */}
                <div>
                  <h3 className="text-6xl font-outfit font-bold text-white leading-[0.85] mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}<br />
                    <span className="text-gray-500 group-hover:text-white transition-colors duration-500">{project.subtitle}</span>
                  </h3>
                  
                  <div className="h-[1px] w-full bg-gray-700 mb-4 group-hover:bg-primary-lime transition-colors duration-500"></div>
                  
                  <div className="flex justify-between items-end">
                    <p className="text-gray-400 font-light text-sm max-w-[70%]">
                      {project.description}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-primary-lime group-hover:border-primary-lime group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative "Kosmos" Lines */}
              <div className="absolute top-0 left-8 w-[1px] h-full bg-gray-800/50 z-20 pointer-events-none"></div>
              <div className="absolute top-8 left-0 w-full h-[1px] bg-gray-800/50 z-20 pointer-events-none"></div>

            </a>
          ))}
        </div>

      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        .stroke-text-none {
          -webkit-text-stroke: 0;
        }
      `}</style>
    </section>
  );
};

export default Projects;
