import React, { useEffect, useRef, useState } from "react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";
import Mulher4 from "../../assets/Mulher4.png";
import Mulher5 from "../../assets/Mulher5.png";
import Mulher6 from "../../assets/Mulher6.png";
import Mulher7 from "../../assets/Mulher7.png";
import { FaLink, FaWhatsapp } from "react-icons/fa";

const SAMPLE = [
  {
    img: Mulher,
    name: "Ana",
    profile: "/perfil/ana",
    whatsapp: "5511999999999",
  },
  {
    img: Mulher2,
    name: "Bia",
    profile: "/perfil/bia",
    whatsapp: "5511988888888",
  },
  {
    img: Mulher3,
    name: "Camila",
    profile: "/perfil/camila",
    whatsapp: "5511977777777",
  },
  {
    img: Mulher4,
    name: "Duda",
    profile: "/perfil/duda",
    whatsapp: "5511966666666",
  },
  {
    img: Mulher5,
    name: "Evelyn",
    profile: "/perfil/evelyn",
    whatsapp: "5511955555555",
  },
  {
    img: Mulher6,
    name: "Fabia",
    profile: "/perfil/fabia",
    whatsapp: "5511944444444",
  },
  {
    img: Mulher7,
    name: "Gabriela",
    profile: "/perfil/gabriela",
    whatsapp: "5511933333333",
  },
];

export default function FeaturedDestaques({ items = SAMPLE, interval = 5000 }) {
  const slotCount = 5;
  // Initialize slots with first `slotCount` images (indexes into items)
  const [slots, setSlots] = useState(() => {
    const out = [];
    for (let i = 0; i < slotCount; i++) {
      out.push(i % items.length);
    }
    return out;
  });

  // previous index per slot (used for fading)
  const [prev, setPrev] = useState(() => Array(slotCount).fill(null));
  // control showing new image (for CSS transition)
  const [showNew, setShowNew] = useState(() => Array(slotCount).fill(true));

  const nextIndexRef = useRef(slotCount); // next image index to assign
  const currentSlotRef = useRef(0);
  const timersRef = useRef([]);

  // Helper to extract src from item (support string or {img,...})
  const getSrc = (it) => (typeof it === "string" ? it : it?.img || it?.src);

  useEffect(() => {
    // clear timers on unmount
    return () => {
      timersRef.current.forEach((t) => clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (!items || items.length === 0) return;

    // Desktop behavior: every `interval` replace one slot with the next image from the pool
    const tick = () => {
      const slot = currentSlotRef.current;

      setSlots((prevSlots) => {
        const oldIndex = prevSlots[slot];
        const newIndex = nextIndexRef.current % items.length;
        nextIndexRef.current += 1;

        // prepare fade: keep previous image visible, hide new image, then show new
        setPrev((p) => {
          const c = [...p];
          c[slot] = oldIndex;
          return c;
        });

        setShowNew((s) => {
          const c = [...s];
          c[slot] = false; // start hidden
          return c;
        });

        // small delay then show new image to trigger transition
        const revealTimer = setTimeout(() => {
          setShowNew((s) => {
            const c = [...s];
            c[slot] = true;
            return c;
          });
          // after transition duration remove prev image
          const cleanup = setTimeout(() => {
            setPrev((p) => {
              const c = [...p];
              c[slot] = null;
              return c;
            });
          }, 700);
          timersRef.current.push(cleanup);
        }, 40);

        timersRef.current.push(revealTimer);

        const nextSlots = [...prevSlots];
        nextSlots[slot] = newIndex;
        return nextSlots;
      });

      currentSlotRef.current = (slot + 1) % slotCount;
    };

    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  // Mobile: single image rotator
  const [mobileIndex, setMobileIndex] = useState(0);
  useEffect(() => {
    if (!items || items.length === 0) return;
    const id = setInterval(() => {
      setMobileIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  const shareProfile = async (profile, name) => {
    const shareData = {
      title: `Perfil de ${name}`,
      text: `Veja o perfil de ${name}`,
      url: profile,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(profile);
        alert("Link copiado para a área de transferência");
      } else {
        prompt("Copie o link abaixo:", profile);
      }
    } catch (err) {
      // silencioso
    }
  };

  const openWhatsApp = (whatsapp, name) => {
    if (!whatsapp) return;
    const phone = whatsapp.replace(/[^0-9+]/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      `Olá ${name}, encontrei seu perfil no site e gostaria de conversar.`
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Nossas modelos em destaque
        </h2>

        {/* Mobile: single photo rotator */}
        <div className="md:hidden">
          {items[mobileIndex] && (
            <div
              className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() =>
                (window.location.href = items[mobileIndex].profile)
              }
            >
              <img
                src={getSrc(items[mobileIndex])}
                alt={`Destaque ${mobileIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="w-full flex items-center justify-between px-3 py-3 text-white">
                  <div className="text-sm font-semibold">
                    {items[mobileIndex].name}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(
                          items[mobileIndex].whatsapp,
                          items[mobileIndex].name
                        );
                      }}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
                      aria-label="WhatsApp"
                    >
                      {/* simple whatsapp icon*/}
                      <FaWhatsapp className="text-green-500" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareProfile(
                          items[mobileIndex].profile,
                          items[mobileIndex].name
                        );
                      }}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
                      aria-label="Compartilhar perfil"
                    >
                      <FaLink className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop: collage grid (1 large left + 4 à direita em 2x2) */}
        <div
          className="hidden md:grid md:grid-cols-4 gap-4"
          style={{ gridTemplateRows: "repeat(2, 260px)" }}
        >
          {slots.map((slotIdx, i) => {
            // position classes to form the collage: large left + 4 tiles on right
            let posClass = "";
            if (i === 0) posClass = "col-span-2 row-span-2"; // large left
            if (i === 1) posClass = "col-start-3 row-start-1"; // top-right left
            if (i === 2) posClass = "col-start-4 row-start-1"; // top-right right
            if (i === 3) posClass = "col-start-3 row-start-2"; // bottom-right left
            if (i === 4) posClass = "col-start-4 row-start-2"; // bottom-right right

            return (
              <div
                key={i}
                className={`${posClass} relative w-full rounded-lg overflow-hidden`}
              >
                {prev[i] !== null && (
                  <img
                    src={getSrc(items[prev[i]])}
                    alt={`prev-${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      showNew[i] ? "opacity-0" : "opacity-100"
                    }`}
                  />
                )}

                <img
                  src={getSrc(items[slotIdx])}
                  alt={`destaque-${i}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    showNew[i] ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end"
                  onClick={() => {
                    const it = items[slotIdx];
                    if (it && it.profile) window.location.href = it.profile;
                  }}
                >
                  <div className="w-full flex items-center justify-between px-3 py-3 text-white font-semibold">
                    <div>{items[slotIdx]?.name || `Destaque ${i + 1}`}</div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(
                            items[slotIdx]?.whatsapp,
                            items[slotIdx]?.name
                          );
                        }}
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
                        aria-label="WhatsApp"
                      >
                        {/* simple whatsapp icon*/}
                      <FaWhatsapp className="text-green-500" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          shareProfile(
                            items[slotIdx]?.profile,
                            items[slotIdx]?.name
                          );
                        }}
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center"
                        aria-label="Compartilhar perfil"
                      >
                        <FaLink className="text-white"/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
