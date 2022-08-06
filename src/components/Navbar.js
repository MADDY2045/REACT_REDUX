import React, { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="no-gutters">
        <li>
          <h3>
            <NavLink exact to="/">
              Home
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink exact to="/about">
              About
            </NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink exact to="/contact">
              Contact
            </NavLink>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
