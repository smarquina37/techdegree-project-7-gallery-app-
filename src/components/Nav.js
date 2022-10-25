import React from "react";

//Created Nav.js to hold nav items
const Nav = (props) => {
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <a href="/cats">Cats</a>
        </li>
        <li>
          <a href="/dogs">Dogs</a>
        </li>
        <li>
          <a href="/computers">Computers</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
