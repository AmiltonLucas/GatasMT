import { useState } from "react";
import React from "react";

export default function AdminBlogCreate() {
  const [title, setTitle] = useState("");
  const [mainText, setMainText] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainText", mainText);
    formData.append("content", content);
    formData.append("image", image);

    alert("Blog enviado!");
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
        {/* GRID RESPONSIVO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Foto */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm md:text-base font-medium">
              Foto do post
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="block w-full text-sm"
            />

            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-full h-44 md:h-60 object-cover rounded-lg border border-white/20"
              />
            )}
          </div>

          {/* Título */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">Título</label>
            <input
              type="text"
              placeholder="Digite o título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>

          {/* Texto principal */}
          <div className="space-y-2">
            <label className="text-sm md:text-base font-medium">
              Texto principal
            </label>
            <input
              type="text"
              placeholder="Resumo curto do post..."
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
              className="w-full p-2 border rounded bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>

          {/* Conteúdo */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm md:text-base font-medium">Conteúdo</label>
            <textarea
              placeholder="Escreva o conteúdo completo..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border rounded min-h-[150px] md:min-h-[200px] bg-white/10 backdrop-blur text-white placeholder-gray-300"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-600 text-white p-3 rounded-lg font-semibold hover:bg-rose-700 transition"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}
