import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
  title: string;
  badge: string;
  children?: ReactNode;
}

export function SectionHeader({ title, badge, children }: SectionHeaderProps) {
  return (
    <div className='flex items-center justify-between gap-4'>
      <h2 className='text-foreground text-3xl font-bold'>{title}</h2>
      <Badge
        variant='outline'
        className='border-design-system-primary text-design-system-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase'
      >
        {badge}
      </Badge>
      {children}
    </div>
  );
}
