import Link from "next/link";
import React from "react";

const SingleProduct = ({ product }) => {
  const { title, id } = product;
  return (
    <Link
      href={`/products/${id}`}
      className="h-[20rem] w-[19rem] border rounded-md"
    >
      <h2 className="text-xl font-bold pb-5 text-center py-10">{title}</h2>
    </Link>
  );
};

export default SingleProduct;
