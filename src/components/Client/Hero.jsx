import React from "react";
import mulher from "../../assets/MulherBanner3.png";
import { Search as SearchIcon } from "lucide-react";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  inputBg: "bg-white",
  border: "border-slate-200",
  primary: "text-slate-900",
  primaryText: "text-slate-100",
  leadText: "text-rose-600",
  muted: "text-slate-300",
  ctaBg: "bg-rose-600",
  ctaText: "text-white",
  accent: "bg-rose-600",
  accentText: "text-white",
};

export default function Hero({
  placeholder = "Buscar acompanhantes, cidades, serviços...",
  onSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (onSearch) onSearch(value);
  };
  return (
    <section className={`${COLORS.bg}  w-full mt-10 lg:mt-2 `}>
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Texto à esquerda */}
          <div className="lg:col-span-7">
            <p className={`uppercase font-semibold mb-4 ${COLORS.leadText}`}>
              Plataforma líder
            </p>
            <h1
              className={`text-4xl sm:text-5xl font-extrabold leading-tight mb-6 ${COLORS.primaryText}`}
            >
              A experiência <span className="text-rose-500">perfeita</span>{" "}começa com a 
              <span className="text-rose-500"> companhia certa</span> 
            </h1>
            <p className={`max-w-xl mb-8 ${COLORS.muted}`}>
             Explore perfis exclusivos, filtre por preferências e agende com facilidade. Na Gatas MT você escolhe como, quando e com quem quer aproveitar seu momento.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className={`px-6 py-3 rounded-full font-semibold ${COLORS.ctaBg} ${COLORS.ctaText} shadow-md hover:brightness-95 transition-all`}
              >
                Cadastre como cliente
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full font-semibold border border-slate-200 text-slate-800 hover:bg-slate-50 hover:text-rose-600 transition-all duration-300 ease-in-out"
              >
                Cadastre-se grátis
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
              <div>
                <div className="font-semibold text-slate-300">+70k</div>
                <div>acompanhantes</div>
              </div>
              <div>
                <div className="font-semibold text-slate-300">+120k</div>
                <div>avaliações</div>
              </div>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="rounded-full overflow-hidden shadow-2xl">
                <img
                  src={mulher}
                  alt="Modelo sorrindo"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="text-sm font-medium">
                  Respeito, segurança & suporte
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`w-full flex justify-center px-4 py-6 shadow-md ${COLORS.bg}`}
      >
        <div
          className={`flex items-center gap-3 ${COLORS.inputBg} rounded-full px-4 py-2 w-full max-w-2xl border ${COLORS.border}`}
        >
          <label htmlFor="search-input" className="sr-only">
            Pesquisar
          </label>
          <input
            id="search-input"
            name="query"
            type="search"
            placeholder={placeholder}
            className={`flex-1 px-4 py-3 rounded-full border ${COLORS.border} ${COLORS.primary} placeholder:${COLORS.muted} focus:outline-none focus:ring-2 focus:ring-rose-200`}
          />

          <button
            type="submit"
            className={`flex items-center justify-center w-12 h-12 rounded-full ${COLORS.accent} ${COLORS.accentText} shadow-md hover:brightness-95 transition`}
            aria-label="Pesquisar"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </section>
  );
}
