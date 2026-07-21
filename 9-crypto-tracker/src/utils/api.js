import axios from "axios";

const api = axios.create({
  // temel adres
  baseURL: "https://api.coingecko.com/api/v3",
  // atılan bütün api isteklerini header olarak key değerini ekle
  headers: {
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});

export default api;
