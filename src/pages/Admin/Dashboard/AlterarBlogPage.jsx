import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarBlog from "../../../components/Admin/AlterarBlog";

export default function AlterarBlogPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarBlog />   
    </div>
  );
}