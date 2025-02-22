import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
