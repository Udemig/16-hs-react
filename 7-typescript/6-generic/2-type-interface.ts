// Fonksiyonlarda olduğu gibi generic yapısını yeniden kullanılabilir type/interface yazmak için de kullanabilirz

type ArrayManagerType<T> = {
  items: T[];
  addItem: (newItem: T) => void;
  getItem: (index: number) => T;
};

const arrayManager: ArrayManagerType<number> = {
  items: [1, 2, 3, 4, 5],
  addItem(newItem) {
    this.items.push(newItem);
  },
  getItem(index) {
    return this.items[index];
  },
};

const arrayManager2: ArrayManagerType<boolean> = {
  items: [true, false, true, false],
  addItem(newItem) {
    this.items.push(newItem);
  },
  getItem(index) {
    return this.items[index];
  },
};

// Proje Örneği:
// Seneryo: İki farklı API isteği attık ve gelen yanıtların tipini tanımla

interface IQuote {
  id: number;
  quote: string;
  author: string;
}

interface IRecipe {
  id: number;
  name: string;
  cuisine: string;
}

interface APIResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
}

const quoteResponse: APIResponse<IQuote> = {
  data: [
    { id: 1, quote: "Özlü söz", author: "Söyleyen" },
    { id: 2, quote: "Başka söz", author: "Söyleyen" },
  ],
  total: 60,
  page: 2,
  limit: 20,
};

const recipeResponse: APIResponse<IRecipe> = {
  data: [
    { id: 1, name: "Margarita Pizza", cuisine: "Italian" },
    { id: 2, name: "Sucuklu Pizza", cuisine: "Italian" },
  ],
  total: 120,
  page: 4,
  limit: 10,
};
