import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import Dashboard from "../../../Components/Admin/Dashboard";

export default function DashboardAdminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <Dashboard />
    </div>
  );
}