import React from "react";
import { NavLink } from "react-router-dom";

//Created Nav.js to hold nav items
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
