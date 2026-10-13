import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // çerezleri backende göndermek için
});

// axios interceptor (middleware)
// api'a atılan her istekte veya api'dan gelen her yanıtta fonksiyon çalıştırmaya yarar
let refreshPromise: Promise<unknown> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    const isExpired =
      err.response?.status === 401 && err.response?.data?.message === "Access token expired";

    // refresh isteğinin kendisi ya da zaten tekrar denenmiş istek ise döngüye girme
    const isRefreshCall = originalRequest?.url?.includes("/auth/refresh");

    if (isExpired && !originalRequest._retry && !isRefreshCall) {
      originalRequest._retry = true;

      try {
        // eşzamanlı istekler tek bir refresh'i paylaşsın
        refreshPromise ??= authService.refresh().finally(() => {
          refreshPromise = null;
        });
        await refreshPromise;

        return api.request(originalRequest);
      } catch (refreshErr) {
        await authService.logout().catch(() => {});
        window.location.href = "/login";
        return Promise.reject(refreshErr);
      }
    }

    // EN KRİTİK SATIR: diğer tüm hataları ilet
    return Promise.reject(err);
  },
);
export default api;
