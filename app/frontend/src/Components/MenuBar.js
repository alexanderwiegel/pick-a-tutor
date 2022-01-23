import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../images/logos/Tutor.png"
import MenuItem from "./MenuItem"

function MenuBar(props) {
  const [nav, setnav] = useState(false)
  const status = props.status
  var menuItems = []

  status === "Admin" ? menuItems = ["users", "approvals", "messages"] :
    status === "Tutor" ? menuItems = ["tutortv", "browse", "messages"] :
      status === "Student" ? menuItems = ["home", "browse", "messages"] :
        menuItems = ["landingPage", "browse"]

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true)
    } else {
      setnav(false)
    }
  }
  window.addEventListener("scroll", changeBackground)

  const logout = () => {
    return localStorage.clear()
  }

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
        {
          menuItems.map((name, index) => <MenuItem route={name} key={index} />)
        }
        {
          // Logged in users will see "Logout", anonymous users will see "Login"
          status != null ?
            <li>
              <Link to="/login" onClick={logout} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>Logout</Link>
            </li>
            : <MenuItem route="login" />
        }
      </ul>
    </nav>
  )
}

export default MenuBar