import React from "react";
import { Link } from 'react-router-dom';

function MenuItem(route) {
  const add = route.alt != null ? route.alt : route.name
  return (
    <li>
      <Link to={"/" + add} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>{route.name}</Link>
    </li>
  );
}

export default MenuItem;