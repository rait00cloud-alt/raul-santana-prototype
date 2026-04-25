"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const MENU_ITEMS = [
  { label: "Sobre", path: "#sobre" },
  { label: "Serviços", path: "#servicos" },
  { label: "Missão", path: "#missao" },
  { label: "Contato", path: "#contato" },
];

export default function HeaderComponent() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999] flex justify-end items-center px-8 sm:px-48 py-6">
        <div className="flex items-center justify-between w-full gap-6 text-sm tracking-[0.18em] uppercase font-[BasicCommercialRoman]">
          <h1
            className={`font-[BasicCommercialBold] tracking-tight text-lg transition-colors duration-500 mix-blend-difference ${
              menuOpen ? "text-[#22282b]" : "text-white"
            }`}
          >
            Raul Santana
          </h1>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`font-[BasicCommercialBold] text-lg tracking-tight transition-colors duration-500 mix-blend-difference ${
              menuOpen ? "text-[#22282b]" : "text-white"
            }`}
          >
            {menuOpen ? "close" : "menu"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[150] bg-white flex flex-col justify-between px-8 md:px-12 py-10"
          >
            <div className="flex flex-wrap items-start gap-x-3 gap-y-2 mt-16">
              {MENU_ITEMS.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <motion.a
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="block text-[#22282b] text-4xl md:text-6xl font-[BasicCommercialBold] tracking-tight hover:opacity-40 transition-opacity duration-200 lowercase"
                  >
                    {item.label}
                    {i < MENU_ITEMS.length - 1 && (
                      <span className="text-stone-300">,</span>
                    )}
                  </motion.a>
                </div>
              ))}
            </div>

            <div className="overflow-hidden self-end">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.38,
                  duration: 0.55,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-stone-400 text-sm font-[BasicCommercialBold] tracking-wide max-w-xs text-right leading-relaxed"
              >
                Fisioterapeuta Desportivo, especialista em terapias manuais e referência em tratamentos voltados para recuperação muscular
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}