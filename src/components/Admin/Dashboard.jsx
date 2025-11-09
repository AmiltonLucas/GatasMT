import React from "react";
import {
  FaBox,
  FaShoppingCart,
  FaUserTie,
  FaPlus,
  FaEdit,
  FaUsers,
} from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../Assets/Public/LogoTB.png";

export default function Dashboard() {
  const COLORS = __COLORS__;
  return (
    <main className="flex-1 p-0 bg-[#0a0a0a]">
      {/* Banner responsivo com estilo */}
      <div className="w-full bg-[#0A0A0A] flex flex-col items-center justify-center mb-8 py-8 sm:py-12">
        <img
          src={logo}
          alt="Logo da Loja"
          className="max-h-32 sm:max-h-48 w-auto object-contain drop-shadow-xl mb-2 rounded-full"
        />
        <h1 className="mt-2 text-xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg text-center">
          Bem-vindo ao painel da Gatas MT!
        </h1>
      </div>

      {/* Grid adaptável para mobile/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-8">
        {/* Produtos */}
        <a href="/admin-acompanhantes">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition transform hover:scale-105 hover:border-2 hover:border-rose-500 hover:shadow-md">
            <FaUsers className="text-rose-500 text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-4">Acompanhantes</h2>
            {/* <div className="flex gap-3">
              <Link
                to="/cadastro-produto"
                className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <FaPlus /> Adicionar
              </Link>
              <Link
                to="/produtos"
                className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <FaEdit /> Modificar
              </Link>
            </div> */}
          </div>
        </a>

        <a href="/clientes">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center  transition transform hover:scale-105 hover:border-2 hover:border-rose-500 hover:shadow-md">
            <FaUsers className="text-rose-500 text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-4">Clientes</h2>
            {/* <div className="flex gap-3">
              <Link
                to="/cadastro-cliente"
                className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <FaPlus /> Adicionar
              </Link>
              <Link
                to="/clientes"
                className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <FaEdit /> Modificar
              </Link>
            </div> */}
          </div>
        </a>

        {/* Vendas */}
        <a href="/admin-blog">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition transform hover:scale-105 hover:border-2 hover:border-rose-500 hover:shadow-md">
            <BiPencil className="text-rose-500 text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-4">Blog</h2>
            {/* <div className="flex gap-3">
              <Link
                to="/cadastro-venda"
                className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <FaPlus /> Adicionar
              </Link>
              <Link
                to="/vendas"
                className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <FaEdit /> Modificar
              </Link>
            </div> */}
          </div>
        </a>

        {/* Fluxo de Caixa */}
        {/* <a href="/fluxo-caixa">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center transition transform hover:scale-105 hover:border-2 hover:border-[#E63946] hover:shadow-md">
            <FaUserTie className="text-[#E63946] text-3xl mb-2" />
            <h2 className="font-semibold text-lg mb-4">Fluxo de Caixa</h2>
            <div className="flex gap-3">
              <Link
                to="/fluxo-caixa"
                className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Ver mais
              </Link>
            </div>
          </div>
        </a> */}
      </div>
    </main>
  );
}
