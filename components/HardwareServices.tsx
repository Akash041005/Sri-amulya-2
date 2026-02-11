
import React from 'react';
import { ADDITIONAL_SERVICES } from '../constants';

const HardwareServices: React.FC = () => {
  return (
    <section id="infrastructure" className="py-24 bg-[#001f3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-2">Multi-Vertical Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Infrastructure & Future Tech</h3>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Our expertise extends beyond education into robust physical infrastructure, security solutions, and sustainable energy technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADDITIONAL_SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-gold group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareServices;
