import React from "react";
import "./style.css";
const navBar = [
  { link: "/mumbai", name: "Mumbai" },
  { link: "/delhi", name: "Delhi" },

]
const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="menu-nav">


    {
      navBar.map((item, index) => (
        <button key={index}>
          {item.name}
        </button>
      ))
    }
      </div>
    </nav>
  );
};

export default Navbar;
