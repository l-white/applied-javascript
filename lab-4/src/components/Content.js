import React from "react";
import Admin from './SiteInfo'
import CreateHeader from './CreateHeader';


const Content = () => {
  return (
  <div className="container">
    <CreateHeader />
    <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
    <p>Author: <Admin /></p>
  </div>
  );
}

export default Content;