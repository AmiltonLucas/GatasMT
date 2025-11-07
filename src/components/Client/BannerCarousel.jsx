import React, { useEffect, useRef, useState } from "react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";
import Mulher4 from "../../assets/Mulher4.png";

const SAMPLE = [Mulher, Mulher2, Mulher3, Mulher4, Mulher];

export default function BannerCarousel({ items = SAMPLE, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const id = setInterval(() => {
      if (!pauseRef.current) {
        setIndex((i) => (i + 1) % items.length);
      }
    }, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  const getSrc = (it) => (typeof it === "string" ? it : it?.img || it?.src);

  return (
    <section className="w-full bg-[#0a0a0a]">
      {/* Full-bleed container: remove max-width so banner touches screen edges */}
      <div
        className="relative w-full h-[50vh] overflow-hidden object-cover mt-[6rem]"
        ref={containerRef}
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
      >
        {/* slides container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${items.length * 100}%`,
            transform: `translateX(-${(index * 100) / items.length}%)`,
          }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              {/* full viewport height on md+, shorter on mobile */}
              <img
                src={getSrc(it)}
                alt={`slide-${i}`}
                className="w-full h-64 md:h-screen object-cover"
              />
            </div>
          ))}
        </div>

        {/* controls */}
        <button
          aria-label="Anterior"
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60"
        >
          ‹
        </button>
        <button
          aria-label="Próximo"
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-3 hover:bg-black/60"
        >
          ›
        </button>

        {/* indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
