export interface NavItem {
  name: string;
  href: string;
}

export interface EducationalModel {
  id: string;
  name: string;
  description: string;
  category: 'LMS' | 'AI Tutoring' | 'Assessment' | 'Analytics';
  features: string[];
  institutions: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  institution: string;
  type: 'University' | 'School' | 'Training Center';
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  contactName: string;
  logo?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: 'AI Trends' | 'Education Tech' | 'Case Study' | 'Updates';
  image: string;
  featured?: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
  interest: 'Demo' | 'Partnership' | 'General Inquiry' | 'Pricing';
}