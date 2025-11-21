import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import AlterarHero from "../../../components/Admin/AlterarHero";

export default function AlterarHeroPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <SidebarMenu />
      <AlterarHero />
    </div>
  );
}