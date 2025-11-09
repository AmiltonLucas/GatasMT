
// import React, { useState } from "react";
// import logo from '../../Assets/Public/logo.PNG';
// import axios from "axios";

// // Cores do Vite (vite.config.js)
// const COLORS = {
//   primary: '#E63946',
//   secondary: '#F6C90E',
//   secondaryNav: '#FFF4E0',
//   accent: '#F2C744',
//   text: '#4A4A4A',
//   white: '#FFFFFF',
// };

// export default function LoginAdmin() {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await axios.post("http://127.0.0.1:8000/api/login/", {
//         username,
//         password,
//       });

//       if (!res.data.is_admin) {
//       setError("Acesso restrito apenas para administradores.");
//       setLoading(false);
//       return;
//     }

//       // Salva token e dados do usuário
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data));

//       setLoading(false);
//       window.location.href = "/admindash"; // redireciona para dashboard
//     } catch (err) {
//       console.error(err);
//       setError("Usuário ou senha inválidos.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4" style={{ background: `linear-gradient(135deg, ${COLORS.secondaryNav} 0%, ${COLORS.accent} 100%)` }}>
//       <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl" style={{ background: COLORS.white }}>
//         <div className="flex flex-col items-center mb-6">
//           <img src={logo} alt="Logo" className="w-20 h-20 mb-2 rounded-full shadow" />
//           <h1 className="text-2xl font-bold text-center" style={{ color: COLORS.text }}>Login do Administrador</h1>
//           <span className="text-sm" style={{ color: COLORS.secondary }}>Acesso restrito</span>
//         </div>
//         <form onSubmit={handleLogin} className="space-y-5">
//           {/* <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: COLORS.text }}>Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Digite seu email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition"
//               style={{ borderColor: COLORS.primary, color: COLORS.text }}
//               autoComplete="username"
//               required
//             />
//           </div> */}

//           <div>
//             <label htmlFor="username" className="block text-sm font-medium mb-1" style={{ color: COLORS.text }}>
//               Usuário
//             </label>
//             <input
//               id="username"
//               type="text"
//               placeholder="Digite seu usuário"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition"
//               style={{ borderColor: COLORS.primary, color: COLORS.text }}
//               required
//             />
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: COLORS.text }}>Senha</label>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Digite sua senha"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition pr-10"
//               style={{ borderColor: COLORS.primary, color: COLORS.text }}
//               autoComplete="current-password"
//               required
//             />
//             <button
//               type="button"
//               tabIndex={-1}
//               className="absolute right-2 top-8 text-gray-400 hover:text-primary"
//               onClick={() => setShowPassword((v) => !v)}
//               aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
//             >
//               {showPassword ? "🙈" : "👁️"}
//               {/* {showPassword ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.036 3.807 6.07 6.75 9.75 6.75 1.563 0 3.06-.362 4.396-1.01M21.75 12c-.512-1.012-1.24-2.06-2.16-3.037m-2.591-2.264C15.136 6.37 13.62 5.25 12 5.25c-1.563 0-3.06.362-4.396 1.01m0 0A10.477 10.477 0 0 0 2.25 12m5.354-5.74l11.186 11.186m-1.768 1.768-1.768-1.768" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM2.25 12C3.354 7.943 7.21 4.75 12 4.75c4.79 0 8.646 3.193 9.75 7.25-1.104 4.057-4.96 7.25-9.75 7.25-4.79 0-8.646-3.193-9.75-7.25Z" />
//                 </svg>
//               )} */}
//             </button>
//           </div>
//           {error && (
//             <p className="text-sm mt-2 text-center" style={{ color: COLORS.primary }}>{error}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full py-2 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
//             style={{ background: COLORS.primary, color: COLORS.white }}
//             disabled={loading}
//           >
//             {loading && (
//               <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
//               </svg>
//             )}
//             Entrar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import logo from '../../Assets/Public/LogoTP.png'

// Paleta de cores (mantida igual)
const COLORS = {
  primary: "#E63946",
  secondary: "#f60e0eff",
  secondaryNav: "#0a0a0a",
  accent: "#682433ff",
  text: "#4A4A4A",
  white: "#FFFFFF",
};

export default function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Usuário fixo para simulação
  const ADMIN_USER = {
    username: "admin",
    password: "1234",
    is_admin: true,
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      // Simula um pequeno delay de "requisição"
      if (
        username === ADMIN_USER.username &&
        password === ADMIN_USER.password
      ) {
        // Simula login bem-sucedido
        localStorage.setItem("token", "fake-static-token");
        localStorage.setItem("user", JSON.stringify(ADMIN_USER));
        alert("Login bem-sucedido!");
        window.location.href = "/admindash";
      } else {
        setError("Usuário ou senha inválidos.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: `linear-gradient(135deg, ${COLORS.secondaryNav} 0%, ${COLORS.accent} 100%)`,
      }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl"
        style={{ background: COLORS.white }}
      >
        <div className="flex flex-col items-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 mb-2 rounded-full shadow"
          />
          <h1
            className="text-2xl font-bold text-center"
            style={{ color: COLORS.text }}
          >
            Login do Administrador
          </h1>
          <span className="text-sm" style={{ color: COLORS.secondary }}>
            Acesso restrito
          </span>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.text }}
            >
              Usuário
            </label>
            <input
              id="username"
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition"
              style={{ borderColor: COLORS.primary, color: COLORS.text }}
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
              style={{ color: COLORS.text }}
            >
              Senha
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition pr-10"
              style={{ borderColor: COLORS.primary, color: COLORS.text }}
              required
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-2 top-8 text-gray-400 hover:text-primary"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {error && (
            <p
              className="text-sm mt-2 text-center"
              style={{ color: COLORS.primary }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            style={{ background: COLORS.primary, color: COLORS.white }}
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            )}
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
