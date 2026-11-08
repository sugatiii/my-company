'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { SERVICE_CATEGORIES } from '@/app/lib/constants';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';

const SERVICES = [
  {
    id: 'running',
    title: 'Running Collection',
    description: 'Engineered for speed and endurance with advanced cushioning technology.',
    features: [
      'Lightweight responsive midsole',
      'Breathable mesh upper',
      'Anti-blister heel design',
      'Outsole for all terrains',
    ],
    icon: Zap,
  },
  {
    id: 'basketball',
    title: 'Basketball Collection',
    description: 'Built for court performance with superior ankle support and grip.',
    features: [
      'High-ankle reinforcement',
      'Aggressive traction pattern',
      'Impact protection foam',
      'Premium leather construction',
    ],
    icon: Shield,
  },
  {
    id: 'casual',
    title: 'Casual Collection',
    description: 'Style meets comfort for everyday wear with timeless aesthetics.',
    features: [
      'Premium comfort insole',
      'Flexible rubber sole',
      'Minimalist design',
      'Sustainable materials',
    ],
    icon: Leaf,
  },
];

const BENEFITS = [
  {
    title: 'Advanced Technology',
    description: 'Patented cushioning systems engineered for optimal comfort and performance.',
  },
  {
    title: 'Expert Craftsmanship',
    description: 'Hand-selected materials and precision construction ensure superior quality.',
  },
  {
    title: 'Lifetime Support',
    description: 'Dedicated customer service and warranty coverage for peace of mind.',
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable manufacturing practices and recyclable packaging.',
  },
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        
        <div className="relative z-10 container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-lg">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-lg">
              Discover our specialized collections designed for every athlete and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white dark:bg-[#0A0A0A] py-3xl">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-lg"
          >
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={item}
                  className="group p-lg border border-gray-200 dark:border-gray-800 rounded-lg hover:border-accent transition-all duration-300 hover:shadow-lg dark:hover:shadow-accent/20"
                >
                  <div className="flex items-center gap-md mb-md">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-sm">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-md">
                        <span className="text-accent mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-md text-accent hover:text-accent/80 transition-colors mt-lg font-semibold"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-[#1A1A1A] py-3xl">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-3xl text-center"
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto"
          >
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-lg"
              >
                <h3 className="text-xl font-playfair font-bold mb-md">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-3xl">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-md">
              Find Your Perfect Fit
            </h2>
            <p className="text-lg text-gray-300 mb-lg max-w-2xl mx-auto">
              Browse our complete collections and discover your next favorite pair.
            </p>
            <Link href="/portfolio" className="btn btn-primary">
              View All Products <ArrowRight className="ml-md w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
