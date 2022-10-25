import React from "react";
import { NavLink } from "react-router-dom";

//Created Nav.js to hold nav items
const Nav = ({ fetchData }) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats" onClick={() => fetchData("cats")}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/dogs" onClick={() => fetchData("dogs")}>
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/computers" onClick={() => fetchData("computers")}>
            Computers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
