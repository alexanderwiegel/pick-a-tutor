import React from "react"
import { Badge } from "react-bootstrap"
import { Link } from "react-router-dom"
import jwt_decode from "jwt-decode"

function MenuItem(props) {
  //#region Handling special cases
  var name = props.route
  var add = name

  // Anonymous users and tutors shall see "Home" but will be lead to another page
  if (name === "landingPage") add = ""
  if (name === "tutor") {
    const token = jwt_decode(localStorage.getItem("token"))
    add += "/" + token.id
  }
  if (name === "landingPage" || name === "tutor") {
    name = "home"
  }
  else if (props.onClick) name = "logout"
  //#endregion

  return (
    <li>
      <Link to={"/" + add} onClick={props.onClick} style={{ textDecoration: "none", fontFamily: "inherit" }}>
        {name}
        {
          name === "approvals" && <Badge bg="light" text="danger" >{props.amountToApprove || ""}</Badge>
        }
        {
          name === "messages" && <Badge bg="light" text="danger" >{props.unreadMessages || ""}</Badge>
        }
      </Link>
    </li>
  )
}

export default MenuItem