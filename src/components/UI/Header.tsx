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

const langs = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
];

export default function HeaderComponent() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
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
      <header className="fixed top-0 left-0 w-full z-[9999] flex justify-end items-center px-8 sm:px-48 py-6 text-white">
        <div className="flex items-center justify-between w-full gap-6 text-sm tracking-[0.18em] uppercase font-[BasicCommercialRoman]">
          <div className="flex">
            <h1 className="font-[BasicCommercialBold] tracking-tight text-lg text-[#22282b]">Raul Santana</h1>
          </div>

          <div className="flex flex-row gap-4 justify-center items-center">

            {/* Language button + dropdown */}
            {/* <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="text-[#22282b] text-lg lowercase flex justify-center items-center flex-row font-[BasicCommercialBold] tracking-tight"
              >
                {i18n.language.toUpperCase()}
                <span className="translate-y-2.5 text-2xl">🢓</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full mt-2 right-0 bg-white border border-black/10 z-50 min-w-[130px] shadow-md"
                  >
                    {langs.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full text-left px-4 py-2 text-xs tracking-widest font-[BasicCommercialRoman] transition-colors
                          ${i18n.language === lang.code
                            ? "text-black bg-black/5"
                            : "text-black/50 hover:text-black hover:bg-black/5"
                          }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#22282b] font-[BasicCommercialBold] text-lg tracking-tight"
            >
              menu
            </button>
          </div>
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
            {/* Menu items inline */}
            <div className="flex flex-wrap items-start gap-x-3 gap-y-2 mt-16">
              {MENU_ITEMS.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <motion.a
                    href={item.path}
                    onClick={() => { setSelected(item.label); setMenuOpen(false); }}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="block text-stone-900 text-4xl md:text-6xl font-[BasicCommercialBold] tracking-tight hover:opacity-40 transition-opacity duration-200 lowercase"
                  >
                    {item.label}{i < MENU_ITEMS.length - 1 && <span className="text-stone-300">,</span>}
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Bottom right description */}
            <div className="overflow-hidden self-end">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.38, duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
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
