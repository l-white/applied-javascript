import React from "react";

const webpages = [
  { id: 1, name: "Home", url: "/"}, 
  { id: 2, name: "About", url: "/about" }, 
  { id: 3, name: "Blog", url: "/blog" }, 
  { id: 4, name: "Contact", url: "/contact" }, 
];

const CreateHeader = () => {
  return (
    <h1>{webpages.name}</h1>
  )
}

export default CreateHeader;