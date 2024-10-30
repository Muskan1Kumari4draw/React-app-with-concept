import React from "react";

const Navbar = (filterItem, monuCity) => {
  return (
    <>
      <div className="navbar-bg">
        <nav className="navbar">
          <div className="menu-nav">
            {monuCity.map((curElement) => {
              return <button onClick={() => filterItem("")}>Mumbai</button>;
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
