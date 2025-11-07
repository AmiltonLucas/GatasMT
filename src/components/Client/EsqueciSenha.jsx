import React, { useState } from "react";
import { Mail } from "lucide-react";

const COLORS = {
  // dark theme
  bg: "bg-slate-900",
  primaryText: "text-slate-100",
  muted: "text-slate-400",
  accent: "bg-rose-500",
  accentText: "text-white",
  inputBorder: "border-slate-700",
};

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Aqui você chamaria a API para enviar o email de recuperação
    console.log("Enviar link para:", email);
    setSent(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 py-12">
      <div className="w-full max-w-xl bg-slate-900/70 rounded-2xl shadow-lg p-8 border border-slate-800 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-rose-900 text-rose-300">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h2 className={`text-2xl font-semibold ${COLORS.primaryText}`}>
              Recuperar senha
            </h2>
            <p className={`text-sm ${COLORS.muted}`}>
              Digite seu email e enviaremos um link para redefinir a senha.
            </p>
          </div>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email"
                className={`w-full px-4 py-3 rounded-full border ${COLORS.inputBorder} bg-slate-800 ${COLORS.primaryText} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-600`}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className={`w-full ${COLORS.accent} ${COLORS.accentText} py-3 rounded-full font-semibold shadow-sm hover:brightness-95 transition`}
              >
                Enviar link de recuperação
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-900 text-rose-300 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-semibold ${COLORS.primaryText}`}>
              Verifique seu email
            </h3>
            <p className={`mt-2 text-sm ${COLORS.muted}`}>
              Enviamos um link para{" "}
              <strong className="text-slate-100">{email}</strong>. Verifique sua
              caixa de entrada e spam.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setSent(false)}
                className="text-sm text-rose-400"
              >
                Enviar novamente
              </button>
            </div>
          </div>
        )}

        <div className={`mt-6 text-center text-sm ${COLORS.muted}`}>
          <a href="/login" className="text-rose-400 font-medium">
            Voltar ao login
          </a>
        </div>
      </div>
    </div>
  );
}
