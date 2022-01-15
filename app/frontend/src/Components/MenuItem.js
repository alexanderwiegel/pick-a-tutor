import React from "react";
import { Link } from 'react-router-dom';

function MenuItem(name) {
  return (
    <>
      <li>
        <Link to={"/" + name.name} style={{ textDecoration: 'none', fontFamily: 'inherit' }}>{name.name}</Link>
      </li>
    </>
  );
}

export default MenuItem;