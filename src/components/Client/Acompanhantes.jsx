import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";
import Mulher4 from "../../assets/Mulher4.png";

const COLORS = {
  // dark theme
  bg: "bg-slate-900",
  pageBg: "bg-[#0a0a0a]",
  title: "text-white",
  muted: "text-white/80",
  price: "text-rose-400",
  cardBg: "bg-slate-800",
};

export default function Acompanhantes({ items = null, onChat, onWhatsApp }) {
  const sample = [
    {
      id: 1,
      name: "Mariana Silva",
      city: "São Paulo, SP",
      price: "R$ 400",
      photo: Mulher,
    },
    {
      id: 2,
      name: "Laura Costa",
      city: "Rio de Janeiro, RJ",
      price: "R$ 350",
      photo: Mulher2,
    },
    {
      id: 3,
      name: "Ana Pereira",
      city: "Belo Horizonte, MG",
      price: "R$ 300",
      photo: Mulher3,
    },
    {
      id: 4,
      name: "Camila Rocha",
      city: "Curitiba, PR",
      price: "R$ 380",
      photo: Mulher4,
    },
  ];

  const list = items || sample;

  return (
    <section
      className={`${COLORS.pageBg} py-8 min-h-screen`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-2xl font-bold mb-4 text-center  ${COLORS.title}`}>
          Acompanhantes
        </h2>

        <div className="w-full rounded-lg">
          <div>
            <div className="flex flex-col gap-3">
              {list.map((p) => (
                <article
                  key={p.id}
                  className={`flex items-center gap-4 p-4 rounded-xl ${COLORS.cardBg} border border-slate-700 shadow-sm hover:shadow-md transition`}
                >
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-28 h-28 rounded-lg object-cover flex-shrink-0"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`text-lg font-semibold ${COLORS.title}`}>
                          {p.name}
                        </h3>
                        <div className={`text-sm ${COLORS.muted}`}>
                          {p.city}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className={`text-lg font-bold ${COLORS.price}`}>
                          {p.price}
                        </div>
                        <div className={`text-xs ${COLORS.muted}`}>
                          por encontro
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      {/* WhatsApp button: calls onWhatsApp if provided, otherwise opens wa.me link */}
                      {onWhatsApp ? (
                        <button
                          onClick={() => onWhatsApp?.(p)}
                          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-sm hover:brightness-95 transition w-full sm:w-auto"
                        >
                          <Phone className="w-4 h-4" />
                          WhatsApp
                        </button>
                      ) : (
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(
                            `Olá, tenho interesse nos seus serviços (${p.name}).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold shadow-sm hover:brightness-95 transition w-full sm:w-auto"
                        >
                          <Phone className="w-4 h-4" />
                          WhatsApp
                        </a>
                      )}

                      <button
                        onClick={() => onChat?.(p)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold shadow-sm hover:brightness-95 transition w-full sm:w-auto"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat
                      </button>

                      <a
                        href={`/acompanhantes/perfil`}
                        className={`text-center w-full sm:w-auto text-sm ${COLORS.muted} hover:underline py-2`}
                      >
                        Ver perfil
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
