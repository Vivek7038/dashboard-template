import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  title: string;
  price: string | null;
  priceSubtext?: string;
  billingToggle?: boolean;
  billingText?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
  additionalText?: string;
  highlighted?: boolean;
}

export function PricingCard({
  title,
  price,
  priceSubtext,
  billingToggle,
  billingText,
  features,
  buttonText,
  buttonVariant = 'outline',
  additionalText,
  highlighted = false
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border p-8 transition-all',
        highlighted
          ? 'border-primary/20 bg-card shadow-lg'
          : 'border-border bg-card/50'
      )}
    >
      {/* Header */}
      <div className='mb-6'>
        <h3 className='text-foreground text-2xl font-semibold'>{title}</h3>
      </div>

      {/* Price */}
      <div className='mb-6'>
        {price ? (
          <div className='flex items-baseline gap-1'>
            <span className='text-foreground text-4xl font-bold'>{price}</span>
            {priceSubtext && (
              <span className='text-muted-foreground'>{priceSubtext}</span>
            )}
          </div>
        ) : (
          <div className='text-foreground text-2xl font-semibold'>
            Contact us
          </div>
        )}
      </div>

      {/* Billing Toggle */}
      {billingToggle && billingText && (
        <div className='mb-8 flex items-center gap-3'>
          <Switch defaultChecked />
          <span className='text-foreground text-sm'>{billingText}</span>
        </div>
      )}

      {/* Billing Text without toggle */}
      {!billingToggle && billingText && (
        <div className='mb-8'>
          <span className='text-muted-foreground text-sm'>{billingText}</span>
        </div>
      )}

      {/* Features */}
      <div className='mb-8 flex-1 space-y-4'>
        {features.map((feature, index) => (
          <div key={index} className='flex items-start gap-3'>
            <div className='bg-primary/10 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full'>
              <Check className='text-primary size-3' />
            </div>
            <span
              className={cn(
                'text-sm',
                feature.highlighted
                  ? 'text-foreground font-medium'
                  : 'text-foreground'
              )}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className='space-y-3'>
        <Button variant={buttonVariant} className='w-full' size='lg'>
          {buttonText}
        </Button>
        {additionalText && (
          <div className='text-center'>
            <span className='text-muted-foreground text-sm'>or </span>
            <button className='text-foreground hover:text-primary text-sm font-medium underline underline-offset-4'>
              {additionalText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
