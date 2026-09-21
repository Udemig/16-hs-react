import { memo } from 'react';
import { Icon } from './Icon';

export const QuantityStepper = memo(function QuantityStepper({ value, onChange }) {
  const handleDecrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div className="flex items-center justify-between bg-surface-container rounded-full px-3 py-2 w-28 shrink-0">
      <button
        type="button"
        aria-label="Miktarı azalt"
        onClick={handleDecrement}
        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface text-primary transition-colors"
      >
        <Icon name="remove" size={16} />
      </button>
      <span className="font-label-md text-label-md font-bold text-primary">
        {value}
      </span>
      <button
        type="button"
        aria-label="Miktarı artır"
        onClick={handleIncrement}
        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface text-primary transition-colors"
      >
        <Icon name="add" size={16} />
      </button>
    </div>
  );
});
