/*
 ! Interface
 * Bir nesnenin tipini tanımlamaya yarar

 * Type Aliases | Abstract Class | Interface

 ? Interface vs Abstract Class
 * class'lar aynı anda max bir class'ı miras alabilir
 * interface'ler ise birden fazla interface'i miras alabilir
  
 ? Interface vs Type Aliases 
 * * Nesne tipi tanımlama açısından** aralarında en ufak bir fark bile yoktur
 * * Type aliases yönteminde sadece nesne değil array, function, tuple tipleride tanımlanabilir
 * * Interface'larde sadece nesne tipi tanımlanabilir
*/

// type aliases
type UserType = {
  name: string;
  age: number;
  married: boolean;
};

// interface
interface IUser {
  name: string;
  age: number;
  married: boolean;
}

const kisi: IUser = {
  name: "Mehmet",
  age: 34,
  married: true,
};

// type aliases'ın tek farkı bu yöntemle nesne dışarısında tip tanımlamada yapabiliriz
type NesneTipi = { id: number };

type DiziTipi = string[];

type FonksiyonTipi = (a: string) => void;

type LiteralTipi = "erkek" | "kadın";
