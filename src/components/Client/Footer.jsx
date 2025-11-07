import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  text: "text-slate-200",
  accent: "text-rose-500",
  linkHover: "hover:text-slate-900",
};

export default function Footer() {
  return (
    <footer className={`${COLORS.bg} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-rose-500">Gatas Mt</div>
            <p className="mt-3 text-sm text-slate-300">
              Conectando clientes e profissionais com respeito e segurança.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-slate-300">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a className={`${COLORS.linkHover}`} href="#">
                  Sobre nós
                </a>
              </li>
              <li>
                <a className={`${COLORS.linkHover}`} href="#">
                  Carreiras
                </a>
              </li>
              <li>
                <a className={`${COLORS.linkHover}`} href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-slate-300">Ajuda</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a className={`${COLORS.linkHover}`} href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className={`${COLORS.linkHover}`} href="#">
                  Suporte
                </a>
              </li>
              <li>
                <a className={`${COLORS.linkHover}`} href="#">
                  Segurança
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-slate-300">Siga-nos</h4>
            <div className="flex items-center gap-3">
              <a
                aria-label="Instagram"
                href="#"
                className="w-9 h-9 rounded-full bg-white flex text-rose-500 items-center justify-center shadow-sm hover:shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="w-9 h-9 rounded-full bg-white flex text-blue-500 items-center justify-center shadow-sm hover:shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                <Facebook className="w-4 h-4 " />
              </a>
              <a
                aria-label="X"
                href="#"
                className="w-9 h-9 rounded-full bg-white flex text-black items-center justify-center shadow-sm hover:shadow-lg hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                <BsTwitterX className="w-4 h-4" />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="w-9 h-9 rounded-full bg-white flex text-red-500 items-center justify-center shadow-sm hover:shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Gatasmt. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a className={`${COLORS.linkHover}`} href="#">
              Termos
            </a>
            <a className={`${COLORS.linkHover}`} href="#">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
