import classNames from "classnames";
import React from "react";

const Button = ({ children, variant = "default" }) => {
  return (
    <button
      className={classNames({
        "flex h-8 w-fit shrink-0 items-center justify-center truncate rounded-md px-4 py-2 text-xs font-medium xl:w-full": true,
        "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300": variant === "JavaScript",
        "bg-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300": variant === "React",
        "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200": variant === "Git",
        "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-300": variant === "HTML",
        "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300": variant === "CSS",
        "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300": variant === "Vue.js",
        "bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300": variant === "Web Development",
        "bg-cyan-200 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300": variant === "Package Managers",
        "bg-violet-200 text-violet-800 dark:bg-violet-900 dark:text-violet-300": variant === "Internet",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
