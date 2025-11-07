import React, { useEffect, useRef, useState } from "react";
import Mulher from "../../assets/Mulher.png";
import Mulher2 from "../../assets/Mulher2.png";
import Mulher3 from "../../assets/Mulher3.png";
import Mulher4 from "../../assets/Mulher4.png";
import Mulher5 from "../../assets/Mulher5.png";
import Mulher6 from "../../assets/Mulher6.png";
import Mulher7 from "../../assets/Mulher7.png";

const SAMPLE = [Mulher, Mulher2, Mulher3, Mulher4, Mulher5, Mulher6, Mulher7];

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

  return (
    <section className="py-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          Acompanhantes em destaque
        </h2>

        {/* Mobile: single photo rotator */}
        <div className="md:hidden">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <img
              src={getSrc(items[mobileIndex])}
              alt={`Destaque ${mobileIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
            {/* Optional overlay with name or CTA */}
            <div className="absolute bottom-3 left-3 bg-black/40 text-white px-3 py-1 rounded text-sm">
              Destaque {mobileIndex + 1}
            </div>
          </div>
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="w-full text-center py-3 text-white font-semibold">
                    Destaque {i + 1}
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
