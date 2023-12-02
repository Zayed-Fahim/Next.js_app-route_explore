import React from "react";
import image_1 from "@/assets/images.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold pb-5">This is Home.</h1>
      <Image width={1920} src={image_1} alt="" />
    </div>
  );
};

export default Home;
