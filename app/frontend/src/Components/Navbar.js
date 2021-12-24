import React, { useState,useEffect } from "react";
import logo from "../images/logos/Tutor.png";
import { Link } from 'react-router-dom';
import useVerifyToken from '../Hooks/useVerifyToken';

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
  const checkToken= useVerifyToken();
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
          }, [])
  }, 5000);


  const logout = () => {
    console.log("localstorage = ",localStorage)
      return localStorage.removeItem("user","token");
  }

  if (!checkToken(localStorage.getItem('token'))) {
      return (
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
          <Link to="/detail" style={{textDecoration:'none', fontFamily:'inherit'}}>Browse</Link>
          </li>
          <li>
            <Link to="/login" style={{textDecoration:'none', fontFamily:'inherit'}}>Login</Link>
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
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
        <Link to="/dashboard" style={{textDecoration:'none', fontFamily:'inherit'}}>Home</Link>
        </li>
        <li>
        <Link to="/detail" style={{textDecoration:'none', fontFamily:'inherit'}}>Browse</Link>
        </li>
        <li>
        <Link to="" style={{textDecoration:'none', fontFamily:'inherit'}}>Messages</Link>
        </li>
        <li>
          <Link to="/login" onClick={logout} style={{textDecoration:'none', fontFamily:'inherit'}}>Logout</Link>
        </li>
      </ul>
    </nav>
      )
  }


}


export default Navbar;
