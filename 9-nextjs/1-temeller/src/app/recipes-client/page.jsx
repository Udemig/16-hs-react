"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const RecipesClient = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchRecipes = () => {
    setIsLoading(true);
    setError(null);

    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error)
    return (
      <div>
        <h1>HATA: {error}</h1>
        <button onClick={fetchRecipes}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      <h1 className="font-bold text-center text-4xl text-red-500 font-matcha">Tarfiler - Client</h1>

      <div>
        {data.map((recipe) => (
          <Link
            href={`/recipes-client/${recipe.id}`}
            key={recipe.id}
            className="flex gap-5 mt-5 p-5 pb-10 border-b text-white! decoration-0"
          >
            <Image src={recipe.image} width={100} height={100} alt={recipe.name} />

            <div>{recipe.name}</div>
            <div>{recipe.cuisine}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipesClient;
