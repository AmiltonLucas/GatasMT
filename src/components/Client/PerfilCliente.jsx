import React, { useState } from "react";
import { Star, Trash2 } from "lucide-react";
import AvatarPlaceholder from "../../assets/Mulher.png";

const COLORS = {
  pageBg: "bg-[#0a0a0a]",
  title: "text-white",
  muted: "text-white/80",
  cardBg: "bg-slate-800",
  accent: "bg-rose-500",
  accentText: "text-white",
};

const SAMPLE_REVIEWS = [
  {
    id: 1,
    provider: "Mariana Silva",
    date: "2025-10-12",
    rating: 5,
    text: "Ótima experiência — bem profissional e simpática.",
  },
  {
    id: 2,
    provider: "Laura Costa",
    date: "2025-09-04",
    rating: 4,
    text: "Boa comunicação; recomendo.",
  },
  {
    id: 3,
    provider: "Camila Rocha",
    date: "2025-06-20",
    rating: 3,
    text: "Atendeu, mas houve atraso no horário.",
  },
];

export default function PerfilCliente() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [avatar, setAvatar] = useState(null);
  const [reviews, setReviews] = useState(SAMPLE_REVIEWS);
  const [notifications, setNotifications] = useState({
    messages: true,
    promos: false,
  });

  function update(field, value) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  function handleAvatar(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setAvatar(URL.createObjectURL(f));
  }

  function saveProfile(e) {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Nome e email obrigatórios");
    console.log("Salvar perfil cliente:", { ...form, avatar, notifications });
    alert("Perfil atualizado.");
  }

  function removeReview(id) {
    if (!confirm("Remover avaliação?")) return;
    setReviews((r) => r.filter((x) => x.id !== id));
  }

  return (
    <div className={`${COLORS.pageBg} min-h-screen py-10 mt-20`}>
      <div className="max-w-6xl mx-auto px-6">
        <h1 className={`text-2xl font-bold mb-6 ${COLORS.title}`}>
          Configurações do cliente
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="lg:col-span-1">
            <div
              className={`p-4 rounded-lg ${COLORS.cardBg} border border-slate-700`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-slate-700">
                  <img
                    src={avatar || AvatarPlaceholder}
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
              </div>
            </div>

            <div
              className={`mt-4 p-4 rounded-lg ${COLORS.cardBg} border border-slate-700`}
            >
              <h3 className={`font-semibold ${COLORS.title} mb-2`}>
                Notificações
              </h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={notifications.messages}
                    onChange={(e) =>
                      setNotifications((n) => ({
                        ...n,
                        messages: e.target.checked,
                      }))
                    }
                  />
                  <span className={`${COLORS.muted}`}>Mensagens privadas</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={notifications.promos}
                    onChange={(e) =>
                      setNotifications((n) => ({
                        ...n,
                        promos: e.target.checked,
                      }))
                    }
                  />
                  <span className={`${COLORS.muted}`}>
                    Promoções e novidades
                  </span>
                </label>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-2">
            <form
              onSubmit={saveProfile}
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
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="submit"
                  className={`px-6 py-2 rounded-full font-semibold ${COLORS.accent} ${COLORS.accentText}`}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "" });
                    setAvatar(null);
                  }}
                  className="px-4 py-2 rounded-full border border-slate-600 text-slate-300"
                >
                  Limpar
                </button>
              </div>
            </form>

            <section className="mt-6 p-6 rounded-lg ${COLORS.cardBg} border border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className={`text-xl font-semibold ${COLORS.title}`}>
                  Avaliações feitas
                </h2>
                <div className={`text-sm ${COLORS.muted}`}>
                  {reviews.length} avaliações
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {reviews.length === 0 && (
                  <div className={`${COLORS.muted} p-4`}>
                    Você ainda não fez avaliações.
                  </div>
                )}

                {reviews.map((r) => (
                  <article
                    key={r.id}
                    className="p-4 rounded-lg bg-slate-800 border border-slate-700 flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-md bg-slate-700 flex items-center justify-center text-slate-200">
                        {r.provider[0]}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className={`font-semibold ${COLORS.title}`}>
                            {r.provider}
                          </div>
                          <div className={`text-xs ${COLORS.muted}`}>
                            {r.date}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4" />
                            <span
                              className={`ml-1 ${COLORS.title} font-semibold text-sm`}
                            >
                              {r.rating}
                            </span>
                          </div>
                          <button
                            onClick={() => removeReview(r.id)}
                            className="text-slate-300 p-1 rounded hover:bg-slate-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className={`mt-2 ${COLORS.muted}`}>{r.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
