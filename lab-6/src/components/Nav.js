import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="navbar-brand"><Link to="/">React Blog</Link></div>
      </div>
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
  </div>
</nav>
  );
}

export default Nav; 