import { useEffect } from 'react';
import { useCart } from '../../context/useCart';
import { Icon } from './Icon';

export const Toast = () => {
  const { toastMessage, toastVisible, dispatch } = useCart();

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE_TOAST' });
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [toastVisible, dispatch]);

  return (
    <div
      className={`fixed bottom-8 right-6 z-50 transform transition-all duration-300 pointer-events-none flex items-center gap-3 px-5 py-3.5 rounded-full bg-primary text-on-primary shadow-xl ${
        toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      role="alert"
    >
      <Icon name="check_circle" size={20} className="text-secondary-fixed" />
      <span className="font-label-md">{toastMessage}</span>
    </div>
  );
};
