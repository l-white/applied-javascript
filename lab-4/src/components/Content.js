import React from "react";
import Admin from './SiteInfo'
//import CreateHeader from './CreateHeader';

const webpages = [
  { id: 1, name: "Home", url: "/"}, 
  { id: 2, name: "About", url: "/about" }, 
  { id: 3, name: "Blog", url: "/blog" }, 
  { id: 4, name: "Contact", url: "/contact" }, 
];

const Content = () => {
  return (
  <div className="container">
    <h1>Website</h1>
    <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
    <p>Author: <Admin /></p>
  </div>
  );
}

console.log(window.location.href);

export default Content;