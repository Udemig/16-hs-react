import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { ServingToggle } from './ServingToggle';
import { QuantityStepper } from './QuantityStepper';

export const ProductCard = memo(function ProductCard({ product, onAddToCart }) {
  const [serving, setServing] = useState(product.servingDefault || 'Külah');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const getBadgeClassName = (type) => {
    switch (type) {
      case 'popular':
      case 'favorite':
        return 'bg-secondary-fixed text-on-secondary-fixed';
      case 'vegan':
      case 'refreshing':
        return 'bg-tertiary-fixed text-on-tertiary-fixed';
      case 'classic':
      case 'origin':
      default:
        return 'bg-surface-container-highest text-on-surface';
    }
  };

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      serving,
      quantity,
      image: product.image,
    });
    setQuantity(1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1300);
  };

  return (
    <article className="rounded-3xl bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(50,25,23,0.05)] flex flex-col justify-between space-y-5 transition-all hover:shadow-[0_12px_32px_rgba(50,25,23,0.09)]">
      <div>
        <Link
          to={`/urun/${product.id}`}
          className="block relative h-60 rounded-2xl overflow-hidden bg-surface-container group cursor-pointer"
          title={`${product.name} detaylarını gör`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 px-3 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-sm ${getBadgeClassName(product.badgeType)}`}>
              {product.badge}
            </span>
          )}
        </Link>
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <Link
              to={`/urun/${product.id}`}
              className="hover:text-secondary transition-colors"
            >
              <h3 className="font-headline-sm">{product.name}</h3>
            </Link>
            <span className="font-title-md font-bold">₺{product.price}</span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
            {product.description}
          </p>
        </div>
      </div>
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
          <span>Sunum Tercihi:</span>
          <ServingToggle value={serving} onChange={setServing} />
        </div>
        <div className="flex items-center gap-3">
          <QuantityStepper value={quantity} onChange={setQuantity} />
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 py-3 px-4 rounded-full font-label-md text-label-md font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_4px_12px_rgba(50,25,23,0.15)] active:scale-95 ${
              isAdded
                ? 'bg-tertiary text-on-tertiary scale-[1.02]'
                : 'bg-primary hover:bg-primary-container text-on-primary'
            }`}
          >
            <Icon name={isAdded ? 'check_circle' : 'add_shopping_cart'} size={18} filled={isAdded} />
            <span>{isAdded ? 'Eklendi! ✓' : 'Sepete Ekle'}</span>
          </button>
        </div>
      </div>
    </article>
  );
});
