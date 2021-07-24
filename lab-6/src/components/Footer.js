import React from "react";
import AdminInfo from './AdminInfo';

const GetDate = () => {
  return `Copyright ${new Date().getFullYear()}`;
}

const Footer = () => {
  return (
    <div>{GetDate()} By <AdminInfo author="Laura White"/></div>
    
  );
}

export default Footer;