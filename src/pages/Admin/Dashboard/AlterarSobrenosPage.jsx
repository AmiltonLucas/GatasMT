import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarSobreNos from "../../../components/Admin/AlterarSobreNos";

export default function AlterarSobrenosPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu /> 
      <AlterarSobreNos /> 
    </div>
  );
}