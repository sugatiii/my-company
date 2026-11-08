export interface Product {
  id: string;
  name: string;
  category: 'running' | 'basketball' | 'casual';
  description: string;
  features: string[];
  image: string;
  price?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Milestone {
  year: number;
  text: string;
}
