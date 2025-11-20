import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import Alterar from "../../../components/Admin/Alterar";

export default function AlterarAdminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <SidebarMenu />
      <Alterar />
    </div>
  );
}
