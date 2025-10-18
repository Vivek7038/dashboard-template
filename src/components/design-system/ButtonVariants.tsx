import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';

export function ButtonVariants() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center gap-3'>
        <h3 className='text-foreground text-xl font-semibold'>Button</h3>
        <span className='text-muted-foreground text-sm'>
          5 sizes / 3 styles
        </span>
      </div>

      <div className='border-design-system-gray-light grid grid-cols-1 gap-6 rounded-2xl border-2 border-dashed p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {/* Large Primary Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='lg'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90 size-12'
          >
            <ArrowUp className='size-5' />
          </Button>
        </div>

        {/* Large Dark Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='lg'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 size-12'
          >
            <ArrowUp className='size-5' />
          </Button>
        </div>

        {/* Large Light Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='lg'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90 size-12'
          >
            <ArrowUp className='size-5' />
          </Button>
        </div>

        {/* Large Outline Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='lg'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90 size-12'
          >
            <ArrowUp className='size-5' />
          </Button>
        </div>

        {/* Medium Primary Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='default'
            className='bg-design-system-primary-dark hover:bg-design-system-primary-dark/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-dark hover:bg-design-system-primary-dark/90'
          >
            <ArrowUp className='size-4' />
          </Button>
        </div>

        {/* Medium Dark Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='default'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90'
          >
            <ArrowUp className='size-4' />
          </Button>
        </div>

        {/* Medium Light Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='default'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowUp className='size-4' />
          </Button>
        </div>

        {/* Medium Outline Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='default'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowUp className='size-4' />
          </Button>
        </div>

        {/* Small Primary Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='sm'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-3.5' />
            Button
            <ArrowRight className='size-3.5' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90 size-8'
          >
            <ArrowUp className='size-3.5' />
          </Button>
        </div>

        {/* Small Dark Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='sm'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90'
          >
            <ArrowLeft className='size-3.5' />
            Button
            <ArrowRight className='size-3.5' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 size-8'
          >
            <ArrowUp className='size-3.5' />
          </Button>
        </div>

        {/* Small Light Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='sm'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-3.5' />
            Button
            <ArrowRight className='size-3.5' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90 size-8'
          >
            <ArrowUp className='size-3.5' />
          </Button>
        </div>

        {/* Small Outline Buttons */}
        <div className='flex items-center gap-3'>
          <Button
            size='sm'
            className='bg-design-system-primary hover:bg-design-system-primary/90'
          >
            <ArrowLeft className='size-3.5' />
            Button
            <ArrowRight className='size-3.5' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary hover:bg-design-system-primary/90 size-8'
          >
            <ArrowUp className='size-3.5' />
          </Button>
        </div>

        {/* Extra Small Primary Buttons */}
        <div className='flex items-center gap-2.5'>
          <Button
            size='sm'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 h-7 px-3 text-xs'
          >
            <ArrowLeft className='size-3' />
            Button
            <ArrowRight className='size-3' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 size-7'
          >
            <ArrowUp className='size-3' />
          </Button>
        </div>

        {/* Extra Small Dark Buttons */}
        <div className='flex items-center gap-2.5'>
          <Button
            size='sm'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 h-7 px-3 text-xs'
          >
            <ArrowLeft className='size-3' />
            Button
            <ArrowRight className='size-3' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 size-7'
          >
            <ArrowUp className='size-3' />
          </Button>
        </div>

        {/* Extra Small Light Buttons */}
        <div className='flex items-center gap-2.5'>
          <Button
            size='sm'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 h-7 px-3 text-xs'
          >
            <ArrowLeft className='size-3' />
            Button
            <ArrowRight className='size-3' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 size-7'
          >
            <ArrowUp className='size-3' />
          </Button>
        </div>

        {/* Extra Small Outline Buttons */}
        <div className='flex items-center gap-2.5'>
          <Button
            size='sm'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 h-7 px-3 text-xs'
          >
            <ArrowLeft className='size-3' />
            Button
            <ArrowRight className='size-3' />
          </Button>
          <Button
            size='icon'
            className='bg-design-system-primary-darker hover:bg-design-system-primary-darker/90 size-7'
          >
            <ArrowUp className='size-3' />
          </Button>
        </div>

        {/* Disabled Buttons */}
        <div className='flex items-center gap-3'>
          <Button size='default' variant='secondary' disabled>
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button size='icon' variant='secondary' disabled>
            <ArrowUp className='size-4' />
          </Button>
        </div>

        <div className='flex items-center gap-3'>
          <Button size='default' variant='secondary' disabled>
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button size='icon' variant='secondary' disabled>
            <ArrowUp className='size-4' />
          </Button>
        </div>

        <div className='flex items-center gap-3'>
          <Button size='default' variant='secondary' disabled>
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button size='icon' variant='secondary' disabled>
            <ArrowUp className='size-4' />
          </Button>
        </div>

        <div className='flex items-center gap-3'>
          <Button size='default' variant='secondary' disabled>
            <ArrowLeft className='size-4' />
            Button
            <ArrowRight className='size-4' />
          </Button>
          <Button size='icon' variant='secondary' disabled>
            <ArrowUp className='size-4' />
          </Button>
        </div>
      </div>
    </div>
  );
}
