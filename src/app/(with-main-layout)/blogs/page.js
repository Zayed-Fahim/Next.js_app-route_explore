import Link from "next/link";
import React from "react";

const blogs = [
  {
    blog_id: 1,
    year: 2016,
    title: "Blog Title 1",
    description: "Blog Description 1",
  },
  {
    blog_id: 2,
    year: 2017,
    title: "Blog Title 2",
    description: "Blog Description 2",
  },
  {
    blog_id: 3,
    year: 2018,
    title: "Blog Title 3",
    description: "Blog Description 3",
  },
  {
    blog_id: 4,
    year: 2019,
    title: "Blog Title 4",
    description: "Blog Description 4",
  },
  {
    blog_id: 5,
    year: 2020,
    title: "Blog Title 5",
    description: "Blog Description 5",
  },
];
const BlogsPage = () => {
  return (
    <div className="min-h-screen container mx-auto">
      {blogs.map(({ blog_id, year, title }) => (
        <Link
          className="block border border-blue-600 py-3 px-5 my-2"
          key={blog_id}
          href={{
            pathname: `/blogs/${blog_id}/${year}`,
            query: {
              title,
            },
          }}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
