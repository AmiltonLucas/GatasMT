import React from "react";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Navbar from "../../components/Client/Navbar";
import Hero from "../../components/Client/Hero";
import Seguranca from "../../components/Client/Seguranca";
import Footer from "../../components/Client/Footer";
import FeaturedDestaques from "../../components/Client/FeaturedDestaques";
// import Avaliacoes from "../../components/Client/Avaliacoes";
import Contatenos from "../../components/Client/Contatenos";
import BlogSection from "../../components/Client/Blog";
import AcompanhantesHome from "../../components/Client/AcompanhantesHome";

export default function Home() {
  return (
    <div>
      <NavbarBottom />
      <Navbar />
      <Hero />
      <FeaturedDestaques />
      <AcompanhantesHome />
      {/* <Avaliacoes /> */}
      <Seguranca />
      <Contatenos />
      <BlogSection />
      <Footer />
    </div>
  );
}
