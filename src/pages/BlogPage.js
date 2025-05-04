// src/pages/BlogPage.js
import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

function BlogPage() {
  const { blogId } = useParams();
  const blog = blogData.find(b => b.path === blogId);

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPage;
