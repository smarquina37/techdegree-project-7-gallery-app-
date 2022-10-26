import React from "react";
import { NavLink } from "react-router-dom";

//Created Nav.js to hold nav items
const Nav = ({ performSearch }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats" onClick={() => performSearch("cats")}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/dogs" onClick={() => performSearch("dogs")}>
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/computers" onClick={() => performSearch("computers")}>
            Computers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
