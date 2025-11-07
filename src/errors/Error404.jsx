import React from "react";

export default function Error404() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-rose-600 text-white mx-auto mb-6">
          <span className="text-4xl font-bold">404</span>
        </div>

        <h1 className="text-3xl font-extrabold text-white mb-2">
          Página não encontrada
        </h1>
        <p className="text-slate-300 mb-6">
          A página que você procura não existe ou foi removida.
        </p>

        <div className="flex items-center justify-center gap-3">
          <a
            href="/"
            className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold"
          >
            Voltar para a home
          </a>
          <a
            href="/"
            className="px-4 py-2 rounded-full border border-slate-700 text-slate-300"
          >
            Ir ao início
          </a>
        </div>
      </div>
    </div>
  );
}
