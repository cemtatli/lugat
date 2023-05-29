import React from "react";
import ThemeChanger from "./ThemeChanger";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-15 w-full items-center justify-center gap-x-4 border-b bg-white dark:border-white dark:border-opacity-10 dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-950">
      <Logo size={44} />
      <ThemeChanger />
    </header>
  );
};

export default Header;
