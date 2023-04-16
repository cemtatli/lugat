import classNames from "classnames";
import React from "react";

const Categories = ({ children, variant = "default" }) => {
  return (
    <button
      className={classNames({
        "pointer-events-none flex h-8 w-fit shrink-0 items-center justify-center truncate rounded-md px-3 py-1 text-xs font-medium transition duration-200 ease-in-out xl:w-full": true,
        "bg-yellow-200 text-yellow-800 hover:bg-yellow-300 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800":
          variant === "JavaScript",
        "bg-indigo-200 text-indigo-800 hover:bg-indigo-300 dark:bg-indigo-900 dark:text-indigo-300 dark:hover:bg-indigo-800":
          variant === "React",
        "bg-red-200 text-red-800 hover:bg-red-300 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800":
          variant === "Git",
        "bg-orange-200 text-orange-800 hover:bg-orange-300 dark:bg-orange-900 dark:text-orange-300 dark:hover:bg-orange-800":
          variant === "HTML",
        "bg-blue-200 text-blue-800 hover:bg-blue-300 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800":
          variant === "CSS",
        "bg-green-200 text-green-800 hover:bg-green-300 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800":
          variant === "Vue.js",
        "bg-purple-200 text-purple-800 hover:bg-purple-300 dark:bg-purple-900 dark:text-purple-300 dark:hover:bg-purple-800":
          variant === "Web Development",
        "bg-cyan-200 text-cyan-800 hover:bg-cyan-300 dark:bg-cyan-900 dark:text-cyan-300 dark:hover:bg-cyan-800":
          variant === "Package Managers",
        "bg-heather-200 text-heather-800 hover:bg-heather-300 dark:bg-heather-900 dark:text-heather-300 dark:hover:bg-heather-800":
          variant === "Internet",
        "bg-fuchsia-200 text-fuchsia-800 hover:bg-fuchsia-300 dark:bg-fuchsia-900 dark:text-fuchsia-300 dark:hover:bg-fuchsia-800":
          variant === "Web Design"
      })}
    >
      {children}
    </button>
  );
};

export default Categories;
