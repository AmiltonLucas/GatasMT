import React from "react";
import { FaWhatsapp } from "react-icons/fa";

// Conteúdo definido em const para facilitar edição e futura integração com admin
const CONTACT = {
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

function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContatoInfo() {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT.address
  )}`;

  return (
    <section className="py-12 mt-24 lg:mt-25.5 bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold mb-3">{CONTACT.title}</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Precisa de ajuda? Nosso suporte está pronto para atender você com
              discrição e rapidez.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow flex flex-col gap-2">
                <div className="flex items-center gap-3 text-rose-600">
                  <IconPhone />
                  <div className="font-semibold">Telefone</div>
                </div>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm text-slate-700 dark:text-slate-200 underline"
                >
                  {CONTACT.phone}
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Ligamos de volta se preferir.
                </span>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow flex flex-col gap-2">
                <div className="flex items-center gap-3 text-rose-600">
                  <IconMail />
                  <div className="font-semibold">E‑mail</div>
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-slate-700 dark:text-slate-200 underline"
                >
                  {CONTACT.email}
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Resposta em até 24h úteis.
                </span>
              </div>

              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow flex flex-col gap-2">
                <div className="flex items-center gap-3 text-rose-600">
                  <FaWhatsapp />
                  <div className="font-semibold">WhatsApp</div>
                </div>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-700 dark:text-slate-200 underline"
                >
                  {CONTACT.whatsapp}
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Atendimento via mensagens rápidas.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div>
                <strong>Endereço:</strong>
                <div>{CONTACT.address}</div>
              </div>
              <a
                href={mapHref}
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Ver no mapa
              </a>
              <div className="ml-auto">
                <strong>Horário:</strong>
                <div>{CONTACT.supportHours}</div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {CONTACT.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-700 dark:text-slate-200 underline"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full sm:w-72 rounded-lg overflow-hidden shadow-lg">
              <img
                src={CONTACT.image}
                alt="Suporte"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
