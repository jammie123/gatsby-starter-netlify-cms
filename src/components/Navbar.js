import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar py-4 text-base">
    <div className="container mx-auto flex justify-between  ">
      <Link to="/" className="navbar-item">
        Jan Fuxa
      </Link>
      <div className="nav flex justify-between">
        <Link className="pr-3 hover:text-gray-700" to="/about">
          Projects
        </Link>
        <Link className="pr-3 hover:text-gray-700" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
