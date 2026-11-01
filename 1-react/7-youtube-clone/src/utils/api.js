import axios from "axios";

const HOST = "yt-api.p.rapidapi.com";

const api = axios.create({
  baseURL: `https://${HOST}`,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": HOST,
  },
  // her istekte gönderilecek ortak parametreler
  params: { geo: "TR", lang: "tr" },
});

export default api;
