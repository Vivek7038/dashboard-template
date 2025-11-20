'use client';

import { useEffect, useRef } from 'react';
import ApiIcon from '@/components/icons/ApiIcon';
import SlackIcon from '@/components/icons/SlackIcon';
import GoogleAnalyticsIcon from '@/components/icons/GoogleAnalyticsIcon';
import HubSpotIcon from '@/components/icons/HubSpotIcon';

const integrations = [
  {
    label: 'Seamless Tool Integration',
    title: 'API Integration',
    icon: ApiIcon,
    description:
      'Connect Point Pulse with any tool using custom APIs. Ensure smooth data flow and leverage AI analytics seamlessly.'
  },
  {
    label: 'Stay Connected, Stay Informed',
    title: 'Slack Integration',
    icon: SlackIcon,
    description:
      'Integrate with Slack for real-time updates and notifications. Keep your team aligned with instant insights and alerts.'
  },
  {
    label: 'Elevate Your Web Insights',
    title: 'Google Analytics',
    icon: GoogleAnalyticsIcon,
    description:
      'Sync with Google Analytics to enhance web performance analysis with AI insights. Boost user engagement and conversions.'
  },
  {
    label: 'Supercharge Sales & Marketing',
    title: 'HubSpot Integration',
    icon: HubSpotIcon,
    description:
      'Integrate with HubSpot to optimize sales and marketing. Track campaigns and sales pipelines with AI-driven insights.'
  },
  {
    label: 'Comprehensive Customer Insights',
    title: 'Salesforce Integration',
    icon: null,
    description:
      'Seamlessly sync with Salesforce for a full view of customer data. Boost sales efficiency and customer satisfaction.'
  }
];

export function IntegrationCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // pixels per frame at 60fps

    const animate = () => {
      if (!scrollContainer || isPausedRef.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Increment scroll position
      scrollPositionRef.current += scrollSpeed;

      // Calculate the width of one complete set
      const firstChild = scrollContainer.firstElementChild;
      if (!firstChild) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const cardWidth = (firstChild as HTMLElement).offsetWidth + 20; // card width + gap
      const singleSetWidth = cardWidth * integrations.length;

      // Reset position seamlessly when we've scrolled one full set
      if (scrollPositionRef.current >= singleSetWidth) {
        scrollPositionRef.current = scrollPositionRef.current - singleSetWidth;
      }

      // Apply the scroll position
      scrollContainer.scrollLeft = scrollPositionRef.current;

      animationFrameId = requestAnimationFrame(animate);
    };

    // Pause on hover
    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
      isPausedRef.current = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate integrations multiple times for seamless infinite scroll
  const duplicatedIntegrations = [
    ...integrations,
    ...integrations,
    ...integrations,
    ...integrations
  ];

  return (
    <section className='overflow-hidden px-6 py-12 md:px-12 lg:px-[272px]'>
      <div
        ref={scrollRef}
        className='flex gap-5 overflow-x-scroll pb-4 will-change-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedIntegrations.map((integration, index) => {
          const Icon = integration.icon;
          return (
            <div
              key={index}
              className='max-w-[282px] min-w-[280px] flex-shrink-0 space-y-2.5 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900'
            >
              <p className='landing-card-label overflow-hidden text-ellipsis whitespace-nowrap'>
                {integration.label}
              </p>
              <div className='flex items-center gap-2.5'>
                <h3 className='landing-card-title flex-1'>
                  {integration.title}
                </h3>
                {Icon && <Icon width={25} height={25} />}
              </div>
              <p className='landing-card-description line-clamp-4'>
                {integration.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
