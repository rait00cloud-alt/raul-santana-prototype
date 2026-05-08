import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CursosContainer() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="missao"
      className="relative w-full text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#22282b] to-transparent z-30" />

      {/* Mobile Layout */}
      <div className="lg:hidden relative h-[580px] w-full">
       <img
              src="/photos/raul-01.jpeg"
              className="w-full h-full object-contain scale-110 object-[center_20%]"
          
        />

        <motion.div
          ref={textRef}
          style={{ y }}
          className="absolute inset-0 flex items-end z-20"
        >
          <p className="text-white text-lg leading-[30px] tracking-tight font-[BasicCommercialBold] px-8 pb-16 max-w-2xl">
            A metodologia de trabalho integra fisioterapia terapêutica,
            treinamento funcional e estratégias de recuperação muscular,
            criando um sistema completo de cuidado com o corpo.
            <br />
            <br />
            O objetivo é proporcionar ao paciente e ao atleta não apenas a
            recuperação de lesões, mas também movimento eficiente, melhor
            performance física e longevidade esportiva.
          </p>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent z-30" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative z-20 mx-auto w-full">
        <div className="flex flex-row items-stretch min-h-[640px] bg-black overflow-hidden">
          <div className="w-1/2 h-[640px] relative">
            <img
              src="/photos/raul-01.jpeg"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>

          <div className="w-1/2 flex items-center justify-center px-16 bg-black">
            <motion.div
              ref={textRef}
              style={{ y }}
              className="max-w-xl"
            >
              <p className="text-white text-xl leading-relaxed tracking-tight font-[BasicCommercialBold]">
                A metodologia de trabalho integra fisioterapia terapêutica,
                treinamento funcional e estratégias de recuperação muscular,
                criando um sistema completo de cuidado com o corpo.
                <br />
                <br />
                O objetivo é proporcionar ao paciente e ao atleta não apenas a
                recuperação de lesões, mas também movimento eficiente, melhor
                performance física e longevidade esportiva.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}