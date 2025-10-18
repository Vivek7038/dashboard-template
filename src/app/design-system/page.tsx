import { TypographySection } from '@/components/design-system/TypographySection';
import { ColorsSection } from '@/components/design-system/ColorsSection';
import { ComponentsSection } from '@/components/design-system/ComponentsSection';

export default function DesignSystemPage() {
  return (
    <div className='bg-design-system-background min-h-screen w-full overflow-y-auto p-4 sm:p-6 lg:p-8'>
      <div className='mx-auto w-full max-w-[1800px] space-y-8 pb-8'>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-[400px_1fr]'>
          <div className='space-y-8'>
            <TypographySection />
            <ColorsSection />
          </div>
          <div className='w-full'>
            <ComponentsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
