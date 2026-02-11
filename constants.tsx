
import React from 'react';
import { Course, Testimonial, Partner } from './types';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Layers,
  Globe,
  Smartphone,
  Briefcase,
  GraduationCap,
  Users2,
  TrendingUp,
  HeartHandshake,
  Camera,
  Monitor,
  HardHat,
  Factory,
  Zap,
  Car,
  Bot,
  CircuitBoard,
  Scissors
} from 'lucide-react';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Full Stack Development',
    duration: '6 Months',
    category: 'Software Development',
    description: 'Master MERN stack and modern web architectures.',
    icon: 'Code'
  },
  {
    id: '2',
    title: 'Fashion Designing',
    duration: '1 Year',
    category: 'Vocational Arts',
    description: 'Master garment construction, fashion illustration, and boutique management with industry-standard techniques.',
    icon: 'Scissors'
  },
  {
    id: '3',
    title: 'EV Technology & Design',
    duration: '4 Months',
    category: 'Future Tech',
    description: 'Learn electric vehicle architecture, battery management systems, and motor control.',
    icon: 'Zap'
  },
  {
    id: '4',
    title: 'Cloud Computing (AWS/Azure)',
    duration: '4 Months',
    category: 'Infrastructure',
    description: 'Learn to design and deploy scalable cloud solutions.',
    icon: 'Cloud'
  },
  {
    id: '5',
    title: 'Industrial Training',
    duration: '2-4 Months',
    category: 'Robotics & Electronics',
    description: 'Specialized training in Robotics and Electronics projects, including PCB design and autonomous systems.',
    icon: 'Bot'
  },
  {
    id: '6',
    title: 'Data Science & AI',
    duration: '6 Months',
    category: 'Data Engineering',
    description: 'Predictive modeling, Machine Learning, and Python analytics.',
    icon: 'Database'
  }
];

export const ADDITIONAL_SERVICES = [
  {
    title: 'EV Technologies',
    desc: 'Electric vehicle charging infrastructure setup, battery solutions, and EV conversion consultation.',
    icon: <Zap className="w-10 h-10 text-gold" />
  },
  {
    title: 'CCTV Surveillance',
    desc: 'Advanced security solutions with high-definition camera installation and maintenance.',
    icon: <Camera className="w-10 h-10 text-gold" />
  },
  {
    title: 'Computer Sales & Service',
    desc: 'Authorized dealers for premium IT hardware. We provide expert repair and AMC services.',
    icon: <Monitor className="w-10 h-10 text-gold" />
  },
  {
    title: 'Construction Services',
    desc: 'Reliable engineering and construction work for residential and commercial infrastructure.',
    icon: <HardHat className="w-10 h-10 text-gold" />
  }
];

export const CAREER_SERVICES = [
  {
    title: 'Internship Programs',
    desc: 'Paid and unpaid internships with live industry project exposure to bridge the classroom-to-office gap.',
    icon: <Briefcase className="w-10 h-10 text-gold" />
  },
  {
    title: 'Apprenticeship',
    desc: 'Earn while you learn with our structured apprenticeship models designed for vocational excellence.',
    icon: <GraduationCap className="w-10 h-10 text-gold" />
  },
  {
    title: 'Job Consultancy',
    desc: 'Personalized career counseling, resume optimization, and direct placement tie-ups with 500+ MNCs.',
    icon: <Users2 className="w-10 h-10 text-gold" />
  }
];

export const SPECIAL_PROGRAMS = [
  {
    title: 'Skill Development',
    desc: 'Beyond coding: Soft skills, communication, leadership training, and digital literacy workshops to create well-rounded professionals.',
    icon: <TrendingUp className="w-10 h-10 text-white" />,
    color: 'bg-blue-600'
  },
  {
    title: 'CSR Initiatives',
    desc: 'Our Corporate Social Responsibility wing provides subsidized or free tech education to underprivileged youth and rural communities.',
    icon: <HeartHandshake className="w-10 h-10 text-white" />,
    color: 'bg-teal-600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Akash',
    role: 'Software Engineer',
    company: 'TCS',
    content: 'The training at Sri Amulya was transformative. The hands-on projects helped me land a job at a top MNC.',
    avatar: 'https://picsum.photos/seed/rajesh/100/100'
  },
  {
    id: '2',
    name: 'kumar',
    role: 'Data Analyst',
    company: 'Infosys',
    content: 'Excellent mentors and placement support. I highly recommend their Data Science program.',
    avatar: 'https://picsum.photos/seed/anjali/100/100'
  },
  {
    id: '3',
    name: 'pavan',
    role: 'Cloud Architect',
    company: 'Amazon Web Services',
    content: 'Sri Amulya Technologies is the best place for career transitions in the IT sector.',
    avatar: 'https://picsum.photos/seed/vikram/100/100'
  }
];

export const PARTNERS: Partner[] = [
  { id: '1', name: 'Microsoft', logo: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' },
  { id: '2', name: 'Google Cloud', logo: 'https://cdn-icons-png.flaticon.com/512/300/300221.png' },
  { id: '3', name: 'AWS', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png' },
  { id: '4', name: 'Oracle', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png' },
  { id: '5', name: 'Cisco', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968319.png' },
];

export const ICONS: Record<string, React.ReactNode> = {
  Code: <Code className="w-8 h-8 text-gold" />,
  Database: <Database className="w-8 h-8 text-gold" />,
  Cloud: <Cloud className="w-8 h-8 text-gold" />,
  Shield: <Shield className="w-8 h-8 text-gold" />,
  Cpu: <Cpu className="w-8 h-8 text-gold" />,
  Layers: <Layers className="w-8 h-8 text-gold" />,
  Globe: <Globe className="w-8 h-8 text-gold" />,
  Smartphone: <Smartphone className="w-8 h-8 text-gold" />,
  Factory: <Factory className="w-8 h-8 text-gold" />,
  Zap: <Zap className="w-8 h-8 text-gold" />,
  Car: <Car className="w-8 h-8 text-gold" />,
  Bot: <Bot className="w-8 h-8 text-gold" />,
  CircuitBoard: <CircuitBoard className="w-8 h-8 text-gold" />,
  Scissors: <Scissors className="w-8 h-8 text-gold" />,
};
