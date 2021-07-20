import React from "react";

const webpages = [
  { id: 1, name: "Home", url: "/"}, 
  { id: 2, name: "About", url: "/about" }, 
  { id: 3, name: "Blog", url: "/blog" }, 
  { id: 4, name: "Contact", url: "/contact" }, 
];

const DisplayNav = () => {
  return (
    <ul className="nav navbar-nav">
    {webpages.map((webpage, i) => (
      <li key = {i}><a href={webpage.url}>{webpage.name}</a></li>
    ))}
    </ul>
  );
}

export default DisplayNav;