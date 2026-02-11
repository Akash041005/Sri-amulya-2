
import React from 'react';
import { Target, Award, Users, Laptop } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Laptop size={32} className="text-white" />,
      title: "Practical Learning",
      desc: "Live projects and real-time environment labs.",
      color: "bg-blue-600"
    },
    {
      icon: <Award size={32} className="text-white" />,
      title: "Global Certification",
      desc: "Industry recognized certificates for all graduates.",
      color: "bg-gold"
    },
    {
      icon: <Target size={32} className="text-white" />,
      title: "Placement Cell",
      desc: "Dedicated support for resume building and mock interviews.",
      color: "bg-teal-500"
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: "Expert Faculty",
      desc: "Trainers with 10+ years of industrial experience.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#001f3f] text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
          <circle cx="100" cy="0" r="80" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-gold font-bold tracking-widest uppercase mb-4">Why Sri Amulya?</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Bridge the Gap Between <br /> 
              <span className="text-gold">Education & Industry</span>
            </h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              We started with a vision to empower students with technical knowledge that matters. Today, Sri Amulya Technologies stands as a lighthouse of quality education, partnering with top tech companies to create the next generation of digital leaders.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-black text-gold mb-2">95%</div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-bold">Placement Rate</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-4xl font-black text-gold mb-2">500+</div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-bold">Hiring Partners</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
