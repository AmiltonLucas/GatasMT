import React from "react";

const COLORS = {
  muted: "text-white/80",
};

export default function AlterarAcompanhantes({ acompanhantes, onChange }) {
  const handleTitleChange = (e) => {
    onChange({ ...acompanhantes, title: e.target.value });
  };

  const handleItemsPerPageChange = (e) => {
    onChange({ ...acompanhantes, itemsPerPage: parseInt(e.target.value) });
  };

  const handleGridColumnsChange = (e) => {
    onChange({ ...acompanhantes, gridColumns: parseInt(e.target.value) });
  };

  const handleEnableFiltersChange = (e) => {
    onChange({ ...acompanhantes, enableFilters: e.target.checked });
  };

  const handleEnableRatingChange = (e) => {
    onChange({ ...acompanhantes, enableRating: e.target.checked });
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
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
          onChange={handleTitleChange}
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
            onChange={handleItemsPerPageChange}
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
            onChange={handleGridColumnsChange}
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
            onChange={handleEnableFiltersChange}
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
            onChange={handleEnableRatingChange}
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
  );
}
