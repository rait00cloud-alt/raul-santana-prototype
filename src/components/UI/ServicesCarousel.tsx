"use client";

import { useRef } from "react";

const services = [
  {
    id: 1,
    title: "Avaliação Psicológica Adulto",
    text: "Processo completo de avaliação para compreender aspectos emocionais, cognitivos e comportamentais.",
    image: "/photos/04.jpg",
    slug: "avaliacao-psicologica-adulto"
  },
  {
    id: 2,
    title: "Avaliação Psicológica Infantil",
    text: "Avaliação especializada para crianças, identificando necessidades e potencialidades do desenvolvimento.",
    image: "/photos/02.jpg",
    slug: "avaliacao-psicologica-infantil"
  },
  {
    id: 3,
    title: "Orientação a Pais",
    text: "Suporte e orientação para pais no desenvolvimento saudável e emocional dos filhos.",
    image: "/photos/01.jpg",
    slug: "orientacao-a-pais"
  },
  {
    id: 4,
    title: "Atendimento de Brasileiros no Exterior",
    text: "Atendimento online especializado para brasileiros que vivem fora do país.",
    image: "/photos/03.jpg",
    slug: "atendimento-brasileiros-exterior"
  }
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full py-16 px-8 md:px-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-[BrandonBold] text-[#d7a21e] mb-8">
          Serviços
        </h2>

        <div className="relative">
          {/* Seta Esquerda */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-16 z-10 border-1 border-[#d7a21e] backdrop-blur-xs p-3 rounded-full shadow-lg transition-all"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-[#5a4a3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Container de Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8.5 sm:px-0 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
              >
                {/* Favicon no topo direito */}
                <div className="relative h-48 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src="/logo/favicon-instituto.png"
                    alt="favicon"
                    className="absolute top-3 right-3 w-6 h-6"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <h3 className="text-xl font-[BrandonBold] text-[#5a4a3a] min-h-[56px]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6a5a4a] font-[BrandonRegular] leading-relaxed min-h-[80px]">
                    {service.text}
                  </p>
                  <a
                    href={`/servicos/${service.slug}`}
                    className="mt-auto px-4 py-2 bg-[#d7a21e] hover:bg-[#c89219] text-white rounded-full text-sm font-[BrandonMedium] transition-colors text-center"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Seta Direita */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-16 z-10 border-1 border-[#d7a21e] backdrop-blur-xs p-3 rounded-full shadow-lg transition-all"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6 text-[#5a4a3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Botão Veja Mais */}
        <div className="flex justify-center mt-12">
          <a
            href="/servicos"
            className="px-8 py-3 bg-[#d7931e] hover:bg-[#4a3a2a] text-white rounded-full font-[BrandonMedium] transition-colors"
          >
            Veja Mais Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
