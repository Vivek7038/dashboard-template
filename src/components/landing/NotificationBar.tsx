import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function NotificationBar() {
  return (
    <div className='bg-landing-bg-dark w-full'>
      <div className='flex items-center justify-between px-6 py-2.5 md:px-12 lg:px-[272px]'>
        <span className='text-sm font-semibold text-white'>
          Early access for PointPulse SaaS
        </span>
        <Link
          href='#waitlist'
          className='inline-flex items-center gap-1 text-sm text-white transition-all hover:underline'
        >
          Join the waitlist for early access →
        </Link>
      </div>
    </div>
  );
}
