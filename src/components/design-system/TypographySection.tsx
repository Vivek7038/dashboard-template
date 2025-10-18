import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from './SectionHeader';

export function TypographySection() {
  return (
    <Card className='bg-design-system-card-bg border-none shadow-lg'>
      <CardContent className='space-y-6'>
        <SectionHeader title='Typography' badge='20 STYLES' />
        <p className='text-muted-foreground text-sm leading-relaxed'>
          Inter is a variable font family carefully crafted & designed for
          computer screens.
        </p>
        <div className='flex items-end gap-4 pt-4'>
          <div className='text-foreground text-[120px] leading-none font-bold'>
            Aa
          </div>
          <div className='text-foreground pb-2 text-[80px] leading-none font-normal'>
            Aa
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
