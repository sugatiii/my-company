'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { Mail, Share2 } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 20+ years in athletic footwear design and innovation.',
    email: 'alex@company.com',
    image: '👔',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Chief Design Officer',
    bio: 'Award-winning designer specializing in biomechanical footwear engineering.',
    email: 'maria@company.com',
    image: '👩‍🎨',
  },
  {
    id: 3,
    name: 'James Chen',
    role: 'Head of Product',
    bio: 'Strategic product leader with expertise in athletic technology and performance.',
    email: 'james@company.com',
    image: '👨‍💼',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'VP Marketing',
    bio: 'Brand strategist focused on building authentic connections with athletes worldwide.',
    email: 'sarah@company.com',
    image: '👩‍💻',
  },
  {
    id: 5,
    name: 'Marcus Johnson',
    role: 'Head of Engineering',
    bio: 'Technical innovator leading cutting-edge material and manufacturing solutions.',
    email: 'marcus@company.com',
    image: '🧑‍🔬',
  },
  {
    id: 6,
    name: 'Emily Rodriguez',
    role: 'Customer Experience Lead',
    bio: 'Passionate advocate for customer satisfaction and long-term relationships.',
    email: 'emily@company.com',
    image: '👩‍💼',
  },
];

export default function Team() {
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
              Our Team
            </h1>
            <p className="text-xl text-gray-300">
              Meet the passionate innovators dedicated to revolutionizing athletic footwear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-3xl">
        <div className="container text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-lg">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300">
              We're united by a single purpose: to create exceptional athletic footwear that empowers athletes to exceed their limits. Our diverse team brings expertise, creativity, and passion to every project, ensuring we deliver nothing but the best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="bg-white dark:bg-[#0A0A0A] py-3xl">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.id}
                variants={item}
                className="group"
              >
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden mb-lg">
                  <div className="aspect-square flex items-center justify-center text-6xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 group-hover:scale-105 transition-transform duration-300">
                    {member.image}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-playfair font-bold mb-sm">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-md">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-lg">
                    {member.bio}
                  </p>

                  <div className="flex gap-md">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">Email</span>
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                      aria-label={`Social ${member.name}`}
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="text-xs">Social</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-gray-50 dark:bg-[#1A1A1A] py-3xl">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-lg">
              Our Culture
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-lg">
              We foster an environment of innovation, collaboration, and excellence. Our team is encouraged to challenge conventions, share ideas, and grow together. We believe that diverse perspectives lead to breakthrough solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mt-3xl">
              <div className="p-lg border border-gray-200 dark:border-gray-800 rounded-lg">
                <p className="text-3xl font-bold text-accent mb-md">150+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Team Members Worldwide
                </p>
              </div>
              <div className="p-lg border border-gray-200 dark:border-gray-800 rounded-lg">
                <p className="text-3xl font-bold text-accent mb-md">25+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Countries Represented
                </p>
              </div>
              <div className="p-lg border border-gray-200 dark:border-gray-800 rounded-lg">
                <p className="text-3xl font-bold text-accent mb-md">98%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Employee Satisfaction
                </p>
              </div>
            </div>
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
              Join Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-lg max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about footwear innovation and athletic excellence.
            </p>
            <Link href="/contact" className="btn btn-primary">
              View Careers
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
