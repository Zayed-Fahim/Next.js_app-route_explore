import getAllProducts from "@/utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const ProductsPage = async ({ searchParams }) => {
  const products = await getAllProducts(searchParams.categoryId);
  return (
    <div className="container mx-auto py-5 min-h-screen">
      <h1 className="text-2xl font-bold pb-5">All products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-7">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
