import React from "react";

export default function Contatenos() {
  return (
    <>
      <section className="w-full bg-[#0a0a0a] py-16 px-4 md:px-10">
        {/* Overlay escuro */}
        <div className="w-full h-full border-2 border-rose-500 py-14 px-4 rounded-xl">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">
            Está pronto para se juntar a nós? Contate-nos!
          </h2>

          {/* Formulário */}
          <form className="flex flex-col lg:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Nome"
              className="w-full md:w-auto flex-1 bg-white text-black px-4 py-3 rounded-lg shadow-md outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full md:w-auto flex-1 bg-white text-black px-4 py-3 rounded-lg shadow-md outline-none"
            />
            <input
              type="text"
              placeholder="WhatsApp"
              className="w-full md:w-auto flex-1 bg-white text-black px-4 py-3 rounded-lg shadow-md outline-none"
            />
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300 cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
