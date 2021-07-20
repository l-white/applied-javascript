import React from 'react';
import DisplayNav from './DisplayNav';

const Nav = () => {
  return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/#">WebsiteName</a>
      </div>
    <DisplayNav />
</div>
</nav>
  );
}

export default Nav; 