import React, { useContext } from "react";

import { ThemeContext } from "@/context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <SunIcon className="h-4 w-4" />
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {" "}
          <MoonIcon className="h-3.5 w-3.5" />
        </button>
      )}
    </>
  );
}
