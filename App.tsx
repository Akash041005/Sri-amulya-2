
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import CareerServices from './components/CareerServices';
import HardwareServices from './components/HardwareServices';
import SpecialPrograms from './components/SpecialPrograms';
import Franchise from './components/Franchise';
import StudentRegistration from './components/StudentRegistration';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import TopNotice from './components/TopNotice';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'franchise'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNotice />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'home' ? (
        <main className="animate-in fade-in duration-500">
          <Hero />
          <Features />
          <Courses />
          
          {/* Call to Action Section */}
          <section className="bg-gold py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-[#001f3f]">
                  <h3 className="text-3xl font-black mb-2 uppercase">Ready to start your tech journey?</h3>
                  <p className="text-lg opacity-80 font-medium">Talk to our career counselors today for a free assessment.</p>
                </div>
                <div className="flex gap-4">
                  <a href="#registration" className="bg-[#001f3f] text-white px-8 py-4 rounded-xl font-bold shadow-2xl hover:bg-[#003366] transition-all whitespace-nowrap">
                    Online Registration
                  </a>
                  <a href="#contact" className="bg-white text-[#001f3f] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all whitespace-nowrap hidden sm:block">
                    Contact Counselor
                  </a>
                </div>
              </div>
            </div>
          </section>

          <HardwareServices />
          <CareerServices />
          <StudentRegistration />
          <SpecialPrograms />
          <Testimonials />
        </main>
      ) : (
        <main className="pt-24 animate-in fade-in duration-500 min-h-screen">
          <div className="bg-[#001f3f] py-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2 uppercase tracking-tight">Franchise Program</h1>
              <p className="text-gold font-bold tracking-[0.3em] text-xs md:text-sm">PARTNER WITH SRI AMULYA TECHNOLOGIES</p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
          <Franchise />
        </main>
      )}

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
