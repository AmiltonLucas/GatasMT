import React from "react";
import Navbar from "../../components/Client/Navbar";
import NavbarBottom from "../../components/Client/NavbarBottom";
import Footer from "../../components/Client/Footer";
import SearchAcompanhantes from "../../components/Client/SearchAcompanhantes";

export default function SearchAcompPage() {
  return (
    <>
      <NavbarBottom />
      <Navbar />
      <SearchAcompanhantes />
      <Footer />    
    </>
  );
}
