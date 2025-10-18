import { PricingCard } from './PricingCard';

const pricingPlans = [
  {
    title: 'Free',
    price: '$0',
    priceSubtext: null,
    billingToggle: false,
    billingText: 'Free for everyone',
    features: [
      { text: 'Unlimited members' },
      { text: '2 teams' },
      { text: '250 issues' },
      { text: 'Slack and GitHub' },
      { text: 'AI agents' }
    ],
    buttonText: 'Get started',
    buttonVariant: 'outline' as const
  },
  {
    title: 'Basic',
    price: '$10',
    priceSubtext: 'per user/month',
    billingToggle: true,
    billingText: 'Billed yearly',
    features: [
      { text: 'All Free features +' },
      { text: '5 teams' },
      { text: 'Unlimited issues' },
      { text: 'Unlimited file uploads' },
      { text: 'Admin roles' }
    ],
    buttonText: 'Get started',
    buttonVariant: 'outline' as const
  },
  {
    title: 'Business',
    price: '$16',
    priceSubtext: 'per user/month',
    billingToggle: true,
    billingText: 'Billed yearly',
    features: [
      { text: 'All Basic features +' },
      { text: 'Issue SLAs', highlighted: true },
      { text: 'Unlimited teams' },
      { text: 'Private teams and guests' },
      { text: 'Product Intelligence' },
      { text: 'Linear Insights' },
      { text: 'Linear Asks' },
      { text: 'Zendesk and Intercom integrations' }
    ],
    buttonText: 'Get started',
    buttonVariant: 'default' as const,
    additionalText: 'contact sales',
    highlighted: true
  },
  {
    title: 'Enterprise',
    price: null,
    priceSubtext: null,
    billingToggle: false,
    billingText: 'Annual billing only',
    features: [
      { text: 'All Business features +' },
      { text: 'Sub-initiatives' },
      { text: 'Advanced Linear Asks', highlighted: true },
      { text: 'Dashboards' },
      { text: 'SAML and SCIM', highlighted: true },
      { text: 'Advanced security', highlighted: true },
      { text: 'Migration and onboarding support' }
    ],
    buttonText: 'Request trial',
    buttonVariant: 'outline' as const
  }
];

export function PricingSection() {
  return (
    <section className='w-full py-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
