import { BenefitCard } from '../ui/BenefitCard';

export function BenefitsSection({ benefits = [] }) {
  return (
    <section className="w-full py-12 bg-surface-container-low/70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
