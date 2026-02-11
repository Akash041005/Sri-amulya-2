
import React from 'react';
import { ChevronRight, PlayCircle, ShieldCheck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Dark Blue Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/95 via-[#001f3f]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 px-3 py-1 rounded-full text-gold text-sm font-medium animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span>Admissions Open 2024-25</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck size={14} className="text-gold" />
              <span>DPIIT Recognized Startup</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-400/30 px-3 py-1 rounded-full text-blue-300 text-[10px] font-bold uppercase tracking-wider">
              <Award size={14} className="text-blue-400" />
              <span>ISO 9001:2015 | IAF</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Future Proof Your <br />
            <span className="text-gold">IT Career</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Sri Amulya Technologies Private Limited is an <span className="text-white font-bold">ISO 9001:2015 Certified</span> pioneer in IT training and skill development. Join 50,000+ certified learners today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#courses" 
              className="w-full sm:w-auto bg-gold text-[#001f3f] px-8 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105"
            >
              Explore Programs <ChevronRight size={20} />
            </a>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-semibold hover:text-gold transition-colors py-4">
              <PlayCircle size={32} className="text-gold" /> Watch Introduction
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50 overflow-hidden whitespace-nowrap">
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">ISO 9001:2015</span>
               <span className="text-xs uppercase tracking-widest text-gray-400">Quality Certified</span>
             </div>
             <div className="w-[1px] h-10 bg-gray-600"></div>
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">IAF Accredited</span>
               <span className="text-xs uppercase tracking-widest text-gray-400">Global Standard</span>
             </div>
             <div className="w-[1px] h-10 bg-gray-600"></div>
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">Startup India</span>
               <span className="text-xs uppercase tracking-widest text-gray-400">Recognized Entity</span>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[-10%] bottom-[-5%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] z-0"></div>
    </section>
  );
};

export default Hero;
