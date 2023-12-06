import getSingleProduct from "@/utils/getSingleProduct";
import React from "react";

const SingleProductPage = async ({ params }) => {
  const { title, price, features } = await getSingleProduct(params.id);

  return (
    <div className="container mx-auto py-5 my-5 min-h-screen">
      <div className="bg-white drop-shadow-lg h-[23rem] w-[20rem] rounded-md p-5 z-[1]">
        <h1 className="text-xl font-bold pb-3">Name: {title}</h1>
        <h3 className="text-[18px] italic">Price: {price}</h3>
        <h3 className="font-bold mt-8">Features:</h3>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="pl-5">
              *{feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleProductPage;
