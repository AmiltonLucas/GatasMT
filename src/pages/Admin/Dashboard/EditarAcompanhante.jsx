

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import SidebarMenu from "../../../Components/Admin/SidebarMenu";

// export default function EditarProdutoPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [produto, setProduto] = useState(null);
//   const [nome, setNome] = useState("");
//   const [descricao, setDescricao] = useState("");
//   const [categoria, setCategoria] = useState(""); // categoria selecionada

//   const [preco, setPreco] = useState("");
//   const [estoque, setEstoque] = useState("");
//   const [imagem, setImagem] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [carregando, setCarregando] = useState(true);
//   const [erro, setErro] = useState(null);

//   const API_URL = "http://127.0.0.1:8000/api"; 

//   useEffect(() => {
//     const fetchProduto = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/produtos/${id}/`);
//         setProduto(response.data);
//         setNome(response.data.nome_produto);
//         setDescricao(response.data.descricao);
//         setCategoria(response.data.categoria);
//         setEstoque(response.data.estoque);
//         setPreco(response.data.preco);
//         setPreview(response.data.foto_produto);
//       } catch (error) {
//         setErro("Erro ao carregar o produto.");
//       } finally {
//         setCarregando(false);
//       }
//     };

//     fetchProduto();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("nome_produto", nome);
//       formData.append("descricao", descricao);
//       formData.append("categoria", categoria);
//       formData.append("preco", preco);
//       formData.append("estoque", estoque);

//       if (imagem) {
//         formData.append("foto_produto", imagem);
//       }

//       await axios.patch(`${API_URL}/produtos/${id}/`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       alert("Produto atualizado com sucesso!");
//       navigate("/produtos");
//     } catch (error) {
//       console.error(error);
//       setErro("Erro ao atualizar o produto.");
//     }
//   };

//   // Excluir produto
//   const handleDeletarProduto = async () => {
//     if (!window.confirm("Tem certeza que deseja deletar este produto?")) return;

//     try {
//       await axios.delete(`${API_URL}/produtos/${id}/`);
//       alert("Produto deletado com sucesso!");
//       navigate("/produtos");
//     } catch (error) {
//       console.error("Erro ao deletar produto:", error);
//       alert("Erro ao deletar produto.");
//     }
//   };

//   // Alterar imagem e criar preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImagem(file);
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   if (carregando) return <div className="p-8">Carregando produto...</div>;
//   if (erro) return <div className="p-8 text-red-500">{erro}</div>;

//   return (
//     <div className="min-h-screen flex bg-white">
//       <SidebarMenu />
//       <div className="flex-1 p-8">
//         <h1 className="text-2xl font-bold mb-6 text-[#F29F05]">
//           Editar Produto
//         </h1>
//         <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
//           <img
//             src={imagem ? URL.createObjectURL(imagem) : produto.foto_produto}
//             alt={produto.nome_produto}
//             className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-blue-100"
//           />
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <label className="font-medium text-gray-700 mt-2">Imagem do Produto</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="border p-2 rounded cursor-pointer"
//             />

//             <label className="font-medium text-gray-700 mt-3">Nome do Produto</label>
//             <input
//               className="border p-2 rounded"
//               value={nome}
//               onChange={(e) => setNome(e.target.value)}
//               placeholder="Nome do produto"
//               required
//             />

//             <label className="font-medium text-gray-700 mt-3">Descrição</label>
//             <textarea
//               className="border p-2 rounded"
//               value={descricao}
//               onChange={(e) => setDescricao(e.target.value)}
//               placeholder="Descrição"
//             />

//             <label className="font-medium text-gray-700 mt-3">Categoria</label>
//             <select
//               className="border p-2 rounded"
//               value={categoria}
//               onChange={(e) => setCategoria(e.target.value)}
//               required
//             >
//               <option value="">Selecione uma categoria</option>
//               <option value="gatos">Gatos</option>
//               <option value="cachorros">Cachorros</option>
//               <option value="racoes">Rações</option>
//               <option value="petiscos">Petiscos</option>
//             </select>


//             <label className="font-medium text-gray-700 mt-3">Preço</label>
//             <input
//               className="border p-2 rounded"
//               value={preco}
//               type="number"
//               onChange={(e) => setPreco(e.target.value)}
//               placeholder="Preço"
//               required
//             />


//             <label className="font-medium text-gray-700 mt-3">Estoque</label>
//             <input
//               className="border p-2 rounded"
//               value={estoque}
//               type="number"
//               onChange={(e) => setEstoque(e.target.value)}
//               placeholder="Estoque"
//               required
//             />

//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//             >
//               Salvar Alterações
//             </button>
//             <button
//               type="button"
//               className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
//               onClick={handleDeletarProduto}
//             >
//               Deletar Produto
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import SidebarMenu from "../../../Components/Admin/SidebarMenu";

export default function EditarProdutoPage() {
  // Simulação de um produto carregado
  const produtoInicial = {
    id: 1,
    nome_produto: "Ana carolina",
    descricao: "Asiatica, 21 anos, 1.65m, 55kg, olhos castanhos",
    categoria: "Feminino",
    preco: 89.90,
    estoque: 1,
    foto_produto: "https://via.placeholder.com/150", // imagem genérica
  };

  const [produto, setProduto] = useState(produtoInicial);
  const [nome, setNome] = useState(produto.nome_produto);
  const [descricao, setDescricao] = useState(produto.descricao);
  const [categoria, setCategoria] = useState(produto.categoria);
  const [preco, setPreco] = useState(produto.preco);
  const [estoque, setEstoque] = useState(produto.estoque);
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(produto.foto_produto);

  // Atualiza dados no "envio"
  const handleSubmit = (e) => {
    e.preventDefault();
    const produtoAtualizado = {
      nome_produto: nome,
      descricao,
      categoria,
      preco,
      estoque,
      foto_produto: preview,
    };
    console.log("Produto atualizado:", produtoAtualizado);
    alert("Produto atualizado com sucesso!");
  };

  // Simula exclusão
  const handleDeletarProduto = () => {
    if (window.confirm("Tem certeza que deseja deletar este produto?")) {
      console.log("Produto deletado:", produto.nome_produto);
      alert("Produto deletado com sucesso!");
    }
  };

  // Preview de imagem local
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0a0a0a]">
      <SidebarMenu />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 text-rose-500">
          Editar Acompanhante
        </h1>
        <div className="bg-slate-900 text-gray-300 rounded-xl shadow p-6 max-w-md mx-auto">
          <img
            src={preview}
            alt={nome}
            className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-4 border-blue-100"
          />

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="font-medium text-gray-200 mt-2">
              Imagem do Produto
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 rounded cursor-pointer"
            />

            <label className="font-medium text-gray-200 mt-3">
              Nome do Produto
            </label>
            <input
              className="border p-2 rounded"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome do produto"
              required
            />

            <label className="font-medium text-gray-200 mt-3">Descrição</label>
            <textarea
              className="border p-2 rounded"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição"
            />

            <label className="font-medium text-gray-200 mt-3">Categoria</label>
            <select
              className="border p-2 rounded"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="gatos">Feminino</option>
            </select>

            <label className="font-medium text-gray-200 mt-3">Preço</label>
            <input
              className="border p-2 rounded"
              value={preco}
              type="number"
              onChange={(e) => setPreco(e.target.value)}
              placeholder="Preço"
              required
            />

            <label className="font-medium text-gray-200 mt-3">Estoque</label>
            <input
              className="border p-2 rounded"
              value={estoque}
              type="number"
              onChange={(e) => setEstoque(e.target.value)}
              placeholder="Estoque"
              required
            />

            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Salvar Alterações
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              onClick={handleDeletarProduto}
            >
              Deletar Acompanhante
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

