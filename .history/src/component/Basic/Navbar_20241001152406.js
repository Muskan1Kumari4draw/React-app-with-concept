import React from "react";

const Navbar = (filterItem, monuCity) => {
  return (
    <>
      {" "}
      <div className="navbar-bg">
        <nav className="navbar">
          <div className="menu-nav">
            <button onClick={() => filterItem("Mumbai")}>Mumbai</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
