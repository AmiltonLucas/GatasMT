import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarContatoInfo from "../../../components/Admin/AlterarContatoInfo";

export default function AlterarContatoInfoPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarContatoInfo />   
    </div>
  );
}