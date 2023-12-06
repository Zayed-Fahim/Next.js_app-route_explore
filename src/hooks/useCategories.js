import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useCategories = (id) => {
  const path = "http://localhost:5000/categories";
  const {
    data: categories = [],
    error,
    isLoading,
    mutate,
    isValidating,
  } = useSWR(id ? `${path}/${id}` : path, fetcher);
  return {
    categories,
    isValidating,
    error,
    isLoading,
    mutate,
  };
};

export default useCategories;
