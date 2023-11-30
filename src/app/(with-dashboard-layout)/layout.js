import DashboardFooter from "@/components/DashboardFooter/DashboardFooter";
import DashboardNavbar from "@/components/DashboardNavbar/DashboardNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const WithDashboardLayout = ({ children }) => {
  return (
    <main>
      <div className="flex flex-col container mx-auto">
        <DashboardNavbar/>
        <Sidebar />
      </div>
      {children}
      <DashboardFooter />
    </main>
  );
};

export default WithDashboardLayout;
