export const simplifyError = (errCode) => {
  switch (errCode) {
    case "auth/weak-password":
      return "Şifreniz yeterince güçlü değil";

    case "auth/email-already-in-use":
      return "E-posta adresi zaten kullanımda";

    case "auth/invalid-credential":
      return "Giriş bilgileri hatalı";

    default:
      return errCode;
  }
};

export const getUsername = (name) => {
  return "@" + name?.toLowerCase().replaceAll(" ", "_");
};
