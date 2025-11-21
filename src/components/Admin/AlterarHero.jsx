import React from "react";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarHero({ hero, onChange }) {
  const handleTitleChange = (e) => {
    onChange({ ...hero, title: e.target.value });
  };

  const handleSubtitleChange = (e) => {
    onChange({ ...hero, subtitle: e.target.value });
  };

  const handleCtaChange = (e) => {
    onChange({ ...hero, cta: e.target.value });
  };

  const handleCtaHrefChange = (e) => {
    onChange({ ...hero, ctaHref: e.target.value });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        Configurações do Hero
      </h2>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Título
        </label>
        <input
          type="text"
          value={hero.title}
          onChange={handleTitleChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Subtítulo
        </label>
        <textarea
          value={hero.subtitle}
          onChange={handleSubtitleChange}
          rows="3"
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none resize-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Texto do CTA (Call to Action)
        </label>
        <input
          type="text"
          value={hero.cta}
          onChange={handleCtaChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Link do CTA
        </label>
        <input
          type="text"
          value={hero.ctaHref}
          onChange={handleCtaHrefChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>
    </div>
  );
}
