import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarContatoInfo() {
  const defaultState = {
    title: "Suporte e Contato",
    phone: "+55 11 99999-9999",
    email: "suporte@gatas-mt.com",
    whatsapp: "+55 11 98888-8888",
    address: "São Paulo, SP - Brasil",
    supportHours: "Seg - Dom: 08:00 - 22:00 (horário local)",
    image:
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=1200&q=80&auto=format&fit=crop",
    socials: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Facebook", url: "https://facebook.com" },
    ],
  };

  const [info, setInfo] = useState(defaultState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("siteSettings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.contatoInfo) setInfo(parsed.contatoInfo);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSave = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("siteSettings") || "{}");
      saved.contatoInfo = info;
      localStorage.setItem("siteSettings", JSON.stringify(saved));
      alert("Configurações de Contato salvas com sucesso.");
    } catch (e) {
      alert("Erro ao salvar.");
    }
  };

  const handleAddSocial = () => {
    setInfo({ ...info, socials: [...(info.socials || []), { name: "", url: "" }] });
  };

  const handleSocialChange = (idx, field, value) => {
    const s = [...(info.socials || [])];
    s[idx] = { ...s[idx], [field]: value };
    setInfo({ ...info, socials: s });
  };

  const handleRemoveSocial = (idx) => {
    const s = [...(info.socials || [])];
    s.splice(idx, 1);
    setInfo({ ...info, socials: s });
  };

  return (
    <div className="space-y-4 md:space-y-6 bg-[#0a0a0a] p-6 w-full">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Contato (Admin)</h2>

      <div>
        <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Título</label>
        <input
          type="text"
          value={info.title}
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
          className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Telefone</label>
          <input
            type="text"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>E-mail</label>
          <input
            type="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>WhatsApp</label>
          <input
            type="text"
            value={info.whatsapp}
            onChange={(e) => setInfo({ ...info, whatsapp: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Endereço</label>
          <input
            type="text"
            value={info.address}
            onChange={(e) => setInfo({ ...info, address: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Atendimento / Horário</label>
          <input
            type="text"
            value={info.supportHours}
            onChange={(e) => setInfo({ ...info, supportHours: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Imagem (URL)</label>
          <input
            type="text"
            value={info.image}
            onChange={(e) => setInfo({ ...info, image: e.target.value })}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />

          {info.image && (
            <div className="mt-2 w-full rounded overflow-hidden bg-slate-900">
              <img src={info.image} alt="preview" className="w-full h-40 object-cover" />
            </div>
          )}
        </div>
      </div>

      <div>
        <label className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}>Redes Sociais</label>
        <div className="space-y-2">
          {(info.socials || []).map((s, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="text"
                placeholder="Nome (ex: Instagram)"
                value={s.name}
                onChange={(e) => handleSocialChange(idx, "name", e.target.value)}
                className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="text"
                placeholder="URL"
                value={s.url}
                onChange={(e) => handleSocialChange(idx, "url", e.target.value)}
                className="flex-2 px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
              <button
                onClick={() => handleRemoveSocial(idx)}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Remover
              </button>
            </div>
          ))}

          <button onClick={handleAddSocial} className="mt-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg">
            Adicionar Rede Social
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg">
          <FaSave /> Salvar
        </button>
      </div>
    </div>
  );
}
