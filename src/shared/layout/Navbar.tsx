import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav_container">
        <div className="logo">FootStats</div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teamspage"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teamdetailspage"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Team Details
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
