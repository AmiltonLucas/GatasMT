import React, { useState, useEffect } from "react";
import Mulher from "../../assets/Mulher.png";

const COLORS = {
  pageBg: "bg-[#0a0a0a]",
  title: "text-white",
  muted: "text-white/80",
  cardBg: "bg-slate-800",
  accent: "bg-rose-500",
  accentText: "text-white",
};

const STATES = ["SP", "RJ", "MG", "BA", "RS", "PR"];

export default function PerfilAcompanhante() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    price: "",
    bio: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [saving, setSaving] = useState(false);

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  function handleAvatar(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatar(url);
  }

  function handleGalleryFiles(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    // keep max 8 imagens
    setGallery((prev) => {
      const merged = [...prev, ...urls];
      return merged.slice(0, 8);
    });
  }

  function removeGalleryImage(index) {
    setGallery((prev) => {
      const url = prev[index];
      try {
        URL.revokeObjectURL(url);
      } catch (e) {}
      return prev.filter((_, i) => i !== index);
    });
  }

  function handleSave(e) {
    e.preventDefault();
    // Simple client-side validation
    if (!form.name || !form.email) {
      alert("Preencha nome e email.");
      return;
    }

    setSaving(true);
    // Simular requisição
    setTimeout(() => {
      console.log("Perfil salvo:", { ...form, avatar, gallery });
      setSaving(false);
      alert("Perfil salvo com sucesso.");
    }, 800);
  }

  // cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (avatar) {
        try {
          URL.revokeObjectURL(avatar);
        } catch (e) {}
      }
      gallery.forEach((u) => {
        try {
          URL.revokeObjectURL(u);
        } catch (e) {}
      });
    };
  }, [avatar, gallery]);

  return (
    <div className={`${COLORS.pageBg} min-h-screen py-10 mt-20`}>
      <div className="max-w-5xl mx-auto px-6">
        <h1 className={`text-2xl font-bold mb-6 ${COLORS.title}`}>
          Configurar meu perfil
        </h1>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6`}>
          {/* Left: avatar and quick actions */}
          <aside className="lg:col-span-1">
            <div
              className={`p-4 rounded-lg ${COLORS.cardBg} border border-slate-700`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-36 h-36 rounded-lg overflow-hidden bg-slate-700">
                  <img
                    src={avatar || Mulher}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <label className="w-full">
                  <div className="text-sm text-slate-300 mb-2">
                    Alterar foto
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatar}
                    className="w-full text-sm text-slate-400"
                  />
                </label>

                <div className="w-full mt-2">
                  <div className="text-sm text-slate-300 mb-2">
                    Galeria (até 8 fotos)
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryFiles}
                    className="w-full text-sm text-slate-400"
                  />

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {gallery.map((g, idx) => (
                      <div
                        key={g}
                        className="relative rounded-md overflow-hidden bg-slate-700 h-20"
                      >
                        <img
                          src={g}
                          alt={`galeria-${idx}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeGalleryImage(idx)}
                          className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 text-xs"
                          aria-label="Remover imagem"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="/acompanhantes/perfil">
                  <button
                    className={`w-full ${COLORS.accent} ${COLORS.accentText} px-4 py-2 rounded-full font-semibold cursor-pointer`}
                  >
                    Visualizar perfil
                  </button>
                </a>
              </div>
            </div>

            <div
              className={`mt-4 p-4 rounded-lg ${COLORS.cardBg} border border-slate-700`}
            >
              <h3 className={`font-semibold ${COLORS.title} mb-2`}>
                Segurança
              </h3>
              <p className={`text-sm ${COLORS.muted}`}>
                Alterar sua senha aqui. Para segurança, escolha uma senha forte
                e única.
              </p>

              <div className="mt-3">
                <input
                  placeholder="Senha atual"
                  type="password"
                  className={`w-full px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                />
                <input
                  placeholder="Nova senha"
                  type="password"
                  className={`w-full mt-2 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                />
                <button className="mt-3 w-full bg-slate-600 text-white px-3 py-2 rounded-md">
                  Alterar senha
                </button>
              </div>
            </div>
          </aside>

          {/* Right: form */}
          <form onSubmit={handleSave} className="lg:col-span-2">
            <div
              className={`p-6 rounded-lg ${COLORS.cardBg} border border-slate-700`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Nome</label>
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    type="email"
                    className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">Telefone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Preço base (ex: R$ 300)
                  </label>
                  <input
                    value={form.price}
                    onChange={(e) => update("price", e.target.value)}
                    className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">Estado</label>
                  <select
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                    className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                  >
                    <option value="">Selecione</option>
                    {STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-slate-300">Cidade</label>
                  <input
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm text-slate-300">
                  Sobre / Biografia
                </label>
                <textarea
                  value={form.bio}
                  onChange={(e) => update("bio", e.target.value)}
                  rows={5}
                  className={`w-full mt-1 px-3 py-2 rounded-md bg-slate-700 ${COLORS.title} border border-slate-600`}
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={saving}
                  className={`px-6 py-2 rounded-full font-semibold ${
                    COLORS.accent
                  } ${COLORS.accentText} ${saving ? "opacity-70" : ""}`}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => alert("Alterações descartadas")}
                  className="px-4 py-2 rounded-full border border-slate-600 text-slate-300"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
