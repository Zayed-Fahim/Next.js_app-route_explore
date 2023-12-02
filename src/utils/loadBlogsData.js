const loadBlogsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "default",
  });
  return await res.json();
};

export default loadBlogsData;
