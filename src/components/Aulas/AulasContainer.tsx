"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function CarouselSection({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string; video: string }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="w-full flex flex-col gap-6 py-8 px-8 md:px-32">
      <h2 className="text-3xl font-[AppliedBold]">{title}.</h2>

      {/* Carousel */}
      <div className="overflow-hidden sm:overflow-visible" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((p, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="relative min-w-[280px] sm:min-w-[340px] md:min-w-[380px] rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="aspect-[3/4] w-full bg-black max-w-[360px] rounded-2xl relative">
                <motion.video
                  src={p.video}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                />

                {/* Título */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.1 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <h3 className="text-lg font-[AppliedBold] text-white">{p.title}</h3>
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end rounded-2xl"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.button
                    className="w-14 h-14 flex items-center justify-center bg-black/40 rounded-full shadow-lg hover:scale-110 transition self-center mb-auto mt-auto"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play className="w-6 h-6 text-white fill-white" />
                  </motion.button>

                  <div className="relative w-full">
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl" />
                    <motion.div
                      className="relative p-4 text-white text-sm"
                      variants={{
                        rest: { y: 32, opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                      <p className="font-[AppliedRegular]">{p.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-4">
        <div className="flex flex-row">
          <h2 className="text-xl font-[AppliedBold]">Ver mais.</h2>
        </div>
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ExtraSections() {
  const sampleVideo =
    "https://res.cloudinary.com/dilkmyjri/video/upload/v1758974756/marina-sena-live-natasha_oe3fyp.mp4";

  const ebooks = [
    {
      title: "E-book 1",
      description: "Um guia completo para iniciantes.",
      video: sampleVideo,
    },
    {
      title: "E-book 2",
      description: "Aprenda estratégias avançadas.",
      video: sampleVideo,
    },
  ];

  const cursos = [
    {
      title: "Curso 1",
      description: "Domine o básico em poucos dias.",
      video: sampleVideo,
    },
    {
      title: "Curso 2",
      description: "Curso completo com práticas reais.",
      video: sampleVideo,
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <CarouselSection title="E-books" items={ebooks} />
      <CarouselSection title="Cursos" items={cursos} />
    </div>
  );
}
