export const MIN_ORDER_AMOUNT = 50;
export const MAX_QUANTITY = 99;

export interface CustomerInfo {
  name: string;
  phone: string;
  deliveryAddress: string;
  isDelivery: boolean;
}

export const isValidQuantity = (value: unknown): value is number =>
  typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= MAX_QUANTITY;

// İstemciden gelen müşteri bilgilerini doğrular ve temizler
export function parseCustomerInfo(value: unknown): { data?: CustomerInfo; error?: string } {
  if (!value || typeof value !== "object") return { error: "Müşteri bilgileri gerekli" };

  const { name, phone, deliveryAddress, isDelivery } = value as Record<string, unknown>;

  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanPhone = typeof phone === "string" ? phone.replace(/[\s()-]/g, "") : "";
  const cleanAddress = typeof deliveryAddress === "string" ? deliveryAddress.trim() : "";
  const delivery = isDelivery === true;

  if (cleanName.length < 2 || cleanName.length > 80) {
    return { error: "Geçerli bir ad soyad girin" };
  }

  if (!/^\+?\d{10,15}$/.test(cleanPhone)) {
    return { error: "Geçerli bir telefon numarası girin" };
  }

  if (delivery && (cleanAddress.length < 5 || cleanAddress.length > 300)) {
    return { error: "Geçerli bir teslimat adresi girin" };
  }

  return {
    data: {
      name: cleanName,
      phone: cleanPhone,
      deliveryAddress: delivery ? cleanAddress : "",
      isDelivery: delivery,
    },
  };
}
