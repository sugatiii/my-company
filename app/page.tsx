'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FEATURES, STATS } from './lib/constants';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-24">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />

        {/* Content */}
        <div className="relative z-10 container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-lg leading-tight max-w-4xl mx-auto">
              Step Into the Future
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-3xl max-w-2xl mx-auto"
          >
            Premium athletic footwear designed for champions. Innovation meets elegance in every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-lg justify-center flex-wrap"
          >
            <Link
              href="/portfolio"
              className="btn btn-primary"
            >
              Explore Collection <ArrowRight className="ml-md w-5 h-5" />
            </Link>
            <button className="btn btn-secondary text-white border-white hover:bg-white/10">
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-[#0A0A0A] py-3xl">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-lg"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="p-lg rounded-lg border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-md">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-playfair font-bold mb-md">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white py-3xl">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-lg text-center"
          >
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-md">{stat.value}</p>
                  <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-3xl">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-md">Ready to Elevate Your Game?</h2>
            <p className="text-lg text-gray-300 mb-lg max-w-2xl mx-auto">
              Discover our latest collection and join thousands of satisfied athletes worldwide.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
