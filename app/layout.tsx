import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Company Profile - Premium Footwear',
  description: 'Discover our latest athletic shoe collections. Premium quality, innovative design, and unmatched performance.',
  keywords: ['shoes', 'footwear', 'athletic', 'premium'],
  authors: [{ name: 'Company Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://company-profile.com',
    siteName: 'Company Profile',
    title: 'Company Profile - Premium Footwear',
    description: 'Discover our latest athletic shoe collections',
    images: [
      {
        url: 'https://company-profile.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Company Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Profile - Premium Footwear',
    description: 'Discover our latest athletic shoe collections',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-white dark:bg-[#0A0A0A] text-black dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
