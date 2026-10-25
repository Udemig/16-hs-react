import * as yup from "yup";

const lowerCaseRegex = /[a-z]/;
const upperCaseRegex = /[A-Z]/;
const numberRegex = /\d/;
const specialRegex = /[^A-Za-z0-9]/;

export const REGISTER_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .required("ad alanı zorunludur")
    .min(2, "minimum 2 karakter")
    .max(25, "maksimum 25 karakter"),

  lastName: yup
    .string()
    .required("soyad alanı zorunludur")
    .min(2, "minimum 2 karakter")
    .max(25, "maksimum 25 karakter"),

  email: yup.string().required("email alanı zorunludur").email("email formatında olmalı"),

  password: yup
    .string()
    .required("şifre alanı zorunludur")
    .min(6, "minimum 6 karakter")
    .matches(lowerCaseRegex, "en az 1 küçük harf içermeli")
    .matches(upperCaseRegex, "en az 1 büyük harf içermeli")
    .matches(numberRegex, "en az 1 sayı içermeli")
    .matches(specialRegex, "en az 1 özel karakter içermeli"),

  passwordConfirm: yup
    .string()
    .required("şifreyi tekrar giriniz")
    .oneOf([yup.ref("password")], "şifre eşleşmiyor"),

  terms: yup.boolean().oneOf([true], "devam etmek için koşulları kabul edin"),
});

export const LOGIN_SCHEMA = yup.object().shape({
  email: yup.string().required("e-posta adresi giriniz"),
  password: yup.string().required("şifrenizi giriniz"),
});

const colorRegex = /^\p{L}+(?:_\p{L}+)*(?:,\p{L}+(?:_\p{L}+)*)*$/u;
const sizeRegex = /^[34]\d(?:,[34]\d)*$/;

export const PRODUCT_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("isim alanı zorunludur")
    .min(2, "isim en az 2 karakter olmalıdır")
    .max(80, "isim en fazla 80 karakter olabilir"),

  price: yup.number().required("fiyat alanı zorunludur").moreThan(0, "fiyat 0'dan büyük olmalıdır"),

  discount: yup
    .number()
    .min(0, "indirim 0'dan küçük olamaz")
    .max(100, "indirim 100'den büyük olamaz")
    .default(0),

  color: yup
    .string()
    .trim()
    .required("renk alanı zorunludur")
    .min(2, "renk en az 2 karakter olmalıdır")
    .max(80, "renk en fazla 80 karakter olabilir")
    .matches(colorRegex, "blue,orange,yellow... formatında olmalı"),

  size: yup
    .string()
    .trim()
    .required("numara alanı zorunludur")
    .min(2, "numara en az 2 karakter olmalıdır")
    .max(80, "numara en fazla 80 karakter olabilir")
    .matches(sizeRegex, "38,40,41,43... formatında olmalı"),

  description: yup
    .string()
    .trim()
    .required("açıklama alanı zorunludur")
    .min(10, "açıklama en az 10 karakter olmalıdır")
    .max(500, " açıklama en fazla 500 karakter olabilir"),

  isNew: yup.boolean().notRequired().default(false),

  gender: yup
    .string()
    .required("cinsiyet alanı zorunludur")
    .oneOf(["men", "women", "unisex"], "geçersiz cinsiyet seçimi"),
});
