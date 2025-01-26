import { Sun, Moon } from "lucide-react";

export const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed top-3 left-3 p-2 rounded-full transition-all duration-500 z-50 ${
        isDarkMode
          ? "bg-slate-800 text-white hover:bg-slate-700"
          : "bg-gray-300 text-black hover:text-white hover:bg-bgGray"
      }`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={12} /> : <Moon size={12} />}
    </button>
  );
};
