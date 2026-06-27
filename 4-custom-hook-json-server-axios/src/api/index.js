import axios from "axios";

// .create() ile yeni bir axios örneği oluşturuyoruz
// bu örneği oluşturuken bütün ayarları istediğimiz gibi değiştirebiliyoruz
const api = axios.create({
  baseURL: "http://localhost:4000", // temel api adresi
  //   params: { lang: "tr" }, // varsayılan parametre
  //   headers: { Authorization: "api-anahtarı" }, // varsayılan header
  timeout: 3000, // zaman aşımı
});

export default api;
