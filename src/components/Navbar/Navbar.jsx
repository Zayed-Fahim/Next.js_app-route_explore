import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div
      className={`${inter.className} flex justify-between items-center sticky top-0 bg-white h-[8vh] border border-b-slate-300`}
    >
      <h1 className="text-3xl font-bold">Day 8</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="flex space-x-5">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
