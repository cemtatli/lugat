import React from "react";
import Logo from "./Logo";
import { TiSocialTwitter, TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex h-10 items-center justify-between gap-x-1 px-8 text-xs font-medium">
      <Logo size={40} />
      <nav className="flex items-center  gap-x-2">
        <a href="https://twitter.com/vaycem" target="_blank">
          <TiSocialTwitter size={20} className="hover:text-sky-500" />
        </a>
        <a href="https://github.com/cemtatli" target="_blank">
          <TiSocialGithub size={24} className="hover:text-sky-500" />
        </a>
        <a href="https://www.linkedin.com/in/cemtatli/" target="_blank">
          <TiSocialLinkedin size={24} className="hover:text-sky-500" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
