import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

export default api;
