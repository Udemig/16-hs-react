/*
 ! Void
 * Sadece fonksiyon return bölümünde kullanılan bir tip.
 * Bir fonksiyon void return tipine sahipse, bu fonksiyon bir değer return etmediği anlamına gelir
 * Eğer return tipi void ise, return sadece fonksiyonu durdurmak amacıyla kullanılabilir ama değer döndüremez
*/

const func1 = (): string => {
  return "selam";
};

const func2 = (): number => {
  return 455;
};

const func3 = (a: string): void => {
  console.log("selam");
  return; // fonksiyonu durduran return
};

// Örnek
const deleteProduct = (id: string): void => {
  fetch(`www.api.com/${id}`, { method: "DELETE" });
};

/*
 ! Never Type
 * Sadece fonksiyonlarda kullanılan bir tip
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır
 * Fonksiyon hiçbir zaman görevini tamamlayamayacak durumunu ifade eder
*/

const log = (message?: string): void | never => {
  if (message) {
    console.log("Mesaj alındı");
  } else {
    throw new Error("Fonksiyona mesaj sağlanmadı");
  }
};

log("Selam Dünya");
// log();

// Örnek
function setMode(mode: string): string {
  if (mode === "açık") return "açık mod";
  if (mode === "koyu") return "koyu mod";

  return wrongMode(mode);
}

function wrongMode(mode: string): never {
  throw new Error("Geçersiz mod: " + mode);
}

console.log(setMode("açık"));
console.log(setMode("yeşil"));
