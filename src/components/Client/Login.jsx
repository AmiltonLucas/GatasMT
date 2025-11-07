import React, { useState } from "react";
import logo from "../../assets/LogoPB.png";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const COLORS = {
  // card/background colors for dark theme
  bg: "bg-slate-900",
  primaryText: "text-slate-100",
  muted: "text-slate-400",
  accent: "bg-rose-500",
  accentText: "text-white",
  inputBorder: "border-slate-700",
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ username: "", password: "" });

  function handleChange(e) {
    setValues((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: enviar valores
    console.log("login", values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-6xl w-full bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-slate-800">
        {/* Left: form */}
        <div className="p-8 md:p-14">
          <h2 className={`text-3xl font-extrabold ${COLORS.primaryText} mb-2`}>
            Bem vindo de volta!
          </h2>
          <p className={`text-sm ${COLORS.muted} mb-8`}>
            Estávamos felizes em vê-lo novamente! Por favor, insira seus
            detalhes para acessar sua conta.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                placeholder="Nome do usuário"
                className={`w-full px-4 py-3 rounded-full border ${COLORS.inputBorder} bg-slate-800 ${COLORS.primaryText} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-600`}
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                placeholder="Senha"
                className={`w-full px-4 py-3 rounded-full border ${COLORS.inputBorder} bg-slate-800 ${COLORS.primaryText} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-600 pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="/alterar-senha"
                  className={`${COLORS.muted} hover:underline`}
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full ${COLORS.accent} ${COLORS.accentText} py-3 rounded-full font-semibold shadow-sm hover:brightness-95 transition`}
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-slate-400">
            Ou continue com
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              aria-label="Google"
              className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition"
            >
              <FcGoogle />
            </button>
            <button
              aria-label="Apple"
              className="w-11 h-11 rounded-full bg-black shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition"
            >
              <RiAppleLine className="text-white" />
            </button>
            <button
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-blue-600 shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition"
            >
              <FaFacebookF className="text-white" />
            </button>
          </div>

          <p className={`mt-6 text-center text-sm ${COLORS.muted}`}>
            Não tem conta?{" "}
            <a href="/registra-se" className="text-rose-400 font-semibold">
              Registre-se agora!
            </a>
          </p>
        </div>

        {/* Right: illustration / promo */}
        <div className="hidden lg:flex bg-transparent p-10 md:p-14 flex items-center justify-center">
          <div className="max-w-md text-center">
            <div className="w-full h-80 bg-slate-800 rounded-2xl shadow-inner overflow-hidden flex items-center justify-center border border-slate-700">
              {/* Placeholder illustration - replace with real image */}
              <img
                src={logo}
                alt="Ilustração"
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className={`mt-6 text-xl font-bold ${COLORS.primaryText}`}>
              Bem-vindo ao Gatas MT!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
