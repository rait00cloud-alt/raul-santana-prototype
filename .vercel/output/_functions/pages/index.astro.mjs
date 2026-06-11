import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CN65emZX.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[680px] sm:h-[780px] w-full overflow-hidden text-white z-0", children: [
    /* @__PURE__ */ jsx(
      "video",
      {
        src: "/videos/full-video-v2.mp4",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover z-0"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.4, duration: 1 },
        className: "absolute bottom-16 px-8 w-full z-20",
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 sm:px-40", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-[BasicCommercialBold] text-2xl sm:text-4xl max-w-4xl", children: "Fisioterapia esportiva, ortopédica e performance" }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "h-2 bg-white",
              initial: { width: 0 },
              animate: { width: "320px" },
              transition: { delay: 0.8, duration: 0.6, ease: "easeOut" }
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10" })
  ] });
}

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
  { text: "física.", highlight: true }
];
function ReleaseSection() {
  const wordsRef = useRef(null);
  const isInView = useInView(wordsRef, { once: false, margin: "-80px" });
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });
  const textY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return /* @__PURE__ */ jsxs("section", { id: "release", className: "relative w-full bg-[#f4f4f4]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-[#a39b98] py-24 overflow-hidden", ref: wordsRef, children: /* @__PURE__ */ jsx("p", { className: "px-4 md:px-8 lg:px-48 text-3xl md:text-5xl text-start font-[BasicCommercialBold] tracking-tight leading-tight", children: headlineWords.map((word, index) => /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0.2 },
          animate: isInView ? { opacity: 1 } : { opacity: 0.2 },
          transition: {
            duration: 0.5,
            delay: index * 0.08,
            ease: "easeOut"
          },
          className: `inline-block mr-2 ${word.highlight ? "text-[#22282b]" : "text-white"}`,
          children: word.text
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen", children: /* @__PURE__ */ jsx("div", { className: "h-full sm:p-32 ", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/photos/raul-santana.jpeg",
            alt: "Raul Santana",
            className: "w-full h-full object-cover aspect-[3/4] lg:aspect-auto sm:border-4"
          }
        ) }) }),
        /* @__PURE__ */ jsx("div", { ref: textRef, className: "w-full lg:w-1/2 rounded-b mb-8 sm:mb-0 rounded-4xl shadow-xl", children: /* @__PURE__ */ jsxs(motion.div, { style: { y: textY }, className: "py-8 lg:py-16", children: [
          /* @__PURE__ */ jsxs("p", { className: "px-8 lg:px-12 text-xl lg:text-2xl text-[#22282b]/80 font-[BasicCommercialRoman] tracking-tight leading-relaxed", children: [
            '"Seu trabalho une avaliação criteriosa, técnicas manuais avançadas e estratégias personalizadas de reabilitação, com foco em restaurar o movimento, reduzir a dor e melhorar a capacidade física de cada paciente."',
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            '"Atende atletas, profissionais ativos e pessoas que buscam mais mobilidade, saúde e desempenho no dia a dia."',
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Em 2018, passou a atuar oficialmente como fisioterapeuta, ampliando sua prática com uma abordagem ainda mais completa, baseada em avaliação funcional, diagnóstico fisioterapêutico e planejamento terapêutico individualizado. Desde então, seu trabalho tem como princípio não apenas aliviar sintomas, mas identificar e tratar as causas biomecânicas que impactam mobilidade, desempenho e qualidade de vida.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Ao longo de sua trajetória, consolidou experiência no atendimento de atletas, praticantes de atividade física e pacientes em diferentes estágios de reabilitação. Sua atuação abrange desde a recuperação de lesões e reabilitação ortopédica até programas voltados para prevenção, manutenção da saúde musculoesquelética e aprimoramento da performance.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Seu método de trabalho combina avaliação criteriosa, técnicas manuais avançadas, exercícios terapêuticos e estratégias personalizadas de recuperação. Cada plano de tratamento é desenvolvido de forma individual, respeitando as necessidades, objetivos e demandas específicas de cada paciente.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Atualmente, Raul atende atletas de diversas modalidades, profissionais com rotinas fisicamente exigentes e pessoas que buscam mais mobilidade, bem-estar e eficiência no movimento. Seu trabalho é pautado pela busca constante por atualização, excelência clínica e resultados consistentes.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("br", {}),
            "Seu propósito é claro: ajudar cada paciente a se mover melhor, recuperar-se com segurança e alcançar seu máximo potencial físico por meio de um cuidado técnico, humano e individualizado."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-[#f4f4f4] flex justify-end items-end  ", children: /* @__PURE__ */ jsx("img", { src: "/logo/star.png", alt: "Star", className: "max-w-12 m-4" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "px-8 lg:px-12 pb-16 sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden border-[#22282b] border-4 sm:max-w-xl sm:justify-end items-end", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "/photos/hands.jpeg",
          alt: "Raul Santana",
          className: "w-full h-full object-cover"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-[#22282b] to-transparent z-30" })
  ] });
}

function CursosContainer() {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "missao",
      className: "relative w-full text-white overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#22282b] to-transparent z-30" }),
        /* @__PURE__ */ jsxs("div", { className: "lg:hidden relative h-[580px] w-full", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/photos/raul-01.jpeg",
              className: "w-full h-full object-contain scale-110 object-[center_20%]"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              ref: textRef,
              style: { y },
              className: "absolute inset-0 flex items-end z-20",
              children: /* @__PURE__ */ jsxs("p", { className: "text-white text-lg leading-[30px] tracking-tight font-[BasicCommercialBold] px-8 pb-16 max-w-2xl", children: [
                "A metodologia de trabalho integra fisioterapia terapêutica, treinamento funcional e estratégias de recuperação muscular, criando um sistema completo de cuidado com o corpo.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "O objetivo é proporcionar ao paciente e ao atleta não apenas a recuperação de lesões, mas também movimento eficiente, melhor performance física e longevidade esportiva."
              ] })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent z-30" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block relative z-20 mx-auto w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row items-stretch min-h-[640px] bg-black overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1/2 h-[640px] relative", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/photos/raul-01.jpeg",
              className: "w-full h-full object-cover object-[center_20%]"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "w-1/2 flex items-center justify-center px-16 bg-black", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              ref: textRef,
              style: { y },
              className: "max-w-xl",
              children: /* @__PURE__ */ jsxs("p", { className: "text-white text-xl leading-relaxed tracking-tight font-[BasicCommercialBold]", children: [
                "A metodologia de trabalho integra fisioterapia terapêutica, treinamento funcional e estratégias de recuperação muscular, criando um sistema completo de cuidado com o corpo.",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "O objetivo é proporcionar ao paciente e ao atleta não apenas a recuperação de lesões, mas também movimento eficiente, melhor performance física e longevidade esportiva."
              ] })
            }
          ) })
        ] }) })
      ]
    }
  );
}

const EASE$1 = [0.33, 1, 0.68, 1];
const VP = { once: false, margin: "-60px" };
const services = [
  {
    title: "Liberação Miofascial",
    shortDescription: "Redução de tensões, melhora da mobilidade e otimização da função muscular.",
    description: "A Liberação Miofascial é uma técnica manual avançada voltada para o tratamento das restrições da fáscia — tecido conjuntivo que envolve músculos, tendões e estruturas articulares.\n\nDisfunções nesse sistema podem gerar dor, redução da amplitude de movimento, diminuição da eficiência muscular e alterações biomecânicas.\n\nPor meio de pressões específicas, deslizamentos teciduais e estímulos mecânicos controlados, a técnica promove:",
    bullets: ["Redução de tensões miofasciais", "Melhora da mobilidade tecidual", "Aumento da circulação local", "Otimização da função muscular", "Diminuição da dor e da rigidez muscular"],
    footer: "Esse recurso é amplamente utilizado tanto no tratamento de dores musculoesqueléticas quanto na preparação e recuperação muscular de atletas e praticantes de atividade física.",
    image: "/photos/atuacao/01.jpeg"
  },
  {
    title: "Reabilitação Ortopédica",
    shortDescription: "Recuperação funcional após lesões, sobrecargas ou procedimentos cirúrgicos.",
    description: "A Reabilitação Ortopédica tem como objetivo restaurar a funcionalidade do sistema musculoesquelético após lesões, sobrecargas mecânicas ou procedimentos cirúrgicos.\n\nO processo terapêutico envolve a combinação de técnicas manuais, exercícios terapêuticos específicos e reeducação biomecânica, visando:",
    bullets: ["Recuperação da mobilidade articular", "Reequilíbrio muscular", "Redução de processos inflamatórios e dolorosos", "Restabelecimento da estabilidade articular", "Retorno seguro às atividades físicas e esportivas"],
    footer: "A abordagem prioriza não apenas a resolução da dor, mas também a correção dos fatores biomecânicos que originaram a lesão.",
    image: "/photos/atuacao/02.jpeg"
  },
  {
    title: "Prevenção de Lesões",
    shortDescription: "Identificação de fatores de risco e otimização do movimento.",
    description: "A prevenção é um dos pilares da fisioterapia moderna. Muitas lesões musculares e articulares são resultado de sobrecargas repetitivas, déficits de mobilidade, instabilidade articular ou padrões de movimento inadequados.\n\nPor meio de avaliações funcionais detalhadas, são identificados fatores de risco que podem comprometer a performance e a integridade física.\n\nO trabalho preventivo envolve:",
    bullets: ["Correção de padrões de movimento", "Melhora da mobilidade e estabilidade articular", "Otimização da função muscular", "Estratégias de recuperação e manutenção tecidual"],
    footer: "Esse processo reduz significativamente o risco de lesões e promove longevidade esportiva e qualidade de vida.",
    image: "/photos/lesoes.jpeg"
  }
];
function RaulServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-80px" });
  const [scrollProgress, setScrollProgress] = useState(0);
  useSpring(scrollProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setScrollProgress(Math.max(0, Math.min(1, progress)));
    const children = Array.from(el.children);
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0, closestDistance = Infinity;
    children.forEach((child, index) => {
      const d = Math.abs(center - (child.offsetLeft + child.offsetWidth / 2));
      if (d < closestDistance) {
        closestDistance = d;
        closest = index;
      }
    });
    setActiveIndex(closest);
  };
  const scrollToCard = (direction) => {
    if (!scrollRef.current) return;
    const nextIndex = Math.max(0, Math.min(services.length - 1, activeIndex + direction));
    scrollRef.current.children[nextIndex]?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(nextIndex);
  };
  return /* @__PURE__ */ jsxs("section", { className: "bg-[#22282b]", children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-full h-[1px] bg-[#a39b98]" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-14 px-8 py-8", ref: headerRef, children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
          motion.p,
          {
            className: "text-md uppercase text-white tracking-tight font-[BasicCommercialBold]",
            initial: { y: "100%" },
            animate: headerInView ? { y: 0 } : { y: "100%" },
            transition: { duration: 0.55, ease: EASE$1 },
            children: "Serviços"
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
          motion.h2,
          {
            className: "text-2xl tracking-tight lowercase md:text-5xl font-[BasicCommercialBold] text-white max-w-4xl leading-tight",
            initial: { y: "100%" },
            animate: headerInView ? { y: 0 } : { y: "100%" },
            transition: { delay: 0.08, duration: 0.55, ease: EASE$1 },
            children: "Uma abordagem integrada para recuperação, prevenção e performance."
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8 px-8", children: [
        /* @__PURE__ */ jsx("div", {}),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => scrollToCard(-1), className: "w-8 h-8 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => scrollToCard(1), className: "w-8 h-8 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative px-8", children: /* @__PURE__ */ jsx("div", { ref: scrollRef, onScroll: handleScroll, className: "flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar", children: services.map((service, index) => {
        const isActive = activeIndex === index;
        return /* @__PURE__ */ jsx(
          motion.article,
          {
            className: "flex-shrink-0 snap-start group cursor-pointer",
            style: { width: isMobile ? "18rem" : "24rem" },
            onMouseEnter: () => !isMobile && setActiveIndex(index),
            children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[3/4] mb-5 bg-stone-200", children: [
              /* @__PURE__ */ jsx("img", { src: service.image, alt: service.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  animate: { y: !isMobile && isActive ? -16 : 0 },
                  transition: { duration: 0.35 },
                  className: "absolute inset-0 flex flex-col justify-end p-6",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
                      motion.h3,
                      {
                        className: "text-white text-3xl font-[BasicCommercialBold] mb-3",
                        initial: { y: "100%" },
                        whileInView: { y: 0 },
                        viewport: VP,
                        transition: { duration: 0.5, ease: EASE$1 },
                        children: service.title
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
                      motion.p,
                      {
                        className: "text-white/85 text-sm leading-relaxed font-[BasicCommercialBold]",
                        initial: { y: "100%" },
                        whileInView: { y: 0 },
                        viewport: VP,
                        transition: { delay: 0.07, duration: 0.5, ease: EASE$1 },
                        children: service.shortDescription
                      }
                    ) }),
                    /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
                      motion.button,
                      {
                        onClick: () => setSelectedService(service),
                        className: "mt-6 inline-flex items-center gap-2 text-white font-[BasicCommercialBold] text-sm underline underline-offset-4",
                        initial: { y: "100%" },
                        whileInView: { y: 0 },
                        viewport: VP,
                        transition: { delay: 0.12, duration: 0.5, ease: EASE$1 },
                        children: "Saiba mais"
                      }
                    ) })
                  ]
                }
              )
            ] })
          },
          service.title
        );
      }) }) }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full h-[1px] bg-[#a39b98]" }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end px-8 py-6", children: /* @__PURE__ */ jsx("img", { src: "/logo/star.png", className: "w-8 h-8 object-contain invert" }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selectedService && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, className: "fixed inset-0 z-40 bg-black/70", onClick: () => setSelectedService(null) }),
      /* @__PURE__ */ jsxs(motion.div, { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }, className: "fixed bottom-0 left-0 right-0 z-50 bg-white flex flex-col overflow-y-auto max-h-[90vh]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-8 md:p-12 pb-0", children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(motion.h3, { className: "text-3xl md:text-5xl font-[BasicCommercialBold] text-stone-900 max-w-2xl leading-tight", initial: { y: "100%" }, animate: { y: 0 }, transition: { delay: 0.25, duration: 0.55, ease: EASE$1 }, children: selectedService.title }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden mt-2 ml-8 shrink-0", children: /* @__PURE__ */ jsx(motion.button, { onClick: () => setSelectedService(null), className: "text-sm uppercase tracking-widest font-[BasicCommercialBold] text-stone-400 hover:text-stone-900 transition-colors block", initial: { y: "100%" }, animate: { y: 0 }, transition: { delay: 0.3, duration: 0.55, ease: EASE$1 }, children: "Fechar" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-8 md:mx-12 mt-8 aspect-video overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: selectedService.image, alt: selectedService.title, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-8 md:p-12 pt-8", children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(motion.p, { className: "text-lg text-stone-600 leading-relaxed font-[BasicCommercialBold] max-w-2xl whitespace-pre-line", initial: { y: "100%" }, animate: { y: 0 }, transition: { delay: 0.35, duration: 0.55, ease: EASE$1 }, children: selectedService.description }) }),
          selectedService.bullets && /* @__PURE__ */ jsx("ul", { className: "mt-6 flex flex-col gap-3 max-w-2xl", children: selectedService.bullets.map((bullet, i) => /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(motion.li, { className: "flex items-center gap-3 text-stone-700 font-[BasicCommercialBold] text-base tracking-tight", initial: { y: "100%" }, animate: { y: 0 }, transition: { delay: 0.4 + i * 0.06, duration: 0.5, ease: EASE$1 }, children: [
            /* @__PURE__ */ jsx("img", { src: "/logo/star.png", className: "w-4 h-4 object-contain shrink-0" }),
            bullet
          ] }) }, i)) }),
          selectedService.footer && /* @__PURE__ */ jsx("div", { className: "overflow-hidden mt-6", children: /* @__PURE__ */ jsx(motion.p, { className: "text-stone-500 font-[BasicCommercialBold] text-sm tracking-tight max-w-2xl leading-relaxed", initial: { y: "100%" }, animate: { y: 0 }, transition: { delay: 0.5, duration: 0.55, ease: EASE$1 }, children: selectedService.footer }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end mt-auto pt-12", children: /* @__PURE__ */ jsx("div", { className: " ", children: /* @__PURE__ */ jsx("img", { src: "/logo/star.png", className: "max-w-8 m-4" }) }) })
        ] })
      ] })
    ] }) })
  ] });
}

const EASE = [0.33, 1, 0.68, 1];
const fields = [
  { id: "nome", label: "Nome", type: "text" },
  { id: "email", label: "E-mail", type: "email" },
  { id: "phone", label: "Telefone", type: "tel" }
];
function MaskText({ children, delay = 0, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  return /* @__PURE__ */ jsx("div", { ref, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { y: "100%" },
      animate: inView ? { y: 0 } : { y: "100%" },
      transition: { delay, duration: 0.55, ease: EASE },
      className,
      children
    }
  ) });
}
function InteresseSection() {
  const [form, setForm] = useState({ nome: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle");
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.nome, email: form.email })
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ nome: "", email: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "contato",
      className: "w-full bg-[#131313] py-16 px-8",
      children: /* @__PURE__ */ jsx("div", { ref: textRef, className: "max-w-xl mx-auto w-full", children: /* @__PURE__ */ jsxs(motion.div, { style: { y }, className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsx(MaskText, { className: "text-white text-xl font-[BasicCommercialBold] tracking-tight uppercase", children: "Registre seu interesse" }),
        status === "sent" ? /* @__PURE__ */ jsx(MaskText, { className: "text-white/60 text-sm font-[BasicCommercialBold] tracking-tight", children: "Recebemos seu contato." }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-8", children: [
          fields.map((field, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(MaskText, { delay: 0.05 + i * 0.06, className: "text-white text-md font-[BasicCommercialBold] tracking-tight uppercase", children: field.label }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: field.id,
                type: field.type,
                required: true,
                value: form[field.id],
                onChange: (e) => setForm({ ...form, [field.id]: e.target.value }),
                className: "bg-transparent border-b border-white/20 text-white text-base font-[BasicCommercialBold] tracking-tight py-2 outline-none focus:border-white/60 transition-colors duration-300"
              }
            )
          ] }, field.id)),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden flex justify-center items-center w-full", children: /* @__PURE__ */ jsx(
            motion.button,
            {
              type: "submit",
              className: "text-white text-md tracking-tight uppercase font-[BasicCommercialBold] border-2 p-2 border-white hover:opacity-50 transition-opacity duration-300",
              initial: { y: "100%" },
              whileInView: { y: 0 },
              viewport: { once: false, margin: "-40px" },
              transition: { delay: 0.3, duration: 0.55, ease: EASE },
              children: "Enviar"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 border-t border-white/10 pt-8", children: [
          /* @__PURE__ */ jsx(MaskText, { delay: 0.05, className: "text-white text-lg uppercase font-[BasicCommercialBold] tracking-tight hover:opacity-50 transition-opacity duration-300 cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "https://instagram.com/raul.sanntana", target: "_blank", rel: "noopener noreferrer", children: "instagram: @raul.sanntana" }) }),
          /* @__PURE__ */ jsx(MaskText, { delay: 0.1, className: "text-white text-lg uppercase font-[BasicCommercialBold] tracking-tight hover:opacity-50 transition-opacity duration-300 cursor-pointer", children: /* @__PURE__ */ jsx("a", { href: "/politica-de-privacidade", children: "Política de Privacidade" }) })
        ] })
      ] }) })
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Raul Santana" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/HeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "ReleaseSection", ReleaseSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/ReleaseSection", "client:component-export": "default" })} ${renderComponent($$result2, "RaulServicesSection", RaulServicesSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/ServicesSection", "client:component-export": "default" })} ${renderComponent($$result2, "CursosContainer", CursosContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/CursosSection", "client:component-export": "default" })} ${renderComponent($$result2, "InteresseSection", InteresseSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/InteresseSection", "client:component-export": "default" })} ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
