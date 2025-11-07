import React from "react";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Navbar from "../../components/Client/Navbar";
import Hero from "../../components/Client/Hero";
import LinksPopular from "../../components/Client/Links";
import Seguranca from "../../components/Client/Seguranca";
import Footer from "../../components/Client/Footer";
import Etnias from "../../components/Client/Etnias";
import FeaturedDestaques from "../../components/Client/FeaturedDestaques";
import Avaliacoes from "../../components/Client/Avaliacoes";
import Contatenos from "../../components/Client/Contatenos";
import BlogSection from "../../components/Client/Blog";

export default function Home() {
  return (
    <div>
      <NavbarBottom />
      <Navbar />
      <Hero />
      <Etnias />
      <LinksPopular />
      <FeaturedDestaques />
      <Avaliacoes />
      <Seguranca />
      <Contatenos />
      <BlogSection />
      <Footer />
    </div>
  );
}
