import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
  <div>{/*{code here}*/}
  <ul> 
    <li>
      <NavLink
        to="/Home"
      >
        Home
      </NavLink>
    </li>
    <li> 
      <NavLink
        to="/movies"
      >
        Movies
      </NavLink>
    </li>
    <li> 
      <NavLink
        to="/directors"
      >
        Directors
      </NavLink>
    </li>
    <li> 
      <NavLink
        to="/actors"
      >
        Actors
      </NavLink>
    </li>



  </ul>

  </div>
    ) 
}

export default NavBar;
