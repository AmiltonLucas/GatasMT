import { useState } from "react";
import React from "react";

export default function Avaliacoes() {
  const [reviews] = useState([
    {
      nome: "Ana Silva",
      idade: 23,
      endereco: "Fortaleza - CE",
      nota: 4.8,
      video: ".",
    },
    {
      nome: "Bruna Costa",
      idade: 27,
      endereco: "Natal - RN",
      nota: 4.9,
      video: ".",
    },
  ]);

const COLORS = {
  bg: "#0a0a0a",
  panelBg: "bg-zinc-900",
  text: "text-gray-100",
  accent: "text-rose-500",
  accentBtn: "border border-rose-500 text-rose-500",
  overlay: "bg-black/50",
  itemHover: "hover:bg-zinc-900",
};

  return (
    <div className="w-full bg-[#0a0a0a] py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Avaliações das Clientes
      </h2>

      <div className="grid  lg:grid-cols-2 gap-10">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-md"
          >
            {/* Vídeo à esquerda */}
            <div className="w-full h-full flex items-center justify-center">
              <video
                src={item.video}
                controls
                className="w-full h-64 object-cover rounded-xl shadow"
              />
            </div>

            {/* Informações à direita */}
            <div className="flex flex-col justify-center gap-3">
              <h3 className="text-2xl font-semibold text-rose-500">{item.nome}</h3>
              <p className="text-lg">Idade: {item.idade}</p>
              <p className="text-lg">Endereço: {item.endereco}</p>
              <p className="text-lg font-bold">Nota: ⭐ {item.nota}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
