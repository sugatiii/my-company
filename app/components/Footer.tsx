'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { COMPANY, NAV_ITEMS } from '@/app/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black dark:bg-[#0A0A0A] text-white border-t border-gray-800">
      <div className="container py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3xl mb-3xl">
          {/* Company Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-playfair font-bold mb-lg">{COMPANY.name}</h3>
            <p className="text-caption text-gray-400 mb-lg">{COMPANY.tagline}</p>
            <div className="flex gap-md">
              {/* Social links can be added here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-lg">Navigation</h4>
            <ul className="space-y-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-caption text-gray-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-lg">Contact</h4>
            <ul className="space-y-md">
              <li className="flex gap-md items-start">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-caption text-gray-400 hover:text-accent transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-md items-start">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-caption text-gray-400 hover:text-accent transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-md items-start">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-caption text-gray-400">{COMPANY.address}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-base font-semibold mb-lg">Hours</h4>
            <ul className="space-y-sm text-caption text-gray-400">
              <li>Monday - Friday</li>
              <li>9:00 AM - 6:00 PM EST</li>
              <li className="pt-md">Saturday - Sunday</li>
              <li>Closed</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-md">
            <p className="text-caption text-gray-500">
              © {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex gap-lg">
              <Link href="#" className="text-caption text-gray-500 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-caption text-gray-500 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
