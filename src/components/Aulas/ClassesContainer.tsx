"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
};

export default function AulasSection() {
  const { t } = useTranslation();

  const mediaItems: MediaItem[] = [
    { type: "image", src: "/photos/class-01.jpg", alt: "Aula 1" },
    { type: "image", src: "/photos/class-03.jpg", alt: "Aula 3" },
    { type: "image", src: "/photos/class-02.PNG", alt: "Aula 2" },
    { type: "image", src: "/photos/class-05.jpg", alt: "Aula 5" },
    { type: "image", src: "/photos/class-04.JPG", alt: "Aula 4" }
   
  ];

  const total = mediaItems.length;
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  /* ---------------- AUTOPLAY ---------------- */
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [autoPlay, total]);

  /* ------------- VIDEO CONTROL -------------- */
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      i === index ? v.play().catch(() => {}) : v.pause();
    });
  }, [index]);

  /* ---------------- NAV --------------------- */
  const prev = () => {
    setAutoPlay(false);
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    setAutoPlay(false);
    setIndex((i) => (i + 1) % total);
  };

  return (
    <section className="w-full min-h-screen bg-black py-8 px-6 md:px-24 flex flex-col gap-8">
      {/* TITLE */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-white font-[AppliedBold] uppercase tracking-tight text-2xl text-center">
          {t("classes.title")}
        </p>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block h-[2px] w-48 bg-white origin-center"
        />
      </div>

      {/* 3 COLUMNS */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1 }}
          className="max-w-lg text-base sm:text-lg  font-[AppliedRegular] tracking-tight text-white z-50"
        >
          <p>{t("classes.text-01")}</p>
        </motion.div>

        {/* CAROUSEL */}
        
      <div
  className="relative z-10 w-[320px] h-[560px] sm:w-[480px] sm:h-[640px]"
  style={{ perspective: "1800px" }}
  onMouseEnter={() => setAutoPlay(false)}
  onMouseLeave={() => setAutoPlay(true)}
>

          <motion.div
            animate={{ rotateY: index * -72 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-full h-full "
            style={{ transformStyle: "preserve-3d" }}
          >
         {mediaItems.map((item, i) => {
  const angle = (360 / total) * i;
  const radius = 420;

  const activeIndex = index % total;
  const isActive = i === activeIndex;

  return (
    <div
      key={i}
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
        backfaceVisibility: "hidden",
        opacity: isActive ? 1 : 0.1,
        transition: "opacity 0.6s ease",
      }}
    >

                  <div className="w-[260px] h-[460px] sm:w-[300px] sm:h-[520px] rounded-3xl overflow-hidden border border-white/25 shadow-2xl ">
                    {item.type === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[i] = el!)}
                        src={item.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* NAV */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition z-20"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition z-20"
          >
            ›
          </button>

          {/* COUNTER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/60 backdrop-blur px-4 py-2 rounded-full">
            {index + 1} / {total}
          </div>
        </div>



        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1 }}
          className="max-w-lg text-base sm:text-lg   font-[AppliedRegular] tracking-tight text-white z-50"
        >
          <p>{t("classes.text-02")}</p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <a
          href="/cursos"
          className="px-10 py-3 bg-white text-black font-[AppliedBold] uppercase tracking-tight rounded-sm border border-white hover:bg-transparent hover:text-white transition"
        >
          {t("see_more")}
        </a>
      </motion.div>
    </section>
  );
}
