"use server";

import { revalidatePath } from "next/cache";
import { createProduct, deleteProduct, updateProduct } from "./service";
import { redirect } from "next/navigation";

// server action: form gönderilince çalışır
export const handleProductForm = async (formData: FormData) => {
  // düzenleme için id'ye eriş
  const id = formData.get("id") as string;

  // formdaki verilere eriş
  const name = formData.get("name") as string;
  const brand = formData.get("brand") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const rating = Number(formData.get("rating"));
  const reviews_count = Number(formData.get("reviews_count"));
  const category = formData.get("category") as string;
  const image_url = formData.get("image_url") as string;
  const description = formData.get("description") as string;

  // ürün bilgilerini nesne formatına getir
  const productData = {
    name,
    brand,
    price,
    stock,
    rating,
    reviews_count,
    category,
    image_url,
    description,
  };

  // id varsa güncelleme yoksa oluşturma için api isteği at
  id ? await updateProduct(id, productData) : await createProduct(productData);

  // ürün listesi kullanan sayfaların cache'ini temizle
  revalidatePath("/products");
  revalidatePath("/");

  // ürünler sayfasına yönlendir
  redirect("/products");
};

// silme aksiyonu
export const handleDeleteProduct = async (formData: FormData) => {
  // silnecek elemanın id'sine eriş
  const id = formData.get("id");

  // api isteğini at
  await deleteProduct(id as string);

  // cache'i temizle
  revalidatePath("/products");
  revalidatePath("/");
};
