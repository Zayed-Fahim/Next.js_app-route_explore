import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const DashboardNavbar = () => {
  return (
    <div
      className={`${inter.className} h-[8vh] bg-gray-200 sticky top-0 flex flex-row-reverse items-center w-full border-l-zinc-300`}
    >
      <nav className="pr-5">
        <ul className="flex space-x-5 py-5">
          <li>
            <Link className="text-[1.2rem]" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-[1.2rem]" href="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
