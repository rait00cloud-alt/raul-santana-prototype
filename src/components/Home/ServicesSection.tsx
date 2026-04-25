import { motion, AnimatePresence, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];
const VP = { once: false, margin: '-60px' };

const services = [
  {
    title: 'Liberação Miofascial',
    shortDescription: 'Redução de tensões, melhora da mobilidade e otimização da função muscular.',
    description: 'A Liberação Miofascial é uma técnica manual avançada voltada para o tratamento das restrições da fáscia — tecido conjuntivo que envolve músculos, tendões e estruturas articulares.\n\nDisfunções nesse sistema podem gerar dor, redução da amplitude de movimento, diminuição da eficiência muscular e alterações biomecânicas.\n\nPor meio de pressões específicas, deslizamentos teciduais e estímulos mecânicos controlados, a técnica promove:',
    bullets: ['Redução de tensões miofasciais', 'Melhora da mobilidade tecidual', 'Aumento da circulação local', 'Otimização da função muscular', 'Diminuição da dor e da rigidez muscular'],
    footer: 'Esse recurso é amplamente utilizado tanto no tratamento de dores musculoesqueléticas quanto na preparação e recuperação muscular de atletas e praticantes de atividade física.',
    image: '/photos/atuacao/01.jpeg',
  },
  {
    title: 'Reabilitação Ortopédica',
    shortDescription: 'Recuperação funcional após lesões, sobrecargas ou procedimentos cirúrgicos.',
    description: 'A Reabilitação Ortopédica tem como objetivo restaurar a funcionalidade do sistema musculoesquelético após lesões, sobrecargas mecânicas ou procedimentos cirúrgicos.\n\nO processo terapêutico envolve a combinação de técnicas manuais, exercícios terapêuticos específicos e reeducação biomecânica, visando:',
    bullets: ['Recuperação da mobilidade articular', 'Reequilíbrio muscular', 'Redução de processos inflamatórios e dolorosos', 'Restabelecimento da estabilidade articular', 'Retorno seguro às atividades físicas e esportivas'],
    footer: 'A abordagem prioriza não apenas a resolução da dor, mas também a correção dos fatores biomecânicos que originaram a lesão.',
    image: '/photos/atuacao/02.jpeg',
  },
  {
    title: 'Prevenção de Lesões',
    shortDescription: 'Identificação de fatores de risco e otimização do movimento.',
    description: 'A prevenção é um dos pilares da fisioterapia moderna. Muitas lesões musculares e articulares são resultado de sobrecargas repetitivas, déficits de mobilidade, instabilidade articular ou padrões de movimento inadequados.\n\nPor meio de avaliações funcionais detalhadas, são identificados fatores de risco que podem comprometer a performance e a integridade física.\n\nO trabalho preventivo envolve:',
    bullets: ['Correção de padrões de movimento', 'Melhora da mobilidade e estabilidade articular', 'Otimização da função muscular', 'Estratégias de recuperação e manutenção tecidual'],
    footer: 'Esse processo reduz significativamente o risco de lesões e promove longevidade esportiva e qualidade de vida.',
    image: '/photos/atuacao/03.jpeg',
  },
];

type Service = typeof services[0];

export default function RaulServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: false, margin: '-80px' });
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setScrollProgress(Math.max(0, Math.min(1, progress)));
    const children = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0, closestDistance = Infinity;
    children.forEach((child, index) => {
      const d = Math.abs(center - (child.offsetLeft + child.offsetWidth / 2));
      if (d < closestDistance) { closestDistance = d; closest = index; }
    });
    setActiveIndex(closest);
  };

  const scrollToCard = (direction: number) => {
    if (!scrollRef.current) return;
    const nextIndex = Math.max(0, Math.min(services.length - 1, activeIndex + direction));
    (scrollRef.current.children[nextIndex] as HTMLElement)?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActiveIndex(nextIndex);
  };

  return (
    <section className="bg-[#22282b]">
      <div className="relative w-full h-[1px] bg-[#a39b98]" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 px-8 py-8" ref={headerRef}>
          <div className="overflow-hidden mb-4">
            <motion.p
              className="text-md uppercase text-white tracking-tight font-[BasicCommercialBold]"
              initial={{ y: '100%' }}
              animate={headerInView ? { y: 0 } : { y: '100%' }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              Serviços
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-2xl tracking-tight lowercase md:text-5xl font-[BasicCommercialBold] text-white max-w-4xl leading-tight"
              initial={{ y: '100%' }}
              animate={headerInView ? { y: 0 } : { y: '100%' }}
              transition={{ delay: 0.08, duration: 0.55, ease: EASE }}
            >
              Uma abordagem integrada para recuperação, prevenção e performance.
            </motion.h2>
          </div>
        </div>

        <div className="flex items-end justify-between mb-8 px-8">
          <div />
          <div className="flex items-center gap-2">
            <button onClick={() => scrollToCard(-1)} className="w-8 h-8 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scrollToCard(1)} className="w-8 h-8 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative px-8">
          <div ref={scrollRef} onScroll={handleScroll} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.article
                  key={service.title}
                  className="flex-shrink-0 snap-start group cursor-pointer"
                  style={{ width: isMobile ? '18rem' : '24rem' }}
                  onMouseEnter={() => !isMobile && setActiveIndex(index)}
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-5 bg-stone-200">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <motion.div
                      animate={{ y: !isMobile && isActive ? -16 : 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 flex flex-col justify-end p-6"
                    >
                      <div className="overflow-hidden">
                        <motion.h3
                          className="text-white text-3xl font-[BasicCommercialBold] mb-3"
                          initial={{ y: '100%' }}
                          whileInView={{ y: 0 }}
                          viewport={VP}
                          transition={{ duration: 0.5, ease: EASE }}
                        >
                          {service.title}
                        </motion.h3>
                      </div>
                      <div className="overflow-hidden">
                        <motion.p
                          className="text-white/85 text-sm leading-relaxed font-[BasicCommercialBold]"
                          initial={{ y: '100%' }}
                          whileInView={{ y: 0 }}
                          viewport={VP}
                          transition={{ delay: 0.07, duration: 0.5, ease: EASE }}
                        >
                          {service.shortDescription}
                        </motion.p>
                      </div>
                      <div className="overflow-hidden">
                        <motion.button
                          onClick={() => setSelectedService(service)}
                          className="mt-6 inline-flex items-center gap-2 text-white font-[BasicCommercialBold] text-sm underline underline-offset-4"
                          initial={{ y: '100%' }}
                          whileInView={{ y: 0 }}
                          viewport={VP}
                          transition={{ delay: 0.12, duration: 0.5, ease: EASE }}
                        >
                          Saiba mais
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="relative w-full h-[1px] bg-[#a39b98]" />
        <div className="flex justify-end px-8 py-6">
          <img src='/logo/star.png' className="w-8 h-8 object-contain invert" />
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-black/70" onClick={() => setSelectedService(null)} />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} className="fixed bottom-0 left-0 right-0 z-50 bg-white flex flex-col overflow-y-auto max-h-[90vh]">
              <div className="flex items-start justify-between p-8 md:p-12 pb-0">
                <div className="overflow-hidden">
                  <motion.h3 className="text-3xl md:text-5xl font-[BasicCommercialBold] text-stone-900 max-w-2xl leading-tight" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.25, duration: 0.55, ease: EASE }}>
                    {selectedService.title}
                  </motion.h3>
                </div>
                <div className="overflow-hidden mt-2 ml-8 shrink-0">
                  <motion.button onClick={() => setSelectedService(null)} className="text-sm uppercase tracking-widest font-[BasicCommercialBold] text-stone-400 hover:text-stone-900 transition-colors block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.55, ease: EASE }}>
                    Fechar
                  </motion.button>
                </div>
              </div>

              <div className="mx-8 md:mx-12 mt-8 aspect-video overflow-hidden">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col flex-1 p-8 md:p-12 pt-8">
                <div className="overflow-hidden">
                  <motion.p className="text-lg text-stone-600 leading-relaxed font-[BasicCommercialBold] max-w-2xl whitespace-pre-line" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.35, duration: 0.55, ease: EASE }}>
                    {selectedService.description}
                  </motion.p>
                </div>
                {selectedService.bullets && (
                  <ul className="mt-6 flex flex-col gap-3 max-w-2xl">
                    {selectedService.bullets.map((bullet, i) => (
                      <div key={i} className="overflow-hidden">
                        <motion.li className="flex items-center gap-3 text-stone-700 font-[BasicCommercialBold] text-base tracking-tight" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: EASE }}>
                          <img src="/logo/star.png" className="w-4 h-4 object-contain shrink-0" />
                          {bullet}
                        </motion.li>
                      </div>
                    ))}
                  </ul>
                )}
                {selectedService.footer && (
                  <div className="overflow-hidden mt-6">
                    <motion.p className="text-stone-500 font-[BasicCommercialBold] text-sm tracking-tight max-w-2xl leading-relaxed" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.55, ease: EASE }}>
                      {selectedService.footer}
                    </motion.p>
                  </div>
                )}
                <div className="flex justify-end mt-auto pt-12">
                  <div className=" ">
                    <img src='/logo/star.png' className="max-w-8 m-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
