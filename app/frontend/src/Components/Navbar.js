import React, { useState } from "react"
import logo from "../images/logos/TutorNav.png"
import MenuItem from "./MenuItem"
import apiEndPoints from "./ApiEndpoints"

function Navbar() {
  //#region Navbar responsiveness
  const [nav, setnav] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true)
    } else {
      setnav(false)
    }
  }
  window.addEventListener("scroll", changeBackground)
  //#endregion

  const logout = () => {
    return localStorage.clear()
  }

  const status = localStorage.getItem("statusCode")
  var menuItems = []

  status === "Admin" ? menuItems = ["users", "approvals", "messages"] :
    status === "Tutor" ? menuItems = ["tutor", "browse", "messages"] :
      status === "Student" ? menuItems = ["home", "browse", "messages"] :
        menuItems = ["landingPage", "browse"]

  //#region Compute the amount of things to approve if user is admin
  const [pCount, setPCount] = useState()
  const [cCount, setCCount] = useState()
  const [rCount, setRCount] = useState()

  const getAmountOfThingsToApprove = async () => {
    const pData = await apiEndPoints.getProfileFilesToApprove()
    setPCount(() => pData.data.records || 0)
    const cData = await apiEndPoints.getCourseFilesToApprove()
    setCCount(() => cData.data.records || 0)
    const rData = await apiEndPoints.getReportedReviews()
    setRCount(() => rData.data.records || 0)
  }

  if (status === "Admin")
    getAmountOfThingsToApprove()
  //#endregion

  //#region Compute the amount of unread messages
  const [unreadMessages, setUnreadMessages] = useState()

  const getUnreadMessages = async () => {
    const data = await apiEndPoints.getUnreadConversations()
    setUnreadMessages(() => data.data.records || 0)
  }

  if (status)
    getUnreadMessages()
  //#endregion

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
          menuItems.map((name, index) => <MenuItem route={name} amountToApprove={pCount + cCount + rCount} unreadMessages={unreadMessages} key={index} />)
        }
        {
          // Logged in users will see "Logout", anonymous users will see "Login"
          status != null ?
            <MenuItem route="login" onClick={logout} />
            : <MenuItem route="login" />
        }
      </ul>
    </nav>
  )
}

export default Navbar