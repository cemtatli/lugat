import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-5 w-10 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600"
    >
      <span className="sr-only">Switch Theme</span>
      <span
        className={`absolute inset-y-0 left-0 flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${
          theme === "light" ? "translate-x-5 rotate-45 " : "translate-x-0"
        }`}
      >
        {theme === "dark" ? <MoonIcon width={12} className=" text-gray-600  " /> : <SunIcon width={14} className=" text-yellow-500" />}
      </span>
    </button>
  );
}
