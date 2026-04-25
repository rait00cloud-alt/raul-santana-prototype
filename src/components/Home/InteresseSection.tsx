import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EASE = [0.33, 1, 0.68, 1] as const;

const fields = [
  { id: "nome", label: "Nome", type: "text" },
  { id: "email", label: "E-mail", type: "email" },
  { id: "phone", label: "Telefone", type: "tel" },
];

function MaskText({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{ delay, duration: 0.55, ease: EASE }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function InteresseSection() {
  const [form, setForm] = useState({ nome: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section 
    id='contato'
    className="w-full bg-[#131313] py-16 px-8">
      <div ref={textRef} className="max-w-xl mx-auto w-full">
        <motion.div style={{ y }} className="flex flex-col gap-8">

          <MaskText className="text-white text-xl font-[BasicCommercialBold] tracking-tight uppercase">
            Registre seu interesse
          </MaskText>

          {sent ? (
            <MaskText className="text-white/60 text-sm font-[BasicCommercialBold] tracking-tight">
              Recebemos seu contato.
            </MaskText>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {fields.map((field, i) => (
                <div key={field.id} className="flex flex-col gap-2">
                  <MaskText delay={0.05 + i * 0.06} className="text-white text-md font-[BasicCommercialBold] tracking-tight uppercase">
                    {field.label}
                  </MaskText>
                  <input
                    id={field.id}
                    type={field.type}
                    required
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    className="bg-transparent border-b border-white/20 text-white text-base font-[BasicCommercialBold] tracking-tight py-2 outline-none focus:border-white/60 transition-colors duration-300"
                  />
                </div>
              ))}

              <div className="overflow-hidden flex justify-center items-center w-full">
                <motion.button
                  type="submit"
                  className="text-white text-md tracking-tight uppercase font-[BasicCommercialBold] border-2 p-2 border-white hover:opacity-50 transition-opacity duration-300"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: false, margin: "-40px" }}
                  transition={{ delay: 0.3, duration: 0.55, ease: EASE }}
                >
                  Enviar
                </motion.button>
              </div>
            </form>
          )}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-8">
            <MaskText delay={0.05} className="text-white text-lg uppercase font-[BasicCommercialBold] tracking-tight hover:opacity-50 transition-opacity duration-300 cursor-pointer">
              <a href="https://instagram.com/raul.sanntana" target="_blank" rel="noopener noreferrer">
                instagram: @raul.sanntana
              </a>
            </MaskText>
            <MaskText delay={0.1} className="text-white text-lg uppercase font-[BasicCommercialBold] tracking-tight hover:opacity-50 transition-opacity duration-300 cursor-pointer">
              <a href="/politica-de-privacidade">
                Política de Privacidade
              </a>
            </MaskText>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
