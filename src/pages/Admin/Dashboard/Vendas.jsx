
// import React, { useState, useEffect } from "react";
// import SidebarMenu from "../../../Components/Admin/SidebarMenu";
// import CadastroVenda from "../../../Components/Admin/CadastroVenda";
// import axios from "axios";

// export default function VendasPage() {
//   const COLORS = {
//     primary: "#1F2937",
//     secondaryNav: "#F3F4F6",
//     white: "#FFFFFF",
//     muted: "#6B7280",
//     accent: "#3B82F6"
//   };

//   const [showCadastro, setShowCadastro] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [vendas, setVendas] = useState([]);
//   const [vendaParaDeletar, setVendaParaDeletar] = useState(null);
//   const [clientevenda, setClienteVendas] = useState([]);

//   const API_URL = "http://127.0.0.1:8000/api";

//   useEffect(() => {
//     const fetchVendas = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/pedidos/`);
//         const vendasData = response.data;
//         setVendas(vendasData);

//         const token = localStorage.getItem("token");
//         const clientesData = await Promise.all(
//           vendasData.map(async (venda) => {
//             const resCliente = await axios.get(
//               `${API_URL}/usuarios/${venda.cliente}`,
//               { headers: { Authorization: `Token ${token}` } }
//             );
//             return { vendaId: venda.id, cliente: resCliente.data };
//           })
//         );

//         setClienteVendas(clientesData);
//       } catch (error) {
//         console.error("Erro ao buscar vendas:", error);
//       }
//     };

//     fetchVendas();
//   }, []);

//   const abrirModalDeletar = (venda) => {
//     setVendaParaDeletar(venda);
//     setShowModal(true);
//   };

//   const handleDeletarVenda = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/pedidos/${vendaParaDeletar.id}/`);
//       setVendas((prev) => prev.filter((v) => v.id !== id));
//       setShowModal(false);
//       setVendaParaDeletar(null);
//       alert("Venda deletada com sucesso!");
//     } catch (err) {
//       console.error(err);
//       alert("Erro ao deletar a venda.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       <SidebarMenu />
//       <div
//         className="flex-1 p-8"
//         style={{ backgroundColor: COLORS.secondaryNav }}
//       >
//         <h1
//           className="text-3xl font-bold mb-6"
//           style={{ color: COLORS.primary }}
//         >
//           Pedidos
//         </h1>

//         {/* Botão de cadastrar venda */}
//         {/* {showCadastro && <CadastroVenda />} */}

//         {vendas.length === 0 && (
//           <p style={{ color: COLORS.muted }}>Nenhum pedido registrado.</p>
//         )}

//         <div className="space-y-6">
//           {vendas.map((venda) => {
//             const cliente =
//               clientevenda.find((c) => c.vendaId === venda.id)?.cliente;

//             const totalPedido = venda.itens.reduce(
//               (acc, item) => acc + item.total,
//               0
//             );

//             return (
//               <div
//                 key={venda.id}
//                 className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
//               >
//                 {/* Cabeçalho do pedido */}
//                 <div className="flex justify-between items-center mb-3">
//                   <div>
//                     <h2
//                       className="font-bold text-lg"
//                       style={{ color: COLORS.primary }}
//                     >
//                       Pedido #{venda.id}
//                     </h2>
//                     <p className="text-sm" style={{ color: COLORS.muted }}>
//                       Cliente: {cliente?.nome_completo || "Não encontrado"}
//                     </p>
//                     <p className="text-sm" style={{ color: COLORS.muted }}>
//                       Endereço de Entrega: {venda.endereco_entrega}
//                     </p>
//                     <p className="text-sm" style={{ color: COLORS.muted }}>
//                       Endereço de Entrega: {venda.metodo_pagamento}
//                     </p>
//                     <p className="text-sm" style={{ color: COLORS.muted }}>
//                       Data: {new Date(venda.criado_em).toLocaleString()}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => abrirModalDeletar(venda)}
//                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
//                   >
//                     Deletar
//                   </button>
//                 </div>

//                 {/* Itens do pedido */}
//                 <div className="mt-4 space-y-3">
//                   {venda.itens.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 border rounded-lg"
//                     >
//                       <img
//                         src={item.produto.foto_produto}
//                         alt={item.produto.nome_produto}
//                         className="w-14 h-14 object-cover rounded-md mr-3"
//                       />
//                       <div className="flex-1 ml-3">
//                         <p className="font-medium" style={{ color: COLORS.primary }}>
//                           {item.produto.nome_produto}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {item.quantidade}x R$ {item.produto.preco}
//                         </p>
//                       </div>
//                       <span className="font-semibold" style={{ color: COLORS.accent }}>
//                         R$ {item.total}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Total do pedido */}
//                 <div className="mt-4 text-right">
//                   <span className="font-bold text-md" style={{ color: COLORS.primary }}>
//                     Total do Pedido: R$ {totalPedido}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Modal de confirmação */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 backdrop-blur-sm"></div>
//             <div className="relative bg-white p-6 rounded shadow-lg w-96 z-10">
//               <h2 className="text-lg font-bold mb-4">Confirmação</h2>
//               <p>
//                 Tem certeza que deseja deletar a venda #
//                 <strong>{vendaParaDeletar?.id}</strong>?
//               </p>
//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancelar
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => handleDeletarVenda(vendaParaDeletar.id)}
//                 >
//                   Deletar
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";
import CadastroVenda from "../../../Components/Admin/CadastroVenda";

export default function VendasPage() {
  const COLORS = {
    primary: "#1F2937",
    secondaryNav: "#F3F4F6",
    white: "#FFFFFF",
    muted: "#6B7280",
    accent: "#3B82F6",
  };

  const [showCadastro, setShowCadastro] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [vendaParaDeletar, setVendaParaDeletar] = useState(null);

  // 🔹 Dados simulados de vendas
  const [vendas, setVendas] = useState([
    {
      id: 1,
      cliente: { nome_completo: "João Silva" },
      endereco_entrega: "Rua das Flores, 123 - São Paulo",
      metodo_pagamento: "Cartão de Crédito",
      criado_em: "2025-11-08T10:30:00",
      itens: [
        {
          produto: {
            nome_produto: "Ração Premium",
            preco: 89.9,
            foto_produto: "https://via.placeholder.com/80",
          },
          quantidade: 2,
          total: 179.8,
        },
        {
          produto: {
            nome_produto: "Coleira Ajustável",
            preco: 39.9,
            foto_produto: "https://via.placeholder.com/80",
          },
          quantidade: 1,
          total: 39.9,
        },
      ],
    },
    {
      id: 2,
      cliente: { nome_completo: "Maria Oliveira" },
      endereco_entrega: "Av. Central, 999 - Rio de Janeiro",
      metodo_pagamento: "Pix",
      criado_em: "2025-11-07T14:45:00",
      itens: [
        {
          produto: {
            nome_produto: "Petisco Canino",
            preco: 24.5,
            foto_produto: "https://via.placeholder.com/80",
          },
          quantidade: 3,
          total: 73.5,
        },
      ],
    },
  ]);

  const abrirModalDeletar = (venda) => {
    setVendaParaDeletar(venda);
    setShowModal(true);
  };

  const handleDeletarVenda = (id) => {
    setVendas((prev) => prev.filter((v) => v.id !== id));
    setShowModal(false);
    setVendaParaDeletar(null);
    alert("Venda deletada com sucesso!");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <SidebarMenu />
      <div
        className="flex-1 p-8"
        style={{ backgroundColor: COLORS.secondaryNav }}
      >
        <h1
          className="text-3xl font-bold mb-6"
          style={{ color: COLORS.primary }}
        >
          Pedidos
        </h1>

        {/* Botão de cadastrar venda */}
        <button
          onClick={() => setShowCadastro(!showCadastro)}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          {showCadastro ? "Fechar Cadastro" : "Cadastrar Nova Venda"}
        </button>

        {showCadastro && <CadastroVenda />}

        {vendas.length === 0 && (
          <p style={{ color: COLORS.muted }}>Nenhum pedido registrado.</p>
        )}

        <div className="space-y-6">
          {vendas.map((venda) => {
            const totalPedido = venda.itens.reduce(
              (acc, item) => acc + item.total,
              0
            );

            return (
              <div
                key={venda.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Cabeçalho do pedido */}
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h2
                      className="font-bold text-lg"
                      style={{ color: COLORS.primary }}
                    >
                      Pedido #{venda.id}
                    </h2>
                    <p className="text-sm" style={{ color: COLORS.muted }}>
                      Cliente: {venda.cliente.nome_completo}
                    </p>
                    <p className="text-sm" style={{ color: COLORS.muted }}>
                      Endereço de Entrega: {venda.endereco_entrega}
                    </p>
                    <p className="text-sm" style={{ color: COLORS.muted }}>
                      Método de Pagamento: {venda.metodo_pagamento}
                    </p>
                    <p className="text-sm" style={{ color: COLORS.muted }}>
                      Data: {new Date(venda.criado_em).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => abrirModalDeletar(venda)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Deletar
                  </button>
                </div>

                {/* Itens do pedido */}
                <div className="mt-4 space-y-3">
                  {venda.itens.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <img
                        src={item.produto.foto_produto}
                        alt={item.produto.nome_produto}
                        className="w-14 h-14 object-cover rounded-md mr-3"
                      />
                      <div className="flex-1 ml-3">
                        <p
                          className="font-medium"
                          style={{ color: COLORS.primary }}
                        >
                          {item.produto.nome_produto}
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.quantidade}x R$ {item.produto.preco}
                        </p>
                      </div>
                      <span
                        className="font-semibold"
                        style={{ color: COLORS.accent }}
                      >
                        R$ {item.total.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Total do pedido */}
                <div className="mt-4 text-right">
                  <span
                    className="font-bold text-md"
                    style={{ color: COLORS.primary }}
                  >
                    Total do Pedido: R$ {totalPedido.toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal de confirmação */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="relative bg-white p-6 rounded shadow-lg w-96 z-10">
              <h2 className="text-lg font-bold mb-4">Confirmação</h2>
              <p>
                Tem certeza que deseja deletar a venda #
                <strong>{vendaParaDeletar?.id}</strong>?
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeletarVenda(vendaParaDeletar.id)}
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
