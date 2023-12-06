const getAllCategories = async () => {
  const res = await fetch("http://localhost:5000/categories", {
    cache: "force-cache",
  });
  const categories = res.json();
  return categories;
};

export default getAllCategories;
