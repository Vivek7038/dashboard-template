import Link from 'next/link';
import PointPulseText from '@/components/icons/PointPulseText';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

const footerLinks = {
  support: [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Subscribe waitlist', href: '#waitlist' },
    { label: 'Download', href: '#download' }
  ],
  guides: [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Contact', href: '#contact' }
  ]
};

export function Footer() {
  return (
    <footer className='border-t bg-white py-16 dark:bg-gray-950'>
      <div className='px-6 md:px-12 lg:px-[272px]'>
        <div className='mb-12 flex flex-wrap items-start justify-between gap-12 md:gap-16'>
          {/* Logo */}
          <div>
            <PointPulseText width={151} height={28} />
          </div>

          {/* Links */}
          <div className='flex flex-wrap gap-16'>
            {/* Support Column */}
            <div className='space-y-6'>
              <h4 className='text-landing-primary-text text-sm font-semibold tracking-wider uppercase'>
                Support
              </h4>
              <ul className='space-y-4'>
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-landing-dark-text hover:text-landing-primary-text text-base transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides Column */}
            <div className='space-y-6'>
              <h4 className='text-landing-primary-text text-sm font-semibold tracking-wider uppercase'>
                Guides
              </h4>
              <ul className='space-y-4'>
                {footerLinks.guides.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-landing-dark-text hover:text-landing-primary-text text-base transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-wrap items-center justify-between gap-6 border-t pt-8'>
          <p className='text-landing-light-text text-base'>
            © 2024 PointPulse. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className='flex items-center gap-6'>
            <Link
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110'
            >
              <LinkedInIcon width={20} height={20} />
            </Link>
            <Link
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110'
            >
              <FacebookIcon width={20} height={20} />
            </Link>
            <Link
              href='https://x.com'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-transform hover:scale-110'
            >
              <TwitterIcon width={20} height={17} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
