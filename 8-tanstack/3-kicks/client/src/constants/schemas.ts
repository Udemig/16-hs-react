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
