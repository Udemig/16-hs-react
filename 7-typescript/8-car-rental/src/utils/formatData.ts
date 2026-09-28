import type { ICar } from "./types";

const formatData = (car: ICar) => {
  // nesne içerisinde filtrelemek istediğimiz anahtar değerleri
  const ACCEPTED = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  // nesne dizi formatına çevirip istediğimiz değerleri alalım
  return Object.entries(car).filter(([key]) => ACCEPTED.includes(key));
};

export default formatData;
