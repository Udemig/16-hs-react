import Image from "next/image";
import { fetchRecipes } from "@/utils/server";
import Link from "next/link";
import delay from "@/utils/delay";

// export const dynamic = "force-dynamic";

// export const revalidate = 15;

const RecipesServer = async () => {
  await delay(2000);
  const data = await fetchRecipes();

  return (
    <div>
      <h1 className="font-bold text-center text-4xl text-blue-500 font-matcha">
        Tarifler - Server
      </h1>

      <div>
        {data.recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes-server/${recipe.id}`}
            className="flex gap-5 mt-5 p-5 pb-10 border-b decoration-0 text-white!"
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

export default RecipesServer;
