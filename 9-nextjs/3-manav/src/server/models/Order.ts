import mongoose, { Model, Schema, Types } from "mongoose";

export type OrderStatus = "pending" | "paid";

export interface IOrderItem {
  product: Types.ObjectId;
  quantity: number;
  price: number;
  name: string;
}

export interface IOrder {
  _id: Types.ObjectId;
  items: IOrderItem[];
  total_amount: number;
  currency: string;
  customer_id: string;
  customer_name: string;
  customer_phone: string;
  delivery_address: string;
  is_delivery: boolean;
  status: OrderStatus;
  stripe_session_id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Sipariş anındaki fiyat ve ad saklanır; ürün sonra değişse de sipariş değişmez
const orderItemSchema = new Schema<IOrderItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: "Grocery", required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    name: { type: String, required: true },
  },
  { _id: false },
);

const orderSchema = new Schema<IOrder>(
  {
    items: [orderItemSchema],
    total_amount: { type: Number, required: true },
    currency: { type: String, default: "TRY" },
    customer_id: { type: String, required: true, index: true },
    customer_name: { type: String, required: true },
    customer_phone: { type: String, required: true },
    delivery_address: { type: String, default: "" },
    is_delivery: { type: Boolean, default: false },
    // Sipariş ödeme onaylanana kadar "pending" kalır; sadece webhook "paid" yapar
    status: { type: String, enum: ["pending", "paid"], default: "pending", index: true },
    // Stripe oturum kimliği: webhook'un aynı siparişi iki kez işlemesini engeller
    stripe_session_id: { type: String, unique: true, sparse: true },
  },
  { timestamps: true },
);

const Order = (mongoose.models.Order as Model<IOrder> | undefined) ??
  mongoose.model<IOrder>("Order", orderSchema);

export default Order;
