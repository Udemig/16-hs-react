// yuptaki bütün fonksiyonları import et
import * as yup from "yup";

// YUP ile nesne içerisindeki alanların geçerli olması için gerekli koşulları belirleyebiliriz
export const PLACE_SCHEMA = yup.object().shape({
  name: yup.string().required().min(3).max(40),
  location: yup.string().required().min(3).max(40),
  address: yup.string().required().min(3).max(40),
  description: yup.string().required().min(10).max(200),
  amenities: yup.string().required().min(3).max(80),
  rating: yup.number().required().min(1).max(5),
  price_per_night: yup.number().required().positive().max(99999),
  availability: yup.boolean(),
});

//todo: haata mesajları
