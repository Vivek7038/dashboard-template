import { NotificationBar } from '@/components/landing/NotificationBar';
import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { IntegrationCards } from '@/components/landing/IntegrationCards';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { TextBanner } from '@/components/landing/TextBanner';
import { WorkflowSection } from '@/components/landing/WorkflowSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';
import MonitorIcon from '@/components/icons/MonitorIcon';
import IntegrationIcon from '@/components/icons/IntegrationIcon';
import InsightIcon from '@/components/icons/InsightIcon';
import DataSyncIcon from '@/components/icons/DataSyncIcon';

export default function LandingPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-gray-950'>
      <NotificationBar />
      <Navigation />
      <main>
        <HeroSection />
        <IntegrationCards />
        <FeatureSection
          badge={{ icon: MonitorIcon, text: 'Always Stay Ahead' }}
          title='Proactive Real-Time Monitoring'
          description="Gain critical insights by monitoring your business activities in real-time, ensuring you're always one step ahead."
          imageSrc='/images/dashboard-mockup-1.png'
          imageAlt='Dashboard showing real-time monitoring'
        />
        <TextBanner
          icon={IntegrationIcon}
          title='Seamless Asana Integration'
          description='Receive insights and alerts without leaving your favorite communication platform'
        />
        <WorkflowSection />
        <FeatureSection
          badge={{ icon: InsightIcon, text: 'Deep Insights, Quick Decisions' }}
          title='Instant Data Analysis at Your Command'
          description='Leverage advanced analytics to gain deep insights into your data, enabling faster and smarter decision-making.'
          imageSrc='/images/dashboard-mockup-2.png'
          imageAlt='Dashboard showing data analysis'
        />
        <TextBanner
          icon={DataSyncIcon}
          title='Dynamic Data Sync'
          description='24/7 coverage of your data, enabling you to catch spikes in trends immediately'
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
