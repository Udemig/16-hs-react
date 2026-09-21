/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz
  
 * tanim: (a:string, b?:number) => bu seneryoda a zorunlu b ise opsiyonel olur
 * not: opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez 
*/

function exa(par1: number, par2?: string, par3?: boolean) {}

exa(123, "selam", true);
exa(123, "selam");
exa(123);

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `${zaman}, ${isim}`;
  }

  return `Merhaba, ${isim}`;
};

console.log(karsilama("Ahmet"));
console.log(karsilama("Ahmet", "Günaydın"));

// Opsiyonel değerleri nesne tipi tanımında da kullanabiliyoruz
type User = {
  name: string;
  age: number;
  childCount?: number;
};

let user1: User = {
  name: "Fadime",
  age: 46,
  childCount: 2,
};

let user2: User = {
  name: "Mahmut",
  age: 22,
};
