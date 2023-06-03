import classNames from "classnames";
import React from "react";

const Categories = ({ children, variant = "default" }) => {
  return (
    <button
      className={classNames({
        " flex items-center justify-center truncate rounded-md px-3 py-1.5 text-xs font-medium transition duration-300 ease-in-out": true,
        "bg-sky-200 text-sky-800 dark:bg-sky-900 dark:text-sky-300": variant === "Network",
        "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300": variant === "JavaScript",
        "bg-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300": variant === "React",
        "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300": variant === "CSS",
        "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300": variant === "Vue.js",
        "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200": variant === "HTML",
        "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200": variant === "Git",
        "bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300": variant === "Web Development",
        "truncate bg-cyan-200 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300": variant === "Package Managers",
        "truncate bg-fuchsia-200 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300": variant === "Web Design",
        "bg-gray-200 text-gray-800 dark:bg-gray-900 dark:text-gray-300": variant === "Next.js"
      })}
    >
      {children}
    </button>
  );
};

export default Categories;
