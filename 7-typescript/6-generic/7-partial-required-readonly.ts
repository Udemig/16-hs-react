/*
 ! Partial
 * Generic olarak aldığı nesnenin tüm özelliklerini opsiyonel yapar
 */

type User = {
  name: string;
  password: string;
  age: number;
};

const createUser = (data: User) => {};

const updateUser = (data: Partial<User>) => {};

createUser({ name: "Faruk", password: "837hbh", age: 43 });

updateUser({ age: 34 });
updateUser({ name: "Ali" });
updateUser({ password: "ncshı12635" });

/*
 ! Required
 * Generic olarak aldığı nesnenin tüm özelliklerini zorunlu yapar
*/

type User2 = {
  name?: string;
  password?: string;
  age?: number;
};

const createUser2 = (data: Required<User2>) => {};

/*
 ! Readonly
 * Parametre olarak aldığı nesnenin tüm özelliklerini okunabilir yapar
*/

const ali: Readonly<User> = {
  name: "Ali",
  password: "deneme123",
  age: 34,
};
