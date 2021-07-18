import React from 'react';



const Nav = () => {
  const ListWebpages = () => {
    const webpages = ["Home", "About", "Blog", "Contact"].map(webpage => (
     <li key={webpage}>{webpage}</li>
   ));
   return(
     <ul className="nav navbar-nav">
     {webpages}
     </ul>
   );
 }
  return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/#">WebSiteName</a>
      </div>
  <ListWebpages />
</div>
</nav>
  );
}

export default Nav;