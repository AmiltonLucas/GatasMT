import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarGeral from "../../../components/Admin/AlterarGeral";

export default function AlterarGeralPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0a0a0a]">
      <SidebarMenu />
      <AlterarGeral />
    </div>
  );
}
