import React from "react";
import ThemeChanger from "./ThemeChanger";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex h-15 items-center justify-center gap-x-2">
      <Logo size={40} />

      <nav className="flex items-center gap-x-2 text-sm"></nav>
      <ThemeChanger />
    </header>
  );
};

export default Header;
