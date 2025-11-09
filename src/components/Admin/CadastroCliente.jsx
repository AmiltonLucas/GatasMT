import React, { useState } from "react";

export default function CadastroClientes() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica de cadastro
  };

  return (
    <div className="min-h-screen grid place-items-center bg-white">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-2 text-[#F29F05]">
          Cadastrar cliente
        </h2>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
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