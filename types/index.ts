export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  categories: string[];
  metric: string;
  metricLabel: string;
  image: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  rating: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
}

export interface TechItem {
  name: string;
  logo: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  message: string;
}
