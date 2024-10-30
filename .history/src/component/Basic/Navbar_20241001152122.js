import React from "react";

const Navbar = (filterItem) => {
  return (
    <>
      {" "}
      <div className="navbar-bg">
        <nav className="navbar">
          <div className="menu-nav">
            <button onClick={() => filterItem("Mumbai")}>Mumbai</button>
            <button onClick={() => filterItem("Delhi")}> Delhi</button>
            {/* <button onClick={() => setMonuData(data)}> Delhi</button> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
