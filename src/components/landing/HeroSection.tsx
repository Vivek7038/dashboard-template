import { Button } from '@/components/ui/button';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

export function HeroSection() {
  return (
    <section className='px-6 py-20 md:px-12 md:py-32 lg:px-[272px]'>
      <div className='mx-auto max-w-4xl text-center'>
        <h1 className='landing-hero-title mb-6 text-4xl md:text-5xl lg:text-6xl'>
          Unlock the Power of Your Data with Point Pulse
        </h1>
        <p className='landing-subtitle mb-10 text-lg md:text-xl'>
          <span className='text-landing-primary-text font-semibold'>
            Monitor
          </span>
          ,{' '}
          <span className='text-landing-primary-text font-semibold'>
            analyze
          </span>
          , and{' '}
          <span className='text-landing-primary-text font-semibold'>
            optimize
          </span>{' '}
          every aspect of your operations with AI-driven analytics with
          actionable insights and predictions.
        </p>
        <Button
          size='lg'
          className='bg-landing-bg-dark hover:bg-landing-bg-dark/90 h-14 rounded-[20px] px-8 text-base font-semibold text-white'
        >
          Get Started Now
          <ArrowRightIcon width={16} height={12} color='#ffffff' />
        </Button>
      </div>
    </section>
  );
}
