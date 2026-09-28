// Generic yapısını sınıflarda da kullanabiliyoruz

class Sorter<T> {
  constructor(public data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["g", "a", "z", "y", "b", "e", "n"]);
console.log(arr1.sortData());

const arr2 = new Sorter<number>([3, 5, 1, 2, 9, 6, 8, 7]);
console.log(arr2.sortData());
