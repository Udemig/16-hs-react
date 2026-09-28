/*
 ! Promise
 * Asenkron olan fonksiyonların return tipinde kullanılır
 * Promise<T>
*/

interface QuoteResponse {
  quotes?: { id: number; quote: string; author: string }[];
  total?: number;
  skip?: number;
  limit?: number;
}

const fetchQuotes = async (): Promise<Required<QuoteResponse>> => {
  const res = await fetch("https://dummyjson.com/quotes");

  return await res.json();
};

interface Test {
  key1: string;
  key2: number;
}

interface Deneme extends Test {
  key3: boolean;
}

const options = {
  theme: "dark",
  spacing: 20,
};

function updateOptions(newOptions: { theme: "dark" | "light"; spacing: number }) {
  //....
}

updateOptions(options);
