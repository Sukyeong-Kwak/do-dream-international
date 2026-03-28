export const BRAND_COLORS = [
  {
    bg: 'bg-brand-primary-blue/5',
    icon: 'bg-brand-primary-blue/10 text-brand-primary-blue',
    border: 'border-brand-primary-blue/20',
    badge: 'bg-brand-primary-blue/10 text-brand-primary-blue',
    text: 'text-brand-primary-blue',
    highlight: 'text-brand-primary-blue/15',
  },
  {
    bg: 'bg-brand-primary-teal/5',
    icon: 'bg-brand-primary-teal/10 text-brand-primary-teal',
    border: 'border-brand-primary-teal/20',
    badge: 'bg-brand-primary-teal/10 text-brand-primary-teal',
    text: 'text-brand-primary-teal',
    highlight: 'text-brand-primary-teal/15',
  },
  {
    bg: 'bg-brand-accent-pink/5',
    icon: 'bg-brand-accent-pink/10 text-brand-accent-pink',
    border: 'border-brand-accent-pink/20',
    badge: 'bg-brand-accent-pink/10 text-brand-accent-pink',
    text: 'text-brand-accent-pink',
    highlight: 'text-brand-accent-pink/15',
  },
];

export const getBrandColor = (index: number) =>
  BRAND_COLORS[index % BRAND_COLORS.length];
