import React, { useState } from "react";
import logo from "../../assets/LogoTB.png";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { RiAppleLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const COLORS = {
  // dark theme
  bg: "bg-slate-900",
  primaryText: "text-slate-100",
  muted: "text-slate-400",
  accent: "bg-rose-500",
  accentText: "text-white",
  inputBorder: "border-slate-700",
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  function handleChange(e) {
    setValues((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  const passwordMismatch =
    values.password && values.confirm && values.password !== values.confirm;

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordMismatch) return;
    // placeholder: enviar valores
    console.log("register", values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-6xl w-full bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-slate-800">
        {/* Left: form */}
        <div className="p-8 md:p-14">
          <h2 className={`text-3xl font-extrabold ${COLORS.primaryText} mb-2`}>
            Crie sua conta
          </h2>
          <p className={`text-sm ${COLORS.muted} mb-8`}>
            Junte-se a milhares de profissionais e clientes — é rápido e seguro.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullname" className="sr-only">
                Nome completo
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                value={values.fullname}
                onChange={handleChange}
                placeholder="Nome completo"
                className={`w-full px-4 py-3 rounded-full border ${COLORS.inputBorder} bg-slate-800 ${COLORS.primaryText} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-600`}
              />
            </div>

            <div>
              <label htmlFor="username" className="sr-only">
                Nome de usuário
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                placeholder="Nome de usuário"
                className={`w-full px-4 py-3 rounded-full border ${COLORS.inputBorder} bg-slate-800 ${COLORS.primaryText} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-600`}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
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

            <div>
              <label htmlFor="confirm" className="sr-only">
                Confirmar senha
              </label>
              <input
                id="confirm"
                name="confirm"
                type={showPassword ? "text" : "password"}
                value={values.confirm}
                onChange={handleChange}
                placeholder="Confirmar senha"
                className={`w-full px-4 py-3 rounded-full border ${COLORS.inputBorder} bg-slate-800 ${COLORS.primaryText} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-600`}
              />
              {passwordMismatch && (
                <div className="text-sm text-rose-600 mt-2">
                  As senhas não coincidem.
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded bg-slate-800 border-slate-700"
              />
              <label htmlFor="terms" className={`text-sm ${COLORS.muted}`}>
                Eu concordo com os{" "}
                <a href="#" className="text-rose-400">
                  termos
                </a>{" "}
                e a{" "}
                <a href="#" className="text-rose-400">
                  política de privacidade
                </a>
                .
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={passwordMismatch}
                className={`w-full ${COLORS.accent} ${COLORS.accentText} py-3 rounded-full font-semibold shadow-sm hover:brightness-95 transition disabled:opacity-60`}
              >
                Registrar
              </button>
            </div>
          </form>

          <div className={`mt-6 text-center text-sm ${COLORS.muted}`}>
            ou continue com
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
            Já tem uma conta?{" "}
            <a href="/login" className="text-rose-400 font-semibold">
              Login
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
              Comece agora — é rápido
            </h3>
            <p className={`mt-2 text-sm ${COLORS.muted}`}>
              Crie seu perfil, conecte-se com profissionais e aproveite todos os
              benefícios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
