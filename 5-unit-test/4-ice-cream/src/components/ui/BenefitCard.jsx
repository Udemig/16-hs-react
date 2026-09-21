import { memo } from 'react';
import { Icon } from './Icon';

export const BenefitCard = memo(function BenefitCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(50,25,23,0.04)] flex flex-col space-y-3 transition-transform hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
        <Icon name={icon} size={26} />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-primary font-serif">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </div>
  );
});
