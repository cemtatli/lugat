import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <footer className="flex h-10 items-center justify-center text-sm font-medium">
      <Logo size={40} />
    </footer>
  );
};

export default Header;
