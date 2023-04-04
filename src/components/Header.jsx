import React from "react";
import ThemeChanger from "./ThemeChanger";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex h-15 items-center justify-center gap-x-4 border-b dark:border-white dark:border-opacity-10">
      <Logo size={40} />
      <ThemeChanger />
    </header>
  );
};

export default Header;
