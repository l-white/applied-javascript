import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => (
  <article>
    <ul>
      {posts.length < 1 && <li key="empty">No posts yet!</li>}
      {posts.map(post => (
        <li  className="blog-posts" key={post.id}>
          <h2><Link to={`/post/${post.slug}`}>{post.title}</Link></h2>
        </li>
      ))}
    </ul>
  </article>
);

export default Posts;