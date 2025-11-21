import React from "react";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarBlog({ blog, onChange }) {
  const handleTitleChange = (e) => {
    onChange({ ...blog, title: e.target.value });
  };

  const handleSubtitleChange = (e) => {
    onChange({ ...blog, subtitle: e.target.value });
  };

  const handlePostsPerPageChange = (e) => {
    onChange({ ...blog, postsPerPage: parseInt(e.target.value) });
  };

  const handleEnableCommentsChange = (e) => {
    onChange({ ...blog, enableComments: e.target.checked });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        Configurações do Blog
      </h2>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Título da Seção
        </label>
        <input
          type="text"
          value={blog.title}
          onChange={handleTitleChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Subtítulo
        </label>
        <input
          type="text"
          value={blog.subtitle}
          onChange={handleSubtitleChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Posts por Página
        </label>
        <input
          type="number"
          value={blog.postsPerPage}
          onChange={handlePostsPerPageChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="enableComments"
          checked={blog.enableComments}
          onChange={handleEnableCommentsChange}
          className="w-5 h-5 cursor-pointer"
        />
        <label
          htmlFor="enableComments"
          className={`${COLORS.muted} font-semibold cursor-pointer text-sm md:text-base`}
        >
          Ativar Comentários
        </label>
      </div>
    </div>
  );
}
