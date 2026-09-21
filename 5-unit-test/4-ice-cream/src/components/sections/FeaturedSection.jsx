import { FeaturedCard } from "../ui/FeaturedCard";

export function FeaturedSection({ featuredProducts = [], onQuickAdd }) {
  return (
    <section id="onerilenler" className="w-full py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-label-md text-secondary font-bold uppercase tracking-wider mb-3">
            İtalyan Gelato Koleksiyonu
          </span>
          <h2 className="font-display-sm text-display-sm text-primary font-serif mb-4">
            En Sevilen Tatlarımız
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Usta şeflerimiz tarafından özenle hazırlanan, gerçek meyveler ve en kaliteli
            malzemelerle sunduğumuz favori lezzetlerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <FeaturedCard key={product.id} product={product} onQuickAdd={onQuickAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
