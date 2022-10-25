import React from "react";
import { NavLink } from "react-router-dom";

//Created Nav.js to hold nav items
const Nav = (props) => {
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <NavLink to="/nav/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/nav/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/nav/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
