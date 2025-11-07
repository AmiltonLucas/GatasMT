import React from "react";
import banner from "../../assets/Banner.png";
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

export default function AcompanhantePerfil({
  profile = null,
  onChat,
  onWhatsApp,
}) {
  const p = profile || {
    id: 1,
    name: "Mariana Silva",
    banner: banner,
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
    gallery: [
      photo2,
      photo3,
      photo4,
    ],
  };

  const handleChat = () => onChat?.(p);
  const handleWhatsApp = () =>
    onWhatsApp?.(p) ||
    window.open(`https://wa.me/${p.phone.replace(/\D/g, "")}`);

  return (
    <div className="min-h-screen bg-[#0a0a0a] mt-[4.7rem]">
      {/* Banner */}
      <div className="relative">
        <div className="h-36 md:h-44 w-full overflow-hidden bg-slate-800">
          <img
            src={p.banner}
            alt={`${p.name} banner`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Photo */}
        <div className="max-w-7xl mx-auto px-6 -mt-12">
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
              Profissional com experiência, discreta e com excelente avaliação.
              Atende sob agendamento e mediante confirmação. Fotos reais e
              verificação completa de identidade.
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
                <strong className={COLORS.title}>Endereço:</strong> {p.address}
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
  );
}
