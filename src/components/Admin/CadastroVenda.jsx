import React, { useState } from "react";

export default function CadastroVenda() {
  const [cliente, setCliente] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro
  };

  return (
    <div className="min-h-screen grid place-items-center bg-white p-4 w-full">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-2 text-[#F29F05]">
          Cadastrar Venda
        </h2>
        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
          className="px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400"
        />
        <input
          type="text"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          required
          className="px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400"
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          required
          className="px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:border-green-400"
        />
        <button
          type="submit"
          className="py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}