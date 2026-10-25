export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
};

export const fetchRecipe = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  return res.json();
};
