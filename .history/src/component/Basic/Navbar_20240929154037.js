import React from "react";
import "./style.css";
const navBar = [
  { link: "/mumbai", name: "Mumbai" },
  { link: "/delhi", name: "Delhi" },

]
const Navbar = () => {
  
  return (
    <nav class="navbar">
      <div class="menu-nav">
    {
      navBar.map((item, index) => (
        <a key={index} href={item.link}>
          {item.name}
        </a>
      ))
    }
      </div>
    </nav>
  );
};

export default Navbar;
