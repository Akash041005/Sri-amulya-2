
import React from 'react';
import { SPECIAL_PROGRAMS } from '../constants';
import { ArrowRight } from 'lucide-react';

const SpecialPrograms: React.FC = () => {
  return (
    <section id="initiatives" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-gold font-bold tracking-widest uppercase mb-2">Our Impact</h2>
            <h3 className="text-4xl font-extrabold text-[#001f3f] mb-6">Beyond The Classroom</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in holistic growth and giving back to society. Our specialized programs are designed to empower the community and enhance individual employability.
            </p>
            <button className="flex items-center gap-2 text-[#001f3f] font-bold hover:text-gold transition-colors">
              Partner With Us <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {SPECIAL_PROGRAMS.map((program, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden group bg-[#001f3f] rounded-3xl p-10 text-white shadow-2xl transition-all hover:scale-[1.02]"
              >
                <div className={`absolute -right-10 -top-10 w-40 h-40 ${program.color} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 ${program.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl`}>
                    {program.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{program.title}</h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {program.desc}
                  </p>
                  <a href="#contact" className="inline-block text-gold font-bold hover:text-white transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPrograms;
