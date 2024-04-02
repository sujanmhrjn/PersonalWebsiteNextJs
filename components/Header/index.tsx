import React from "react";
import Logo from "./Logo";
import Toggler from "./Toggler";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="o-container mx-auto lg:flex lg:items-center lg:px-16">
        <div className="navbar-content flex items-center justify-between px-20 pr-10 py-6 lg:px-0">
          <Logo />
          <Toggler />
        </div>
        <Navbar />
      </div>
    </nav>
  );
};

export default Header;
