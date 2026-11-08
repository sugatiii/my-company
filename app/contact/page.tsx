'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { COMPANY } from '@/app/lib/constants';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white dark:bg-[#0A0A0A] py-3xl">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-lg"
            >
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-lg">
                  Contact Information
                </h3>
              </div>

              <div className="flex gap-md">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent mt-sm" />
                </div>
                <div>
                  <p className="font-semibold mb-sm">Email</p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent mt-sm" />
                </div>
                <div>
                  <p className="font-semibold mb-sm">Phone</p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent mt-sm" />
                </div>
                <div>
                  <p className="font-semibold mb-sm">Address</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {COMPANY.address}
                  </p>
                </div>
              </div>

              <div className="pt-lg border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-lg">
                  Business Hours: Monday - Friday, 9:00 AM - 6:00 PM PT
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-lg">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-md">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-sm">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-md">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-sm">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-md">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-sm">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-md">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-sm">{errors.message.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200">{submitMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-md w-5 h-5" />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-[#1A1A1A] py-3xl">
        <div className="container max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-playfair font-bold mb-3xl text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-lg">
            {[
              {
                q: 'What is the typical response time?',
                a: 'We aim to respond to all inquiries within 24 business hours.',
              },
              {
                q: 'Do you offer international shipping?',
                a: 'Yes, we ship to 95+ countries worldwide with competitive rates.',
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day return guarantee on all products, no questions asked.',
              },
              {
                q: 'Can I track my order?',
                a: 'Yes, you\'ll receive a tracking number via email once your order ships.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-lg border border-gray-200 dark:border-gray-800 rounded-lg"
              >
                <h3 className="font-semibold mb-md">{faq.q}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
