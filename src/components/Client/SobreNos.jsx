import React from "react";

// Conteúdo em const para fácil edição/integração com admin
const ABOUT = {
  title: "Quem Somos",
  subtitle:
    "Gatas‑MT conecta clientes a profissionais qualificadas com segurança, discrição e excelência.",
  description:
    "Trabalhamos com verificação de perfis, avaliações reais e suporte ativo para garantir experiências respeitosas. Priorizamos a privacidade, profissionalismo e a satisfação dos nossos usuários.",
  ctaText: "Explorar Acompanhantes",
  ctaHref: "/acompanhantes",
  values: [
    {
      title: "Verificação",
      desc: "Perfis verificados e documentos conferidos.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 1L15 5L20 6L16 9L17 14L12 12L7 14L8 9L4 6L9 5L12 1Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Suporte 24/7",
      desc: "Atendimento rápido e dedicado para qualquer dúvida.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Privacidade",
      desc: "Protegemos seus dados e conversas com discrição.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80&auto=format&fit=crop",
  ],
};

export default function SobreNos() {
  return (
    <section className="py-16 mt-10 bg-white dark:bg-[#05060a] text-slate-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto principal */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              {ABOUT.title}
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              {ABOUT.subtitle}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              {ABOUT.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {ABOUT.values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg shadow-sm"
                >
                  <div className="text-rose-600 mt-1">{v.icon}</div>
                  <div>
                    <div className="font-semibold text-sm">{v.title}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {v.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={ABOUT.ctaHref}
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-5 py-3 rounded-lg shadow"
            >
              {ABOUT.ctaText}
            </a>
          </div>

          {/* Galeria de imagens */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <div className="row-span-2 rounded-xl overflow-hidden shadow-lg">
              <img
                src={ABOUT.images[0]}
                alt="Equipe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={ABOUT.images[1]}
                alt="Serviço"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={ABOUT.images[2]}
                alt="Ambiente"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
