import mongoose, { Model, Schema, Types } from "mongoose";

export interface ICartItem {
  grocery: Types.ObjectId;
  quantity: number;
}

export interface ICart {
  _id: Types.ObjectId;
  userId: string;
  items: ICartItem[];
  createdAt: Date;
  updatedAt: Date;
}

// Fiyat ve isim bilerek tutulmaz: sepet her zaman ürünün güncel fiyatını gösterir
const cartItemSchema = new Schema<ICartItem>(
  {
    grocery: { type: Schema.Types.ObjectId, ref: "Grocery", required: true },
    quantity: { type: Number, required: true, min: 1, max: 99, default: 1 },
  },
  { _id: false },
);

const cartSchema = new Schema<ICart>(
  {
    // Her kullanıcının tek sepeti olması için benzersiz; eşzamanlı oluşturmada çift sepeti engeller
    userId: { type: String, required: true, unique: true },
    items: [cartItemSchema],
  },
  { timestamps: true },
);

const Cart = (mongoose.models.Cart as Model<ICart> | undefined) ??
  mongoose.model<ICart>("Cart", cartSchema);

export default Cart;
