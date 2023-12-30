import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <div className="navbar-left">
      <Link to="/" className="navbar-logo">
        Kalvium
      </Link>
    </div>
    <div className="navbar-right">
      <Link to="/contacts" className="nav-item">
        Contacts
      </Link>
      <Link to="/about" className="nav-item">
        About
      </Link>
    </div>
  </nav>
);

export default Navbar;
