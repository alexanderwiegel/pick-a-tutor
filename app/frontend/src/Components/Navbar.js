import React, { useState, useEffect } from "react";
import logo from "../images/logos/Tutor.png";
import MenuItem from './MenuItem.js';

function Navbar() {
  const [nav, setnav] = useState(false);
  const [user, setUser] = useState({});
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  const checkToken = useVerifyToken();
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={nav ? "nav active" : "nav"}>
        <a href={"/"} className="logo" style={{ flexDirection: "row" }}>
          <img src={logo} alt="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        {/* TODO: change menu items based on role (and therefore login status) */}
        <ul className="menu">
          {/* TODO: link to LandingPage or Home or TutorProfile or Approvals */}
          <MenuItem name="home" />
          <MenuItem name="courses" />
          <MenuItem name="tutors" />
          {/* TODO: show "Logout" when user is already logged in */}
          <MenuItem name="login" />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
