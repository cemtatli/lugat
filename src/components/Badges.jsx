import React from "react";
import classNames from "classnames";

const Badges = ({ children, variant = "default" }) => {
  return (
    <span
      className={classNames({
        "flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium": true,
        "bg-yellow-200  text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300": variant === "JavaScript",
        "bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-300": variant === "React",
        "bg-blue-200 text-blue-800 dark:bg-blue-900 dark:text-blue-300": variant === "CSS",
        "bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-300": variant === "Vue.js",
        "bg-orange-200 text-orange-800 dark:bg-orange-900 dark:text-orange-300": variant === "HTML",
      })}
    >
      {children}
    </span>
  );
};

export default Badges;
