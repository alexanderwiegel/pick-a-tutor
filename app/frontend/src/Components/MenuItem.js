import React from "react";
import { Link } from 'react-router-dom';

function MenuItem(props) {
  var name = props.route
  var add = name

  // Anonymous users and tutors shall see "Home" but will be lead to another page
  if (name === "landingPage" || name === "tutortv") {
    name = "home"
  }
  if (name === "landingPage") add = ""

  return (
    <li>
      <Link to={"/" + add} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>{name}</Link>
    </li>
  );
}

export default MenuItem;