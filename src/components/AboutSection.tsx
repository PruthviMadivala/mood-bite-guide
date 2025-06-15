
const AboutSection = () => (
  <section className="max-w-2xl mx-auto py-12 px-4 rounded-2xl bg-white/80 shadow flex flex-col gap-4 items-start font-nunito animate-fade-in">
    <h2 className="text-3xl font-bold mb-2 flex items-center text-primary gap-2">
      <span role="img" aria-label="info">ℹ️</span> About MoodMeal
    </h2>
    <p>
      <b>MoodMeal</b> is a friendly, AI-inspired app that suggests recipes based on how you’re feeling — whether you want comfort food, quick snacks, or a healthy boost.
    </p>
    <ul className="list-disc pl-6 text-mutedtext">
      <li>Choose your mood with emoji or words</li>
      <li>Get personalized recipe cards with images and ingredients</li>
      <li>Filter by Veg, Non-Veg, or Quick meals</li>
      <li>Save or retry for new options</li>
      <li>All demo recipes are from Spoonacular, Unsplash, or cozy kitchens</li>
    </ul>
    <div className="pt-2 text-sm text-mutedtext">
      Built using <a href="https://react.dev/" target="_blank" className="underline text-primary/80">React</a>,
      <a href="https://vitejs.dev/" className="underline mx-1 text-primary/80" target="_blank">Vite</a>,
      <a href="https://tailwindcss.com/" className="underline text-primary/80" target="_blank">Tailwind</a>,
      <a href="https://spoonacular.com/food-api" className="underline mx-1 text-primary/80" target="_blank">Spoonacular API</a>
      — for cozy food fun!
    </div>
    <div className="pt-2 text-xs text-mutedtext/70">
      Design inspiration: warm kitchens, pastel planners, and emoji apps.
    </div>
  </section>
);

export default AboutSection;
