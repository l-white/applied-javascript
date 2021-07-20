import React from "react";
import { Link } from 'react-router-dom';

const DisplayNav = () => {
  return (
    <ul className="nav navbar-nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default DisplayNav;