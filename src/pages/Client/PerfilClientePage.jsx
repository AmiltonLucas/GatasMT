import React from "react";
import Navbar from "../../components/Client/Navbar";
import NavbarBottom from "../../components/Client/NavbarBottom";
import PerfilCliente from "../../components/Client/PerfilCliente";
import Footer from "../../components/Client/Footer";

export default function PerfilClientePage() {
  return (
    <>
      <Navbar />
      <NavbarBottom />
      <PerfilCliente />
      <Footer />
    </>
  );
}
