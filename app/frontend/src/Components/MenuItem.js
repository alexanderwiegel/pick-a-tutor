import React from "react";
import { Link } from 'react-router-dom';

function MenuItem(props) {
  var name = props.route

  // Anonymous users and tutors shall see "Home" but will be lead to another page
  if (name === "landingPage" || name === "tutortv") name = "home"

  return (
    <li>
      <Link to={"/" + props.route} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>{name}</Link>
    </li>
  );
}

export default MenuItem;