import React from "react";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold pb-5">All Categories</h1>
      <Categories />
    </div>
  );
};

export default Home;
