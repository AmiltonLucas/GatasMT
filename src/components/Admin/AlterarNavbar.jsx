import React, { useState } from "react";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarNavbar({ navbar, onChange }) {
  const handleLogoChange = (e) => {
    onChange({ ...navbar, logo: e.target.value });
  };

  const handleLogoImageChange = (e) => {
    onChange({ ...navbar, logoImage: e.target.value });
  };

  const handleLayoutChange = (layoutId) => {
    onChange({ ...navbar, layout: layoutId });
  };

  const handleButtonTextChange = (e) => {
    onChange({ ...navbar, buttonText: e.target.value });
  };

  const handleButtonHrefChange = (e) => {
    onChange({ ...navbar, buttonHref: e.target.value });
  };

  const handleLinksChange = (idx, field, value) => {
    const newLinks = [...navbar.links];
    newLinks[idx][field] = value;
    onChange({ ...navbar, links: newLinks });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        Configurações da Navbar
      </h2>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Logo/Nome
        </label>
        <input
          type="text"
          value={navbar.logo}
          onChange={handleLogoChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Imagem do Logo (URL)
        </label>
        <input
          type="text"
          value={navbar.logoImage}
          onChange={handleLogoImageChange}
          placeholder="https://.../logo.png"
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
        {navbar.logoImage && (
          <div className="mt-3">
            <img
              src={navbar.logoImage}
              alt="Logo preview"
              className="h-12 object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        )}
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-3 text-sm md:text-base`}
        >
          Layout da Navbar
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              id: "layout-1",
              title: "Logo Esquerda",
              desc: "Logo à esquerda, menu à direita",
            },
            {
              id: "layout-2",
              title: "Logo Centro",
              desc: "Logo centralizado",
            },
            {
              id: "layout-3",
              title: "Logo + Botão",
              desc: "Logo à esquerda, menu + CTA à direita",
            },
            {
              id: "layout-4",
              title: "Logo Pequeno",
              desc: "Logo pequeno e links compactos",
            },
          ].map((l) => (
            <button
              key={l.id}
              onClick={() => handleLayoutChange(l.id)}
              className={`p-3 rounded-lg border transition text-left flex flex-col items-start gap-2 ${
                navbar.layout === l.id
                  ? "border-rose-500 bg-rose-50"
                  : "border-slate-700 bg-slate-800"
              }`}
            >
              <div className="font-bold text-sm md:text-base text-white">
                {l.title}
              </div>
              <div className="text-xs text-white/70">{l.desc}</div>
              <div className="mt-2 w-full h-10 bg-slate-900 rounded flex items-center justify-center text-xs text-white/50">
                Preview
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Texto do Botão
        </label>
        <input
          type="text"
          value={navbar.buttonText}
          onChange={handleButtonTextChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Link do Botão
        </label>
        <input
          type="text"
          value={navbar.buttonHref}
          onChange={handleButtonHrefChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-3 text-sm md:text-base`}
        >
          Links de Menu
        </label>
        <div className="space-y-2 md:space-y-3">
          {navbar.links.map((link, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-2 md:gap-3">
              <input
                type="text"
                placeholder="Rótulo"
                value={link.label}
                onChange={(e) =>
                  handleLinksChange(idx, "label", e.target.value)
                }
                className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="URL"
                value={link.href}
                onChange={(e) => handleLinksChange(idx, "href", e.target.value)}
                className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
