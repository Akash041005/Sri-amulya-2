
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#000d1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <div className="text-2xl font-bold flex items-center">
                <span className="text-white">SRI AMULYA</span>
                <span className="text-gold ml-2">TECH</span>
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mt-1">
                Private Limited
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ISO 9001:2015 Certified Organization & DPIIT Recognized Startup (DIPP243231) providing end-to-end technology, EV, and infrastructure solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-[#001f3f] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-[#001f3f] transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-[#001f3f] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-[#001f3f] transition-all">
                <Instagram size={18} />
              </a>
            </div>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <div className="bg-white p-1 rounded flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Startup_India_Logo.png" alt="Startup India" className="h-6 w-auto grayscale brightness-0" />
              </div>
              <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/10">
                <Award size={12} className="text-gold" />
                <span className="text-[9px] font-bold text-white/80 uppercase">ISO 9001:2015 | IAF</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-gold pl-3">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#registration" className="hover:text-gold transition-colors">Student Registration</a></li>
              <li><a href="#franchise" className="hover:text-gold transition-colors">Franchise</a></li>
              <li><a href="#infrastructure" className="hover:text-gold transition-colors">Infrastructure & EV</a></li>
              <li><a href="#courses" className="hover:text-gold transition-colors">Training Programs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-gold pl-3">Verticals</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>IT & EV Training</li>
              <li>Fashion Designing</li>
              <li>Robotics & Electronics</li>
              <li>EV Technology Solutions</li>
              <li>Computer Sales & Service</li>
              <li>Construction & Contracting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-gold pl-3">Registered Office</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <span>7-1-263/1/C, GM Colony, Peddapalli, Godavarikhani, Karim Nagar, Ramagundam, Telangana - 505209</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>+91 63043 18909</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>sriamulyatech.co@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2024 Sri Amulya Technologies Private Limited. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Quality Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
