
import React, { useState } from 'react';
import { COURSES } from '../constants';
import { User, Mail, Phone, GraduationCap, MapPin, Send, CheckCircle2, Calendar, BookOpen } from 'lucide-react';

const StudentRegistration: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    qualification: '',
    course: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send this to a backend
    console.log('Student Registration Data:', formData);
    setTimeout(() => setSubmitted(false), 8000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="registration" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gold font-bold tracking-widest uppercase mb-2">Join Our Academy</h2>
          <h3 className="text-4xl font-extrabold text-[#001f3f]">Online Student Registration</h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Secure your future by enrolling in our industry-recognized programs. Fill out the form below to begin your journey.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Info */}
            <div className="bg-[#001f3f] md:w-1/3 p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">Registration Benefits</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-gold shrink-0" size={20} />
                    <span className="text-sm text-gray-300">Priority batch allocation and scheduling.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-gold shrink-0" size={20} />
                    <span className="text-sm text-gray-300">Access to free foundation workshops.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-gold shrink-0" size={20} />
                    <span className="text-sm text-gray-300">Direct mentorship from industry experts.</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-gold shrink-0" size={20} />
                    <span className="text-sm text-gray-300">Lifetime access to our placement portal.</span>
                  </li>
                </ul>
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">Need Help?</p>
                  <p className="text-gold font-bold">+91 63043 18909</p>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="md:w-2/3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-green-600 w-12 h-12" />
                  </div>
                  <h4 className="text-[#001f3f] text-3xl font-bold mb-4">Registration Successful!</h4>
                  <p className="text-gray-600 max-w-sm">
                    Thank you for choosing Sri Amulya Technologies. Our academic counselor will call you within 24 hours to complete your admission process.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-gold font-bold hover:underline"
                  >
                    Register another student
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                        <User size={16} className="text-gold" /> Full Name
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required 
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all" 
                        placeholder="e.g. Rahul Sharma" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                        <Mail size={16} className="text-gold" /> Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all" 
                        placeholder="rahul@example.com" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                        <Phone size={16} className="text-gold" /> Mobile Number
                      </label>
                      <input 
                        type="tel" 
                        name="mobile"
                        required 
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all" 
                        placeholder="+91 00000 00000" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                        <Calendar size={16} className="text-gold" /> Date of Birth
                      </label>
                      <input 
                        type="date" 
                        name="dob"
                        required 
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                        <GraduationCap size={16} className="text-gold" /> Qualification
                      </label>
                      <select 
                        name="qualification"
                        required 
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                      >
                        <option value="">Select Qualification</option>
                        <option value="SSC/Inter">SSC / Intermediate</option>
                        <option value="Graduate">Any Graduate</option>
                        <option value="B.Tech/BE">B.Tech / BE</option>
                        <option value="MCA/M.Tech">MCA / M.Tech</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                        <BookOpen size={16} className="text-gold" /> Interested Course
                      </label>
                      <select 
                        name="course"
                        required 
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all font-medium"
                      >
                        <option value="">Select a Program</option>
                        {COURSES.map(course => (
                          <option key={course.id} value={course.title}>{course.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#001f3f] flex items-center gap-2">
                      <MapPin size={16} className="text-gold" /> Residential Address
                    </label>
                    <textarea 
                      name="address"
                      required 
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all" 
                      placeholder="Enter your complete permanent address..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-gold text-[#001f3f] font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
                  >
                    Submit Registration <Send size={20} />
                  </button>
                  <p className="text-[10px] text-center text-gray-400">
                    By submitting this form, you agree to our terms and conditions for academic enrollment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentRegistration;
