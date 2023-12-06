import ManageCategories from "@/components/ManageCategories/ManageCategories";
import getAllCategories from "@/utils/getAllCategories";
import React from "react";

const ManageCategoriesPage = async () => {
//   const categories = await getAllCategories();
  return (
    <div className="h-auto w-full p-5">
      <ManageCategories
      //   categories={categories}
      />
    </div>
  );
};

export default ManageCategoriesPage;
