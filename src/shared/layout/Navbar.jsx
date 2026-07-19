import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return <nav>
      <div className="nav_container">
        <div className="logo">FootStats</div>
        <ul>
          <li><NavLink to="/" className={ ( { isActive } ) => isActive ? "active" : null }>Home</NavLink></li>
          <li><NavLink to="/teams" className={ ( { isActive } ) => isActive ? "active" : null }>Teams</NavLink></li>
          <li><NavLink to="/players" className={ ( { isActive } ) => isActive ? "active" : null }>Players</NavLink></li>
        </ul>
      </div>
    </nav>;
}

export default Navbar;
