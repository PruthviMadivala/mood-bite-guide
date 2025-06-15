
import recipeData from "@/data/sampleRecipes";
import { useState, useEffect } from "react";

const moodPromptMap: { [mood: string]: string[] } = {
  Happy: ["fun", "snack", "colorful", "quick"],
  Sad: ["comfort", "warm", "classic"],
  Lazy: ["quick", "easy", "few ingredients"],
  Stressed: ["relax", "soothing", "dessert"],
  Excited: ["energy", "party", "snack"],
  Cold: ["hot", "warming", "soup"],
  Sick: ["soothing", "healthy", "broth"],
};

type RecipeFilter = "All" | "Veg" | "Non-Veg" | "Quick";

const getFilters = () => ["All", "Veg", "Non-Veg", "Quick"];

const filterRecipes = (recipes: any[], filter: RecipeFilter) => {
  if (filter === "All") return recipes;
  if (filter === "Veg") return recipes.filter(r => r.veg);
  if (filter === "Non-Veg") return recipes.filter(r => !r.veg);
  if (filter === "Quick") return recipes.filter(r => r.prepTime <= 20);
  return recipes;
};

// Utility to pick recipes by mood
function pickRecipes(mood: string) {
  // For this version we’ll just map mood words to tags in the sample data
  const lowerMood = mood.trim().toLowerCase();
  let promptTags: string[] = [];
  for (const [m, tags] of Object.entries(moodPromptMap)) {
    if (lowerMood.includes(m.toLowerCase())) {
      promptTags = tags;
      break;
    }
  }
  if (!promptTags.length) promptTags = ["comfy"];
  // Filter recipes by matching any tag
  return recipeData
    .filter(recipe => recipe.tags.some((tag: string) => promptTags.includes(tag)))
    .slice(0, 5);
}

const RecipeSuggestions = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [filter, setFilter] = useState<RecipeFilter>("All");
  const [mood, setMood] = useState<string>("");

  useEffect(() => {
    const selectedMood = sessionStorage.getItem("selectedMood") || "Happy";
    setMood(selectedMood);
    const chosen = pickRecipes(selectedMood);
    setRecipes(chosen);
  }, []);

  const filteredRecipes = filterRecipes(recipes, filter);

  return (
    <section className="w-full max-w-5xl mx-auto pt-12">
      <h2 className="text-3xl font-nunito font-bold mb-2 flex items-center gap-2">
        <span className="text-2xl">🍽️</span>
        Recipe Suggestions
      </h2>
      <div className="text-mutedtext/90 mb-5 font-nunito text-lg">
        For your mood: <span className="font-bold bg-pastelmint rounded px-2 py-1 text-primary">{mood}</span>
      </div>

      {/* FILTERS */}
      <div className="flex gap-2 mb-8">
        {getFilters().map(f => (
          <button
            key={f}
            className={`rounded-full px-4 py-2 font-nunito border transition-colors
              ${filter===f
                ? "bg-primary text-white border-primary shadow"
                : "bg-white border-primary/30 text-mutedtext hover:bg-pastelblue/90"}
            `}
            onClick={() => setFilter(f as RecipeFilter)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* RECIPE CARDS */}
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe, idx) => (
          <div
            key={idx}
            className="bg-white/80 ring-1 ring-primary/10 rounded-2xl p-5 flex flex-col shadow-md hover:shadow-lg transition animate-fade-in"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-xl mb-3 shadow object-cover w-full h-40"
              style={{ background: "#eee" }}
            />
            <h3 className="text-xl font-semibold font-nunito mb-1">{recipe.title}</h3>
            <div className="mb-2 flex gap-1 flex-wrap">
              {recipe.tags.map((tag: string) => (
                <span key={tag} className="bg-pastelpeach text-mutedtext rounded-full px-3 py-1 text-xs font-semibold">{tag}</span>
              ))}
            </div>
            <div className="text-mutedtext mb-2 text-sm">
              <b>Ingredients:</b> {recipe.ingredients.join(", ")}
            </div>
            <div className="text-gray-600/90 italic font-nunito text-sm mb-2">
              <span className="text-primary/70">Why this: </span>
              {recipe.why}
            </div>
            <div className="flex gap-2 mt-auto pt-4">
              <button className="rounded-full bg-primary text-white px-5 py-2 font-nunito hover:bg-primary/90 transition hover-scale">
                Save Recipe
              </button>
              <button className="rounded-full bg-pastelmint px-5 py-2 text-primary font-nunito ring-1 ring-primary/20 hover:scale-105 transition">
                Try Again
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-mutedtext/70 text-lg italic text-center mt-8">
          No recipes found. Try a different filter!
        </div>
      )}

      <div className="flex justify-center mt-12">
        <a href="https://spoonacular.com/food-api" target="_blank" rel="noopener"
          className="text-xs font-nunito px-3 py-1 bg-pastelyellow rounded shadow hover:bg-pastelpeach/80 transition"
        >Powered by Spoonacular / Unsplash (static demo)</a>
      </div>
    </section>
  );
};

export default RecipeSuggestions;
