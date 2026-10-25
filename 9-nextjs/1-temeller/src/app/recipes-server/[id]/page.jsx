import delay from "@/utils/delay";
import { fetchRecipe, fetchRecipes } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const data = await fetchRecipes();

  return data.recipes.map((item) => ({ id: String(item.id) }));
};

const RecipeDetail = async ({ params }) => {
  const { id } = await params;
  await delay(2000);
  const data = await fetchRecipe(id);

  return (
    <div className="flex flex-col items-center gap-10">
      <Link href="/recipes-server">Geri Dön</Link>

      <h1>{data.name}</h1>

      <Image src={data.image} alt={data.name} width={200} height={200} />

      <h1>{data.cuisine}</h1>
    </div>
  );
};

export default RecipeDetail;
