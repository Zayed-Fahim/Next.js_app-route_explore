import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const WithLayout = ({ children }) => {
  return (
    <div className={`${inter.className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WithLayout;
