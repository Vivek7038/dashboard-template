import Image from 'next/image';
import UpdateIcon from '@/components/icons/UpdateIcon';

const features = [
  {
    title: 'Real-time Alerts',
    description: 'Stay updated with real-time alerts on your main KPIs',
    image: '/images/illustration-alerts.svg'
  },
  {
    title: 'Seamless Asana Integration',
    description:
      'No more guessing games; receive transparent insights in English',
    image: '/images/illustration-asana.svg'
  },
  {
    title: 'Tailored Connections',
    description:
      'Receive insights and alerts without leaving your favorite communication platform',
    image: '/images/illustration-connections.svg'
  },
  {
    title: 'Dynamic Data Sync',
    description:
      '24/7 coverage of your data, enabling you to catch spikes in trends immediately',
    image: '/images/illustration-sync.svg'
  }
];

export function WorkflowSection() {
  return (
    <section className='px-6 py-20 md:px-12 lg:px-[272px]'>
      <div className='mx-auto max-w-6xl'>
        {/* Section Header */}
        <div className='mb-14 space-y-9'>
          <div className='flex items-center gap-3'>
            <UpdateIcon width={24} height={24} />
            <span className='landing-badge-text'>Instant Updates</span>
          </div>
          <div className='space-y-4'>
            <h2 className='landing-section-title text-4xl md:text-5xl'>
              Streamline Your Workflows with Automation
            </h2>
            <p className='landing-subtitle max-w-2xl'>
              Automate repetitive tasks and optimize your workflows to enhance
              productivity and efficiency.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center gap-7 p-4'>
              <div className='relative h-[200px] w-full'>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className='object-contain'
                />
              </div>
              <div className='space-y-1.5 text-center'>
                <h3 className='landing-feature-title'>{feature.title}</h3>
                <p className='landing-feature-description'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
