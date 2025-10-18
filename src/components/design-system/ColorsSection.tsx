import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from './SectionHeader';
import { ColorPalette } from './ColorPalette';

const BLUE_PALETTE = [
  '#2E3A8C',
  '#3D4DB8',
  '#4A5FD8',
  '#5B6FED',
  '#7B8EFF',
  '#A0AEFF',
  '#C5CDFF',
  '#D9DEFF'
];

const GRAY_PALETTE = [
  '#1F2937',
  '#374151',
  '#4B5563',
  '#6B7280',
  '#9CA3AF',
  '#D1D5DB',
  '#E5E7EB',
  '#F3F4F6'
];

const GREEN_PALETTE = [
  '#166534',
  '#15803D',
  '#16A34A',
  '#22C55E',
  '#4ADE80',
  '#86EFAC',
  '#BBF7D0',
  '#D1FAE5'
];

export function ColorsSection() {
  return (
    <Card className='bg-design-system-card-bg border-none shadow-lg'>
      <CardContent className='space-y-6'>
        <SectionHeader title='Colors' badge='80 STYLES' />
        <div className='space-y-4 pt-4'>
          <ColorPalette colors={BLUE_PALETTE} />
          <ColorPalette colors={GRAY_PALETTE} />
          <ColorPalette colors={GREEN_PALETTE} />
        </div>
      </CardContent>
    </Card>
  );
}
