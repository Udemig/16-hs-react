import mongoose, { Model, Schema, Types } from "mongoose";
import { routing } from "@/i18n/routing";
import type { LocalizedText } from "@/lib/localized";

export interface IGrocery {
  _id: Types.ObjectId;
  name: LocalizedText;
  category: string;
  price: number;
  unit: string;
  stock: number;
  origin: string;
  isOrganic: boolean;
  description: LocalizedText;
  nutritionalValue: string;
  expiryDays: number;
  photo?: string;
}

// Varsayılan dil zorunlu, diğer diller isteğe bağlıdır
const localizedText = (requiredMessage: string, maxLength?: [number, string]) => {
  const field = (required: boolean) => ({
    type: String,
    ...(required && { required: [true, requiredMessage] }),
    ...(maxLength && { maxLength }),
  });

  return {
    tr: field(true),
    en: field(false),
    de: field(false),
  };
};

const grocerySchema = new Schema<IGrocery>({
  name: localizedText("isim değeri zorunludur"),
  category: {
    type: String,
    required: [true, "kategori değeri zorunludur"],
  },
  price: {
    type: Number,
    required: [true, "fiyat değeri zorunludur"],
    min: [0, "fiyat negatif olamaz"],
  },
  unit: {
    type: String,
    required: [true, "birim değeri zorunludur"],
  },
  stock: {
    type: Number,
    required: [true, "stok değeri zorunludur"],
    min: [0, "stok negatif olamaz"],
  },
  origin: {
    type: String,
    required: [true, "menşei değeri zorunludur"],
  },
  isOrganic: {
    type: Boolean,
    default: false,
  },
  description: localizedText("açıklama değeri zorunludur", [300, "açıklama 300 karakterden uzun olamaz"]),
  nutritionalValue: {
    type: String,
    required: [true, "besin değeri zorunludur"],
  },
  expiryDays: {
    type: Number,
    required: [true, "raf ömrü değeri zorunludur"],
  },
  photo: {
    type: String,
  },
});

// Arama yapılacak tüm metin alanları (her dil için)
export const localizedTextPaths = (["name", "description"] as const).flatMap((field) =>
  routing.locales.map((locale) => `${field}.${locale}`),
);

// Hot reload'da model yeniden derlenmesin diye önce mevcut model kontrol edilir
const Grocery = (mongoose.models.Grocery as Model<IGrocery> | undefined) ??
  mongoose.model<IGrocery>("Grocery", grocerySchema);

export default Grocery;
