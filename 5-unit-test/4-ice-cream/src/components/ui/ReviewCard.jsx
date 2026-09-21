import { memo } from 'react';
import { Icon } from './Icon';

export const ReviewCard = memo(function ReviewCard({ review }) {
  const { name, initials, location, rating = 5, text, avatarBg, avatarText } = review;

  let avatarClass = 'bg-secondary-fixed text-on-secondary-fixed';
  if (avatarBg === 'surface-container-highest') {
    avatarClass = 'bg-surface-container-highest text-on-surface';
  } else if (avatarBg === 'tertiary-fixed') {
    avatarClass = 'bg-tertiary-fixed text-on-tertiary-fixed';
  } else if (avatarBg && avatarText) {
    avatarClass = `bg-${avatarBg} text-${avatarText}`;
  }

  return (
    <div className="p-8 rounded-3xl bg-surface-container-low flex flex-col justify-between space-y-6 shadow-[0_4px_16px_rgba(50,25,23,0.04)]">
      <div className="space-y-4">
        <div className="flex text-secondary-container">
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} name="star" size={20} filled={true} />
          ))}
        </div>
        <p className="font-body-md text-body-md text-on-surface italic">
          "{text}"
        </p>
      </div>
      <div className="flex items-center gap-3 pt-2">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-label-md ${avatarClass}`}>
          {initials}
        </div>
        <div>
          <p className="font-title-md text-title-md font-semibold text-primary">{name}</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant">{location}</p>
        </div>
      </div>
    </div>
  );
});
