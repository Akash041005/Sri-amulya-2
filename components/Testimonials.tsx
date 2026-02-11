
import React from 'react';
import { TESTIMONIALS, PARTNERS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="placements" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-2">Success Stories</h2>
          <h3 className="text-4xl font-extrabold text-[#001f3f]">Our Alumni at Top MNCs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full border-2 border-gold object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#001f3f]">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#001f3f] rounded-3xl p-12 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
          <h4 className="text-white text-xl font-bold mb-10 tracking-widest uppercase">Our Recruitment Network</h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {PARTNERS.map((partner) => (
              <div key={partner.id} className="group cursor-pointer">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-10 md:h-12 w-auto grayscale brightness-200 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
