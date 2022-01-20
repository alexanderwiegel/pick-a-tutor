import React, { useState, useEffect } from "react";
import logo from "../images/logos/Tutor.png";
import { Link } from 'react-router-dom';
import MenuItem from "./MenuItem";

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
  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    { /*
      setInterval was used in order to refresh the page constantly
  in order to have the "logout" button show immediately in place of
  "login", as soon as user logs out.
  */}
    setInterval(() => {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);
      setUser(user);
    }, 5000)
  }, []);

  const logout = () => {
    return localStorage.removeItem("user", "token", "statusCode");
  }

  if (user && localStorage.getItem('statusCode') === 'Student') {
    return (
      <nav className={nav ? "nav active" : "nav"}>
        <a href={"/"} className="logo" style={{ flexDirection: "row" }}>
          <img src={logo} alt="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <MenuItem name="home" />
          <MenuItem name="browse" />
          <MenuItem name="messages" />
          <li>
            <Link to="/login" onClick={logout} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>Logout</Link>
          </li>
        </ul>
      </nav>
    )
  }
  else if (user && localStorage.getItem('statusCode') === 'Admin') {
    return (
      <nav className={nav ? "nav active" : "nav"}>
        <a href={"/"} className="logo" style={{ flexDirection: "row" }}>
          <img src={logo} alt="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <MenuItem name="users" />
          <MenuItem name="approvals" />
          <MenuItem name="messages" />
          <li>
            <Link to="/login" onClick={logout} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>Logout</Link>
          </li>
        </ul>
      </nav>
    )
  }
  else if (user && localStorage.getItem('statusCode') === 'Tutor') {
    return (
      <nav className={nav ? "nav active" : "nav"}>
        <a href={"/"} className="logo" style={{ flexDirection: "row" }}>
          <img src={logo} alt="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <MenuItem name="home" alt="" />
          <MenuItem name="browse" />
          <MenuItem name="messages" />
          <li>
            <Link to="/login" onClick={logout} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>Logout</Link>
          </li>
        </ul>
      </nav>
    )
  }
  {
    return (
      <nav className={nav ? "nav active" : "nav"}>
        <a href={"/"} className="logo" style={{ flexDirection: "row" }}>
          <img src={logo} alt="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <MenuItem name="home" alt="" />
          <MenuItem name="browse" />
          <MenuItem name="login" />
        </ul>
      </nav>
    )
  }


}


export default Navbar;
