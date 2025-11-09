import React from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";

export default function EditarVendaPage() {
  // Aqui você pode buscar os dados da venda pelo id (mock)
  const venda = {
    id: 1,
    cliente: "João Silva",
    produto: "Notebook Dell",
    quantidade: 1,
  };
  return (
    <div className="min-h-screen flex bg-white">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Editar Venda</h1>
        <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
          <form className="flex flex-col gap-4">
            <input
              className="border p-2 rounded"
              defaultValue={venda.cliente}
            />
            <input
              className="border p-2 rounded"
              defaultValue={venda.produto}
            />
            <input
              className="border p-2 rounded"
              defaultValue={venda.quantidade}
              type="number"
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
