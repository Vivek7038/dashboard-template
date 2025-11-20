import type { FC } from 'react';
import Image from 'next/image';

interface FeatureSectionProps {
  badge: {
    icon: FC<{ width: number; height: number }>;
    text: string;
  };
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function FeatureSection({
  badge,
  title,
  description,
  imageSrc,
  imageAlt
}: FeatureSectionProps) {
  const BadgeIcon = badge.icon;

  return (
    <section className='px-6 py-20 md:px-12 lg:px-[272px]'>
      <div className='mx-auto max-w-4xl'>
        {/* Badge and Title */}
        <div className='mb-10 space-y-9'>
          <div className='flex items-center gap-3'>
            <BadgeIcon width={24} height={24} />
            <span className='landing-badge-text'>{badge.text}</span>
          </div>
          <div className='space-y-4'>
            <h2 className='landing-section-title text-4xl md:text-5xl'>
              {title}
            </h2>
            <p className='landing-subtitle max-w-2xl'>{description}</p>
          </div>
        </div>

        {/* Dashboard Mockup with gradient background */}
        <div className='relative -ml-8 overflow-hidden rounded-tl-[20px] bg-gradient-to-br from-pink-400 via-purple-400 to-blue-500 pt-8 pl-8'>
          <div className='border-landing-border relative overflow-hidden rounded-t-[20px] border-r shadow-2xl'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={864}
              height={486}
              className='w-full'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
