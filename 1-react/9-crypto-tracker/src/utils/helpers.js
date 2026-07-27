// fiyatı formatla
export const formatPrice = (price) => {
  if (!price) return "N/A";

  const absPrice = Math.abs(price);

  if (absPrice < 0.01) return `$${price.toFixed(6)}`;
  if (absPrice < 1) return `$${price.toFixed(4)}`;
  if (absPrice < 100) return `$${price.toFixed(2)}`;

  return `$${price.toLocaleString()}`;
};

// yüzdelik değeri formatla
export const formatPercentage = (value) => {
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  const formatted = Math.abs(value).toFixed(2);

  return `${sign}${formatted}%`;
};

// büyük sayıları formatla
export const formatBigNumber = (value, locale = "tr") => {
  return (
    "$" +
    new Intl.NumberFormat(locale, {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 1,
    }).format(value)
  );
};

// tarih formatla
export const formatDate = (unix, days) => {
  const date = new Date(unix);

  if (days === 1) {
    // 1 gün seçiliyse saat ve dakikayı döndür
    return date.toLocaleTimeString("tr", { hour: "2-digit", minute: "2-digit" });
  } else if (days === 7) {
    // 7 gün seçiliyse gün/ay/gün_ismi döndür
    return date.toLocaleDateString("tr", {
      day: "2-digit",
      month: "2-digit",
      weekday: "short",
    });
  } else {
    // 7 günden büyük bir değer seçiliyse gün / ay döndür
    return date.toLocaleDateString("tr", {
      day: "2-digit",
      month: "2-digit",
    });
  }
};
