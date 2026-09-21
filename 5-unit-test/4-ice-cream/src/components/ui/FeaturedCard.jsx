import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

export const FeaturedCard = memo(function FeaturedCard({ product, onQuickAdd }) {
  const { id, name, description, price, image, badge, originLabel, certLabel, labelColor } = product;
  const colorClass = labelColor === 'tertiary' ? 'text-tertiary' : 'text-secondary';
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onQuickAdd(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1300);
  };

  return (
    <div className="group rounded-3xl bg-surface-container-low overflow-hidden shadow-[0_4px_24px_rgba(50,25,23,0.05)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(50,25,23,0.1)]">
      <Link
        to={`/urun/${id}`}
        className="block relative h-72 overflow-hidden bg-surface-container cursor-pointer"
        title={`${name} detaylarını gör`}
      >
        <img alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-surface-bright/90 backdrop-blur-sm font-label-sm text-label-sm text-primary font-bold shadow-sm">{badge}</span>
      </Link>
      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className={`flex items-center gap-2 ${colorClass} font-label-sm text-label-sm uppercase tracking-wide`}>
            <span>{originLabel}</span><span>•</span><span>{certLabel}</span>
          </div>
          <Link
            to={`/urun/${id}`}
            className="hover:text-secondary transition-colors block"
          >
            <h3 className="font-headline-md text-headline-md text-primary font-serif mt-1">{name}</h3>
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="font-title-md text-title-md font-bold text-primary">{price} ₺ <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ 2 Top</span></span>
          <button
            type="button"
            className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 ${
              isAdded
                ? 'bg-tertiary text-on-tertiary scale-105'
                : 'bg-primary hover:bg-primary-container text-on-primary'
            }`}
            onClick={handleAdd}
          >
            {isAdded ? 'Eklendi! ✓' : 'Hemen Ekle'}
          </button>
        </div>
      </div>
    </div>
  );
});
