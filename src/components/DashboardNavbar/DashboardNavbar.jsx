import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const DashboardNavbar = () => {
  return (
    <div
      className={`${inter.className} h-[8vh] bg-gray-50 sticky top-0 flex flex-row-reverse items-center w-full`}
    >
      <nav className="pr-5">
        <ul className="flex space-x-5 py-5">
          <li className="nav-item">
            <Link className="nav-link text-[1.2rem]" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-[1.2rem]" href="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
