import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#FFD700',
        'surface-light': '#F5F5F5',
        'surface-dark': '#0A0A0A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        h0: ['72px', { lineHeight: '1.1' }],
        h1: ['56px', { lineHeight: '1.2' }],
        h2: ['40px', { lineHeight: '1.3' }],
        h3: ['28px', { lineHeight: '1.4' }],
        h4: ['24px', { lineHeight: '1.4' }],
        body: ['16px', { lineHeight: '1.6' }],
        caption: ['14px', { lineHeight: '1.5' }],
        label: ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        none: '0px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        full: '999px',
      },
      boxShadow: {
        none: 'none',
        sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
        md: '0 4px 12px rgba(0, 0, 0, 0.15)',
        lg: '0 12px 32px rgba(0, 0, 0, 0.20)',
        xl: '0 20px 48px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-in',
        slideUp: 'slideUp 0.3s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
