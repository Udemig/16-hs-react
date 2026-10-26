import { Order, Product, User } from "@/types";

// api url'i env'den al
const BASE_URL = process.env.API_URL;

// bütün api isteklerinin ortak kısmı:
// cevap başarısız olursa hata fırlat veri gelirse döndür
const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
  if (!BASE_URL) throw new Error("API_URL tanımlı değil");

  const res = await fetch(`${BASE_URL}${path}`, init);

  if (!res.ok) throw new Error(`İstek başarısız oldu (${res.status})`);

  return res.json();
};

// bütün siparişleri getir
export const getOrders = () => request<Order[]>("/orders");

// bütün ürünler getir
export const getProducts = (q?: string) => request<Product[]>(`/products?q=${q || ""}`);

// bütün kullanıcıları getir
export const getUsers = () => request<User[]>("/users");

// yeni ürün ürün oluştur
export const createProduct = (productData: Omit<Product, "id">) =>
  request("/products", {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });

// ürünü kaldır
export const deleteProduct = (id: string) => request(`/products/${id}`, { method: "DELETE" });

// ürünü al
export const getProduct = (id: string) => request<Product>(`/products/${id}`);

// ürünü güncelle
export const updateProduct = (id: string, productData: Omit<Product, "id">) =>
  request(`/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });
