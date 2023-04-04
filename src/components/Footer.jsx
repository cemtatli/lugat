import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <footer className="flex h-10 items-center justify-center gap-x-1 text-xs font-medium">
      <Logo size={32} />
    </footer>
  );
};

export default Header;
