import React, { useState, useEffect } from "react";
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

const HERO_CONTENT = [
  {
    lead: "Plataforma líder",
    title:
      "A experiência <perfeita>perfeita</perfeita> começa com a <companhia>companhia certa</companhia>",
    description:
      "Explore <perfis>perfis exclusivos</perfis>, filtre por <preferências>preferências</preferências> e agende com <facilidade>facilidade</facilidade>. Na <gatas>Gatas MT</gatas> você escolhe como, quando e com quem quer aproveitar seu momento.",
    image: mulher,
    stats: [
      { number: "+70k", label: "acompanhantes" },
      { number: "+120k", label: "avaliações" },
    ],
  },
  {
    lead: "Milhares de acompanhantes",
    title:
      "Encontre a <pessoa>pessoa certa</pessoa> para seu <momento>momento especial</momento>",
    description:
      "Com <filtros>filtros avançados</filtros> e <perfis>perfis verificados</perfis>, você encontra exatamente o que procura. <Segurança>Segurança</Segurança> e confiança em cada encontro.",
    image: mulher,
    stats: [
      { number: "+70k", label: "acompanhantes" },
      { number: "+120k", label: "avaliações" },
    ],
  },
  {
    lead: "Segurança garantida",
    title:
      "Sua <privacidade>privacidade</privacidade> é nossa <prioridade>prioridade</prioridade>",
    description:
      "Sistema de <pagamento>pagamento seguro</pagamento>, <verificação>verificação de identidade</verificação> e <suporte>suporte 24/7</suporte> para sua tranquilidade. Aproveite com confiança.",
    image: mulher,
    stats: [
      { number: "+70k", label: "acompanhantes" },
      { number: "+120k", label: "avaliações" },
    ],
  },
];

export default function Hero({
  placeholder = "Buscar acompanhantes, cidades, serviços...",
  onSearch,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CONTENT.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = HERO_CONTENT[currentSlide];

  const renderTextWithHighlight = (text) => {
    if (!text) return "";
    const regex = /<(\w+)>([^<]+)<\/\1>/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <span key={match.index} className="text-rose-500">
          {match[2]}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (onSearch) onSearch(value);
  };
  return (
    <section className={`${COLORS.bg}  w-full mt-10 lg:mt-2 `}>
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Texto à esquerda - Oculto em mobile */}
          <div className="hidden lg:block lg:col-span-7 overflow-hidden">
            <div
              className="transition-all duration-1000 ease-in-out"
              style={{
                transform: `translateX(0)`,
                opacity: 1,
              }}
            >
              <p className={`uppercase font-semibold mb-4 ${COLORS.leadText}`}>
                {content.lead}
              </p>
              <h1
                className={`text-4xl sm:text-5xl font-extrabold leading-tight mb-6 ${COLORS.primaryText}`}
              >
                {renderTextWithHighlight(content.title)}
              </h1>
              <p className={`max-w-xl mb-8 ${COLORS.muted}`}>
                {renderTextWithHighlight(content.description)}
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
                {content.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-semibold text-slate-300">
                      {stat.number}
                    </div>
                    <div>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagem - Visível em todos os tamanhos */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end overflow-hidden">
            <div
              className="transition-all duration-1000 ease-in-out"
              style={{
                transform: `translateX(0)`,
                opacity: 1,
              }}
            >
              <div className="relative w-full max-w-md">
                <div className="rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={content.image}
                    alt="Modelo sorrindo"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 left-6 bg-white rounded-full px-4 py-2 shadow-md">
                  <div className="text-sm font-medium">
                    Modelo em destaque
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
