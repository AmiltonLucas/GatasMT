import React from "react";
import { ShieldCheck, CreditCard, Headphones, ThumbsUp } from "lucide-react";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  cardBg: "bg-slate-50",
  title: "text-slate-900",
  subtitle: "text-slate-500",
  accent: "text-rose-600",
};

export default function Seguranca() {
  const items = [
    {
      id: 1,
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Verificação de identidade",
      desc: "Todos os perfis passam por checagem manual e envio de documentos para comprovar identidade.",
    },
    {
      id: 2,
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pagamentos seguros",
      desc: "Transações criptografadas e parceiros de pagamento confiáveis para proteger seus dados financeiros.",
    },
    {
      id: 3,
      icon: <Headphones className="w-6 h-6" />,
      title: "Suporte 24/7",
      desc: "Equipe disponível para mediar ocorrências, tirar dúvidas e oferecer assistência imediata.",
    },
    {
      id: 4,
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Avaliações reais",
      desc: "Clientes deixam avaliações verificadas para garantir transparência nas contratações.",
    },
  ];

  return (
    <section className={`${COLORS.bg} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-white">Segurança e confiança</h3>
          <p className="text-slate-300 mt-2">
            Por que nossos clientes se sentem seguros usando a plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.id}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-rose-50 text-rose-600 mb-4">
                {it.icon}
              </div>
              <div className="text-lg font-semibold text-slate-900 mb-2">
                {it.title}
              </div>
              <div className="text-sm text-slate-500">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
