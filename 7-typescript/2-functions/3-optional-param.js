"use strict";
/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı durumlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz
  
 * tanim: (a:string, b?:number) => bu seneryoda a zorunlu b ise opsiyonel olur
 * not: opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez
*/
function exa(par1, par2, par3) { }
exa(123, "selam", true);
exa(123, "selam");
exa(123);
// Örnek
const karsilama = (isim, zaman) => {
    if (zaman) {
        return `${zaman}, ${isim}`;
    }
    return `Merhaba, ${isim}`;
};
console.log(karsilama("Ahmet"));
console.log(karsilama("Ahmet", "Günaydın"));
