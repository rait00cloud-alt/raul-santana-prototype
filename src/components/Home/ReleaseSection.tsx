"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headlineWords = [
  { text: "Raul", highlight: true },
  { text: "Santana", highlight: true },
  { text: "é", highlight: false },
  { text: "fisioterapeuta", highlight: false },
  { text: "desportivo,", highlight: false },
  { text: "especializado", highlight: false },
  { text: "em", highlight: false },
  { text: "terapias", highlight: true },
  { text: "manuais,", highlight: true },
  { text: "reabilitação", highlight: true },
  { text: "musculoesquelética", highlight: true },
  { text: "e", highlight: false },
  { text: "performance", highlight: true },
  { text: "física.", highlight: true },
];

export default function ReleaseSection() {
  const wordsRef = useRef(null);
  const isInView = useInView(wordsRef, { once: false, margin: "-80px" });

  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="release" className="relative w-full bg-[#f4f4f4]">
      <div className="flex flex-col">
        <div className="bg-[#a39b98] py-24 overflow-hidden" ref={wordsRef}>
          <p className="px-4 md:px-8 lg:px-48 text-3xl md:text-5xl text-start font-[BasicCommercialBold] tracking-tight leading-tight">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.2 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`inline-block mr-2 ${
                  word.highlight ? "text-[#22282b]" : "text-white"
                }`}
              >
                {word.text}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start">
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
            <div className="h-full sm:p-32 ">
              <img
                src="/photos/raul-santana.jpeg"
                alt="Raul Santana"
                className="w-full h-full object-cover aspect-[3/4] lg:aspect-auto sm:border-4"
              />
            </div>
          </div>

          <div ref={textRef} className="w-full lg:w-1/2 rounded-b mb-8 sm:mb-0 rounded-4xl shadow-xl">
            <motion.div style={{ y: textY }} className="py-8 lg:py-16">
              <p className="px-8 lg:px-12 text-xl lg:text-2xl text-[#22282b]/80 font-[BasicCommercialRoman] tracking-tight leading-relaxed">
                "Seu trabalho une avaliação criteriosa, técnicas manuais avançadas e
                estratégias personalizadas de reabilitação, com foco em restaurar o
                movimento, reduzir a dor e melhorar a capacidade física de cada paciente."
                <br /><br />
                "Atende atletas, profissionais ativos e pessoas que buscam mais mobilidade,
                saúde e desempenho no dia a dia."
                <br /><br />
                Em 2018, passou a atuar oficialmente como fisioterapeuta, ampliando sua
                prática com uma abordagem ainda mais completa, baseada em avaliação funcional,
                diagnóstico fisioterapêutico e planejamento terapêutico individualizado.
                Desde então, seu trabalho tem como princípio não apenas aliviar sintomas,
                mas identificar e tratar as causas biomecânicas que impactam mobilidade,
                desempenho e qualidade de vida.
                <br /><br />
                Ao longo de sua trajetória, consolidou experiência no atendimento de atletas,
                praticantes de atividade física e pacientes em diferentes estágios de
                reabilitação. Sua atuação abrange desde a recuperação de lesões e
                reabilitação ortopédica até programas voltados para prevenção, manutenção da
                saúde musculoesquelética e aprimoramento da performance.
                <br /><br />
                Seu método de trabalho combina avaliação criteriosa, técnicas manuais
                avançadas, exercícios terapêuticos e estratégias personalizadas de
                recuperação. Cada plano de tratamento é desenvolvido de forma individual,
                respeitando as necessidades, objetivos e demandas específicas de cada paciente.
                <br /><br />
                Atualmente, Raul atende atletas de diversas modalidades, profissionais com
                rotinas fisicamente exigentes e pessoas que buscam mais mobilidade,
                bem-estar e eficiência no movimento. Seu trabalho é pautado pela busca
                constante por atualização, excelência clínica e resultados consistentes.
                <br /><br />
                Seu propósito é claro: ajudar cada paciente a se mover melhor,
                recuperar-se com segurança e alcançar seu máximo potencial físico por meio
                de um cuidado técnico, humano e individualizado.
              </p>

              <div className="bg-[#f4f4f4] flex justify-end items-end  ">
                <img src="/logo/star.png" alt="Star" className="max-w-12 m-4" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-8 lg:px-12 pb-16 sm:hidden">
          <div className="aspect-[4/3] overflow-hidden border-[#22282b] border-4 sm:max-w-xl sm:justify-end items-end">
            <img
              src="/photos/hands.jpeg"
              alt="Raul Santana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-[#22282b] to-transparent z-30" />
    </section>
  );
}
