'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import PointPulseLogo from '@/components/icons/PointPulseLogo';
import PointPulseText from '@/components/icons/PointPulseText';
import FeatureNavIcon from '@/components/icons/FeatureNavIcon';
import TestimonialNavIcon from '@/components/icons/TestimonialNavIcon';
import PricingNavIcon from '@/components/icons/PricingNavIcon';
import DownloadNavIcon from '@/components/icons/DownloadNavIcon';

export function Navigation() {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: '#features', label: 'Feature', icon: FeatureNavIcon },
    { href: '#testimonials', label: 'Testimonial', icon: TestimonialNavIcon },
    { href: '#pricing', label: 'Pricing', icon: PricingNavIcon },
    { href: '#download', label: 'Download', icon: DownloadNavIcon }
  ];

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80'>
      <div className='flex h-16 items-center justify-between px-6 md:px-12 lg:px-[272px]'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <PointPulseLogo width={28} height={28} />
          <PointPulseText width={151} height={28} />
        </Link>

        {/* Navigation Links */}
        <div className='hidden items-center gap-3 md:flex'>
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className='text-landing-primary-text/40 hover:text-landing-primary-text flex items-center gap-2.5 rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:text-white/40 dark:hover:bg-gray-800 dark:hover:text-white'
              >
                <Icon width={20} height={20} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='flex size-5 items-center justify-center transition-transform hover:scale-105'
          aria-label='Toggle theme'
        >
          {theme === 'dark' ? (
            <Sun className='text-landing-primary-text size-5 dark:text-white' />
          ) : (
            <Moon className='text-landing-primary-text size-5' />
          )}
        </button>
      </div>
    </nav>
  );
}
