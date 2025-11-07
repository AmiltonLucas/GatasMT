import React from "react";
import AcompanhantePerfil from "../../components/Client/AcompanhantePerfil";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Navbar from "../../components/Client/Navbar";
import Footer from "../../components/Client/Footer";

export default function AcompPerfilPage() {
  return (
    <>
      <Navbar />
      <NavbarBottom />
      <AcompanhantePerfil />
      <Footer />
    </>
  );
}
