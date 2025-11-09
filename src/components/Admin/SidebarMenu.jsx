// import React, { useState } from "react";
// import {
//   FaUserCircle,
//   FaSignOutAlt,
//   FaKey,
//   FaGlobe,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// export default function SidebarMenu() {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   // Conteúdo do menu
//   const menuContent = (
//     <>
//       <div className="flex flex-col items-center mb-8">
//         <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2">
//           <FaUserCircle className="text-[#F29F05] text-5xl" />
//         </div>
//         <span className="text-lg font-semibold">Bem-vindo Guilherme!</span>
//       </div>
//       <nav className="flex flex-col gap-4 w-full">
//         <a
//           href="/admindash"
//           className="flex items-center gap-2 text-[#F29F05] font-semibold  hover:text-blue-500 hover:underline"
//         >
//           <FaGlobe /> Voltar ao painel
//         </a>
//         <a
//           href="/"
//           className="flex items-center gap-2 text-[#F29F05]  hover:text-blue-500 hover:underline"
//         >
//           <FaGlobe /> Ir para o site
//         </a>
//         <button
//           className="flex items-center gap-2 text-[#F29F05] hover:text-blue-500 hover:underline"
//           onClick={() => navigate("/alterar-senha")}
//         >
//           <FaKey /> Alterar senha
//         </button>
//         <button className="flex items-center gap-2 text-red-500 hover:underline mt-8">
//           <FaSignOutAlt /> Encerrar sessão
//         </button>
//       </nav>
//       <div className="mt-auto pt-8 w-full flex flex-col items-center">
//         <span className="text-xs text-gray-400">© Front Dev Studio</span>
//       </div>
//     </>
//   );

//   return (
//     <>
//       {/* Sidebar fixa em telas grandes */}
//       <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col items-center py-8 px-4 min-h-screen">
//         {menuContent}
//       </aside>

//       {/* Menu mobile */}
//       <div className="md:hidden w-full">
//         <button
//           className="fixed top-4 left-4 z-50 bg-white rounded-full shadow p-2"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? (
//             <FaTimes className="text-[#F29F05] text-2xl" />
//           ) : (
//             <FaBars className="text-[#F29F05] text-2xl" />
//           )}
//         </button>
//         {open && (
//           <div
//             className="fixed inset-0 bg-transparent z-40"
//             onClick={() => setOpen(false)}
//           ></div>
//         )}
//         <aside
//           className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col items-center py-8 px-4 z-50 transition-transform duration-300 ${
//             open ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {menuContent}
//         </aside>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  FaUserCircle,
  FaSignOutAlt,
  FaKey,
  FaGlobe,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SidebarMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  // Pega usuário do localStorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUsername(user.username || "");
    }
  }, []);

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/admin"); // redireciona para login
  };

  // Conteúdo do menu
  const menuContent = (
    <>
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-2">
          <FaUserCircle className="text-rose-500 text-5xl" />
        </div>
        <span className="text-lg font-semibold">
          Bem-vindo, {username || "Usuário"}!
        </span>
      </div>
      <nav className="flex flex-col gap-4 w-full">
        <a
          href="/admindash"
          className="flex items-center gap-2 text-rose-500 font-semibold hover:text-blue-500 hover:underline"
        >
          <FaGlobe /> Voltar ao painel
        </a>
        <a
          href="/"
          className="flex items-center gap-2 text-rose-500 hover:text-blue-500 hover:underline"
        >
          <FaGlobe /> Ir para o site
        </a>
        <button
          className="flex items-center gap-2 text-rose-500 hover:text-blue-500 hover:underline"
          onClick={() => navigate("/alterar-senha")}
        >
          <FaKey /> Alterar senha
        </button>
        <button
          className="flex items-center gap-2 text-red-500 hover:underline mt-8"
          onClick={handleLogout} // chama logout
        >
          <FaSignOutAlt /> Encerrar sessão
        </button>
      </nav>
      <div className="mt-auto pt-8 w-full flex flex-col items-center">
        <span className="text-xs text-gray-400">© Front Dev Studio</span>
      </div>
    </>
  );

  return (
    <>
      {/* Sidebar fixa em telas grandes */}
      <aside className="hidden md:flex w-64 bg-white shadow-lg flex-col items-center py-8 px-4 min-h-screen">
        {menuContent}
      </aside>

      {/* Menu mobile */}
      <div className="md:hidden w-full">
        <button
          className="fixed top-4 left-4 z-50 bg-white rounded-full shadow p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes className="text-rose-500 text-2xl" />
          ) : (
            <FaBars className="text-rose-500 text-2xl" />
          )}
        </button>
        {open && (
          <div
            className="fixed inset-0 bg-transparent z-40"
            onClick={() => setOpen(false)}
          ></div>
        )}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg flex flex-col items-center py-8 px-4 z-50 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {menuContent}
        </aside>
      </div>
    </>
  );
}
