import React from "react";

const SingleBlog = ({ params }) => {
  console.log(params.segments);
  const [blog_id, year] = params.segments || [];
  return (
    <div className="min-h-screen">
      <h1>Blog ID: {blog_id}</h1>
      <p>Posted year: {year}</p>
    </div>
  );
};

export default SingleBlog;
