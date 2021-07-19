import React from "react";
import Admin from './SiteInfo';
import FullName from './SiteInfo'

const GetDate = () => {
  return `Copyright ${new Date().getFullYear()}`;
}

const Footer = () => {
  return (
    <div>{GetDate()} by <FullName /></div>
    
  );
}

export default Footer;