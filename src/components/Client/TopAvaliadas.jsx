import React from "react";
import { MessageCircle, Star } from "lucide-react";
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

/**
 * TopAvaliadas
 * Props:
 * - items: array of { id, name, city, price, photo, rating }
 * - minRating: number (default 4.5) - mínimo para entrar na lista
 * - limit: number (default 4) - quantas exibir
 * - onChat: function
 */
export default function TopAvaliadas({
  items = null,
  minRating = 4.5,
  limit = 4,
  onChat,
}) {
  const sample = [
    {
      id: 1,
      name: "Mariana Silva",
      city: "São Paulo, SP",
      price: "R$ 400",
      photo: Mulher,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Laura Costa",
      city: "Rio de Janeiro, RJ",
      price: "R$ 350",
      photo: Mulher2,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Ana Pereira",
      city: "Belo Horizonte, MG",
      price: "R$ 300",
      photo: Mulher3,
      rating: 4.4,
    },
    {
      id: 4,
      name: "Camila Rocha",
      city: "Curitiba, PR",
      price: "R$ 380",
      photo: Mulher4,
      rating: 4.7,
    },
  ];

  const list = (items || sample)
    .filter((p) =>
      typeof p.rating === "number" ? p.rating >= minRating : false
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);

  return (
    <section
      className={`${COLORS.pageBg} py-8 min-h-screen mt-[5rem] lg:mt-[5.5rem]`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-2xl font-bold mb-4 text-center ${COLORS.title}`}>
          Top avaliadas
        </h2>

        <div className="w-full rounded-lg">
          <div>
            <div className="flex flex-col gap-3">
              {list.length === 0 && (
                <div
                  className={`p-6 rounded-lg ${COLORS.cardBg} ${COLORS.muted}`}
                >
                  Nenhuma acompanhante encontrada com avaliação mínima de{" "}
                  {minRating} estrelas.
                </div>
              )}

              {list.map((p) => (
                <article
                  key={p.id}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-xl ${COLORS.cardBg} border border-slate-700 shadow-sm hover:shadow-md transition`}
                >
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full md:w-28 h-44 md:h-28 rounded-lg object-cover flex-shrink-0"
                  />

                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div>
                        <h3 className={`text-lg font-semibold ${COLORS.title}`}>
                          {p.name}
                        </h3>
                        <div className={`text-sm ${COLORS.muted}`}>
                          {p.city}
                        </div>

                        <div className="mt-2 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <div
                            className={`text-sm font-semibold ${COLORS.title}`}
                          >
                            {p.rating?.toFixed(1) ?? "-"}
                          </div>
                          <div className={`text-xs ${COLORS.muted}`}>
                            ({Math.round((p.rating || 0) * 10)} avaliações)
                          </div>
                        </div>
                      </div>

                      <div className="text-right mt-3 md:mt-0">
                        <div className={`text-lg font-bold ${COLORS.price}`}>
                          {p.price}
                        </div>
                        <div className={`text-xs ${COLORS.muted}`}>
                          por encontro
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-col md:flex-row items-stretch md:items-center gap-3">
                      <button
                        onClick={() => onChat?.(p)}
                        className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-rose-600 text-white text-sm font-semibold shadow-sm hover:brightness-95 transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat
                      </button>

                      <a
                        href={`/acompanhantes/perfil`}
                        className={`w-full md:w-auto text-center text-sm ${COLORS.muted} hover:underline py-2 rounded-full border border-transparent md:border-transparent`}
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
