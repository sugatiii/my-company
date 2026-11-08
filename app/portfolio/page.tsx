'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ArrowRight } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Ultra Pro Running',
    category: 'running',
    description: 'Lightweight responsive running shoe engineered for marathoners.',
    image: '/images/portfolio/running-1.jpg',
    features: ['Responsive cushioning', 'Breathable mesh', 'Carbon plate'],
  },
  {
    id: 2,
    title: 'Court Elite Basketball',
    category: 'basketball',
    description: 'High-performance basketball shoe with superior ankle support.',
    image: '/images/portfolio/basketball-1.jpg',
    features: ['Ankle support', 'Aggressive grip', 'Protective foam'],
  },
  {
    id: 3,
    title: 'Stride Casual',
    category: 'casual',
    description: 'Premium casual sneaker combining style and comfort.',
    image: '/images/portfolio/casual-1.jpg',
    features: ['Premium comfort', 'Minimalist design', 'Sustainable'],
  },
  {
    id: 4,
    title: 'Sprint Speed Runner',
    category: 'running',
    description: 'Track-focused shoe optimized for short-distance sprints.',
    image: '/images/portfolio/running-2.jpg',
    features: ['Lightweight', 'Rigid forefoot', 'Traction control'],
  },
  {
    id: 5,
    title: 'Hoop Master Pro',
    category: 'basketball',
    description: 'Professional-grade basketball shoe trusted by athletes.',
    image: '/images/portfolio/basketball-2.jpg',
    features: ['Professional grade', 'Lateral support', 'Durable'],
  },
  {
    id: 6,
    title: 'Urban Casual',
    category: 'casual',
    description: 'Versatile lifestyle shoe perfect for everyday adventures.',
    image: '/images/portfolio/casual-2.jpg',
    features: ['Versatile', 'All-day wear', 'Modern style'],
  },
];

export default function Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        
        <div className="relative z-10 container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-lg">
              Our Collection
            </h1>
            <p className="text-xl text-gray-300">
              Browse our complete range of premium athletic footwear designed for performance and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-white dark:bg-[#0A0A0A] py-3xl">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
          >
            {PORTFOLIO_ITEMS.map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900 aspect-square mb-lg">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
                    <div className="text-center">
                      <div className="text-6xl mb-md">👟</div>
                      <p className="text-sm font-semibold">{product.title}</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-start justify-between mb-md">
                    <div>
                      <h3 className="text-lg font-playfair font-bold">
                        {product.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide mt-sm">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-md">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-sm mb-lg">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-md py-sm bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors flex items-center gap-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-3xl">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-lg">
              Featured Case Study
            </h2>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-lg md:p-3xl mb-lg">
              <div className="mb-lg">
                <h3 className="text-2xl font-playfair font-bold mb-md">
                  Ultra Pro Running: Breaking Records
                </h3>
                <p className="text-gray-300 mb-lg">
                  When professional marathoners needed a shoe that could handle extreme conditions without sacrificing comfort, we delivered. The Ultra Pro Running shoe was engineered with breakthrough responsive cushioning technology and a carbon plate design.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
                <div>
                  <p className="text-accent font-bold text-2xl">87%</p>
                  <p className="text-sm text-gray-400">Athletes improved performance</p>
                </div>
                <div>
                  <p className="text-accent font-bold text-2xl">12K+</p>
                  <p className="text-sm text-gray-400">Units sold in first year</p>
                </div>
                <div>
                  <p className="text-accent font-bold text-2xl">5</p>
                  <p className="text-sm text-gray-400">Design awards received</p>
                </div>
              </div>

              <p className="text-gray-300 mb-lg">
                The result? A shoe that doesn't just perform—it transforms the running experience. Athletes report faster times, better comfort, and improved injury prevention.
              </p>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Order Now <ArrowRight className="ml-md w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
