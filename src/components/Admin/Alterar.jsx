import React, { useState, useEffect } from "react";
import { FaSave, FaTimes, FaCheck } from "react-icons/fa";
import AlterarNavbar from "./AlterarNavbar";
import AlterarHero from "./AlterarHero";
import AlterarFooter from "./AlterarFooter";
import AlterarContato from "./AlterarContato";
import AlterarBlog from "./AlterarBlog";
import AlterarAcompanhantes from "./AlterarAcompanhantes";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  card: "bg-slate-800",
  title: "text-white",
  muted: "text-white/80",
  accent: "bg-rose-600",
  accentHover: "hover:bg-rose-700",
};

export default function Alterar() {
  const [activeTab, setActiveTab] = useState("navbar");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Navbar settings
  const [navbar, setNavbar] = useState({
    logo: "Gatas-MT",
    // opcional: url da imagem do logo
    logoImage: "",
    // layout selecionado: layout-1 | layout-2 | layout-3 | layout-4
    layout: "layout-1",
    links: [
      { label: "Home", href: "/" },
      { label: "Acompanhantes", href: "/acompanhantes" },
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
    ],
    buttonText: "Login",
    buttonHref: "/login",
  });

  // Hero settings
  const [hero, setHero] = useState({
    title: "Encontre Sua Acompanhante Ideal",
    subtitle: "Catálogo completo de profissionais qualificadas",
    cta: "Explorar Acompanhantes",
    ctaHref: "/acompanhantes",
  });

  // Footer settings
  const [footer, setFooter] = useState({
    company: "Gatas-MT",
    description: "Plataforma segura e confiável para encontrar acompanhantes",
    phone: "+55 11 99999-9999",
    email: "contato@gatas-mt.com",
    address: "São Paulo, SP - Brasil",
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "WhatsApp", url: "https://wa.me" },
    ],
  });

  // Contato form settings
  const [contato, setContato] = useState({
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

  // Blog settings
  const [blog, setBlog] = useState({
    title: "Blog Gatas-MT",
    subtitle: "Dicas, notícias e conteúdo exclusivo",
    postsPerPage: 6,
    enableComments: true,
  });

  // Acompanhantes settings
  const [acompanhantes, setAcompanhantes] = useState({
    title: "Nossas Acompanhantes",
    itemsPerPage: 12,
    gridColumns: 4,
    enableFilters: true,
    enableRating: true,
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("siteSettings");
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.navbar) setNavbar(data.navbar);
      if (data.hero) setHero(data.hero);
      if (data.footer) setFooter(data.footer);
      if (data.blog) setBlog(data.blog);
      if (data.acompanhantes) setAcompanhantes(data.acompanhantes);
      if (data.contato) setContato(data.contato);
    }
  }, []);

  // Save all settings
  const handleSave = () => {
    const allSettings = {
      navbar,
      hero,
      footer,
      blog,
      acompanhantes,
      contato,
    };
    localStorage.setItem("siteSettings", JSON.stringify(allSettings));
    setModalMessage("Configurações salvas com sucesso!");
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  // Reset to defaults
  const handleReset = () => {
    if (confirm("Tem certeza que deseja resetar todas as configurações?")) {
      localStorage.removeItem("siteSettings");
      window.location.reload();
    }
  };

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheck className="text-green-600 text-2xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sucesso!</h2>
        <p className="text-gray-600">{modalMessage}</p>
      </div>
    </div>
  );

  return (
    <div className={`${COLORS.bg} h-full w-full py-6 md:py-8 px-4 md:px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className={`text-2xl md:text-4xl font-bold ${COLORS.title}`}>
            Alterar Configurações
          </h1>
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <button
              onClick={handleSave}
              className={`flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 ${COLORS.accent} ${COLORS.accentHover} text-white font-bold rounded-lg transition text-sm md:text-base`}
            >
              <FaSave /> <span className="hidden sm:inline">Salvar Tudo</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition text-sm md:text-base"
            >
              <FaTimes /> <span className="hidden sm:inline">Resetar</span>
            </button>
          </div>
        </div>

        {/* Tabs - Responsive */}
        <div className="flex gap-2 md:gap-4 mb-8 overflow-x-auto pb-2 md:pb-4 scrollbar-hide">
          {[
            { id: "navbar", label: "Navbar" },
            { id: "hero", label: "Hero" },
            { id: "footer", label: "Footer" },
            { id: "contato", label: "Contato" },
            { id: "blog", label: "Blog" },
            { id: "acompanhantes", label: "Acompanhantes" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 md:px-6 py-2 md:py-3 font-bold rounded-lg transition whitespace-nowrap text-sm md:text-base ${
                activeTab === tab.id
                  ? `${COLORS.accent} text-white`
                  : `${COLORS.card} ${COLORS.title} hover:bg-slate-700`
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`${COLORS.card} rounded-2xl p-4 md:p-8 shadow-lg`}>
          {activeTab === "navbar" && (
            <AlterarNavbar navbar={navbar} onChange={setNavbar} />
          )}
          {activeTab === "hero" && (
            <AlterarHero hero={hero} onChange={setHero} />
          )}
          {activeTab === "footer" && (
            <AlterarFooter footer={footer} onChange={setFooter} />
          )}
          {activeTab === "contato" && (
            <AlterarContato contato={contato} onChange={setContato} />
          )}
          {activeTab === "blog" && (
            <AlterarBlog blog={blog} onChange={setBlog} />
          )}
          {activeTab === "acompanhantes" && (
            <AlterarAcompanhantes
              acompanhantes={acompanhantes}
              onChange={setAcompanhantes}
            />
          )}
        </div>
      </div>

      {showModal && <SuccessModal />}
    </div>
  );
}
