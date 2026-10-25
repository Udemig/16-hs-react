"use server";

// server action
// bir fonksiyonun server action olmasi için async yaparız ve "use server" tanımı yaparız
// server action'lar formData yı parametre olarak alır
// serer action'lar içerisinde istersek doğrudan backend kodları da yazabiliriz
export const handleSubmitAction = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  // api isteği at...
  console.log(email, password);
};
