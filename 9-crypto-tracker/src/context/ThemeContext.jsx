import { createContext, useContext, useEffect, useState } from "react";

// Context Kurulumu
export const ThemeContext = createContext();

// Context Sağlayıcısı (HOC)
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    // localstorage'a kaydedilmiş bir tema varsa onu kullan
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    // projeye ilk defa giren biri için varsayılan tercih tarayıcıdaki tercihi olsun
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // temayı değiştirme fonksiyonu
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // tema her değiştiğinde html etiketinin class'ını güncelle
  useEffect(() => {
    const html = document.documentElement;

    if (isDarkTheme) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  // context yapısından diğer bileşenlere sağlanacak verileri belirler
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

// Context'e abone olmak için custom hook
export const useTheme = () => useContext(ThemeContext);
