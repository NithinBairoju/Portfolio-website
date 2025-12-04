import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Linkedin, Github, Mail } from 'lucide-react';
import heroImage from '../assets/contact.png';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "nithinbairoju123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-primary-black text-white h-screen flex flex-col lg:flex-row relative overflow-hidden">
      
      {/* Left Column: Image */}
      <div className="w-full lg:w-[40%] h-[60vh] lg:h-full relative overflow-hidden grayscale contrast-125">
        <img 
            src={heroImage} 
            alt="Nithin Bairoju"
            className="w-full h-full object-contain lg:object-cover object-center lg:object-top"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full lg:w-[60%] bg-primary-black p-8 lg:p-16 flex flex-col justify-between flex-1 lg:h-full relative">
        
        {/* Top Right: Contact Details */}
        <div className="flex flex-col items-end gap-2 text-right">
            <div className="relative group">
                <a 
                    href={`mailto:${email}`} 
                    className="font-outfit text-lg md:text-xl hover:text-primary-lime transition-all duration-200 inline-block group-hover:-translate-x-8"
                >
                    {email}
                </a>
                <button
                    onClick={handleCopy}
                    className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 hover:bg-primary-lime/10 rounded"
                    title="Copy email"
                >
                    {copied ? (
                        <Check size={18} className="text-primary-lime" />
                    ) : (
                        <Copy size={18} className="text-gray-400 hover:text-primary-lime" />
                    )}
                </button>
            </div>
            <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/in/nithin-bairoju" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
                    LINKEDIN
                </a>
                <a href="https://github.com/NithinBairoju" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
                    GITHUB
                </a>
            </div>
        </div>

        {/* Middle: Drop a Message */}
        <div className="py-12 lg:py-0">
            <a href="https://linkedin.com/in/nithin-bairoju" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-mono text-lg text-white hover:text-primary-lime transition-colors">
                DROP A MESSAGE <span className="text-primary-lime group-hover:translate-x-1 transition-transform">+</span>
            </a>
        </div>

        {/* Bottom Right: Massive Title */}
        <div className="text-right">
            <h2 className="text-[15vw] lg:text-[10vw] leading-[0.8] font-outfit font-bold text-white tracking-tighter uppercase select-none">
                LET'S<br/>TALK
            </h2>
        </div>

      </div>

    </section>
  );
};

export default Contact;
