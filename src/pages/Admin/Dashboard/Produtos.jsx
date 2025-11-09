import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AcompanhantesAdmin from "../../../Components/Admin/Acompanhantes";

export default function AcompanhantesAdminPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <AcompanhantesAdmin/>
    </div>
  );
}
