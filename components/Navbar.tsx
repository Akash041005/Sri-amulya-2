
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'franchise';
  setActiveTab: (tab: 'home' | 'franchise') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); // 40 is height of TopNotice
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', type: 'tab' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Courses', href: '#courses', type: 'scroll' },
    { name: 'Franchise', id: 'franchise', type: 'tab' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
  ];

  const handleLinkClick = (link: any) => {
    if (link.type === 'tab') {
      setActiveTab(link.id);
    } else {
      if (activeTab !== 'home') {
        setActiveTab('home');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || activeTab === 'franchise' 
        ? 'bg-[#001f3f] shadow-lg py-3 top-0' 
        : 'bg-transparent py-5 top-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-bold flex items-center leading-none">
                <span className="text-white">SRI AMULYA</span>
                <span className="text-gold ml-2">TECHNOLOGIES</span>
              </div>
              <div className="text-[9px] font-bold tracking-[0.25em] mt-1 uppercase text-white/60">
                Private Limited
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm font-bold uppercase tracking-wider transition-all relative py-2 ${
                    (link.type === 'tab' && activeTab === link.id)
                    ? 'text-gold'
                    : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {link.name}
                  {(link.type === 'tab' && activeTab === link.id) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"></span>
                  )}
                </button>
              ))}
              <button 
                onClick={() => {
                  setActiveTab('home');
                  setTimeout(() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="bg-gold text-[#001f3f] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl hover:-translate-y-0.5"
              >
                Enroll Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-gold transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001f3f] shadow-2xl absolute w-full top-full border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider ${
                  (link.type === 'tab' && activeTab === link.id)
                  ? 'text-gold bg-white/5'
                  : 'text-white/70 hover:text-gold hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => {
                  setActiveTab('home');
                  setIsOpen(false);
                  setTimeout(() => document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="w-full bg-gold text-[#001f3f] py-4 rounded-xl font-black uppercase tracking-widest text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
