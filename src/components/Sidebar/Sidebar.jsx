import Link from "next/link";
import NavLink from "../NavLink/NavLink";

const Sidebar = () => {
  const sidebarLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Add Product",
      path: "/dashboard/add-product",
    },
    {
      title: "Manage Categories",
      path: "/dashboard/manage-categories",
    },
    {
      title: "Manage Products",
      path: "/dashboard/manage-products",
    },
    {
      title: "Profile Settings",
      path: "/dashboard/profile-settings",
    },
  ];
  return (
    <aside className="w-[20vw] h-screen bg-blue-500">
      <Link href="/dashboard">
        <h1 className="text-4xl font-bold px-5 py-5 bg-gray-200">Dashboard</h1>
      </Link>

      <div className="flex flex-col">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.title}
            className="text-xl text-white font-semibold py-3 px-5"
            exact
            activeClassName="w-full bg-blue-900"
            href={link.path}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
