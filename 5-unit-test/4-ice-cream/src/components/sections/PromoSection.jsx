import { Icon } from '../ui/Icon';

export const PromoSection = ({ promo }) => {
  if (!promo) return null;

  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary-fixed via-surface-container-high to-secondary-fixed/60 p-8 lg:p-12 shadow-[0_8px_30px_rgba(162,58,74,0.12)]">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-secondary/10 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                <span>{promo.badge}</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg lg:text-display-md text-primary font-serif">
                {promo.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                {promo.description}
              </p>
            </div>
            <div className="shrink-0">
              <a
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md active:scale-95"
                href={promo.ctaLink || "#urunler"}
              >
                <span>{promo.ctaText}</span>
                <Icon name="arrow_forward" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
