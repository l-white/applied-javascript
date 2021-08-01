import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <article>
    <h1>404</h1>
    <p>Not found.</p>
    <p><Link to="/">Return to home page</Link></p>
  </article>
);

export default NotFound;