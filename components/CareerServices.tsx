
import React from 'react';
import { CAREER_SERVICES } from '../constants';

const CareerServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-2">Career Acceleration</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#001f3f]">Our Professional Services</h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Beyond education, we provide the essential pillars to launch your professional career successfully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CAREER_SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold group text-center"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-[#001f3f] mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerServices;
