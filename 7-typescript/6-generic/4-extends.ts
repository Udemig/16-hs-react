/*
 ! Generic Extends
 * Tipi generic olarak tanımladığımızda her türlü tipte değer atanmasına izin vermiş oluyoruz
 * Extends kullanarak generic olan tipi alabilceği değerleri kısıtlayabiliyoruz
*/

type Container<T extends string | number> = {
  foo: T;
  bar: T[];
};

const x: Container<string> = {
  foo: "selam",
  bar: ["selam", "dünya"],
};

const y: Container<number> = {
  foo: 99,
  bar: [9, 9],
};
