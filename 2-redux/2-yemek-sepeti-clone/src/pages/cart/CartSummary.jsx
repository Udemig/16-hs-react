const CartSummary = ({ cart }) => {
  // toplam ürün adedini hesapla
  const totalAmount = cart.reduce((total, item) => total + item.amount, 0);
  // toplam fiyat değerini hesapla
  const totalPrice = cart.reduce((total, item) => total + item.amount * item.price, 0);

  return (
    <div className="box p-5 h-fit space-y-4 md:sticky md:top-40">
      <h2 className="text-xl font-semibold">Sipariş Detayları</h2>

      <p className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Ürün Adedi</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>

      <p className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Toplam Fiyat</span>
        <span className="text-lg font-bold text-red-500">{totalPrice.toFixed(2)}₺</span>
      </p>

      <button className="w-full rounded-full bg-red-500/90 py-3 text-white font-semibold shadow-lg hover:bg-red-600">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default CartSummary;
