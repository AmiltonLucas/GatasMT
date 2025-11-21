import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarNavbar from "../../../components/Admin/AlterarNavbar";

export default function AlterarNavbarPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarNavbar />
    </div>
  );
}