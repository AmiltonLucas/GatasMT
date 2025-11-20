import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function Filtro({ onFilterChange, onClear }) {
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    city: "",
    neighborhood: "",
    rating: "",
    sortBy: "relevance",
  });

  const [isOpen, setIsOpen] = useState(false);

  const cities = [
    "São Paulo, SP",
    "Rio de Janeiro, RJ",
    "Belo Horizonte, MG",
    "Curitiba, PR",
    "Salvador, BA",
    "Brasília, DF",
    "Fortaleza, CE",
    "Manaus, AM",
    "Recife, PE",
    "Porto Alegre, RS",
    "Belém, PA",
    "Goiânia, GO",
  ];

  const neighborhoods = {
    "São Paulo, SP": [
      "Centro",
      "Vila Madalena",
      "Pinheiros",
      "Consolação",
      "Jardins",
    ],
    "Rio de Janeiro, RJ": [
      "Copacabana",
      "Ipanema",
      "Centro",
      "Barra da Tijuca",
      "Leblon",
    ],
    "Belo Horizonte, MG": [
      "Centro",
      "Savassi",
      "Lourdes",
      "Funcionários",
      "Santo Agostinho",
    ],
    "Curitiba, PR": ["Centro", "Batel", "Água Verde", "Alto da XV", "Portão"],
    "Salvador, BA": [
      "Barra",
      "Centro Histórico",
      "Pelourinho",
      "Pituba",
      "Coroa",
    ],
  };

  const handlePriceMinChange = (e) => {
    const value = e.target.value;
    const next = { ...filters, priceMin: value };
    setFilters(next);
    onFilterChange?.(next);
  };

  const handlePriceMaxChange = (e) => {
    const value = e.target.value;
    const next = { ...filters, priceMax: value };
    setFilters(next);
    onFilterChange?.(next);
  };

  const handleCityChange = (e) => {
    const value = e.target.value;
    const next = { ...filters, city: value, neighborhood: "" };
    setFilters(next);
    onFilterChange?.(next);
  };

  const handleNeighborhoodChange = (e) => {
    const value = e.target.value;
    const next = { ...filters, neighborhood: value };
    setFilters(next);
    onFilterChange?.(next);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    const next = { ...filters, rating: value };
    setFilters(next);
    onFilterChange?.(next);
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    const next = { ...filters, sortBy: value };
    setFilters(next);
    onFilterChange?.(next);
  };

  const handleClearFilters = () => {
    const emptyFilters = {
      priceMin: "",
      priceMax: "",
      city: "",
      neighborhood: "",
      rating: "",
      sortBy: "relevance",
    };
    setFilters(emptyFilters);
    onClear?.();
  };

  const hasActiveFilters = Object.values(filters).some(
    (v) => v && v !== "relevance"
  );

  return (
    <div className="w-full bg-[#0a0a0a] py-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white text-xl font-bold flex items-center gap-2">
            🔍 Filtrar Acompanhantes
            {hasActiveFilters && (
              <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
                Filtros ativos
              </span>
            )}
          </h3>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex items-center gap-2 hover:text-rose-500 transition md:hidden"
          >
            <ChevronDown
              className={`w-5 h-5 transition transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* DESKTOP - Sempre visível */}
        <div className="hidden md:block">
          <div className="flex flex-col-reverse gap-4">
            {/* Preço Mínimo */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Preço Mín.
              </label>
              <input
                type="number"
                placeholder="R$ 0"
                value={filters.priceMin}
                onChange={handlePriceMinChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>

            {/* Preço Máximo */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Preço Máx.
              </label>
              <input
                type="number"
                placeholder="R$ 1000"
                value={filters.priceMax}
                onChange={handlePriceMaxChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>

            {/* Cidade */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Cidade</label>
              <select
                value={filters.city}
                onChange={handleCityChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="">Todas as cidades</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Bairro */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Bairro</label>
              <select
                value={filters.neighborhood}
                onChange={handleNeighborhoodChange}
                disabled={!filters.city}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Todos os bairros</option>
                {filters.city &&
                  (neighborhoods[filters.city] || []).map((neighborhood) => (
                    <option key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </option>
                  ))}
              </select>
            </div>

            {/* Avaliação */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Avaliação Mín.
              </label>
              <select
                value={filters.rating}
                onChange={handleRatingChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="">Todas as avaliações</option>
                <option value="4.5">⭐ 4.5+ </option>
                <option value="4.0">⭐ 4.0+</option>
                <option value="3.5">⭐ 3.5+</option>
                <option value="3.0">⭐ 3.0+</option>
              </select>
            </div>

            {/* Ordenação */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Ordenar por
              </label>
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="relevance">Mais relevantes</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="rating">Melhor avaliados</option>
                <option value="newest">Mais recentes</option>
              </select>
            </div>
          </div>

          {/* Botão Limpar - Desktop */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
            >
              <X className="w-4 h-4" />
              Limpar Filtros
            </button>
          )}
        </div>

        {/* MOBILE - Conversível */}
        {isOpen && (
          <div className="md:hidden flex flex-col-reverse gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
            {/* Preço Mínimo */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Preço Mínimo
              </label>
              <input
                type="number"
                placeholder="R$ 0"
                value={filters.priceMin}
                onChange={handlePriceMinChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>

            {/* Preço Máximo */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Preço Máximo
              </label>
              <input
                type="number"
                placeholder="R$ 1000"
                value={filters.priceMax}
                onChange={handlePriceMaxChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              />
            </div>

            {/* Cidade */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Cidade</label>
              <select
                value={filters.city}
                onChange={handleCityChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="">Todas as cidades</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Bairro */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Bairro</label>
              <select
                value={filters.neighborhood}
                onChange={handleNeighborhoodChange}
                disabled={!filters.city}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Todos os bairros</option>
                {filters.city &&
                  (neighborhoods[filters.city] || []).map((neighborhood) => (
                    <option key={neighborhood} value={neighborhood}>
                      {neighborhood}
                    </option>
                  ))}
              </select>
            </div>

            {/* Avaliação */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Avaliação Mínima
              </label>
              <select
                value={filters.rating}
                onChange={handleRatingChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="">Todas as avaliações</option>
                <option value="4.5">⭐ 4.5+</option>
                <option value="4.0">⭐ 4.0+</option>
                <option value="3.5">⭐ 3.5+</option>
                <option value="3.0">⭐ 3.0+</option>
              </select>
            </div>

            {/* Ordenação */}
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">
                Ordenar por
              </label>
              <select
                value={filters.sortBy}
                onChange={handleSortChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
              >
                <option value="relevance">Mais relevantes</option>
                <option value="price-asc">Menor preço</option>
                <option value="price-desc">Maior preço</option>
                <option value="rating">Melhor avaliados</option>
                <option value="newest">Mais recentes</option>
              </select>
            </div>

            {/* Botões Mobile */}
            <div className="flex gap-2 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition"
              >
                Fechar
              </button>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
                >
                  <X className="w-4 h-4" />
                  Limpar
                </button>
              )}
            </div>
          </div>
        )}

        {/* Resumo dos filtros ativos */}
        {hasActiveFilters && (
          <div className="mt-4 p-3 bg-rose-600/10 border border-rose-600/30 rounded-lg">
            <p className="text-white text-sm">
              <strong>Filtros aplicados:</strong>{" "}
              {[
                filters.priceMin &&
                  `Preço: R$ ${filters.priceMin} - R$ ${
                    filters.priceMax || "∞"
                  }`,
                filters.city && `Cidade: ${filters.city}`,
                filters.neighborhood && `Bairro: ${filters.neighborhood}`,
                filters.rating && `Avaliação: ${filters.rating}+`,
              ]
                .filter(Boolean)
                .join(" • ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
