import React, { useState } from "react";

const Project = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <span className="ml-auto hidden text-sm md:relative md:block">
      <button
        className="flex items-center gap-x-1.5 text-gray-600 hover:text-gray-900 focus:outline-none dark:text-zinc-50 dark:hover:text-gray-200"
        onClick={handleMenuToggle}
      >
        Projeler
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm shadow-lg dark:bg-gray-800">
          <ul className="py-2">
            <li className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              <a
                href="https://frontendvideos.vercel.app/?ref=cemtatli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200"
              >
                Yararlı Videolar
              </a>
            </li>
            <li className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
              <a
                href="https://frontend-soru.netlify.app/?ref=cemtatli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-200"
              >
                Mülakat Soruları
              </a>
            </li>
          </ul>
        </div>
      )}
    </span>
  );
};

export default Project;
