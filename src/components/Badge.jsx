import React from "react";
import classNames from "classnames";

const Badge = ({children, variant = "default"}) => {
  return (
    <span
      className={classNames({
        "animate flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium": true,
        "bg-heather-200 text-heather-800 dark:bg-heather-900 dark:text-heather-300": variant === "Internet",
        "bg-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300": variant === "JavaScript",
        "bg-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300": variant === "React",
        "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300": variant === "CSS",
        "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300": variant === "Vue.js",
        "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-200": variant === "HTML",
        "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200": variant === "Git",
        "bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300": variant === "Web Development",
        "truncate bg-cyan-200 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300": variant === "Package Managers",
      })}>
      {children}
    </span>
  );
};

export default Badge;
