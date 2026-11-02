export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: string;
  nutritionalValue: string;
  expiryDays: number;
  photo?: string;
}

// Sepet kalemi fiyatı ürünün güncel fiyatından okunur
export interface BasketItem {
  grocery: Product;
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
}

export interface OrderItem {
  // Ürün silinmiş olabilir; bu yüzden null olabilir
  product: Product | null;
  quantity: number;
  price: number;
  name: string;
}

export interface Order {
  _id: string;
  items: OrderItem[];
  total_amount: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  is_delivery: boolean;
  status: "pending" | "paid";
  createdAt: string;
  updatedAt: string;
}
