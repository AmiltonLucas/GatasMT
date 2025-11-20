import React, { useRef, useEffect, useState } from "react";
import photo from "../../assets/Mulher.png";
import photo2 from "../../assets/Mulher2.png";
import photo3 from "../../assets/Mulher3.png";
import photo4 from "../../assets/Mulher4.png";
import { MessageCircle, Phone, Star } from "lucide-react";

const COLORS = {
  // dark theme
  bg: "bg-slate-900",
  accent: "bg-rose-500",
  accentText: "text-white",
  title: "text-white",
  muted: "text-white/80",
};

// Featured companions data
const FEATURED_COMPANIONS = [
  {
    id: 2,
    name: "Laura Costa",
    city: "Rio de Janeiro, RJ",
    price: "R$ 350",
    photo: photo2,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 3,
    name: "Ana Pereira",
    city: "Belo Horizonte, MG",
    price: "R$ 300",
    photo: photo3,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 4,
    name: "Camila Rocha",
    city: "Curitiba, PR",
    price: "R$ 380",
    photo: photo4,
    rating: 4.6,
    reviews: 102,
  },
  {
    id: 5,
    name: "Isabella Santos",
    city: "Salvador, BA",
    price: "R$ 320",
    photo: photo,
    rating: 4.9,
    reviews: 134,
  },
  {
    id: 6,
    name: "Fernanda Lima",
    city: "Brasília, DF",
    price: "R$ 360",
    photo: photo2,
    rating: 4.8,
    reviews: 110,
  },
  {
    id: 7,
    name: "Carolina Oliveira",
    city: "Fortaleza, CE",
    price: "R$ 290",
    photo: photo3,
    rating: 4.5,
    reviews: 76,
  },
];

export default function AcompanhantePerfil({
  profile = null,
  onChat,
  onWhatsApp,
}) {
  const p = profile || {
    id: 1,
    name: "Mariana Silva",
    photo: photo,
    price: "R$ 400",
    city: "São Paulo, SP",
    address: "Jardins • Próximo ao metrô",
    hours: "09:00 - 02:00",
    phone: "+5511999999999",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        name: "Carlos",
        text: "Profissional excelente e pontual.",
        stars: 5,
      },
      {
        id: 2,
        name: "Lucas",
        text: "Atendimento discreto e muito simpática.",
        stars: 5,
      },
    ],
    gallery: [photo2, photo3, photo4],
  };

  // imagens para o carrossel (inclui foto principal + galeria)
  const carouselImages = [p.photo, ...(p.gallery || [])];
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    const measureAndStart = () => {
      cancelAnimationFrame(rafRef.current);
      posRef.current = 0;

      // pega todos os filhos (imagens)
      const children = Array.from(node.children || []);
      const N = Math.floor(children.length / 2); // metade → primeira sequência

      // calcula largura da primeira sequência
      let singleWidth = 0;
      for (let i = 0; i < N; i++) {
        singleWidth += children[i]?.offsetWidth || 0;
      }
      if (!singleWidth) return;

      const speed = 100; // px/s
      let last = performance.now();

      const step = (now) => {
        const dt = (now - last) / 1000;
        last = now;

        posRef.current += speed * dt;

        // LOOP INFINITO
        if (posRef.current >= singleWidth) {
          posRef.current -= singleWidth; // teleporta pro começo da sequência
        }

        node.style.transform = `translate3d(-${posRef.current}px,0,0)`;
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
      setIsRunning(true);
    };

    // aguardar imagens carregarem
    const imgs = Array.from(node.querySelectorAll("img"));
    let loaded = 0;

    if (imgs.length === 0) {
      measureAndStart();
    } else {
      const onLoad = () => {
        loaded += 1;
        if (loaded >= imgs.length) measureAndStart();
      };

      imgs.forEach((img) => {
        if (img.complete) onLoad();
        else img.addEventListener("load", onLoad, { once: true });
      });
    }

    // recalcular ao redimensionar
    const onResize = () => {
      cancelAnimationFrame(rafRef.current);
      setIsRunning(false);
      setTimeout(measureAndStart, 150);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [carouselImages]);

  const handleChat = () => onChat?.(p);
  const handleWhatsApp = () =>
    onWhatsApp?.(p) ||
    window.open(`https://wa.me/${p.phone.replace(/\D/g, "")}`);

  return (
    <div className="bg-[#0a0a0a]">
      <div className="min-h-screen bg-[#0a0a0a] pt-[6rem] ">
        {/* Carrossel contínuo de fotos (loop infinito) */}
        <div className="w-full overflow-hidden py-4">
          {/* base styling para track e items (sem gaps) */}
          <style>{`.acomp-carousel-track{display:flex;gap:0;align-items:center;white-space:nowrap}.acomp-carousel-track img{display:block}`}</style>
          {/* keyframe dinâmico (não usado - RAF driven) */}
          <div>
            <div
              ref={trackRef}
              className="acomp-carousel-track"
              style={{ willChange: "transform" }}
            >
              {[...Array(4)].flatMap(() => carouselImages).map((src, i) => (
                <div
                  key={i}
                  className="acomp-item"
                  style={{ flexShrink: 0, margin: 0 }}
                >
                  <img
                    src={src}
                    alt={`foto-${i}`}
                    style={{
                      width: 220,
                      height: 420,
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 12,
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo header. Mobile centralizado, desktop à esquerda */}
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-xl overflow-hidden bg-slate-800 shadow-lg border-4 border-slate-900">
              <img
                src={p.photo}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1
                    className={`text-2xl font-extrabold ${COLORS.title} text-center md:text-left`}
                  >
                    {p.name}
                  </h1>
                  <div
                    className={`text-sm ${COLORS.muted} text-center md:text-left`}
                  >
                    {p.city} • {p.address}
                  </div>
                  <div className="mt-2 flex items-center gap-3 justify-center md:justify-start">
                    <div
                      className={`text-lg font-bold text-rose-400 text-center`}
                    >
                      {p.price}
                    </div>
                    <div className={`text-sm ${COLORS.muted}`}>
                      {p.hours} • Atendimento
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:items-end items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={handleChat}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full ${COLORS.accent} ${COLORS.accentText} shadow-sm w-full md:w-auto`}
                  >
                    <MessageCircle className="w-4 h-4" /> Chat
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white shadow-sm w-full md:w-auto"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2 justify-center md:justify-start">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400" />
                  <strong className={`text-sm ${COLORS.title}`}>
                    {p.rating}
                  </strong>
                </div>
                <div className={`text-sm ${COLORS.muted}`}>
                  ({p.reviews.length} avaliações)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* About / Description (placeholder) */}
            <div className="bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-700">
              <h3 className={`text-lg font-semibold mb-3 ${COLORS.title}`}>
                Sobre
              </h3>
              <p className={`text-sm ${COLORS.muted}`}>
                Profissional com experiência, discreta e com excelente
                avaliação. Atende sob agendamento e mediante confirmação. Fotos
                reais e verificação completa de identidade.
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-6 bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-700">
              <h3 className={`text-lg font-semibold mb-4 ${COLORS.title}`}>
                Fotos
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {p.gallery.map((src, i) => (
                  <div key={i} className="rounded-lg overflow-hidden">
                    <img
                      src={src}
                      alt={`foto-${i}`}
                      className="w-full h-32 sm:h-40 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-6 bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-700">
              <h3 className={`text-lg font-semibold mb-4 ${COLORS.title}`}>
                Avaliações
              </h3>
              <div className="flex flex-col gap-4">
                {p.reviews.map((r) => (
                  <div
                    key={r.id}
                    className="border border-slate-700 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className={`font-medium ${COLORS.title}`}>
                        {r.name}
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: r.stars }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4" />
                        ))}
                      </div>
                    </div>
                    <p className={`text-sm ${COLORS.muted} mt-2`}>{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-700">
              <h4 className={`font-semibold mb-2 ${COLORS.title}`}>Detalhes</h4>
              <ul className={`text-sm ${COLORS.muted} space-y-2`}>
                <li>
                  <strong className={COLORS.title}>Local:</strong> {p.city}
                </li>
                <li>
                  <strong className={COLORS.title}>Endereço:</strong>{" "}
                  {p.address}
                </li>
                <li>
                  <strong className={COLORS.title}>Horário:</strong> {p.hours}
                </li>
                <li>
                  <strong className={COLORS.title}>Preço:</strong> {p.price}
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-700">
              <h4 className={`font-semibold mb-2 ${COLORS.title}`}>Ações</h4>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleChat}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${COLORS.accent} ${COLORS.accentText} shadow-sm`}
                >
                  <MessageCircle className="w-4 h-4" /> Iniciar Chat
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Entrar em contato (WhatsApp)
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Seção de Destaques */}
      <section className="mt-16 max-w-7xl mx-auto px-6 pb-12 bg-[#0a0a0a]">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Outros Destaques
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {FEATURED_COMPANIONS.map((p) => (
            <div key={p.id} className="group">
              <div className="relative overflow-hidden rounded-xl h-64 mb-3">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 gap-2">
                  <a
                    href={`/acompanhantes/perfil/${p.id}`}
                    className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-sm ${COLORS.accent} ${COLORS.accentText} font-semibold`}
                  >
                    Ver Perfil
                  </a>
                  <button
                    onClick={() => {
                      const message = `Olá, gostaria de conhecer a ${p.name}. Você poderia me passar mais informações?`;
                      const whatsappUrl = `https://wa.me/55${p.whatsapp.replace(
                        /\D/g,
                        ""
                      )}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, "_blank");
                    }}
                    className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-full text-sm bg-green-600 text-white font-semibold hover:bg-green-700"
                  >
                    <Phone className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-2">{p.city}</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(p.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-400">({p.reviews})</span>
              </div>
              <p className="text-lg font-bold text-rose-500">{p.price}</p>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden flex flex-col gap-6">
          {FEATURED_COMPANIONS.map((p) => (
            <div key={p.id}>
              <div className="relative overflow-hidden rounded-xl h-48 mb-3">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{p.name}</h3>
              <p className="text-sm text-slate-400 mb-2">{p.city}</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(p.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-400">({p.reviews})</span>
              </div>
              <p className="text-lg font-bold text-rose-500 mb-3">{p.price}</p>
              <div className="flex gap-2">
                <a
                  href={`/acompanhantes/perfil/${p.id}`}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm ${COLORS.accent} ${COLORS.accentText} font-semibold`}
                >
                  Ver Perfil
                </a>
                <button
                  onClick={() => {
                    const message = `Olá, gostaria de conhecer a ${p.name}. Você poderia me passar mais informações?`;
                    const whatsappUrl = `https://wa.me/55${p.whatsapp.replace(
                      /\D/g,
                      ""
                    )}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full text-sm bg-green-600 text-white font-semibold hover:bg-green-700"
                >
                  <Phone className="w-4 h-4" /> WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
