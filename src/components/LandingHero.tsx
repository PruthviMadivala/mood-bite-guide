
import { Link } from "react-router-dom";

const moodEmoji = ["😃", "😢", "😴", "😩", "🤩", "🥶", "🤒"];
const moodNames = ["Happy", "Sad", "Lazy", "Stressed", "Excited", "Cold", "Sick"];

const LandingHero = () => (
  <section className="w-full max-w-3xl mx-auto py-16 flex flex-col items-center">
    <h1 className="font-nunito text-5xl md:text-6xl font-extrabold mb-4 text-primary leading-snug flex items-center gap-3">
      <span className="text-4xl">🍲</span> MoodMeal
    </h1>
    <p className="text-xl md:text-2xl text-mutedtext mb-6 font-nunito max-w-2xl">
      Discover <span className="bg-pastelmint px-2 py-1 rounded-md">delicious recipes</span> tailored to your mood.<br/>
      Pick how you feel &rarr; get cozy, AI-powered food inspiration!
    </p>
    <div className="flex gap-2 mb-7">
      {moodEmoji.map((emoji, i) => (
        <span
          key={emoji}
          className="text-3xl md:text-4xl bg-pastelpeach rounded-full shadow p-2 mx-1 ring-1 ring-primary/10 tooltip"
          title={moodNames[i]}
        >
          {emoji}
        </span>
      ))}
    </div>
    <Link
      to="/mood"
      className="bg-primary/90 hover:bg-primary text-white rounded-full font-nunito px-7 py-3 text-lg shadow-lg transition hover:scale-105 animate-fade-in"
    >
      Get Recipe Suggestions
    </Link>

    <div className="mt-10 text-center text-mutedtext/70 text-sm">
      <span className="italic">“Eat for how you feel”</span>
    </div>
  </section>
);

export default LandingHero;
