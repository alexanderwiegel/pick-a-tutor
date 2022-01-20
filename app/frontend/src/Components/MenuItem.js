import React from "react";
import { Link } from 'react-router-dom';

function MenuItem(route) {
  return (
    <li>
      <Link to={"/" + route.alt ? route.alt : route.name} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>{route.name}</Link>
    </li>
  );
}

export default MenuItem;