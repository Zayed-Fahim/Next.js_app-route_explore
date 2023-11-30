import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const WithDashboardLayout = ({ children }) => {
  return (
    <main className="container mx-auto h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <DashboardNavbar />
        {children}
      </div>
    </main>
  );
};

export default WithDashboardLayout;
