import Link from "next/link";
import React from "react";

const Category = ({ category }) => {
  const { id, name } = category;
  return (
    <Link
      href={`/products?categoryId=${id}`}
      className="h-[20rem] w-[19rem] border rounded-md"
    >
      <h2 className="text-xl font-bold pb-5 text-center py-10">{name}</h2>
    </Link>
  );
};

export default Category;
