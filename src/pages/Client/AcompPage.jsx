import React from "react";
import Acompanhantes from "../../components/Client/Acompanhantes";
import Navbar from "../../components/Client/Navbar";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Footer from "../../components/Client/Footer";
import BannerCarousel from "../../components/Client/BannerCarousel";
import Filtro from "../../components/Client/Filtro";

export default function AcompPage() {
  return (
    <>
      <NavbarBottom />
      <Navbar />
      <BannerCarousel />
        <Acompanhantes />
      <Footer />
    </>
  );
}
