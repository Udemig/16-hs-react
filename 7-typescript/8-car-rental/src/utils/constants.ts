import type { DriveType } from "./types";

export const DRIVE_OPTIONS: Record<DriveType, string> = {
  "Rear-Wheel Drive": "RWD",
  "Front-Wheel Drive": "FWD",
  "All-Wheel Drive": "AWD",
  "4-Wheel Drive": "4WD",
  "4-Wheel or All-Wheel Drive": "4WD & AWD",
  "Part-time 4-Wheel Drive": "P4WD",
  "2-Wheel Drive": "2WD",
};

import type { StylesConfig } from "react-select";

export const SELECT_STYLES: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    minHeight: "52px",
    boxShadow: state.isFocused ? "0 0 0 1px rgba(79, 70, 229, 0.5)" : "none",
    "&:hover": {
      borderColor: "rgba(79, 70, 229, 0.5)",
    },
    color: "white",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "rgba(156, 163, 175, 0.8)",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    background: "rgba(26, 26, 33, 0.95)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    marginTop: "8px",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? "rgba(79, 70, 229, 0.3)"
      : state.isFocused
        ? "rgba(255, 255, 255, 0.1)"
        : "transparent",
    color: "white",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "rgba(156, 163, 175, 0.8)",
    "&:hover": {
      color: "white",
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgba(156, 163, 175, 0.8)",
    "&:hover": {
      color: "white",
    },
  }),
};

export const MAKES = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "BYD",
  "Cadillac",
  "Chery",
  "Chevrolet",
  "Chrysler",
  "Citroën",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Ram",
  "Renault",
  "Rolls-Royce",
  "SEAT",
  "Škoda",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];
