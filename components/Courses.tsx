
import React from 'react';
import { COURSES, ICONS } from '../constants';
import { ArrowRight, Clock } from 'lucide-react';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-2">Academic Programs</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#001f3f]">Industry Ready Courses</h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div 
              key={course.id} 
              className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                {ICONS[course.icon]}
              </div>
              <div className="text-xs font-bold text-gold uppercase tracking-tighter mb-2">{course.category}</div>
              <h4 className="text-2xl font-bold text-[#001f3f] mb-4 group-hover:text-[#003366] transition-colors">
                {course.title}
              </h4>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {course.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <a href={`#enroll-${course.id}`} className="flex items-center gap-1 text-[#001f3f] font-bold group-hover:text-gold transition-colors">
                  Details <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#001f3f] text-white px-10 py-4 rounded-full font-bold hover:bg-[#003366] transition-all shadow-xl">
            Explore All 20+ Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
