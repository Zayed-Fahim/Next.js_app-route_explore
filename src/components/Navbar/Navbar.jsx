import React from "react";
import { Inter } from "next/font/google";
import NavLink from "../NavLink/NavLink";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`${inter.className} sticky top-0 w-full bg-blue-500`}>
      <div className="flex justify-between items-center container mx-auto h-[8vh]">
        <h1 className="text-3xl font-bold text-white">Day 12</h1>
        <nav className="">
          <ul className="flex space-x-5">
            <li>
              <NavLink
                exact="/"
                activeClassName="text-white bg-blue-700 px-4 py-1"
                className="text-white"
                href="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="/"
                activeClassName="text-white bg-blue-700 px-4 py-1"
                className="text-white"
                href="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="/"
                activeClassName="text-white bg-blue-700 px-4 py-1"
                className="text-white"
                href="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="/"
                activeClassName="text-white bg-blue-700 px-4 py-1"
                className="text-white"
                href="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="/"
                activeClassName="text-white bg-blue-700 px-4 py-1"
                className="text-white"
                href="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="/"
                activeClassName="text-white bg-blue-700 px-4 py-1"
                className="text-white"
                href="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
