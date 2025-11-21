import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarAcompanhantes from "../../../components/Admin/AlterarAcompanhantes";

export default function AlterarAcompanhantesPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarAcompanhantes />
    </div>
  );
}