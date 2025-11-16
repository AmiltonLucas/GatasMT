import { useState } from "react";
import React from "react";
import { X } from "lucide-react";

export default function AdminBlogCreate() {
  const [title, setTitle] = useState("");
  const [mainText, setMainText] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [author, setAuthor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [blogLink, setBlogLink] = useState("");

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  function generateSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !mainText || !content || !image || !author || !description) {
      alert("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    const generatedSlug = slug || generateSlug(title);
    const blogUrl = `/blog/${generatedSlug}`;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainText", mainText);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("slug", generatedSlug);
    formData.append("description", description);
    formData.append("keywords", keywords);
    formData.append("author", author);

    console.log("Blog para enviar:", Object.fromEntries(formData));

    setBlogLink(blogUrl);
    setShowModal(true);
    resetForm();
  }

  function resetForm() {
    setTitle("");
    setMainText("");
    setContent("");
    setImage(null);
    setPreview("");
    setSlug("");
    setDescription("");
    setKeywords("");
    setAuthor("");
  }

  function closeModal() {
    setShowModal(false);
  }

  function copyLink() {
    navigator.clipboard.writeText(blogLink);
    alert("Link copiado!");
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-8 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Adicionar Post no Blog
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-black/20 p-4 md:p-6 rounded-xl border border-white/10 backdrop-blur"
      >
        {/* INFORMAÇÕES PRINCIPAIS */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-rose-500">
            Informações Principais
          </h2>

          {/* Foto - Essencial para Google */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Foto do post <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400">
              Imagem otimizada com alt text melhora SEO
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              required
              className="block w-full text-sm"
            />
            {preview && (
              <div className="relative">
                <img
                  src={preview}
                  alt={title || "Preview do post"}
                  className="w-full h-44 md:h-60 object-cover rounded-lg border border-white/20"
                />
                <span className="text-xs text-gray-400 mt-2 block">
                  Alt text: {title || "Imagem do post"}
                </span>
              </div>
            )}
          </div>

          {/* Título H1 - Crítico para SEO */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Título (H1) <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400">
              Este será o H1 da página (essencial para Google)
            </p>
            <input
              type="text"
              placeholder="Digite o título principal do artigo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength="60"
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
            <p className="text-xs text-gray-400">
              {title.length}/60 caracteres (ideal para Google)
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-rose-500">Conteúdo</h2>

          {/* Descrição/Meta Description */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Descrição (Meta Description){" "}
              <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400">
              Aparece nos resultados do Google (120-160 caracteres)
            </p>
            <textarea
              placeholder="Resumo curto que aparecerá no Google..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength="160"
              className="w-full p-2 border rounded min-h-[80px] bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
            <p className="text-xs text-gray-400">
              {description.length}/160 caracteres
            </p>
          </div>

          {/* Texto principal */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Texto Principal (Resumo)
            </label>
            <input
              type="text"
              placeholder="Resumo curto do post..."
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>

          {/* Conteúdo Principal (P) */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Conteúdo Completo <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400">
              Corpo do artigo com parágrafos bem estruturados
            </p>
            <textarea
              placeholder="Escreva o conteúdo completo do artigo..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              minLength="200"
              className="w-full p-3 border rounded min-h-[200px] md:min-h-[300px] bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
            <p className="text-xs text-gray-400">
              Mínimo 200 caracteres para bom SEO
            </p>
          </div>
        </div>

        {/* SEO */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-rose-500">
            SEO e Metadados
          </h2>

          {/* Slug */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">URL Slug</label>
            <p className="text-xs text-gray-400">
              Deixe em branco para gerar automaticamente do título
            </p>
            <input
              type="text"
              placeholder="url-amigavel-do-post"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>

          {/* Palavras-chave */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Palavras-chave (Keywords)
            </label>
            <p className="text-xs text-gray-400">
              Separe por vírgula. Até 5 principais keywords
            </p>
            <input
              type="text"
              placeholder="seo, blog, marketing, conteúdo"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              maxLength="160"
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>

          {/* Autor */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Autor <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400">
              Google reconhece melhor artigos com autor definido
            </p>
            <input
              type="text"
              placeholder="Nome do autor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>
        </div>

        {/* BOTÃO SUBMIT */}
        <button
          type="submit"
          className="w-full bg-rose-600 text-white p-3 rounded-lg font-semibold hover:bg-rose-700 transition flex items-center justify-center gap-2"
        >
          📤 Publicar Post
        </button>
      </form>

      {/* MODAL DE SUCESSO */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Ícone de sucesso */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Conteúdo */}
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Post Publicado com Sucesso!
            </h3>
            <p className="text-center text-gray-600 mb-4">
              Seu artigo foi criado com estrutura SEO otimizada para Google.
            </p>

            {/* Link do post */}
            <div className="bg-gray-100 rounded-lg p-3 mb-6">
              <p className="text-xs text-gray-500 mb-2">Link do post:</p>
              <p className="text-sm font-mono text-gray-900 break-all">
                {blogLink}
              </p>
            </div>

            {/* Botões */}
            <div className="flex gap-3">
              <button
                onClick={copyLink}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Copiar Link
              </button>
              <button
                onClick={closeModal}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Fechar
              </button>
            </div>

            {/* Botão X */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
