
import Header from "@/components/Header";
import RecipeSuggestions from "@/components/RecipeSuggestions";

const RecipesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-pastelpeach via-pastelblue to-pastelmint animate-fade-in">
    <Header />
    <div className="pt-8">
      <RecipeSuggestions />
    </div>
  </div>
);

export default RecipesPage;
