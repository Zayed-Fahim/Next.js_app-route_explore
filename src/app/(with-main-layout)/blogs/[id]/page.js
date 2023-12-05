import loadBlogsData from "@/utils/loadBlogsData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await loadSingleBlogData(params.id);
  return {
    title: `Day 12 || Blog-${id}`,
  };
};

export const generateStaticParams = async () => {
  const blogs = await loadBlogsData();
  return blogs.map(({ id }) => ({ id: id.toString() }));
};

const SingleBlog = async ({ params }) => {
  const blog = await loadSingleBlogData(params.id);
  return (
    <div className="min-h-screen container mx-auto mt-5">
      <h1 className="font-bold">Blog ID: {blog?.id}</h1>
      <h2 className="text-xl">
        <span className="font-bold">Title:</span> {blog?.title}
      </h2>
      <p>
        <span className="font-bold">Description:</span> {blog?.body}
      </p>
    </div>
  );
};

export default SingleBlog;
