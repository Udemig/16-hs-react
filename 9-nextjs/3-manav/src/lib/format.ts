// Fiyatları tek tip biçimde gösterir: 12,50 ₺
export const formatPrice = (amount: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(amount);

// Ondalık hatalarını (0.1 + 0.2 gibi) önlemek için tutarı kuruşa yuvarlar
export const roundMoney = (amount: number) => Math.round(amount * 100) / 100;
