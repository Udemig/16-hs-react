import { memo } from 'react';

export const Icon = memo(function Icon({ name, size = 24, filled = false, className = '' }) {
  const style = {
    fontSize: `${size}px`,
    ...(filled && { fontVariationSettings: "'FILL' 1" }),
  };

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
      aria-hidden="true"
    >
      {name}
    </span>
  );
});
