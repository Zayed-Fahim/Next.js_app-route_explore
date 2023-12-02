import React from "react";

const loadSingleBlogData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });
  return await res.json();
};

export default loadSingleBlogData;
