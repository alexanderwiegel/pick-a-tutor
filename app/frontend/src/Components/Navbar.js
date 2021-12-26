import React, { useState } from "react";
import logo from "../images/logos/Tutor.png";
import { Link } from 'react-router-dom';

function Navbar() {
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
    <p style={{position:'fixed',alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>Fulda University</p>
    <nav className={nav ? "nav active" : "nav"}>
      <a href={"/"} className="logo" style={{ flexDirection: "row" }}>
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
        <Link to="/" style={{textDecoration:'none', fontFamily:'inherit'}}>Home</Link>
        </li>
        <li>
        <Link to="/courses" style={{textDecoration:'none', fontFamily:'inherit'}}>Courses</Link>
        </li>
        <li>
        <Link to="/" style={{textDecoration:'none', fontFamily:'inherit'}}>Tutors</Link>
        </li>
        <li>
          <Link to="/login" style={{textDecoration:'none', fontFamily:'inherit'}}>Login</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
