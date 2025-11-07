import React from "react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";
import Mulher4 from "../../assets/Mulher4.png";
import Mulher5 from "../../assets/Mulher5.png";
import Mulher6 from "../../assets/Mulher6.png";
import Mulher7 from "../../assets/Mulher7.png";

// Use uma única cor de borda para uniformidade visual
const BORDER_CLASS = "border-rose-500";

const SAMPLE = [
  { id: "negra", label: "Negra", img: Mulher5 },
  { id: "branca", label: "Branca", img: Mulher2 },
  { id: "morena", label: "Morena", img: Mulher3 },
  { id: "loira", label: "Loira", img: Mulher },
  { id: "ruiva", label: "Ruiva", img: Mulher6 },
  { id: "cacheada", label: "Cacheada", img: Mulher2 },
  { id: "oriental", label: "Oriental", img: Mulher7 },
  { id: "parda", label: "Parda", img: Mulher4 },
];

export default function Etnias({ items = SAMPLE, onSelect }) {
  return (
    <section className="py-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Nossas Modelos</h2>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-3">
            {items.map((it) => {
              return (
                <button
                  key={it.id}
                  onClick={() => onSelect?.(it)}
                  className={`min-w-[200px] flex-shrink-0 rounded-lg overflow-hidden ${BORDER_CLASS} border-2 relative`}
                >
                  <img
                    src={it.img}
                    alt={it.label}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="w-full text-center py-4 text-white font-semibold text-lg">
                      {it.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {items.map((it) => {
            return (
              <button
                key={it.id}
                onClick={() => onSelect?.(it)}
                className={`rounded-lg overflow-hidden ${BORDER_CLASS} border-4 relative hover:scale-105 transform transition`}
              >
                <img
                  src={it.img}
                  alt={it.label}
                  className="w-full h-46 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="w-full text-center py-6 text-white font-semibold text-2xl">
                    {it.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
