
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Get Suggestions", href: "/mood" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 mb-8 bg-white/80 backdrop-blur shadow-sm rounded-b-2xl">
      <div className="flex items-center gap-2 text-2xl font-bold font-nunito text-primary select-none">
        <span aria-label="Meal" className="text-3xl">🍲</span> MoodMeal
      </div>
      <nav className="flex gap-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`px-3 py-1.5 rounded-lg font-nunito transition
              ${location.pathname === item.href
                ? "bg-pastelyellow text-primary font-semibold"
                : "hover:bg-pastelblue hover:text-primary/90 text-mutedtext"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
