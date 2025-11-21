import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarFooter from "../../../components/Admin/AlterarFooter";

export default function AlterarFooterPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarFooter />
    </div>
  );
}