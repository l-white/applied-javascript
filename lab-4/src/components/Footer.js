import React from "react";
import Admin from './SiteInfo';

const GetDate = () => {
  return `Copyright ${new Date().getFullYear()}`;
}

const Footer = () => {
  return (
    <div>{GetDate()} by <Admin /></div>
    
  );
}

export default Footer;