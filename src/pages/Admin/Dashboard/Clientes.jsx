import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import ClientesAdmin from "../../../Components/Admin/Clientes";

export default function ClientesAdminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <ClientesAdmin/>
    </div>
  );
}
