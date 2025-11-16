import React, { useState, useRef } from "react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";

export default function BlogSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % posts.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length);
    }
  };

  return (
    <section className="w-full bg-[#0a0a0a] py-16 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Blog</h2>

      {/* Desktop - Grid */}
      <div className="hidden md:flex justify-center">
        <div className="grid grid-cols-3 gap-8 max-w-7xl w-full">
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
      </div>

      {/* Mobile - Carousel com Swipe */}
      <div
        className="md:hidden overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 transition-all duration-500 ease-out px-2"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% - ${
              currentSlide * 8
            }px))`,
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="min-w-full bg-white rounded-2xl shadow overflow-hidden"
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
      </div>

      {/* Indicadores de slide em mobile */}
      <div className="md:hidden flex justify-center gap-2 mt-6">
        {posts.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? "bg-rose-600 w-6" : "bg-gray-400 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
