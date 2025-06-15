
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const moodOptions = [
  { label: "Happy", emoji: "😃" },
  { label: "Sad", emoji: "😢" },
  { label: "Lazy", emoji: "😴" },
  { label: "Stressed", emoji: "😩" },
  { label: "Excited", emoji: "🤩" },
  { label: "Cold", emoji: "🥶" },
  { label: "Sick", emoji: "🤒" },
];

const MoodInput = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [customMood, setCustomMood] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    // Save mood to session and route
    const mood = customMood.trim() || selected;
    if (mood) {
      sessionStorage.setItem("selectedMood", mood);
      navigate("/recipes");
    }
  };

  return (
    <section className="max-w-xl mx-auto mt-10 bg-white/70 shadow-xl rounded-2xl p-8 flex flex-col items-center animate-fade-in">
      <h2 className="text-3xl font-bold font-nunito mb-1 flex gap-2 items-center">
        <span role="img" aria-label="spark">✨</span>
        What's your mood?
      </h2>
      <p className="mb-6 text-mutedtext font-nunito">Pick a mood or type how you're feeling for personalized recipes.</p>

      <div className="flex flex-wrap gap-2 md:gap-4 mb-4 justify-center w-full">
        {moodOptions.map((option) => (
          <button
            key={option.emoji}
            className={`text-3xl md:text-4xl rounded-full p-3 transition shadow hover:scale-110
             ${selected === option.label
               ? "border-2 border-primary bg-pastelyellow"
               : "border border-slate-200 bg-white/80"}`}
            onClick={() => { setSelected(option.label); setCustomMood(""); }}
            aria-label={option.label}
            type="button"
          >
            {option.emoji}
          </button>
        ))}
      </div>

      <div className="w-full mb-6 flex flex-col gap-2 items-center">
        <span className="text-mutedtext/60">or describe your mood:</span>
        <input
          type="text"
          placeholder="e.g. I'm feeling lazy and cold."
          className="font-nunito w-full border border-primary/20 rounded-xl py-2 px-4 mb-1 focus:border-primary focus:ring-2 focus:ring-pastelblue outline-none placeholder:text-muted/60 transition"
          value={customMood}
          onChange={e => { setCustomMood(e.target.value); setSelected(null); }}
          maxLength={70}
        />
      </div>
      <button
        className={`rounded-full font-nunito px-7 py-3 text-lg shadow-md transition-colors 
          bg-primary text-white hover:bg-primary/80 w-full
          disabled:bg-gray-300 disabled:cursor-not-allowed`}
        disabled={!selected && customMood.trim() === ""}
        onClick={handleContinue}
      >
        See Recipes
      </button>
    </section>
  );
};

export default MoodInput;
