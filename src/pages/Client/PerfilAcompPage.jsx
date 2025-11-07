import React from "react";
import Navbar from "../../components/Client/Navbar";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Perfil from "../../components/Client/PerfilAcompanhante";
import Footer from "../../components/Client/Footer";

export default function PerfilAcompPage() {
  return (
    <>
      <Navbar />
      <NavbarBottom />
      <Perfil />
      <Footer />
    </>
  );
}
