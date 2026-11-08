export const COMPANY = {
  name: 'Premium Athletic Co.',
  tagline: 'Premium Athletic Footwear',
  founded: 2015,
  address: '123 Innovation Street, Portland, Oregon 97201',
  email: 'contact@company.com',
  phone: '+1 (555) 123-4567',
  social: {
    instagram: 'https://instagram.com/company',
    twitter: 'https://twitter.com/company',
    facebook: 'https://facebook.com/company',
    linkedin: 'https://linkedin.com/company/premium-athletic',
  },
};

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export const FEATURES = [
  {
    id: 'feature-1',
    title: 'Premium Quality',
    description: 'Crafted with the finest materials and precision engineering for superior comfort and durability.',
    icon: '⭐',
  },
  {
    id: 'feature-2',
    title: 'Innovative Design',
    description: 'Cutting-edge design meets timeless elegance in every step you take.',
    icon: '🎨',
  },
  {
    id: 'feature-3',
    title: 'Perfect Fit',
    description: 'Advanced fit technology ensures perfect comfort for athletes of all levels.',
    icon: '👟',
  },
];

export const MILESTONES = [
  {
    year: 2015,
    text: 'Founded with passion for innovation and athletic excellence',
  },
  {
    year: 2017,
    text: 'Expanded to 10+ countries, serving 100K+ customers',
  },
  {
    year: 2019,
    text: 'Launched flagship collection, won 5 design awards',
  },
  {
    year: 2021,
    text: 'Achieved 1M+ satisfied customers worldwide',
  },
  {
    year: 2023,
    text: 'Introduced sustainable manufacturing practices',
  },
  {
    year: 2024,
    text: 'Expanded to 95+ countries globally',
  },
];

export const VALUES = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology and design.',
  },
  {
    title: 'Quality',
    description: 'Unwavering commitment to excellence in every product.',
  },
  {
    title: 'Sustainability',
    description: 'Protecting our planet for future generations.',
  },
];

export const STATS = [
  { label: 'Users Worldwide', value: '2.5M+' },
  { label: 'Countries', value: '95+' },
  { label: 'Team Members', value: '50K' },
  { label: 'Satisfaction', value: '99%' },
];

export const SERVICE_CATEGORIES = ['running', 'basketball', 'casual'] as const;

export const COLORS = {
  primary: '#000000',
  secondary: '#FFFFFF',
  accent: '#FFD700',
  surface_light: '#F5F5F5',
  surface_dark: '#0A0A0A',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
};

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultrawide: 1536,
};
