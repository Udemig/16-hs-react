import * as yup from "yup";

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
});

export const LOGIN_SCHEMA = yup.object().shape({
  firstName: yup.string().required(),
});
