import React, { useState } from "react";
import Logo from "../assets/logo3.png";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Hamburger from "../components/Hamburger";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar">
      <div className="left-side">
        <div className="logo-background">
        <div className="logo"><NavLink to="/">
          <img alt="logo" src={Logo} />
          </NavLink>
        </div>
        </div>
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
      <div className={`right-side ${showNavbar && "active"}`}>
        <ul>
          <li>
            <NavLink
              to="/" onClick={handleShowNavbar}
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aanbod" onClick={handleShowNavbar}
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Tarieven
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact" onClick={handleShowNavbar}
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about" onClick={handleShowNavbar}
              className={({ isActive }) => (isActive ? "active" : "none")}
            >
              Over Suikergym
            </NavLink>
          </li>
        </ul>
        {/* <button onClick={toggleNavBar}>
                <ReorderIcon/>
              </button> */}
      </div>
    </div>
  );
}

export default Navbar;
