import React from "react";
import Navbar from "../../components/Client/Navbar";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Cidades from "../../components/Client/Cidades";
import Footer from "../../components/Client/Footer";

export default function CidadesPage() {
  return (
    <div>
      <Navbar />
      <NavbarBottom />
      <Cidades />
      <Footer />
    </div>
  );
}
