import React from "react";

import Dropdown from "./Dropdown";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav class="navbar">
        <div class="menu-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#news">News</a>
          <a href="#logout">Logout</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
