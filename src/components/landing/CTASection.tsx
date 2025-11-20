import { Button } from '@/components/ui/button';
import ToolIcon from '@/components/icons/ToolIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';

export function CTASection() {
  return (
    <section className='px-6 py-20 md:px-12 lg:px-[272px]'>
      <div className='mx-auto max-w-3xl space-y-16'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='bg-landing-bg-dark rounded-2xl p-5'>
            <ToolIcon width={64} height={64} />
          </div>
        </div>

        {/* Content */}
        <div className='space-y-6 text-center'>
          <h2 className='text-landing-primary-text text-5xl leading-tight font-bold'>
            A Must-Have Tool for Team
          </h2>
          <p className='landing-subtitle mx-auto max-w-2xl'>
            Discover a versatile tool designed to meet the diverse needs of any
            team, improving collaboration and productivity
          </p>
        </div>

        {/* CTA Button */}
        <div className='flex justify-center'>
          <Button
            size='lg'
            className='bg-landing-bg-dark hover:bg-landing-bg-dark/90 h-14 rounded-[20px] px-8 text-base font-semibold text-white'
          >
            Start Tracking
            <ArrowRightIcon width={16} height={12} color='#ffffff' />
          </Button>
        </div>
      </div>
    </section>
  );
}
