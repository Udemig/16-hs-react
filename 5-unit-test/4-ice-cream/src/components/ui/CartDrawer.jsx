import { useState, useEffect, useRef, useCallback } from 'react';
import { useCart } from '../../context/useCart';
import { Icon } from './Icon';

export const CartDrawer = () => {
  const {
    items,
    isOpen,
    dispatch,
    itemCount,
    subtotal,
    deliveryFee,
    total,
    freeDeliveryRemaining,
    freeDeliveryProgress,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  const [orderCompleted, setOrderCompleted] = useState(null);
  const [orderNote, setOrderNote] = useState('');
  const [showNote, setShowNote] = useState(false);
  const closeRef = useRef(null);

  const handleClose = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' });
    // Reset order completion screen after slide animation completes
    setTimeout(() => {
      setOrderCompleted(null);
      setOrderNote('');
      setShowNote(false);
    }, 300);
  }, [dispatch]);

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, handleClose]);

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.serving, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.serving, item.quantity - 1);
    } else {
      removeItem(item.id, item.serving, item.name);
    }
  };

  const handleDelete = (item) => {
    removeItem(item.id, item.serving, item.name);
  };

  const handleCompleteOrder = () => {
    if (items.length === 0) return;

    const orderNumber = `GLT-${Math.floor(100000 + Math.random() * 900000)}`;
    const completedInfo = {
      orderNumber,
      totalAmount: total,
      itemCount,
      estimatedTime: '25-35 dakika',
      orderNote: orderNote.trim(),
    };

    setOrderCompleted(completedInfo);
    clearCart();

    dispatch({
      type: 'SHOW_TOAST',
      payload: `🎉 Siparişiniz alındı! (#${orderNumber}) Termo-kutuda yola çıkıyor.`,
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-primary/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 w-full sm:w-[440px] h-full bg-surface-container-lowest shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Sepet"
        aria-modal="true"
      >
        {/* Header */}
        <header className="p-space-lg flex items-center justify-between border-b border-outline-variant/30 shrink-0">
          <div className="flex items-center gap-2">
            <Icon name="local_mall" size={24} className="text-primary" />
            <h2 className="font-headline-sm text-headline-sm text-primary font-serif">Sepetiniz</h2>
            {!orderCompleted && itemCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-bold">
                {items.length} Çeşit ({itemCount} Porsiyon)
              </span>
            )}
          </div>
          <button
            ref={closeRef}
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
            aria-label="Sepeti kapat"
            type="button"
          >
            <Icon name="close" size={22} />
          </button>
        </header>

        {/* Order Completed Success Screen */}
        {orderCompleted ? (
          <div className="flex-1 flex flex-col items-center justify-center p-space-lg text-center space-y-6 overflow-y-auto">
            <div className="w-20 h-20 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-lg animate-bounce">
              <Icon name="check_circle" size={48} filled={true} />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
                Sipariş Başarılı
              </span>
              <h3 className="font-headline-md text-headline-md text-primary font-serif">
                Siparişiniz Alındı!
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mx-auto">
                Geleneksel İtalyan tarifli taze dondurmalarınız termo-izole kutuda hazırlanıyor.
              </p>
            </div>

            <div className="w-full bg-surface-container-low rounded-2xl p-5 space-y-3 text-left">
              <div className="flex justify-between items-center text-body-sm text-on-surface-variant">
                <span>Sipariş Kodu:</span>
                <span className="font-bold text-primary tracking-wide">#{orderCompleted.orderNumber}</span>
              </div>
              <div className="flex justify-between items-center text-body-sm text-on-surface-variant">
                <span>Tahmini Teslimat:</span>
                <span className="font-bold text-secondary">{orderCompleted.estimatedTime}</span>
              </div>
              <div className="flex justify-between items-center text-body-sm text-on-surface-variant">
                <span>Ödenen Tutar:</span>
                <span className="font-bold text-primary font-serif text-title-md">
                  ₺{orderCompleted.totalAmount.toFixed(2).replace('.', ',')}
                </span>
              </div>
              {orderCompleted.orderNote && (
                <div className="pt-2 border-t border-outline-variant/20 text-xs text-on-surface-variant">
                  <span className="font-semibold text-primary">Sipariş Notunuz:</span> "{orderCompleted.orderNote}"
                </div>
              )}
              <div className="pt-2 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm text-on-surface-variant">
                <Icon name="ac_unit" size={16} className="text-secondary shrink-0" />
                <span>-18°C Termo-Kutu ile erimeden kapınızda.</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              type="button"
              className="w-full py-3.5 px-space-lg rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md active:scale-95"
            >
              Alışverişe Devam Et
            </button>
          </div>
        ) : items.length > 0 ? (
          <>
            {/* Free Delivery Progress Bar & Upsell */}
            <div className="px-space-lg py-3 bg-surface-container-low shrink-0">
              <div className="flex justify-between items-center text-label-sm font-label-sm text-on-surface-variant mb-1.5">
                <span>
                  {freeDeliveryRemaining > 0 ? (
                    <>
                      Ücretsiz teslimata <strong>₺{freeDeliveryRemaining.toFixed(2).replace('.', ',')}</strong> kaldı
                    </>
                  ) : (
                    <span className="text-secondary font-bold">🎉 Tebrikler! Ücretsiz teslimat kazandınız.</span>
                  )}
                </span>
                <span className="font-bold text-secondary">{Math.round(freeDeliveryProgress)}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                <div
                  className="h-full bg-secondary rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${freeDeliveryProgress}%` }}
                />
              </div>

              {/* Upsell nudge when close to free delivery */}
              {freeDeliveryRemaining > 0 && freeDeliveryRemaining <= 120 && (
                <div className="mt-2 text-xs text-on-surface-variant flex items-center gap-1.5 bg-surface-container px-2.5 py-1.5 rounded-lg border border-outline-variant/20">
                  <span className="text-base">🍨</span>
                  <span>
                    Sepetinize <strong>1 porsiyon</strong> daha ekleyin, <strong>25 ₺</strong> kurye bedeli ödemeyin!
                  </span>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-space-lg space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.serving}`}
                  className="flex gap-3 p-3.5 rounded-2xl bg-surface-container-low/60 shadow-[0_2px_10px_rgba(74,46,43,0.04)] border border-outline-variant/20 transition-all hover:bg-surface-container-low"
                >
                  {/* Thumbnail / Icon */}
                  <div className="w-16 h-16 rounded-xl bg-surface-container flex items-center justify-center shrink-0 overflow-hidden text-secondary">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Icon name="icecream" size={32} />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-title-md text-title-md text-primary font-serif truncate">
                        {item.name}
                      </h3>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-outline hover:text-error transition-colors p-1 -mt-1 -mr-1"
                        aria-label={`${item.name} ürününü sepetten sil`}
                        type="button"
                      >
                        <Icon name="delete" size={18} />
                      </button>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      {/* Serving Badge */}
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold shrink-0">
                        {item.serving === 'Külah' ? 'Külah 🍦' : 'Bardak 🍨'}
                      </span>

                      {/* Quantity Stepper (Decrease / Count / Increase) */}
                      <div className="flex items-center gap-2 bg-surface-container rounded-full px-2 py-1 shrink-0">
                        <button
                          onClick={() => handleDecrease(item)}
                          className="w-6 h-6 flex items-center justify-center text-primary hover:bg-surface rounded-full transition-colors active:scale-90"
                          aria-label="Miktarı azalt"
                          type="button"
                        >
                          <Icon name="remove" size={14} />
                        </button>
                        <span className="font-label-md text-label-md text-primary font-bold w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrease(item)}
                          className="w-6 h-6 flex items-center justify-center text-primary hover:bg-surface rounded-full transition-colors active:scale-90"
                          aria-label="Miktarı artır"
                          type="button"
                        >
                          <Icon name="add" size={14} />
                        </button>
                      </div>

                      {/* Total Price for this item */}
                      <span className="font-title-md text-title-md font-bold text-primary shrink-0">
                        ₺{(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <footer className="p-space-lg bg-surface-container-low border-t border-outline-variant/30 space-y-3 shrink-0">
              {/* Order Note Field */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowNote(!showNote)}
                  className="text-xs text-primary font-medium flex items-center gap-1 hover:underline focus:outline-none"
                >
                  <Icon name="edit_note" size={16} />
                  <span>{orderNote ? 'Sipariş Notunu Düzenle' : '+ Sipariş Notu Ekle (Zil, peçete vb.)'}</span>
                </button>
                {showNote && (
                  <div className="mt-2">
                    <textarea
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      placeholder="Örn: Külahları ayrı pakete koyunuz, kapı zilini çalmayınız..."
                      rows={2}
                      maxLength={150}
                      className="w-full text-xs p-2.5 rounded-xl bg-surface-container-lowest text-on-surface border border-outline-variant/30 outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                    <div className="text-[10px] text-on-surface-variant text-right">
                      {orderNote.length}/150
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-body-sm font-body-sm text-on-surface-variant">
                <span>Ara Toplam</span>
                <span className="font-semibold text-primary">
                  ₺{subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between text-body-sm font-body-sm text-on-surface-variant">
                <span>Teslimat Ücreti</span>
                <span className="font-semibold text-primary">
                  {deliveryFee === 0 ? (
                    <span className="text-secondary font-label-md font-bold">Ücretsiz</span>
                  ) : (
                    `₺${deliveryFee.toFixed(2).replace('.', ',')}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-headline-sm font-headline-sm text-primary pt-2 border-t border-outline-variant/20 font-serif">
                <span>Toplam</span>
                <span className="font-bold">
                  ₺{total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              {/* Complete Order Button */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3.5 px-space-lg rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_16px_rgba(50,25,23,0.2)] active:translate-y-0.5 mt-2"
                onClick={handleCompleteOrder}
                type="button"
              >
                <span className="font-semibold">Siparişi Tamamla</span>
                <Icon name="arrow_forward" size={18} />
              </button>
            </footer>
          </>
        ) : (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center p-space-lg text-center">
            <div className="w-20 h-20 bg-surface-container flex items-center justify-center rounded-full mb-4 text-on-surface-variant">
              <Icon name="shopping_bag" size={40} />
            </div>
            <h3 className="font-headline-sm font-serif text-primary mb-2">Sepetiniz Boş</h3>
            <p className="font-body-md text-on-surface-variant mb-6 max-w-xs">
              Nefis artizan dondurmalarımızdan seçerek sepetinizi doldurmaya başlayabilirsiniz.
            </p>
            <button
              onClick={handleClose}
              type="button"
              className="py-3 px-8 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm active:scale-95"
            >
              Lezzetleri Keşfet
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
