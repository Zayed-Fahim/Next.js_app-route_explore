import getCategories from "@/utils/getAllCategories";
import Link from "next/link";
import Category from "../Category/Category";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-7">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
