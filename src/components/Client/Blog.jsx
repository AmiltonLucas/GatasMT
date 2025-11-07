import React from "react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";


export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Como escolher o melhor serviço no seu site",
      description:
        "Veja dicas valiosas para analisar perfis, entender avaliações e tomar a melhor decisão.",
      image: Mulher,
      date: "12 Nov 2025",
    },
    {
      id: 2,
      title: "Segurança: como navegar e contratar com confiança",
      description:
        "Práticas essenciais para manter sua privacidade e segurança enquanto usa a plataforma.",
      image: Mulher2,
      date: "08 Nov 2025",
    },
    {
      id: 3,
      title: "Tendências do mercado adulto em 2025",
      description:
        "Entenda o que está mudando, quais serviços estão crescendo e o que os clientes mais procuram.",
      image: Mulher3,
      date: "03 Nov 2025",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Blog</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col gap-3">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-700 text-sm">{post.description}</p>
              <button className="mt-3 w-fit text-rose-600 font-semibold hover:underline">
                Ler mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
