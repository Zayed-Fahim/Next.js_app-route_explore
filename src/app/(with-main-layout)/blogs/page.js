import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Day 10 || Blogs",
};

const BlogsPage = async () => {
  const blogs = await loadBlogsData();
  return (
    <div className="min-h-screen container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <Link
          body={body}
          className="block border border-blue-600 py-3 px-5 my-2"
          key={id}
          href={`/blogs/${id}`}
        >
          <h1 className="font-bold text-2xl">Blog ID: {id}</h1>
          <h2 className="font-bold text-xl">{title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
