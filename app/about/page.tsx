'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { COMPANY, MILESTONES, VALUES } from '@/app/lib/constants';
import { ArrowRight } from 'lucide-react';

export default function About() {
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
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
        
        <div className="relative z-10 container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-lg">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 mb-lg">
              From humble beginnings to a global leader in athletic footwear innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white dark:bg-[#0A0A0A] py-3xl">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-lg">
              Founded on Innovation
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-md leading-relaxed">
              Since {COMPANY.founded}, {COMPANY.name} has been dedicated to creating premium athletic footwear that combines cutting-edge technology with timeless design. Our mission is simple: to empower athletes and enthusiasts to reach their full potential through superior footwear.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Every pair of shoes we create is the result of meticulous research, precision engineering, and an unwavering commitment to quality. We believe that great footwear isn't just about performance—it's about confidence, comfort, and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 dark:bg-[#1A1A1A] py-3xl">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-3xl text-center"
          >
            Our Journey
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            {MILESTONES.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-lg mb-lg pb-lg border-b border-gray-200 dark:border-gray-800 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-black">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {milestone.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white py-3xl">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-3xl text-center"
          >
            Our Values
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-lg"
          >
            {VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="p-lg border border-gray-800 rounded-lg hover:border-accent transition-colors"
              >
                <h3 className="text-2xl font-playfair font-bold mb-md text-accent">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-3xl">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-md">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-300 mb-lg max-w-2xl mx-auto">
              Explore our latest collections and discover why athletes around the world trust us.
            </p>
            <Link href="/portfolio" className="btn btn-primary">
              Explore Collection <ArrowRight className="ml-md w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
