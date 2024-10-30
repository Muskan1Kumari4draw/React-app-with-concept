import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav class="navbar">
        <div class="menu-nav">
          <button href="#home">Home</button>
          <button href="#about">About</button>
          <button href="#contact">Contact</button>
          <button href="#news">News</button>
          <button href="#logout">Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
