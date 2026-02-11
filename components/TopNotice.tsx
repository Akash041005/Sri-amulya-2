
import React from 'react';
import { Award, Zap, Bell, ShieldCheck } from 'lucide-react';

const TopNotice: React.FC = () => {
  const announcements = [
    { icon: <Award size={14} />, text: "ISO 9001:2015 Certified | Quality Management System Accredited" },
    { icon: <ShieldCheck size={14} />, text: "DPIIT Recognized Startup (DIPP243231) | Govt. of India" },
    { icon: <Zap size={14} />, text: "New Batches: Full Stack Development & EV Technologies starting next Monday!" },
    { icon: <Bell size={14} />, text: "Admissions Open for Fashion Designing Diploma 2024-25" },
    { icon: <Award size={14} />, text: "100% Placement Assistance with 500+ MNC Hiring Partners" }
  ];

  return (
    <div className="bg-gold h-10 w-full flex items-center overflow-hidden border-b border-[#001f3f]/10 sticky top-0 z-[60] shadow-sm">
      <div className="bg-[#001f3f] text-gold h-full px-4 flex items-center z-10 font-black text-[10px] uppercase tracking-widest whitespace-nowrap shadow-[4px_0_10px_rgba(0,0,0,0.2)]">
        Announcements
      </div>
      <div className="flex-1 overflow-hidden h-full flex items-center">
        <div className="animate-marquee inline-flex items-center gap-12 text-[#001f3f] font-bold text-xs uppercase tracking-wider">
          {[...announcements, ...announcements].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
              <span className="opacity-30">•</span>
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNotice;
