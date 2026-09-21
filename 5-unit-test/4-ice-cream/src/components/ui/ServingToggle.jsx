import { memo } from 'react';

export const ServingToggle = memo(function ServingToggle({ value, onChange }) {
  return (
    <div className="flex bg-surface-container rounded-full p-1 gap-1">
      <button
        type="button"
        onClick={() => onChange('Külah')}
        className={
          value === 'Külah'
            ? 'px-3 py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary'
            : 'px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high'
        }
      >
        Külah 🍦
      </button>
      <button
        type="button"
        onClick={() => onChange('Bardak')}
        className={
          value === 'Bardak'
            ? 'px-3 py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary'
            : 'px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high'
        }
      >
        Bardak 🍨
      </button>
    </div>
  );
});
