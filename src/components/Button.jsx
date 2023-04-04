import classNames from "classnames";
import React from "react";

const Button = ({ children, variant = "default" }) => {
  return (
    <button
      className={classNames({
        "flex h-8 items-center justify-center rounded-md px-5 py-2 text-xs font-medium": true,
        "bg-red-300 text-red-950 transition-all duration-100 hover:bg-red-400 hover:text-white hover:shadow-md hover:shadow-red-300  dark:hover:shadow-red-950":
          variant === "danger",
        "bg-green-300 text-green-950 transition-all duration-100 hover:bg-green-400 hover:text-white hover:shadow-md hover:shadow-green-300  dark:hover:shadow-green-950":
          variant === "success",
        "bg-yellow-300 text-yellow-950 transition-all duration-100 hover:bg-yellow-400 hover:text-white hover:shadow-md hover:shadow-yellow-300  dark:hover:shadow-yellow-950":
          variant === "warning",
        "bg-blue-300 text-blue-950 transition-all duration-100 hover:bg-blue-400 hover:text-white hover:shadow-md hover:shadow-blue-300  dark:hover:shadow-blue-950":
          variant === "default",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
