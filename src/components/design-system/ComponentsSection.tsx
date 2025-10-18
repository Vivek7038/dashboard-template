import { Badge } from '@/components/ui/badge';
import { ButtonVariants } from './ButtonVariants';
import { BadgeVariants } from './BadgeVariants';

export function ComponentsSection() {
  return (
    <div className='space-y-8 rounded-2xl bg-white p-6 shadow-lg sm:p-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-foreground text-3xl font-bold'>Components</h2>
        <Badge
          variant='outline'
          className='border-design-system-primary text-design-system-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase'
        >
          FULLY AUTO-LAYOUT
        </Badge>
      </div>

      <div className='space-y-12'>
        <ButtonVariants />
        <BadgeVariants />
      </div>
    </div>
  );
}
