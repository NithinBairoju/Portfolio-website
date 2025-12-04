import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: '01',
      category: 'CORE & LANGUAGES',
      items: ['Java 21', 'Python', 'JavaScript (ES6+)', 'SQL', 'HTML5/CSS3']
    },
    {
      id: '02',
      category: 'FRAMEWORKS',
      items: ['Spring Boot', 'React.js', 'Node.js', 'Express', 'Hibernate']
    },
    {
      id: '03',
      category: 'INFRASTRUCTURE',
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines', 'Linux']
    },
    {
      id: '04',
      category: 'DATA & CACHING',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch']
    },
    {
      id: '05',
      category: 'ARCHITECTURE',
      items: ['Microservices', 'System Design', 'REST APIs', 'Event-Driven', 'Clean Architecture']
    }
  ];

  return (
    <section id="skills" className="py-4 bg-primary-black text-white relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1800px] w-full mx-auto px-6 lg:px-12 h-full flex flex-col">
        
        {/* Section Header */}
        <div className="flex-none pt-12 pb-8 border-b border-gray-800">
          <div className="flex justify-between items-end">
            <h2 className="text-5xl md:text-[7vw] leading-[0.8] font-outfit font-bold text-white tracking-tighter">
              MY <span className="text-primary-lime">CAPABILITIES</span>
            </h2>
            <div className="hidden md:block text-right">
              <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
                // Technical Arsenal<br />& Expertise
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="flex-grow flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border border-gray-800 p-8 hover:bg-gray-900/40 transition-all duration-500 flex flex-col justify-between h-full min-h-[200px]"
              >
                <div className="mb-6">
                  <span className="text-4xl font-outfit font-bold text-transparent stroke-text group-hover:text-primary-lime/20 transition-colors duration-500 select-none opacity-30 block mb-2">
                    {category.id}
                  </span>
                  <h3 className="text-2xl font-outfit font-bold text-white group-hover:text-primary-lime transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, i) => (
                    <span 
                      key={i}
                      className="text-sm font-mono text-gray-400 border border-gray-800 px-3 py-1 rounded-full group-hover:border-primary-lime/30 group-hover:text-white transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
