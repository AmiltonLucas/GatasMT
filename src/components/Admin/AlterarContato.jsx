import React from "react";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarContato({ contato, onChange }) {
  const handleSectionTitleChange = (e) => {
    onChange({ ...contato, sectionTitle: e.target.value });
  };

  const handleNamePlaceholderChange = (e) => {
    onChange({ ...contato, namePlaceholder: e.target.value });
  };

  const handleEmailPlaceholderChange = (e) => {
    onChange({ ...contato, emailPlaceholder: e.target.value });
  };

  const handleWhatsappPlaceholderChange = (e) => {
    onChange({ ...contato, whatsappPlaceholder: e.target.value });
  };

  const handleSubmitButtonTextChange = (e) => {
    onChange({ ...contato, submitButtonText: e.target.value });
  };

  const handleSuccessTitleChange = (e) => {
    onChange({ ...contato, successTitle: e.target.value });
  };

  const handleSuccessButtonTextChange = (e) => {
    onChange({ ...contato, successButtonText: e.target.value });
  };

  const handleSuccessMessageChange = (e) => {
    onChange({ ...contato, successMessage: e.target.value });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
        Formulário de Contato
      </h2>

      <div>
        <label
          className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
        >
          Título da Seção
        </label>
        <input
          type="text"
          value={contato.sectionTitle}
          onChange={handleSectionTitleChange}
          className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label
            className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
          >
            Placeholder Nome
          </label>
          <input
            type="text"
            value={contato.namePlaceholder}
            onChange={handleNamePlaceholderChange}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>
        <div>
          <label
            className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
          >
            Placeholder E-mail
          </label>
          <input
            type="text"
            value={contato.emailPlaceholder}
            onChange={handleEmailPlaceholderChange}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label
            className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
          >
            Placeholder WhatsApp
          </label>
          <input
            type="text"
            value={contato.whatsappPlaceholder}
            onChange={handleWhatsappPlaceholderChange}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label
            className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
          >
            Botão de Envio
          </label>
          <input
            type="text"
            value={contato.submitButtonText}
            onChange={handleSubmitButtonTextChange}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div>
          <label
            className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
          >
            Título de Sucesso
          </label>
          <input
            type="text"
            value={contato.successTitle}
            onChange={handleSuccessTitleChange}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div>
          <label
            className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
          >
            Botão do Modal
          </label>
          <input
            type="text"
            value={contato.successButtonText}
            onChange={handleSuccessButtonTextChange}
            className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
          />
        </div>
      </div>

      <div className="mt-3">
        <label
          className={`${COLORS.muted} font-semibold mb-2 block text-sm md:text-base`}
        >
          Mensagem de Sucesso
        </label>
        <textarea
          value={contato.successMessage}
          onChange={handleSuccessMessageChange}
          rows="3"
          className="w-full px-3 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none resize-none text-sm md:text-base"
        />
      </div>
    </div>
  );
}
