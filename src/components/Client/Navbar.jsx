import React from "react";
import logo from "../../assets/LogoTB.png";
import { useState } from "react";
import { Menu, X, Bell, Globe } from "lucide-react";
import { CiLogin } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

const COLORS = {
  bg: "bg-zinc-900",
  panelBg: "bg-zinc-900",
  text: "text-gray-100",
  accent: "text-rose-500",
  accentBtn: "border border-rose-500 text-rose-500",
  overlay: "bg-black/50",
  itemHover: "hover:bg-zinc-900",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${COLORS.bg} ${COLORS.text} p-4 shadow-md z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Botão de abrir/fechar menu (mobile) */}
        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 md:hidden transition hover:opacity-80"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button> */}

          {/* Logo */}
          <h1 className={`text-xl font-bold tracking-wide ${COLORS.accent}`}>
            <a href="/">
              <img
                src={logo}
                className="object-cover w-[6rem] lg:w-[7rem] h-auto"
              />
            </a>
          </h1>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            className={`px-4 py-2 rounded-full font-semibold hover:bg-rose-500 hover:text-white transition-all duration-500 ease-in-out ${COLORS.accentBtn}`}
            href="/login"
          >
            LOGIN <CiLogin className="w-5 h-5 inline-block m-auto" />
          </a>
            <a className="px-3 py-2 font-semibold" href="/perfil">
              Perfil{" "}
              <IoPersonCircleOutline className="w-5 h-5 inline-block mr-2" />
            </a>
            <a className="px-3 py-2 font-semibold" href="/acompanhantes">
              Acompanhantes {" "}
            </a>
            <a className="px-3 py-2 font-semibold" href="/sobrenos">
              Sobre nós{" "}
            </a>
            <a className="px-3 py-2 font-semibold" href="/contato">
              Contato{" "}
              <FaPhone className="w-5 h-5 inline-block mr-2" />
            </a>
          <button
            className="px-3 py-2 rounded-md bg-white/5"
            aria-label="Idioma"
          >
            <Globe className="w-5 h-5 inline-block mr-2" /> BR
          </button>
          <button className="p-2" aria-label="Notificações">
            <Bell className="w-5 h-5" />
          </button>
        </div>
        {/* Small helper for alignment on mobile
        <div className="md:hidden" /> */}
      </div>

      {/* Overlay (fundo escuro)
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          COLORS.overlay
        } backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div> */}

      {/* Menu lateral
      <div
        className={`fixed top-0 left-0 h-full w-64 ${
          COLORS.panelBg
        } shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col mt-16 space-y-4 text-lg font-medium text-white">
          <li
            className={`${COLORS.itemHover} py-3 pl-6 transition cursor-pointer`}
          >
            Início
          </li>
          <li
            className={`${COLORS.itemHover} py-3 pl-6 transition cursor-pointer`}
          >
            Acompanhantes
          </li>
          <li
            className={`${COLORS.itemHover} py-3 pl-6 transition cursor-pointer`}
          >
            Perfil
          </li>
          <li
            className={`${COLORS.itemHover} py-3 pl-6 transition cursor-pointer`}
          >
            SAC
          </li>
        </ul>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-center text-slate-300 mb-3">
            SIGA A <strong className="text-white">Gatas MT</strong>
          </div>
          <div className="flex justify-center gap-3">
            <a
              aria-label="Instagram"
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500 text-white trasition-all duration-300 ease-in-out"
            >
              <FaInstagram />
            </a>
            <a
              aria-label="Facebook"
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-pink-500 trasition-all duration-300 ease-in-out"
            >
              <FaFacebookF />
            </a>
            <a
              aria-label="X"
              href="#"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-pink-500 trasition-all duration-300 ease-in-out"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div> */}
    </nav>
  );
}
