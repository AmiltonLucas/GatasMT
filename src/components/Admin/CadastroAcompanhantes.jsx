


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export default function CadastroProduto() {
//   const [nome, setNome] = useState("");
//   const [descricao, setDescricao] = useState("");
//   const [categoria, setCategoria] = useState(""); 
//   const [preco, setPreco] = useState("");
//   const [estoque, setEstoque] = useState("");
//   const [imagem, setImagem] = useState(null); // novo estado para a imagem
//   const [preview, setPreview] = useState(null); // url de preview
//   const API_URL = 'http://127.0.0.1:8000/api'
//   const navigate = useNavigate()


//   const produtoData = {
//     nome_produto: nome,
//     descricao: descricao,
//     categoria: categoria,
//     preco: preco,
//     estoque: estoque,
//     foto_produto: imagem

//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // await axios.post(`http://127.0.0.1:8000/produtos/`,
//       await axios.post(`${API_URL}/produtos/`,
//         produtoData, {
//         headers: { "Content-Type": "multipart/form-data" },

//         }
//       );
//       alert('Produto cadastrado com sucesso!')
//       window.location.reload();
//       navigate("/produtos"); // Redireciona de volta para a listagem
//     } catch (error) {
//       console.log('Erro capturado:',error)
//       alert("Erro ao cadastrar o produto.");
//     }
//   };
//     const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImagem(file);
//     if (file) {
//       setPreview(URL.createObjectURL(file)); // cria url temporária para mostrar preview
//     } else {
//       setPreview(null);
//     }
//   };

//   return (
//     <div className="mt-10 w-full">
//       <form
//         className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md"
//         onSubmit={handleSubmit}>
//         <h2 className="text-2xl text-center font-bold mb-20 text-[#F29F05]">
//           Cadastrar Produto
//         </h2>
//         <input
//           type="text"
//           placeholder="Nome do Produto"
//           value={nome}
//           onChange={(e) => setNome(e.target.value)}
//           required
//           className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
//         />
//         <textarea
//           placeholder="Descrição"
//           value={descricao}
//           onChange={(e) => setDescricao(e.target.value)}
//           className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
//         />

//         <select
//           value={categoria}
//           onChange={(e) => setCategoria(e.target.value)}
//           required
//           className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
//         >
//           <option value="">Selecione uma categoria</option>
//           <option value="gatos">Gatos</option>
//           <option value="cachorros">Cachorros</option>
//           <option value="racoes">Rações</option>
//           <option value="petiscos">Petiscos</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Preço"
//           value={preco}
//           onChange={(e) => setPreco(e.target.value)}
//           required
//           className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
//         />
//         <input
//           type="number"
//           placeholder="Estoque"
//           value={estoque}
//           onChange={(e) => setEstoque(e.target.value)}
//           required
//           className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
//         />
//          <label
//           htmlFor="imagem_produto"
//           className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 cursor-pointer text-gray-700 text-center"
//         >
//           Imagem do Produto
//         </label>
//         <input
//           id="imagem_produto"
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="hidden"
//         />

//         {/* Preview da imagem */}
//         {preview && (
//           <img
//             src={preview}
//             alt="Preview do Produto"
//             className="w-full h-48 object-contain border border-orange-200 rounded-lg mt-2"
//           />
//         )}

//         <button
//           type="submit"
//           className="py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
//         >
//           Cadastrar
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";

const CadastroAcompanhantes = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [produtos, setProdutos] = useState([]); // Lista local de produtos

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagem(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome,
      descricao,
      categoria,
      preco,
      estoque,
      imagem: preview,
    };

    setProdutos((prev) => [...prev, novoProduto]);
    alert("✅ Produto cadastrado com sucesso!");

    // limpa os campos
    setNome("");
    setDescricao("");
    setCategoria("");
    setPreco("");
    setEstoque("");
    setImagem(null);
    setPreview(null);
  };

  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center font-bold mb-6 text-[#F29F05]">
          Cadastrar Produto
        </h2>

        <input
          type="text"
          placeholder="Nome do Produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        >
          <option value="">Selecione uma categoria</option>
          <option value="gatos">Gatos</option>
          <option value="cachorros">Cachorros</option>
          <option value="racoes">Rações</option>
          <option value="petiscos">Petiscos</option>
        </select>

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />

        <input
          type="number"
          placeholder="Estoque"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          required
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400"
        />

        <label
          htmlFor="imagem_produto"
          className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 cursor-pointer text-gray-700 text-center"
        >
          Imagem do Produto
        </label>

        <input
          id="imagem_produto"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {preview && (
          <img
            src={preview}
            alt="Preview do Produto"
            className="w-full h-48 object-contain border border-orange-200 rounded-lg mt-2"
          />
        )}

        <button
          type="submit"
          className="py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Cadastrar
        </button>
      </form>

      {/* Exibição dos produtos cadastrados */}
      {produtos.length > 0 && (
        <div className="mt-10 w-full max-w-3xl">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-700">
            Produtos Cadastrados
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {produtos.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
              >
                {p.imagem && (
                  <img
                    src={p.imagem}
                    alt={p.nome}
                    className="w-32 h-32 object-contain mb-3"
                  />
                )}
                <h4 className="font-bold text-lg text-[#F29F05]">
                  {p.nome}
                </h4>
                <p className="text-gray-600 text-sm">{p.descricao}</p>
                <p className="text-gray-500 text-sm mt-1">
                  Categoria: {p.categoria}
                </p>
                <p className="text-green-600 font-semibold mt-2">
                  R$ {p.preco}
                </p>
                <p className="text-sm text-gray-500">Estoque: {p.estoque}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CadastroProduto;
