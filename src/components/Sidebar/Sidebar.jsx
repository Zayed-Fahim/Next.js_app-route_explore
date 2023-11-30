import Link from "next/link";

const Sidebar = () => {
  const sidebarLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Add Product",
      path: "/add-product",
    },
    {
      title: "Manage Products",
      path: "/manage-products",
    },
    {
      title: "Profile Settings",
      path: "/profile-settings",
    },
  ];
  return (
    <aside className="w-[15vw] h-screen border bg-blue-500 border-r-zinc-200">
      <Link href="/dashboard">
        <h1 className="text-4xl font-bold px-5 py-5 bg-gray-50">Dashboard</h1>
      </Link>
      <ul className="px-5 py-4" >
        {sidebarLinks.map((link) => (
          <li
            key={link.title}
            className="text-xl text-white font-semibold py-3"
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
