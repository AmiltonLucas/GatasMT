import React from "react";
import { MapPin, User, Star } from "lucide-react";
import { Link } from "react-router-dom";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  cardBg: "bg-slate-50",
  border: "border-slate-100",
  title: "text-slate-900",
  subtitle: "text-slate-500",
  accent: "text-rose-600",
};

function defaultToForItem(it) {
  if (it.to) return it.to;
  // map by id or title
  if (it.id === 1 || /acompanhante/i.test(it.title)) return "/acompanhantes";
  if (it.id === 2 || /cidade/i.test(it.title)) return "/cidades";
  if (it.id === 3 || /melhor/i.test(it.title)) return "/melhores-avaliadas";
  return it.href || "#";
}

export default function LinksPopular({ items = null }) {
  const defaults = [
    {
      id: 1,
      title: "Acompanhantes",
      subtitle: "Categorias populares",
      icon: <User />,
    },
    {
      id: 2,
      title: "Cidades",
      subtitle: "Encontre por região",
      icon: <MapPin />,
    },
    {
      id: 3,
      title: "Melhores avaliadas",
      subtitle: "Top avaliações",
      icon: <Star />,
    },
  ];

  const list = items || defaults;

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 p-10 ${COLORS.bg}`}>
      {list.map((it) => {
        const to = defaultToForItem(it);
        return (
          <Link
            key={it.id}
            to={to}
            className={`flex flex-col items-start gap-3 p-4 rounded-2xl ${COLORS.cardBg} border ${COLORS.border} hover:shadow-md transition`}
          >
            <div className="w-12 h-12 rounded-lg bg-white/30 flex items-center justify-center text-rose-500">
              {it.icon}
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {it.title}
            </div>
            <div className="text-xs text-slate-500">{it.subtitle}</div>
          </Link>
        );
      })}
    </div>
  );
}
