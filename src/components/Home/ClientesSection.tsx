import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const clients = [
  {
    id: "01",
    name: "MC Daniel",
    image: "/photos/mc-daniel.png",
    release:
      "MC Daniel é um dos grandes nomes do funk nacional, acumulando milhões de ouvintes nas plataformas digitais.",
  },
  {
    id: "02",
    name: "Christian Figueiredo",
    image: "/photos/chris-figueredo.png",
    release:
      "Christian Figueiredo é influenciador e empresário, pioneiro no YouTube brasileiro.",
  },
  {
    id: "03",
    name: "Caio Cabral",
    image: "/photos/caio.png",
    release:
      "Caio Cabral é criador de conteúdo e estrategista digital com forte presença jovem.",
  },
];

export default function ClientsSmooth() {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    setWidth(track.scrollWidth - track.offsetWidth);
  }, []);

  const snapToNearest = () => {
    const slideWidth = window.innerWidth;
    const current = x.get();
    const snap = Math.round(current / -slideWidth) * -slideWidth;

    animate(x, snap, {
      type: "spring",
      stiffness: 120,
      damping: 20,
    });
  };

  return (
    <section 
    id='clientes'
    className="relative h-[640px] w-full bg-[#131313] text-white overflow-hidden">
      <motion.div
        ref={trackRef}
        drag="x"
        style={{ x }}
        dragConstraints={{ left: -width, right: 0 }}
        dragElastic={0.05}
        dragMomentum={true}
        onDragEnd={snapToNearest}
        className="flex h-full cursor-grab active:cursor-grabbing"
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative min-w-full h-full flex items-center justify-center"
          >
            {/* TEXT */}
            <div className="relative z-20 max-w-xl px-10 flex-col gap-2 flex justify-end items-end text-end">
              <span className="text-white text-md tracking-tight font-[BasicCommercialBold]">
                {client.id}
              </span>

              <div className="w-10 h-[2px] bg-white " />

              <h2 className="text-2xl md:text-6xl font-[BasicCommercialBold] tracking-tight">
                {client.name}
              </h2>

              <p className="text-white text-md leading-[20px] tracking-tight font-[BasicCommercialRoman]">
                {client.release}
              </p>
            </div>

            {/* IMAGE */}
            <div className="absolute bottom-0 right-20 h-[80vh] pointer-events-none">
              <img
                src={client.image}
                alt={client.name}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* DRAG PROGRESS BAR */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[60%] max-w-2xl">
        <div className="relative h-[2px] bg-white/20 rounded-full overflow-hidden">
          <motion.div
            style={{
              width: `${100 / clients.length}%`,
              x: x,
            }}
            className="h-full bg-white rounded-full"
          />
        </div>

        <div className="text-center mt-4 text-xs tracking-tight font-[BasicCommercialBold] text-white/50">
          ARRASTE
        </div>
      </div>
    </section>
  );
}