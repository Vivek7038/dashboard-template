import type { FC } from 'react';

interface TextBannerProps {
  icon: FC<{ width: number; height: number }>;
  title: string;
  description: string;
}

export function TextBanner({
  icon: Icon,
  title,
  description
}: TextBannerProps) {
  return (
    <section className='px-6 py-12 md:px-12 lg:px-[272px]'>
      <div className='mx-auto max-w-4xl space-y-3'>
        <div className='flex items-center gap-3'>
          <Icon width={24} height={25} />
          <h3 className='landing-badge-text'>{title}</h3>
        </div>
        <p className='landing-subtitle max-w-2xl'>{description}</p>
      </div>
    </section>
  );
}
