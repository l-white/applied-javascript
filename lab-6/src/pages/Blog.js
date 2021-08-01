import React from "react";
import Posts from '../components/Posts';

const Blog = ({posts}) => {
  return (
    <>
      <h1>Blog</h1>
      <Posts posts={posts} />
    </>
  );
}

export default Blog;