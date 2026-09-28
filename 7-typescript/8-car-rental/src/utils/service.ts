import type { CarsResponse } from "./types";

export const fetchCars = async (
  page: string,
  limit: number,
  make: string,
  model: string,
): Promise<CarsResponse> => {
  let url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records/?lang=en&limit=${limit}&order_by=-year`;

  // filtreleme
  const conditions: string[] = [];
  if (make) conditions.push(`make:"${make}"`);
  if (model) conditions.push(`model:"${model}"`);
  if (conditions.length > 0) {
    url += `&where=${conditions.join(" AND ")}`;
  }

  // limit:  12
  // page:    1  2   3
  // offset:  0  12  24
  const offset = (Number(page) - 1) * limit;
  url += `&offset=${offset}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error(`API hatası: ${res.status}`);

  return await res.json();
};
