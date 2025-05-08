import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientElements = ingredients.map((el) => (
    <li className="mb-2" key={el}>
      {el}
    </li>
  ));

  const addRecipe = (formData) => {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => {
      return [
        ...prevIngredients,
        newIngredient.charAt(0).toUpperCase() + newIngredient.slice(1),
      ];
    });
  };

  return (
    <section className="flex flex-col justify-start p-8">
      <form action={addRecipe} className="flex justify-start gap-x-4">
        <input
          aria-label="Search Ingredient"
          type="text"
          placeholder="e.g. noodles"
          className="w-4/5 rounded-md border-1 p-2 placeholder:italic"
          name="ingredient"
        />
        <button className="w-1/5 rounded-md bg-black px-4 py-2 text-white before:mr-2 before:content-['+']">
          Search Recipe
        </button>
      </form>
      {ingredients.length > 0 ? (
        <div className="flex flex-col gap-4 pt-8">
          <h1 className="text-4xl font-bold"> Ingredients Added</h1>
          <ul className="ml-2 list-inside list-disc gap-2 text-lg text-gray-600">
            {ingredientElements}
          </ul>
        </div>
      ) : null}
      {ingredients.length > 3 ? (
        <article className="mt-8 w-full rounded-md bg-gray-200 px-12 py-8">
          <p className="text-xl font-semibold">Ready for a recipe</p>
          <div className="flex items-end justify-between">
            <p className="inline text-base text-gray-500">
              Generate a recipe from your list of ingredients
            </p>
            <button className="rounded-md bg-amber-700 px-4 py-2 text-white">
              Get a recipe
            </button>
          </div>
        </article>
      ) : null}
    </section>
  );
}
