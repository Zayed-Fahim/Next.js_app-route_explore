import ManageProducts from "@/components/ManageProducts/ManageProducts";
import getAllProducts from "@/utils/getAllProducts";
import React from "react";

const ManageProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="h-auto w-full">
      <ManageProducts products={products} />
    </div>
  );
};

export default ManageProductsPage;
