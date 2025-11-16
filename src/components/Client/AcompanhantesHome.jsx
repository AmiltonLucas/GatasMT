import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";
import Mulher4 from "../../assets/Mulher4.png";
import Mulher5 from "../../assets/Mulher5.png";
import Mulher6 from "../../assets/Mulher6.png";
import Mulher7 from "../../assets/Mulher7.png";

const COLORS = {
  // dark theme
  bg: "bg-slate-900",
  pageBg: "bg-[#0a0a0a]",
  title: "text-white",
  muted: "text-white/80",
  price: "text-rose-400",
  cardBg: "bg-slate-800",
};

export default function AcompanhantesHome({
  items = null,
  onChat,
  onWhatsApp,
}) {
  const sample = [
    {
      id: 1,
      name: "Mariana Silva",
      city: "São Paulo, SP",
      price: "R$ 400",
      photo: Mulher,
      rating: 4.8,
      reviews: 128,
    },
    {
      id: 2,
      name: "Laura Costa",
      city: "Rio de Janeiro, RJ",
      price: "R$ 350",
      photo: Mulher2,
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 3,
      name: "Ana Pereira",
      city: "Belo Horizonte, MG",
      price: "R$ 300",
      photo: Mulher3,
      rating: 4.7,
      reviews: 89,
    },
    {
      id: 4,
      name: "Camila Rocha",
      city: "Curitiba, PR",
      price: "R$ 380",
      photo: Mulher4,
      rating: 4.6,
      reviews: 102,
    },
    {
      id: 5,
      name: "Isabella Santos",
      city: "Salvador, BA",
      price: "R$ 320",
      photo: Mulher,
      rating: 4.9,
      reviews: 134,
    },
    {
      id: 6,
      name: "Fernanda Lima",
      city: "Brasília, DF",
      price: "R$ 360",
      photo: Mulher5,
      rating: 4.8,
      reviews: 110,
    },
    {
      id: 7,
      name: "Carolina Oliveira",
      city: "Fortaleza, CE",
      price: "R$ 290",
      photo: Mulher6,
      rating: 4.5,
      reviews: 76,
    },
    {
      id: 7,
      name: "Carolina Oliveira",
      city: "Fortaleza, CE",
      price: "R$ 290",
      photo: Mulher7,
      rating: 4.5,
      reviews: 76,
    },
  ];

  const list = items || sample;

  return (
    <section className={`${COLORS.pageBg} py-8 min-h-screen`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-2xl font-bold mb-4 text-center  ${COLORS.title}`}>
          Acompanhantes
        </h2>

        {/* DESKTOP GRID - 4 por linha */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {list.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              {/* Imagem com overlay */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {p.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-white text-sm font-semibold">
                      {p.rating}
                    </span>
                    <span className="text-gray-300 text-xs">({p.reviews})</span>
                  </div>

                  <div className="text-gray-200 text-xs mb-2">{p.city}</div>

                  <div className="text-rose-400 text-lg font-bold mb-3">
                    {p.price}
                  </div>

                  <div className="flex gap-2">
                    {onWhatsApp ? (
                      <button
                        onClick={() => onWhatsApp?.(p)}
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
                      >
                        <Phone className="w-3 h-3" />
                        WhatsApp
                      </button>
                    ) : (
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          `Olá, tenho interesse nos seus serviços (${p.name}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-emerald-500 text-white text-xs font-semibold hover:bg-emerald-600 transition"
                      >
                        <Phone className="w-3 h-3" />
                        WhatsApp
                      </a>
                    )}

                    <button
                      onClick={() => onChat?.(p)}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition"
                    >
                      <MessageCircle className="w-3 h-3" />
                      Chat
                    </button>
                  </div>

                  <a
                    href={`/acompanhantes/perfil`}
                    className="text-center text-xs text-gray-300 hover:text-white mt-2 transition"
                  >
                    Ver perfil completo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE - 1 por linha */}
        <div className="md:hidden flex flex-col gap-6">
          {list.map((p) => (
            <div key={p.id} className="w-full">
              {/* Imagem */}
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg mb-4">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Informações abaixo */}
              <div className="px-2">
                <h3 className={`text-xl font-bold ${COLORS.title} mb-2`}>
                  {p.name}
                </h3>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">★</span>
                  <span className={`font-semibold ${COLORS.title}`}>
                    {p.rating}
                  </span>
                  <span className={`text-sm ${COLORS.muted}`}>
                    ({p.reviews} avaliações)
                  </span>
                </div>

                <div className={`text-sm ${COLORS.muted} mb-2`}>{p.city}</div>

                <div className={`text-2xl font-bold ${COLORS.price} mb-4`}>
                  {p.price}
                </div>

                <div className="flex flex-col gap-2">
                  {onWhatsApp ? (
                    <button
                      onClick={() => onWhatsApp?.(p)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                    >
                      <Phone className="w-4 h-4" />
                      Enviar WhatsApp
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `Olá, tenho interesse nos seus serviços (${p.name}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                    >
                      <Phone className="w-4 h-4" />
                      Enviar WhatsApp
                    </a>
                  )}

                  <button
                    onClick={() => onChat?.(p)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-rose-600 text-white font-semibold hover:bg-rose-700 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat
                  </button>

                  <a
                    href={`/acompanhantes/perfil`}
                    className={`w-full text-center py-2 text-sm ${COLORS.muted} hover:underline`}
                  >
                    Ver perfil completo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ver Mais Button */}
      <div className="flex justify-center py-8">
        <a
          href="/acompanhantes"
          className="px-8 py-3 bg-rose-600 text-white font-bold rounded-lg hover:bg-rose-700 transition shadow-lg"
        >
          Ver Mais Acompanhantes
        </a>
      </div>
    </section>
  );
}
