import { useState, useEffect } from 'react';
import { Icon } from './Icon';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Sayfanın başına dön"
      className={`fixed bottom-8 left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest text-primary shadow-[0_4px_16px_rgba(50,25,23,0.15)] border border-outline-variant/30 transition-all duration-300 hover:bg-surface-container-low hover:-translate-y-1 hover:shadow-xl active:scale-95 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon name="arrow_upward" size={22} />
    </button>
  );
};
