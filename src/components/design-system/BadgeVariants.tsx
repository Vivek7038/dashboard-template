import { Badge } from '@/components/ui/badge';
import { Star, X } from 'lucide-react';

export function BadgeVariants() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center gap-3'>
        <h3 className='text-foreground text-xl font-semibold'>Badge & Chip</h3>
        <span className='text-muted-foreground text-sm'>
          3 sizes / 2 styles
        </span>
      </div>

      <div className='border-design-system-gray-light grid grid-cols-1 gap-6 rounded-2xl border-2 border-dashed p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {/* Large Filled Badges */}
        <div className='flex items-center gap-3'>
          <Badge className='bg-design-system-primary hover:bg-design-system-primary/90 h-10 gap-2 rounded-lg px-4 text-sm font-medium text-white'>
            <Star className='size-4 fill-current' />
            Badge
            <X className='size-4' />
          </Badge>
          <Badge className='bg-design-system-primary hover:bg-design-system-primary/90 size-10 rounded-lg p-0'>
            <Star className='size-5 fill-white text-white' />
          </Badge>
        </div>

        {/* Large Outline Badges */}
        <div className='flex items-center gap-3'>
          <Badge
            variant='outline'
            className='border-design-system-primary text-design-system-primary hover:bg-design-system-primary/10 h-10 gap-2 rounded-lg border-2 bg-transparent px-4 text-sm font-medium'
          >
            <Star className='size-4' />
            Badge
          </Badge>
          <Badge
            variant='outline'
            className='border-design-system-primary hover:bg-design-system-primary/10 size-10 rounded-lg border-2 bg-transparent p-0'
          >
            <Star className='text-design-system-primary size-5' />
          </Badge>
        </div>

        {/* Medium Filled Badges */}
        <div className='flex items-center gap-3'>
          <Badge className='bg-design-system-primary hover:bg-design-system-primary/90 h-9 gap-2 rounded-lg px-3.5 text-sm font-medium text-white'>
            <Star className='size-3.5 fill-current' />
            Badge
            <X className='size-3.5' />
          </Badge>
          <Badge className='bg-design-system-primary hover:bg-design-system-primary/90 size-9 rounded-lg p-0'>
            <Star className='size-4 fill-white text-white' />
          </Badge>
        </div>

        {/* Medium Outline Badges */}
        <div className='flex items-center gap-3'>
          <Badge
            variant='outline'
            className='border-design-system-primary text-design-system-primary hover:bg-design-system-primary/10 h-9 gap-2 rounded-lg border-2 bg-transparent px-3.5 text-sm font-medium'
          >
            <Star className='size-3.5' />
            Badge
            <X className='size-3.5' />
          </Badge>
          <Badge
            variant='outline'
            className='border-design-system-primary hover:bg-design-system-primary/10 size-9 rounded-lg border-2 bg-transparent p-0'
          >
            <Star className='text-design-system-primary size-4' />
          </Badge>
        </div>

        {/* Small Filled Badges */}
        <div className='flex items-center gap-2.5'>
          <Badge className='bg-design-system-primary hover:bg-design-system-primary/90 h-8 gap-1.5 rounded-md px-3 text-xs font-medium text-white'>
            <Star className='size-3 fill-current' />
            Badge
            <X className='size-3' />
          </Badge>
          <Badge className='bg-design-system-primary hover:bg-design-system-primary/90 size-8 rounded-md p-0'>
            <Star className='size-3.5 fill-white text-white' />
          </Badge>
        </div>

        {/* Small Outline Badges */}
        <div className='flex items-center gap-2.5'>
          <Badge
            variant='outline'
            className='border-design-system-primary text-design-system-primary hover:bg-design-system-primary/10 h-8 gap-1.5 rounded-md border-2 bg-transparent px-3 text-xs font-medium'
          >
            <Star className='size-3' />
            Badge
            <X className='size-3' />
          </Badge>
          <Badge
            variant='outline'
            className='border-design-system-primary hover:bg-design-system-primary/10 size-8 rounded-md border-2 bg-transparent p-0'
          >
            <Star className='text-design-system-primary size-3.5' />
          </Badge>
        </div>
      </div>
    </div>
  );
}
