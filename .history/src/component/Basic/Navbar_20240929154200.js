import React from "react";
import "./style.css";
const navBar = [
  { link: "/mumbai", name: "Mumbai" },
  { link: "/delhi", name: "Delhi" },

]
const Navbar = () => {
const city = ()=>{
  const city = window.location.pathname.split('/')[1]
  return city === "mumbai"? "Mumbai" : "Delhi";
}
  return (
    <nav className="navbar">
      <div className="menu-nav">


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
