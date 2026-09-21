import { memo } from 'react';

export const CategoryFilter = memo(function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onCategoryChange(category.id)}
          className={
            activeCategory === category.id
              ? 'px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all bg-primary text-on-primary shadow-sm'
              : 'px-5 py-2.5 rounded-full font-label-lg text-label-lg transition-all bg-surface-container hover:bg-surface-container-high text-on-surface'
          }
        >
          {category.label}
          {category.count ? ` (${category.count})` : ''}
        </button>
      ))}
    </div>
  );
});
