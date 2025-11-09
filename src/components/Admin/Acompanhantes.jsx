
// import React, { useState, useEffect } from "react";
// import SidebarMenu from "./SidebarMenu";
// import CadastroProduto from "./CadastroProduto";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function ProdutosAdmin() {
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
//   const [produtos, setProdutos] = useState([]);
//   const [produtoParaDeletar, setProdutoParaDeletar] = useState(null);
//   const API_URL = "http://127.0.0.1:8000/api";

//   useEffect(() => {
//     const fetchProdutos = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/produtos/`);
//         setProdutos(response.data);
//       } catch (error) {
//         console.error("Erro ao buscar produtos:", error);
//       }
//     };
//     fetchProdutos();
//   }, []);

//   const abrirModalDeletar = (produto) => {
//     setProdutoParaDeletar(produto);
//     setShowModal(true);
//   };

//   const handleDeletarProduto = async () => {
//     try {
//       await axios.delete(`${API_URL}/produtos/${produtoParaDeletar.id}/`);
//       setProdutos((prev) =>
//         prev.filter((p) => p.id !== produtoParaDeletar.id)
//       );
//       setShowModal(false);
//       setProdutoParaDeletar(null);
//       alert("Produto deletado com sucesso!");
//     } catch (error) {
//       console.error("Erro ao deletar produto:", error);
//       alert("Erro ao deletar produto.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full flex bg-gray-100">
//       <SidebarMenu />
//       <div className="flex-1 p-4 sm:p-8" style={{ backgroundColor: COLORS.secondaryNav }}>
//         {/* Título centralizado */}
//         <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: COLORS.primary }}>
//           Produtos Cadastrados
//         </h1>

//         {/* Container centralizado */}
//         <div className="w-full space-y-6">
//           {produtos.length === 0 && (
//             <p className="text-center text-gray-500">Nenhum produto cadastrado.</p>
//           )}

//           {produtos.map((produto) => (
//             <div
//               key={produto.id}
//               className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
//             >
//               {/* Informações do produto */}
//               <div className="flex flex-col sm:flex-row items-center sm:items-start w-full gap-4">
//                 <img
//                   src={produto.foto_produto}
//                   alt={produto.nome_produto}
//                   className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md border border-gray-300"
//                 />
//                 <div className="flex-1 text-center sm:text-left">
//                   <h2 className="font-bold text-lg" style={{ color: COLORS.primary }}>
//                     {produto.nome_produto}
//                   </h2>
//                   <p className="text-sm text-gray-500">{produto.descricao}</p>
//                   <p className="text-sm text-gray-500">Categoria: {produto.categoria}</p>
//                   <p className="text-sm text-gray-500">Estoque: {produto.estoque}</p>
//                 </div>
//               </div>

//               {/* Ações */}
//               <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
//                 <Link
//                   to={`/editar-produto/${produto.id}`}
//                   className="px-4 py-2 text-white rounded hover:bg-orange-600 text-sm text-center"
//                   style={{ backgroundColor: COLORS.warning }}
//                 >
//                   Editar
//                 </Link>
//                 <button
//                   onClick={() => abrirModalDeletar(produto)}
//                   className="px-4 py-2 text-white rounded hover:bg-red-600 text-sm"
//                   style={{ backgroundColor: COLORS.danger }}
//                 >
//                   Deletar
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Botão centralizado de cadastro */}
//           <div className="flex justify-center ">
//             <button
//               onClick={() => setShowCadastro(true)}
//               className="px-6 py-3 mt-3 w-full sm:w-auto text-white rounded-2xl hover:bg-green-600 font-semibold text-center"
//               style={{ backgroundColor: COLORS.success }}
//             >
//               Cadastrar Produto
//             </button>
//           </div>
//         </div>

//         {showCadastro && <CadastroProduto />}

//         {/* Modal de confirmação */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 backdrop-blur-sm"></div>
//             <div className="relative bg-white p-6 rounded shadow-lg w-11/12 sm:w-96 z-10">
//               <h2 className="text-lg font-bold mb-4">Confirmação</h2>
//               <p>
//                 Tem certeza que deseja deletar o produto{" "}
//                 <strong>{produtoParaDeletar?.nome_produto}</strong>?
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
//                   onClick={handleDeletarProduto}
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
import { Link } from "react-router-dom";
import Mulher6 from '../../Assets/Public/Mulher6.png'
import Mulher7 from '../../Assets/Public/Mulher7.png'


export default function AcompanhantesAdmin() {
  const COLORS = {
    primary: "#FFFFFF",
    bg: "#0A0A0A",
    white: "#FFFFFF",
    muted: "#6B7280",
    accent: "#3B82F6",
    success: "#10B981",
    danger: "#EF4444",
    warning: "#F59E0B",
  };

  const [showCadastro, setShowCadastro] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [produtoParaDeletar, setProdutoParaDeletar] = useState(null);

  // Lista estática inicial
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome_produto: "Luiza Silva",
      descricao: "Quente na cama, doce no beijo.",
      categoria: "Feminino",
      estoque: 1,
      foto_produto: Mulher6,
    },
    {
      id: 2,
      nome_produto: "Ana Carolina",
      descricao: "Asiatica brasileira, 21 anos, novinha e safada.",
      categoria: "Feminino",
      estoque: 1,
      foto_produto: Mulher7,
    },
  ]);

  // Formulário de novo produto
  const [novoProduto, setNovoProduto] = useState({
    nome_produto: "",
    descricao: "",
    categoria: "",
    estoque: "",
    foto_produto: "",
  });

  const abrirModalDeletar = (produto) => {
    setProdutoParaDeletar(produto);
    setShowModal(true);
  };

  const handleDeletarProduto = () => {
    setProdutos((prev) => prev.filter((p) => p.id !== produtoParaDeletar.id));
    setShowModal(false);
    setProdutoParaDeletar(null);
    alert("Produto deletado com sucesso!");
  };

  const handleCadastrarProduto = (e) => {
    e.preventDefault();
    const novo = {
      id: produtos.length + 1,
      ...novoProduto,
      estoque: Number(novoProduto.estoque) || 0,
      foto_produto: novoProduto.foto_produto || "https://via.placeholder.com/150",
    };
    setProdutos([...produtos, novo]);
    setNovoProduto({
      nome_produto: "",
      descricao: "",
      categoria: "",
      estoque: "",
      foto_produto: "",
    });
    setShowCadastro(false);
    alert("Produto cadastrado com sucesso!");
  };

  return (
    <div className="min-h-screen w-full flex">
      <SidebarMenu />
      <div
        className="flex-1 p-4 sm:p-8"
        style={{ backgroundColor: COLORS.bg }}
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: COLORS.primary }}
        >
          Acompanhantes Cadastradas
        </h1>

        <div className="w-full space-y-6">
          {produtos.length === 0 && (
            <p className="text-center text-gray-500">
              Nenhuma acompanhante cadastrada.
            </p>
          )}

          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-slate-900 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start w-full gap-4">
                <img
                  src={produto.foto_produto}
                  alt={produto.nome_produto}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md border border-gray-300"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h2
                    className="font-bold text-lg"
                    style={{ color: COLORS.primary }}
                  >
                    {produto.nome_produto}
                  </h2>
                  <p className="text-sm text-gray-500">{produto.descricao}</p>
                  <p className="text-sm text-gray-500">
                    Categoria: {produto.categoria}
                  </p>
                  <p className="text-sm text-gray-500">
                    Estoque: {produto.estoque}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
                <Link
                  to={`/editar-acompanhante/${produto.id}`}
                  className="px-4 py-2 text-white rounded hover:bg-orange-600 text-sm text-center"
                  style={{ backgroundColor: COLORS.warning }}
                >
                  Editar
                </Link>
                <button
                  onClick={() => abrirModalDeletar(produto)}
                  className="px-4 py-2 text-white rounded hover:bg-red-600 text-sm"
                  style={{ backgroundColor: COLORS.danger }}
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}

          {/* Botão de abrir formulário */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowCadastro(!showCadastro)}
              className="px-6 py-3 mt-3 w-full sm:w-auto text-white rounded-2xl hover:bg-green-600 font-semibold text-center"
              style={{ backgroundColor: COLORS.success }}
            >
              {showCadastro ? "Fechar Formulário" : "Cadastrar Produto"}
            </button>
          </div>

          {/* Formulário de cadastro */}
          {showCadastro && (
            <form
              onSubmit={handleCadastrarProduto}
              className="bg-white p-6 rounded-2xl shadow-md mt-6 w-full max-w-lg mx-auto flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-center text-green-600">
                Nova acompanhante
              </h2>

              <input
                type="text"
                placeholder="Nome do Produto"
                value={novoProduto.nome_produto}
                onChange={(e) =>
                  setNovoProduto({
                    ...novoProduto,
                    nome_produto: e.target.value,
                  })
                }
                required
                className="px-4 py-2 border rounded-lg focus:outline-none"
              />
              <textarea
                placeholder="Descrição"
                value={novoProduto.descricao}
                onChange={(e) =>
                  setNovoProduto({ ...novoProduto, descricao: e.target.value })
                }
                required
                className="px-4 py-2 border rounded-lg focus:outline-none"
              />
              <select
                value={novoProduto.categoria}
                onChange={(e) =>
                  setNovoProduto({ ...novoProduto, categoria: e.target.value })
                }
                required
                className="px-4 py-2 border rounded-lg focus:outline-none"
              >
                <option value="">Selecione uma categoria</option>
             
                <option value="Feminino">Feminino</option>
               
              </select>
              <input
                type="number"
                placeholder="Estoque"
                value={novoProduto.estoque}
                onChange={(e) =>
                  setNovoProduto({ ...novoProduto, estoque: e.target.value })
                }
                required
                className="px-4 py-2 border rounded-lg focus:outline-none"
              />
              <input
                type="text"
                placeholder="URL da Imagem"
                value={novoProduto.foto_produto}
                onChange={(e) =>
                  setNovoProduto({
                    ...novoProduto,
                    foto_produto: e.target.value,
                  })
                }
                className="px-4 py-2 border rounded-lg focus:outline-none"
              />

              <button
                type="submit"
                className="py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Salvar Acompanhante
              </button>
            </form>
          )}
        </div>

        {/* Modal de confirmação */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="relative bg-white p-6 rounded shadow-lg w-11/12 sm:w-96 z-10">
              <h2 className="text-lg font-bold mb-4">Confirmação</h2>
              <p>
                Tem certeza que deseja deletar a acompanhante{" "}
                <strong>{produtoParaDeletar?.nome_produto}</strong>?
              </p>
              <div className="mt-6 flex justify-end gap-3 flex-wrap">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 text-white rounded hover:bg-red-600"
                  style={{ backgroundColor: COLORS.danger }}
                  onClick={handleDeletarProduto}
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
