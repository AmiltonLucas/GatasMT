import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarContato from "../../../components/Admin/AlterarContato";

export default function AlterarContatoPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarContato />
    </div>
  );
}