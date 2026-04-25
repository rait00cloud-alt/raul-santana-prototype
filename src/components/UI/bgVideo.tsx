"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type BackgroundVideoProps = {
  desktopSrc?: string;
  mobileSrc?: string;
};

export default function BackgroundVideo({
  desktopSrc = "/videos/instituto-ser-e-sentido.mp4",
  mobileSrc = "/videos/instituto-ser-e-sentido.mp4",
}: BackgroundVideoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [videoSrc, setVideoSrc] = useState(desktopSrc);

  // Detecta mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateSrc = () =>
      setVideoSrc(mediaQuery.matches ? mobileSrc : desktopSrc);

    updateSrc();
    mediaQuery.addEventListener("change", updateSrc);
    return () => mediaQuery.removeEventListener("change", updateSrc);
  }, [desktopSrc, mobileSrc]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Motion simples e quase imperceptível
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[480px] sm:h-[720px] overflow-hidden bg-black"
    >
      {/* VIDEO BACKGROUND */}
      <video
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 flex w-full h-full justify-end items-end sm:justify-start sm:items-end px-8 py-8 md:px-32 md:py-16">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col gap-6 max-w-lg text-white"
        >
          {/* TITLES */}
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-[BrandonBold] tracking-tight text-[#E4D1A1]">
              Instituto de Psicologia Ser e Sentido
            </h1>
            <h2 className="text-base md:text-lg font-[BrandonBold] text-white">
              Clínica de Psicologia
            </h2>
            <h2 className="text-base md:text-lg font-[BrandonBold] text-[#F4E1C1]">
              em Bragança Paulista
            </h2>
          </div>

          {/* RELEASE */}
          <p className="tracking-tight text-sm md:text-xl leading-relaxed font-[BrandonRegular]">
            Aqui, cada conversa é um convite para olhar com gentileza para sua
            história, suas emoções e suas possibilidades de mudança.
          </p>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-2 justify-center items-center sm:justify-start ">
            <a
              href="https://wa.me/5511943860734"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-[#F4E1C1]/50 border backdrop-blur-xs border-white/70 rounded-full hover:bg-[#00FF00]/70 transition-colors"
            >
              <img
                src="/logos/whatsapp.png"
                alt="WhatsApp"
                className="w-4 h-4 invert"
              />
            </a>

            <a
              href="tel:+5511943860734"
              className="flex items-center justify-center p-4 bg-[#F4E1C1]/50 backdrop-blur-xs border border-white/70 rounded-full hover:bg-[#ff0000]/70 transition-colors"
            >
              <img
                src="/logos/phone-call.png"
                alt="Telefone"
                className="w-4 h-4 invert"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}