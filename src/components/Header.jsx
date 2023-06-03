import React, { useState } from "react";
import ThemeChanger from "./ThemeChanger";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex h-15 w-full items-center justify-center gap-x-4 border-b bg-white px-4 dark:border-white dark:border-opacity-10 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-950">
      <nav className="flex w-full items-center justify-center gap-x-4">
        <Logo size={44} />
        <ThemeChanger />
      </nav>
      <div className="relative ml-auto text-sm">
        <button onClick={handleMenuToggle} className="flex items-center gap-x-1.5 text-gray-600 focus:outline-none dark:text-zinc-50">
          <span>Projeler</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{
              transform: isMenuOpen ? "rotate(180deg)" : "rotate(0)"
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm shadow-lg dark:bg-gray-800">
            <ul className="py-2">
              <li className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                <a href="https://frontendvideos.vercel.app/?ref=cemtatli" target="_blank" className="text-gray-800 dark:text-gray-200">
                  Yararlı Videolar
                </a>
              </li>
              <li className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                <a href="https://frontend-soru.netlify.app/?ref=cemtatli" target="_blank" className="text-gray-800 dark:text-gray-200">
                  Mülakat Soruları
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
