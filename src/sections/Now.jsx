import React from 'react';

const Now = () => {
  return (
    <section className="py-32 bg-primary-black text-white flex justify-center">
      <div className="max-w-2xl px-6 text-center">
        <span className="text-primary-lime font-mono text-sm uppercase tracking-widest mb-8 block">// Right Now</span>
        <h3 className="text-2xl md:text-3xl font-outfit font-light text-white leading-relaxed mb-8">
          Learning distributed systems. Exploring event-driven architecture. Making microservices less painful.
        </h3>
        <p className="text-lg text-gray-500 font-mono">
          Open to opportunities. Still figuring things out. But every project teaches me something new.
        </p>
      </div>
    </section>
  );
};

export default Now;
