// yuptaki bütün fonksiyonları import et
import * as yup from "yup";

// YUP ile nesne içerisindeki alanların geçerli olması için gerekli koşulları belirleyebiliriz
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("ad alanı zorunludur")
    .min(3, "ad en az 3 karakter olmalı")
    .max(40, "ad en fazla 40 karakter olabilir"),
  location: yup
    .string()
    .required("lokasyon alanı zorunludur")
    .min(3, "lokasyon en az 3 karakter olmalı")
    .max(40, "lokasyon en fazla 40 karakter olabilir"),
  address: yup
    .string()
    .required("adres alanı zorunludur")
    .min(3, "adres en az 3 karakter olmalı")
    .max(40, "adres en fazla 40 karakter olabilir"),
  description: yup
    .string()
    .required("açıklama alanı zorunludur")
    .min(10, "açıklama en az 10 karakter olmalı")
    .max(200, "açıklama en fazla 200 karakter olabilir"),
  amenities: yup
    .string()
    .required("özellikler alanı zorunludur")
    .min(3, "özellikler en az 3 karakter olmalı")
    .max(80, "özellikler en fazla 80 karakter olabilir"),
  rating: yup
    .number()
    .required("rayting alanı zorunludur")
    .min(1, "rayting en az 1 olmalı")
    .max(5, "rayting en fazla 5 olabilir"),
  price_per_night: yup
    .number()
    .required("fiyat alanı zorunludur")
    .positive("fiyat 0'dan büyük olmalı")
    .max(99999, "fiyat en fazla 99999 olabilir"),
  availability: yup.boolean(),
});
