import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarSobreNos() {
  const defaultState = {
    title: "Quem Somos",
    subtitle:
      "Gatas-MT é uma plataforma dedicada a conectar clientes com profissionais qualificadas, oferecendo segurança, discrição e excelência no atendimento.",
    description:
      "Atuamos com responsabilidade e transparência, garantindo perfis verificados, avaliações reais e suporte 24/7. Nossa missão é facilitar encontros respeitosos e profissionais, sempre priorizando o bem-estar de todos.",
    ctaText: "Explorar Acompanhantes",
    ctaHref: "/acompanhantes",
    values: [
      { title: "Verificação", desc: "Perfis verificados e documentos conferidos." },
      { title: "Suporte 24/7", desc: "Atendimento rápido e dedicado." },
      { title: "Privacidade", desc: "Protegemos seus dados e conversas." },
    ],
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop",
    ],
  };

  const [sobre, setSobre] = useState(defaultState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("siteSettings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.sobre) setSobre(parsed.sobre);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleImageChange = (idx, value) => {
    const newImgs = [...sobre.images];
    newImgs[idx] = value;
    setSobre({ ...sobre, images: newImgs });
  };

  const handleAddValue = () => {
    setSobre({ ...sobre, values: [...sobre.values, { title: "", desc: "" }] });
  };

  const handleValueChange = (idx, field, value) => {
    const v = [...sobre.values];
    v[idx] = { ...v[idx], [field]: value };
    setSobre({ ...sobre, values: v });
  };

  const handleRemoveValue = (idx) => {
    const v = [...sobre.values];
    v.splice(idx, 1);
    setSobre({ ...sobre, values: v });
  };

  const handleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("siteSettings") || "{}");
      saved.sobre = sobre;
      localStorage.setItem("siteSettings", JSON.stringify(saved));
      alert("Configurações de Sobre nós salvas com sucesso.");
    } catch (e) {
      alert("Erro ao salvar.");
    }
  };

  return (
    <div className="space-y-4 md:space-y-6 bg-[#0a0a0a] p-6 w-full">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Sobre Nós (Admin)</h2>

      <div>
        <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Título</label>
        <input
          type="text"
          value={sobre.title}
          onChange={(e) => setSobre({ ...sobre, title: e.target.value })}
          className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Subtítulo</label>
        <textarea
          value={sobre.subtitle}
          onChange={(e) => setSobre({ ...sobre, subtitle: e.target.value })}
          rows="2"
          className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none resize-none text-sm md:text-base"
        />
      </div>

      <div>
        <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Descrição</label>
        <textarea
          value={sobre.description}
          onChange={(e) => setSobre({ ...sobre, description: e.target.value })}
          rows="3"
          className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none resize-none text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Texto do CTA</label>
          <input
            type="text"
            value={sobre.ctaText}
            onChange={(e) => setSobre({ ...sobre, ctaText: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Link do CTA</label>
          <input
            type="text"
            value={sobre.ctaHref}
            onChange={(e) => setSobre({ ...sobre, ctaHref: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>
      </div>

      <div>
        <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Valores / Destaques</label>
        <div className="space-y-2">
          {sobre.values.map((v, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="text"
                placeholder="Título"
                value={v.title}
                onChange={(e) => handleValueChange(idx, "title", e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="Descrição curta"
                value={v.desc}
                onChange={(e) => handleValueChange(idx, "desc", e.target.value)}
                className="flex-2 px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
              <button onClick={() => handleRemoveValue(idx)} className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">Remover</button>
            </div>
          ))}

          <button onClick={handleAddValue} className="mt-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg">Adicionar Valor</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {sobre.images.map((img, idx) => (
          <div key={idx}>
            <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Imagem {idx + 1} (URL)</label>
            <input
              type="text"
              value={img}
              onChange={(e) => handleImageChange(idx, e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
            />
            {img && (
              <div className="mt-2 w-full rounded overflow-hidden bg-slate-900">
                <img src={img} alt={`preview-${idx}`} className="w-full h-36 object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg">
          <FaSave /> Salvar
        </button>
      </div>
    </div>
  );
}
