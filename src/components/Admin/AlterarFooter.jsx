import React from "react";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarFooter({ footer, onChange }) {
  const handleCompanyChange = (e) => {
    onChange({ ...footer, company: e.target.value });
  };

  const handlePhoneChange = (e) => {
    onChange({ ...footer, phone: e.target.value });
  };

  const handleEmailChange = (e) => {
    onChange({ ...footer, email: e.target.value });
  };

  const handleAddressChange = (e) => {
    onChange({ ...footer, address: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    onChange({ ...footer, description: e.target.value });
  };

  const handleSocialChange = (idx, field, value) => {
    const newSocial = [...footer.socialLinks];
    newSocial[idx][field] = value;
    onChange({ ...footer, socialLinks: newSocial });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
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
            onChange={handleCompanyChange}
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
            onChange={handlePhoneChange}
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
            onChange={handleEmailChange}
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
            onChange={handleAddressChange}
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
          onChange={handleDescriptionChange}
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
            <div key={idx} className="flex flex-col md:flex-row gap-2 md:gap-3">
              <input
                type="text"
                placeholder="Nome"
                value={social.name}
                onChange={(e) =>
                  handleSocialChange(idx, "name", e.target.value)
                }
                className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
              <input
                type="url"
                placeholder="URL"
                value={social.url}
                onChange={(e) => handleSocialChange(idx, "url", e.target.value)}
                className="flex-1 px-3 md:px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-rose-500 focus:outline-none text-sm md:text-base"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
