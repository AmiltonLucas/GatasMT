// import React, { useState, useEffect } from "react";
// import SidebarMenu from "./SidebarMenu";
// import CadastroClientes from "./CadastroCliente";
// import axios from "axios";

// export default function ClientesAdmin() {
//   const COLORS = {
//     primary: "#1F2937",
//     secondaryNav: "#F3F4F6",
//     white: "#FFFFFF",
//     muted: "#6B7280",
//     accent: "#3B82F6",
//     success: "#10B981",
//     danger: "#EF4444",
//     warning: "#F59E0B"
//   };

//   const [showCadastro, setShowCadastro] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [clientes, setClientes] = useState([]);
//   const [clienteParaDeletar, setClienteParaDeletar] = useState(null);

//   const API_URL = "http://127.0.0.1:8000/api";

//   useEffect(() => {
//     const fetchClientes = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get(`${API_URL}/usuarios/`, {
//           headers: { Authorization: `Token ${token}` },
//         });
//         setClientes(response.data);
//       } catch (error) {
//         console.error("Erro ao buscar clientes:", error);
//       }
//     };
//     fetchClientes();
//   }, []);

//   const abrirModalDeletar = (cliente) => {
//     setClienteParaDeletar(cliente);
//     setShowModal(true);
//   };

//   const handleDeletarCliente = async () => {
//     try {
//       await axios.delete(`${API_URL}/usuarios/${clienteParaDeletar.id}/`);
//       setClientes((prev) => prev.filter((c) => c.id !== clienteParaDeletar.id));
//       setShowModal(false);
//       setClienteParaDeletar(null);
//       alert("Cliente deletado com sucesso!");
//     } catch (error) {
//       console.error("Erro ao deletar cliente:", error);
//       alert("Erro ao deletar cliente.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex bg-gray-100">
//       <SidebarMenu />
//       <div
//         className="flex-1 p-4 sm:p-8"
//         style={{ backgroundColor: COLORS.secondaryNav }}
//       >
//         {/* Título centralizado */}
//         <h1
//           className="text-3xl font-bold mb-6 text-center"
//           style={{ color: COLORS.primary }}
//         >
//           Clientes Cadastrados
//         </h1>

//         {/* Container centralizado */}
//         <div className="w-full space-y-6">
//           {clientes.length === 0 && (
//             <p className="text-center text-gray-500">
//               Nenhum cliente cadastrado.
//             </p>
//           )}

//           {clientes.map((cliente) => (
//             <div
//               key={cliente.id}
//               className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
//             >
//               {/* Info do cliente */}
//               <div className="flex flex-col sm:flex-row items-center sm:items-start w-full gap-4">
//                 {/* Avatar genérico se não houver foto */}
//                 <img
//                   src={`https://ui-avatars.com/api/?name=${cliente.nome_completo || cliente.username}&background=random`}
//                   alt={cliente.nome_completo || cliente.username}
//                   className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border border-gray-300"
//                 />
//                 <div className="flex-1 text-center sm:text-left">
//                   <h2
//                     className="font-bold text-lg"
//                     style={{ color: COLORS.primary }}
//                   >
//                     {cliente.nome_completo || cliente.username}
//                   </h2>
//                   <p className="text-sm text-gray-500">E-mail: {cliente.email || "Não informado"}</p>
//                   <p className="text-sm text-gray-500">
//                     Telefone: {cliente.telefone || "Não informado"}
//                   </p>
//                 </div>
//               </div>

//               {/* Ações */}
//               <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
//                 <button
//                   onClick={() => abrirModalDeletar(cliente)}
//                   className="px-4 py-2 text-white rounded hover:bg-red-600 text-sm"
//                   style={{ backgroundColor: COLORS.danger }}
//                 >
//                   Deletar
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Botão centralizado de cadastro */}
//           <div className="flex justify-center">
//             {/* <button
//               onClick={() => setShowCadastro(true)}
//               className="px-6 py-3 mt-3 w-full sm:w-auto text-white rounded-2xl hover:bg-green-600 font-semibold text-center"
//               style={{ backgroundColor: COLORS.success }}
//             >
//               Cadastrar Cliente
//             </button> */}
//           </div>
//         </div>

//         {showCadastro && <CadastroClientes />}

//         {/* Modal de confirmação */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 backdrop-blur-sm"></div>
//             <div className="relative bg-white p-6 rounded shadow-lg w-11/12 sm:w-96 z-10">
//               <h2 className="text-lg font-bold mb-4">Confirmação</h2>
//               <p>
//                 Tem certeza que deseja deletar o cliente{" "}
//                 <strong>
//                   {clienteParaDeletar?.nome_completo ||
//                     clienteParaDeletar?.username}
//                 </strong>
//                 ?
//               </p>
//               <div className="mt-6 flex justify-end gap-3 flex-wrap">
//                 <button
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancelar
//                 </button>
//                 <button
//                   className="px-4 py-2 text-white rounded hover:bg-red-600"
//                   style={{ backgroundColor: COLORS.danger }}
//                   onClick={handleDeletarCliente}
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
import SidebarMenu from "./SidebarMenu";
import CadastroClientes from "./CadastroCliente";

const ClientesAdmin = () => {
  const COLORS = {
    primary: "#1F2937",
    secondaryNav: "#0A0A0A",
    white: "#FFFFFF",
    muted: "#6B7280",
    accent: "#3B82F6",
    success: "#10B981",
    danger: "#EF4444",
    warning: "#F59E0B",
  };

  const [showCadastro, setShowCadastro] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clienteParaDeletar, setClienteParaDeletar] = useState(null);

  // 🔹 Lista estática de clientes
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nome_completo: "João Silva",
      email: "joao@email.com",
      telefone: "11987654321",
    },
    {
      id: 2,
      nome_completo: "Maria Oliveira",
      email: "maria@email.com",
      telefone: "21999999999",
    },
    {
      id: 3,
      nome_completo: "Carlos Souza",
      email: "carlos@email.com",
      telefone: "31988887777",
    },
  ]);

  const abrirModalDeletar = (cliente) => {
    setClienteParaDeletar(cliente);
    setShowModal(true);
  };

  const handleDeletarCliente = () => {
    if (!clienteParaDeletar) return;
    setClientes((prev) => prev.filter((c) => c.id !== clienteParaDeletar.id));
    setShowModal(false);
    setClienteParaDeletar(null);
    alert("Cliente deletado com sucesso!");
  };

  return (
    <div className="min-h-screen w-full flex">
      <SidebarMenu />
      <div
        className="flex-1 p-4 sm:p-8"
        style={{ backgroundColor: COLORS.secondaryNav }}
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: COLORS.white }}
        >
          Clientes Cadastrados
        </h1>

        <div className="w-full space-y-6">
          {clientes.length === 0 && (
            <p className="text-center text-gray-500">
              Nenhum cliente cadastrado.
            </p>
          )}

          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
            >
              {/* Info do cliente */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start w-full gap-4 ">
                <img
                  src={`https://ui-avatars.com/api/?name=${cliente.nome_completo}&background=random`}
                  alt={cliente.nome_completo}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border border-gray-300"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2
                    className="font-bold text-lg"
                    style={{ color: COLORS.white }}
                  >
                    {cliente.nome_completo}
                  </h2>
                  <p className="text-sm text-gray-300">
                    E-mail: {cliente.email}
                  </p>
                  <p className="text-sm text-gray-300">
                    Telefone: {cliente.telefone}
                  </p>
                </div>
              </div>

              {/* Botões  de Deletar
              <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => abrirModalDeletar(cliente)}
                  className="px-4 py-2 text-white rounded hover:bg-red-600 text-sm"
                  style={{ backgroundColor: COLORS.danger }}
                >
                  Deletar
                </button>
              </div> */}
            </div>
          ))}

          {/* Botão de cadastro (opcional) */}
          <div className="flex justify-center">
            {/* <button
              onClick={() => setShowCadastro(true)}
              className="px-6 py-3 mt-3 w-full sm:w-auto text-white rounded-2xl hover:bg-green-600 font-semibold text-center"
              style={{ backgroundColor: COLORS.success }}
            >
              Cadastrar Cliente
            </button> */}
          </div>
        </div>

        {showCadastro && <CadastroClientes />}
      </div>
    </div>
  );
};

export default ClientesAdmin;
