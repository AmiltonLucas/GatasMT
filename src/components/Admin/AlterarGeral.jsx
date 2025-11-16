import React, { useState, useEffect } from "react";
import { FaSave, FaTimes, FaCheck } from "react-icons/fa";

const COLORS = {
  bg: "bg-[#0a0a0a]",
  card: "bg-slate-800",
  title: "text-white",
  muted: "text-white/80",
  accent: "bg-rose-600",
  accentHover: "hover:bg-rose-700",
};

export default function AlterarGeral() {
  const [activeTab, setActiveTab] = useState("navbar");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Navbar settings
  const [navbar, setNavbar] = useState({
    logo: "Gatas-MT",
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
    <div
      className={`${COLORS.bg} min-h-screen py-6 md:py-8 px-4 md:px-6 mt-16 md:mt-20`}
    >
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
          {/* Navbar Tab */}
          {activeTab === "navbar" && (
            <div className="space-y-4 md:space-y-6">
              <h2
                className={`text-xl md:text-2xl font-bold ${COLORS.title} mb-4 md:mb-6`}
              >
                Configurações da Navbar
              </h2>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Logo/Nome
                </label>
                <input
                  type="text"
                  value={navbar.logo}
                  onChange={(e) =>
                    setNavbar({ ...navbar, logo: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Texto do Botão
                </label>
                <input
                  type="text"
                  value={navbar.buttonText}
                  onChange={(e) =>
                    setNavbar({ ...navbar, buttonText: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Link do Botão
                </label>
                <input
                  type="text"
                  value={navbar.buttonHref}
                  onChange={(e) =>
                    setNavbar({ ...navbar, buttonHref: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-3 text-sm md:text-base`}
                >
                  Links de Menu
                </label>
                <div className="space-y-2 md:space-y-3">
                  {navbar.links.map((link, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row gap-2 md:gap-3"
                    >
                      <input
                        type="text"
                        placeholder="Rótulo"
                        value={link.label}
                        onChange={(e) => {
                          const newLinks = [...navbar.links];
                          newLinks[idx].label = e.target.value;
                          setNavbar({ ...navbar, links: newLinks });
                        }}
                        className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        value={link.href}
                        onChange={(e) => {
                          const newLinks = [...navbar.links];
                          newLinks[idx].href = e.target.value;
                          setNavbar({ ...navbar, links: newLinks });
                        }}
                        className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Hero Tab */}
          {activeTab === "hero" && (
            <div className="space-y-4 md:space-y-6">
              <h2
                className={`text-xl md:text-2xl font-bold ${COLORS.title} mb-4 md:mb-6`}
              >
                Configurações do Hero
              </h2>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Título
                </label>
                <input
                  type="text"
                  value={hero.title}
                  onChange={(e) => setHero({ ...hero, title: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Subtítulo
                </label>
                <textarea
                  value={hero.subtitle}
                  onChange={(e) =>
                    setHero({ ...hero, subtitle: e.target.value })
                  }
                  rows="3"
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none resize-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Texto do CTA (Call to Action)
                </label>
                <input
                  type="text"
                  value={hero.cta}
                  onChange={(e) => setHero({ ...hero, cta: e.target.value })}
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Link do CTA
                </label>
                <input
                  type="text"
                  value={hero.ctaHref}
                  onChange={(e) =>
                    setHero({ ...hero, ctaHref: e.target.value })
                  }
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>
            </div>
          )}

          {/* Footer Tab */}
          {activeTab === "footer" && (
            <div className="space-y-4 md:space-y-6">
              <h2
                className={`text-xl md:text-2xl font-bold ${COLORS.title} mb-4 md:mb-6`}
              >
                Configurações do Footer
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                  >
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    value={footer.company}
                    onChange={(e) =>
                      setFooter({ ...footer, company: e.target.value })
                    }
                    className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label
                    className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    value={footer.phone}
                    onChange={(e) =>
                      setFooter({ ...footer, phone: e.target.value })
                    }
                    className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label
                    className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={footer.email}
                    onChange={(e) =>
                      setFooter({ ...footer, email: e.target.value })
                    }
                    className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label
                    className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    value={footer.address}
                    onChange={(e) =>
                      setFooter({ ...footer, address: e.target.value })
                    }
                    className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Descrição
                </label>
                <textarea
                  value={footer.description}
                  onChange={(e) =>
                    setFooter({ ...footer, description: e.target.value })
                  }
                  rows="3"
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none resize-none text-sm md:text-base"
                />
              </div>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-3 text-sm md:text-base`}
                >
                  Links Sociais
                </label>
                <div className="space-y-2 md:space-y-3">
                  {footer.socialLinks.map((social, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row gap-2 md:gap-3"
                    >
                      <input
                        type="text"
                        placeholder="Nome"
                        value={social.name}
                        onChange={(e) => {
                          const newSocial = [...footer.socialLinks];
                          newSocial[idx].name = e.target.value;
                          setFooter({ ...footer, socialLinks: newSocial });
                        }}
                        className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                      />
                      <input
                        type="url"
                        placeholder="URL"
                        value={social.url}
                        onChange={(e) => {
                          const newSocial = [...footer.socialLinks];
                          newSocial[idx].url = e.target.value;
                          setFooter({ ...footer, socialLinks: newSocial });
                        }}
                        className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Blog Tab */}
          {activeTab === "blog" && (
            <div className="space-y-4 md:space-y-6">
              <h2
                className={`text-xl md:text-2xl font-bold ${COLORS.title} mb-4 md:mb-6`}
              >
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
                  onChange={(e) => setBlog({ ...blog, title: e.target.value })}
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
                  onChange={(e) =>
                    setBlog({ ...blog, subtitle: e.target.value })
                  }
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
                  onChange={(e) =>
                    setBlog({ ...blog, postsPerPage: parseInt(e.target.value) })
                  }
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="enableComments"
                  checked={blog.enableComments}
                  onChange={(e) =>
                    setBlog({ ...blog, enableComments: e.target.checked })
                  }
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
          )}

          {/* Acompanhantes Tab */}
          {activeTab === "acompanhantes" && (
            <div className="space-y-4 md:space-y-6">
              <h2
                className={`text-xl md:text-2xl font-bold ${COLORS.title} mb-4 md:mb-6`}
              >
                Configurações de Acompanhantes
              </h2>

              <div>
                <label
                  className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                >
                  Título da Seção
                </label>
                <input
                  type="text"
                  value={acompanhantes.title}
                  onChange={(e) =>
                    setAcompanhantes({
                      ...acompanhantes,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label
                    className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                  >
                    Items por Página
                  </label>
                  <input
                    type="number"
                    value={acompanhantes.itemsPerPage}
                    onChange={(e) =>
                      setAcompanhantes({
                        ...acompanhantes,
                        itemsPerPage: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label
                    className={`block ${COLORS.muted} font-semibold mb-2 text-sm md:text-base`}
                  >
                    Colunas no Grid (Desktop)
                  </label>
                  <input
                    type="number"
                    value={acompanhantes.gridColumns}
                    onChange={(e) =>
                      setAcompanhantes({
                        ...acompanhantes,
                        gridColumns: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="enableFilters"
                    checked={acompanhantes.enableFilters}
                    onChange={(e) =>
                      setAcompanhantes({
                        ...acompanhantes,
                        enableFilters: e.target.checked,
                      })
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                  <label
                    htmlFor="enableFilters"
                    className={`${COLORS.muted} font-semibold cursor-pointer text-sm md:text-base`}
                  >
                    Ativar Filtros
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="enableRating"
                    checked={acompanhantes.enableRating}
                    onChange={(e) =>
                      setAcompanhantes({
                        ...acompanhantes,
                        enableRating: e.target.checked,
                      })
                    }
                    className="w-5 h-5 cursor-pointer"
                  />
                  <label
                    htmlFor="enableRating"
                    className={`${COLORS.muted} font-semibold cursor-pointer text-sm md:text-base`}
                  >
                    Ativar Sistema de Avaliação
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && <SuccessModal />}
    </div>
  );
}
