import React, { useState } from "react";
import { X } from "lucide-react";

export default function Contatenos() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  // Load default text/settings from localStorage siteSettings.contato
  const [texts, setTexts] = useState({
    sectionTitle: "Está pronto para se juntar a nós? Contate-nos!",
    namePlaceholder: "Nome",
    emailPlaceholder: "E-mail",
    whatsappPlaceholder: "WhatsApp",
    submitButtonText: "Enviar",
    successTitle: "Enviado com Sucesso!",
    successMessage:
      "Obrigado por entrar em contato. Recebemos suas informações e responderemos em breve.",
    successButtonText: "Fechar",
  });

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("siteSettings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.contato) setTexts((t) => ({ ...t, ...parsed.contato }));
      }
    } catch (err) {
      // ignore
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    setShowModal(true);
    setFormData({ name: "", email: "", whatsapp: "" });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="w-full bg-[#0a0a0a] py-16 px-4 md:px-10">
        {/* Overlay escuro */}
        <div className="w-full h-full border-2 border-rose-500 py-14 px-4 rounded-xl">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
            Está pronto para se juntar a nós? Contate-nos!
          </h2>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row items-center justify-center gap-4 max-w-4xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder={texts.namePlaceholder}
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full md:w-auto flex-1 bg-white text-black px-4 py-3 rounded-lg shadow-md outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder={texts.emailPlaceholder}
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full md:w-auto flex-1 bg-white text-black px-4 py-3 rounded-lg shadow-md outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
            <input
              type="text"
              name="whatsapp"
              placeholder={texts.whatsappPlaceholder}
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="w-full md:w-auto flex-1 bg-white text-black px-4 py-3 rounded-lg shadow-md outline-none focus:ring-2 focus:ring-rose-500 transition"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
            >
              {texts.submitButtonText}
            </button>
          </form>
        </div>
      </section>

      {/* Modal de Sucesso */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
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

            {/* Título e mensagem */}
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
              {texts.successTitle}
            </h3>
            <p className="text-center text-gray-600 mb-8">
              {texts.successMessage}
            </p>

            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              {texts.successButtonText}
            </button>

            {/* Botão X no canto */}
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
    </>
  );
}
