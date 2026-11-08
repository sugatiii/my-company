'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, COMPANY } from '@/app/lib/constants';
import { Menu, X, Moon, Sun } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldBeDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-[#0A0A0A] shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-playfair font-bold hover:text-accent transition-colors"
        >
          {COMPANY.name.split(' ')[0]}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body font-medium hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-gray-800">
          <div className="container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-body font-medium hover:text-accent transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
