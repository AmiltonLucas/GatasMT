import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import CadastroVenda from "../../../Components/Admin/CadastroVenda";

export default function CadastroVendaPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <SidebarMenu />
      <div className="flex-1">
        <div className="w-full max-w-md">
          <CadastroVenda />
        </div>
      </div>
    </div>
  );
}
