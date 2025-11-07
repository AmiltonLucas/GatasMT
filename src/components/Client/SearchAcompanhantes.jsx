import React, { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const COLORS = {
  // dark theme - texts should be white
  bg: "bg-slate-900",
  pageBg: "bg-[#0a0a0a]",
  title: "text-white",
  muted: "text-white/80",
  accent: "bg-rose-500",
  accentText: "text-white",
  cardBg: "bg-slate-800",
};

const SAMPLE = [
  {
    state: "Cuiabá",
    cities: [
      "Centro Norte",
      "Centro Sul",
      "Goiabeiras",
      "Morada do Ouro",
      "Jardim das Américas",
      "CPA I a IV",
      "Pedra 90",
      "Santa Rosa",
      "Jardim Cuiabá",
      "Jardim Imperial",
    ],
  },
  {
    state: "Várzea Grande",
    cities: [
      "Cristo Rei",
      "Jardim Aeroporto",
      "Capela do Piçarrão",
      "Mapim",
      "Marajoara",
      "Manga",
      "Jardim Glória",
      "Alameda",
    ],
  },
  {
    state: "Rondonópolis",
    cities: [
      "Centro",
      "Jardim Atlântico",
      "Vila Operária",
      "Santa Cruz",
      "Jardim Ipanema",
      "Sagrada Família",
      "Cidade Alta",
      "Jardim Liberdade",
    ],
  },
  {
    state: "Sorriso",
    cities: [
      "Centro",
      "Rota do Sol",
      "Jardim Bela Vista",
      "Jardim Amazônia",
      "Jardim Itália",
      "Mário Raiter",
      "São Domingos",
      "Novos Campos",
    ],
  },
  {
    state: "Lucas do Rio Verde",
    cities: [
      "Centro",
      "Parque das Américas",
      "Rio Verde",
      "Jardim Primaveras",
      "Menino Deus",
      "Morada do Sol",
      "Jardim das Palmeiras",
      "Bandeirantes",
    ],
  },
];

export default function SearchAcompanhantes({ data = SAMPLE, onSearch }) {
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [query, setQuery] = useState("");

  const states = useMemo(() => data.map((d) => d.state), [data]);
  const citiesForState = useMemo(() => {
    const found = data.find((d) => d.state === stateSelected);
    return found ? found.cities : [];
  }, [data, stateSelected]);

  function handleSearch(e) {
    e?.preventDefault();
    const payload = {
      state: stateSelected || null,
      city: citySelected || null,
      q: query || null,
    };
    if (onSearch) onSearch(payload);
    else console.log("Search payload", payload);
  }

  function pickCity(state, city) {
    setStateSelected(state);
    setCitySelected(city);
    setQuery("");
  }

  return (
    <section className={`${COLORS.pageBg} py-10 mt-10`}>
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className={`text-2xl font-bold mb-4 ${COLORS.title}`}>
          Buscar acompanhantes por Cidades
        </h2>

        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-start gap-4 mb-6"
        >
          <div className="flex-1 w-full">
            <label className="sr-only" htmlFor="search-query">
              Pesquisar
            </label>
            <div className="relative">
              <input
                id="search-query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar por nome, serviço ou cidade..."
                className={`w-full rounded-full border ${
                  COLORS.inputBorder || "border-slate-700"
                } bg-slate-800 ${
                  COLORS.title
                } placeholder-slate-500 px-4 py-3 focus:outline-none`}
              />
              <button
                type="submit"
                aria-label="Pesquisar"
                className="absolute right-1 top-1/2 -translate-y-1/2 mr-1"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${COLORS.accent} ${COLORS.accentText} shadow`}
                >
                  <SearchIcon className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-3 items-center flex-col md:flex-row w-full md:w-auto">
            <select
              value={stateSelected}
              onChange={(e) => {
                setStateSelected(e.target.value);
                setCitySelected("");
              }}
              className={`rounded-full border ${
                COLORS.inputBorder || "border-slate-700"
              } px-4 py-3 bg-slate-800 ${COLORS.title}`}
            >
              <option value="">Cidade</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <select
              value={citySelected}
              onChange={(e) => setCitySelected(e.target.value)}
              className={`rounded-full border ${
                COLORS.inputBorder || "border-slate-700"
              } px-4 py-3 bg-slate-800 ${COLORS.title}`}
              disabled={!stateSelected}
            >
              <option value="">Bairro</option>
              {citiesForState.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* States grid */}
          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-3 ${COLORS.title}`}>Cidades</h3>
            <div className="grid grid-cols-2 gap-3">
              {data.map((d) => (
                <button
                  key={d.state}
                  onClick={() => setStateSelected(d.state)}
                  className={`text-left p-3 rounded-lg border text-white ${
                    COLORS.inputBorder || "border-slate-700"
                  } ${
                    stateSelected === d.state
                      ? "shadow-md bg-rose-900 text-rose-200"
                      : "bg-slate-800"
                  } transition`}
                >
                  <div className="font-semibold">{d.state}</div>
                  <div className={`text-xs ${COLORS.muted} mt-1`}>
                    {d.cities.length} Bairros
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cities grid */}
          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-3 ${COLORS.title}`}>Bairros</h3>
            {!stateSelected ? (
              <div className={`text-sm ${COLORS.muted}`}>
                Selecione uma cidade para ver os bairros
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {citiesForState.map((c) => (
                  <button
                    key={c}
                    onClick={() => pickCity(stateSelected, c)}
                    className={`text-left p-3 rounded-lg border text-white ${
                      COLORS.inputBorder || "border-slate-700"
                    } ${
                      citySelected === c
                        ? "shadow-md bg-rose-900 text-rose-200"
                        : "bg-slate-800"
                    } transition`}
                  >
                    <div className="font-medium">{c}</div>
                    <div className={`text-xs ${COLORS.muted} mt-1`}>
                      Ver acompanhantes
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick picks / Popular areas */}
          <div className="md:col-span-1">
            <h3 className={`font-semibold mb-3 ${COLORS.title}`}>
              Áreas populares
            </h3>
            {/* limitar altura e permitir scroll aqui para não alongar demais a página */}
            <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2 scroll-smooth">
              {data
                .flatMap((d) =>
                  d.cities.slice(0, 2).map((c) => ({ state: d.state, city: c }))
                )
                .map((item, idx) => (
                  <button
                    key={`${item.state}-${item.city}-${idx}`}
                    onClick={() => pickCity(item.state, item.city)}
                    className="text-left p-3 rounded-lg bg-slate-800 border border-slate-700 hover:shadow-md transition"
                  >
                    <div className={`font-medium ${COLORS.title}`}>
                      {item.city}
                    </div>
                    <div className={`text-xs ${COLORS.muted}`}>
                      {item.state}
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className={`text-sm ${COLORS.title}`}>Filtro selecionado:</div>
          <div className="mt-2 flex flex-col md:flex-row w-full md:w-auto items-center gap-3">
            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-white">
              Cidade:{" "}
              <strong className={`ml-2 ${COLORS.title}`}>
                {stateSelected || "Todos"}
              </strong>
            </div>
            <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-white">
              Bairro:{" "}
              <strong className={`ml-2 ${COLORS.title}`}>
                {citySelected || "Todas"}
              </strong>
            </div>
            <button
              onClick={handleSearch}
              className={`ml-3 px-4 py-2 rounded-full cursor-pointer ${COLORS.accent} ${COLORS.accentText} font-semibold`}
              href="/acompanhantes-?"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
