
import React, { useState } from 'react';
import { Building2, MapPin, ClipboardList, Send, CheckCircle2, Navigation, Eye, Users } from 'lucide-react';

const Franchise: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Information Technology",
    "Fashion Designing",
    "EV Technologies",
    "Robotics & Electronics",
    "Industrial Training"
  ];

  const franchiseLocations = [
    {
      city: "Hyderabad",
      region: "Telangana",
      status: "High Demand",
      desc: "Prime IT hub with massive student population and corporate workforce."
    },
    {
      city: "Warangal",
      region: "Telangana",
      status: "Emerging Hub",
      desc: "Fast-growing educational center with numerous engineering and degree colleges."
    },
    {
      city: "Visakhapatnam",
      region: "Andhra Pradesh",
      status: "Key Market",
      desc: "Port city with a robust industrial base and growing tech ecosystem."
    },
    {
      city: "Vijayawada",
      region: "Andhra Pradesh",
      status: "Strategic",
      desc: "Central commercial hub with excellent connectivity and educational reach."
    }
  ];

  const locationCriteria = [
    {
      icon: <Navigation className="text-gold w-6 h-6" />,
      title: "Accessibility",
      desc: "The premises should be easily reachable via public transport (Bus/Metro) with ample parking space."
    },
    {
      icon: <Eye className="text-gold w-6 h-6" />,
      title: "High Visibility",
      desc: "Main road frontage is preferred. Significant signage visibility to attract footfall and brand awareness."
    },
    {
      icon: <Users className="text-gold w-6 h-6" />,
      title: "Market Proximity",
      desc: "Ideally located within a 2-3km radius of prominent educational institutions or technical universities."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="franchise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Information Column */}
          <div className="space-y-14">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#001f3f] p-3 rounded-2xl shadow-lg shadow-gold/10">
                  <Building2 className="text-gold w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-[#001f3f] uppercase tracking-tight">About Our Franchise</h4>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sri Amulya Technologies offers a high-ROI business model with ISO 9001:2015 certification. We provide a complete blueprint for success, including site selection, faculty training, and national-level marketing support.
              </p>
            </div>

            {/* Categories Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#001f3f] p-3 rounded-2xl shadow-lg shadow-gold/10">
                  <ClipboardList className="text-gold w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-[#001f3f] uppercase tracking-tight">Focus Verticals</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, idx) => (
                  <span key={idx} className="bg-gray-50 text-[#001f3f] px-5 py-2.5 rounded-xl text-sm font-bold border border-gray-200 hover:border-gold transition-colors">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* New Section: Our Franchise Locations */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#001f3f] p-3 rounded-2xl shadow-lg shadow-gold/10">
                  <MapPin className="text-gold w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black text-[#001f3f] uppercase tracking-tight">Our Franchise Locations</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {franchiseLocations.map((loc, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 group hover:bg-[#001f3f] transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-extrabold text-[#001f3f] group-hover:text-gold">{loc.city}</h5>
                      <span className="text-[10px] bg-gold/20 text-[#001f3f] px-2 py-0.5 rounded font-black uppercase group-hover:bg-gold">{loc.status}</span>
                    </div>
                    <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">{loc.region}</p>
                    <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed">{loc.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs font-medium text-gray-400 italic">
                * We are actively looking for partners in other Tier 2 & Tier 3 cities across PAN India.
              </p>
            </div>

            {/* Ideal Location Criteria */}
            <div className="bg-[#001f3f] p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[5rem]"></div>
               <h4 className="text-xl font-black mb-8 flex items-center gap-3">
                 <Navigation className="text-gold" /> Ideal Premises Criteria
               </h4>
               <div className="space-y-8">
                 {locationCriteria.map((item, idx) => (
                   <div key={idx} className="flex gap-5">
                     <div className="mt-1 bg-white/10 p-2.5 rounded-xl shrink-0 h-fit">
                       {item.icon}
                     </div>
                     <div>
                       <h5 className="font-black text-gold text-sm uppercase tracking-widest mb-1">{item.title}</h5>
                       <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                   </div>
                 ))}
                 <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-400">Required Built-up Area</span>
                    <span className="text-lg font-black text-gold">1500 - 2500 Sq. Ft.</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side - Application */}
          <div className="bg-[#001f3f] lg:sticky lg:top-32 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-full bg-gold"></div>
            
            {submitted ? (
              <div className="text-center py-16 animate-in fade-in duration-500">
                <div className="bg-gold/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-gold/30">
                  <CheckCircle2 className="text-gold w-14 h-14" />
                </div>
                <h4 className="text-white text-3xl font-black mb-4 uppercase">Application Sent!</h4>
                <p className="text-gray-400 text-lg">Our partnership development team will contact you within 48 hours for a location feasibility study.</p>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h4 className="text-white text-4xl font-black mb-3 uppercase tracking-tight">Join the Network</h4>
                  <p className="text-gray-400 font-medium">Express interest for your city and start your entrepreneurship journey.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Full Name</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="Enter name" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Contact Number</label>
                      <input type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Target Location (City/State)</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="e.g. Warangal, Telangana" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gold uppercase tracking-[0.2em] mb-2">Investment Range</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white/80 focus:outline-none focus:ring-2 focus:ring-gold appearance-none">
                      <option className="bg-[#001f3f]">5 - 10 Lakhs</option>
                      <option className="bg-[#001f3f]">10 - 20 Lakhs</option>
                      <option className="bg-[#001f3f]">20 Lakhs +</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-gold text-[#001f3f] font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm">
                    Submit Franchise Request <Send size={20} />
                  </button>
                  <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest font-bold">
                    * By submitting, you agree to our privacy policy and partnership terms.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;
