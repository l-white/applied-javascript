import React from "react";
import FullName from './SiteInfo'

const Content = () => {
  return (
  <div className="container">
    <h1>Basic Navbar Example</h1>
    <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
    <p>Author: <FullName /></p>
  </div>
  );
}

export default Content;