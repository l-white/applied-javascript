import React from "react";
import Admin from './SiteInfo';
import FullName from './SiteInfo'
const Footer = () => {
  return (
    `Copyright ${Admin} ${new Date().getFullYear()}`
  );
}

export default Footer;