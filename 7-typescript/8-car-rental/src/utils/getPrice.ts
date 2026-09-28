import type { DriveType, ICar } from "./types";

// 1) Araç sınıfına (vclass) göre temel günlük fiyat (TL)
const BASE_PRICE_BY_VCLASS: Record<string, number> = {
  "Two Seaters": 1800,
  "Minicompact Cars": 1200,
  "Subcompact Cars": 1000,
  "Compact Cars": 1100,
  "Midsize Cars": 1300,
  "Large Cars": 1600,
  "Small Station Wagons": 1150,
  "Midsize Station Wagons": 1300,
  "Large Station Wagons": 1500,
  "Small Sport Utility Vehicle 2WD": 1400,
  "Small Sport Utility Vehicle 4WD": 1600,
  "Standard Sport Utility Vehicle 2WD": 1900,
  "Standard Sport Utility Vehicle 4WD": 2100,
  "Sport Utility Vehicle - 2WD": 1700,
  "Sport Utility Vehicle - 4WD": 1900,
  "Minivan - 2WD": 1500,
  "Minivan - 4WD": 1700,
  "Vans, Cargo Type": 1400,
  "Vans, Passenger Type": 1500,
  "Small Pickup Trucks 2WD": 1300,
  "Small Pickup Trucks 4WD": 1500,
  "Standard Pickup Trucks 2WD": 1600,
  "Standard Pickup Trucks 4WD": 1900,
  "Standard Pickup Trucks": 1700,
};
const DEFAULT_BASE_PRICE = 1200;

// 2) Yakıt tipine göre çarpan
const FUEL_TYPE_MULTIPLIER: Record<string, number> = {
  Regular: 1.0,
  Midgrade: 1.05,
  Premium: 1.15,
  Diesel: 1.1,
  Electricity: 1.3,
  "Premium and Electricity": 1.35,
  "Regular Gas and Electricity": 1.2,
  "Gasoline or E85": 1.05,
  "Premium or E85": 1.15,
  CNG: 0.95,
};
const DEFAULT_FUEL_MULTIPLIER = 1.0;

// 3) Çekiş tipine göre çarpan
const DRIVE_TYPE_MULTIPLIER: Record<DriveType, number> = {
  "Front-Wheel Drive": 1.0,
  "Rear-Wheel Drive": 1.05,
  "4-Wheel or All-Wheel Drive": 1.15,
  "All-Wheel Drive": 1.15,
  "4-Wheel Drive": 1.2,
  "Part-time 4-Wheel Drive": 1.15,
  "2-Wheel Drive": 1.0,
};

// 7) Lüks marka listesi (dilediğiniz gibi genişletebilirsiniz)
const LUXURY_MAKES = new Set(
  [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Porsche",
    "Lexus",
    "Jaguar",
    "Land Rover",
    "Bentley",
    "Rolls-Royce",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Tesla",
    "Aston Martin",
    "McLaren",
  ].map((m) => m.toLowerCase()),
);

/** Motor hacmi (litre) ve silindir sayısına göre ek ücret (TL) */
function getEngineSurcharge(car: ICar): number {
  const displ = Number.isFinite(car.displ) ? car.displ : 0;
  const cylinders = Number.isFinite(car.cylinders) ? car.cylinders : 0;
  return displ * 50 + cylinders * 20;
}

/** Turbo / kompresör varsa ek ücret (TL) */
function getForcedInductionSurcharge(car: ICar): number {
  let surcharge = 0;
  if (car.tcharger === "T") surcharge += 100;
  if (car.scharger === "S") surcharge += 100;
  return surcharge;
}

/** Model yılına göre amortisman çarpanı (0.6 - 1.0 arası) */
function getAgeMultiplier(car: ICar, referenceYear = new Date().getFullYear()): number {
  const modelYear = parseInt(car.year, 10);
  if (!Number.isFinite(modelYear)) return 1.0;
  const age = Math.max(0, referenceYear - modelYear);
  const multiplier = 1 - age * 0.02; // her yıl için %2 değer kaybı
  return Math.max(0.6, multiplier); // taban %60'ın altına düşmesin
}

/** Lüks marka çarpanı */
function getLuxuryMultiplier(car: ICar): number {
  return LUXURY_MAKES.has(car.make?.toLowerCase() ?? "") ? 1.3 : 1.0;
}

/**
 * ICar verisinden günlük kiralama fiyatını TL olarak hesaplar.
 * @param car API'dan gelen araç verisi
 * @param options.referenceYear Yaş hesaplamasında baz alınacak yıl (varsayılan: içinde bulunulan yıl)
 * @param options.minPrice Fiyatın düşebileceği en alt sınır (varsayılan: 500 TL)
 * @returns Günlük kiralama fiyatı (TL), 10'un katına yuvarlanmış
 */
export default function calculateDailyRentalPriceTRY(
  car: ICar,
  options?: { referenceYear?: number; minPrice?: number },
): number {
  const basePrice = BASE_PRICE_BY_VCLASS[car.vclass] ?? DEFAULT_BASE_PRICE;
  const fuelMultiplier = FUEL_TYPE_MULTIPLIER[car.fueltype] ?? DEFAULT_FUEL_MULTIPLIER;
  const driveMultiplier = DRIVE_TYPE_MULTIPLIER[car.drive] ?? 1.0;
  const ageMultiplier = getAgeMultiplier(car, options?.referenceYear);
  const luxuryMultiplier = getLuxuryMultiplier(car);

  const engineSurcharge = getEngineSurcharge(car);
  const forcedInductionSurcharge = getForcedInductionSurcharge(car);

  const priceBeforeAge =
    (basePrice + engineSurcharge + forcedInductionSurcharge) *
    fuelMultiplier *
    driveMultiplier *
    luxuryMultiplier;

  const finalPrice = priceBeforeAge * ageMultiplier;

  const minPrice = options?.minPrice ?? 500;
  const rounded = Math.round(finalPrice / 10) * 10;

  return Math.max(minPrice, rounded);
}
