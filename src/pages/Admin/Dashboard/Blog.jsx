import React from "react";  
import AdminBlogCreate from "../../../Components/Admin/Blog";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";

export default function BlogAdiminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0a0a0a]">
          <SidebarMenu />
          <AdminBlogCreate/>
        </div>
  );
}