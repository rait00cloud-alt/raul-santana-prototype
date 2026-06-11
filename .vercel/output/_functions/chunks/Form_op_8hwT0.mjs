import { jsx, jsxs } from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const { name, email, consent } = formData;
    if (!name || !email) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    if (!consent) {
      setSubmitStatus("consent_error");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", consent: false });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "contato",
      className: "w-full flex justify-center items-center py-24 px-6 bg-[#f6f1eb]",
      children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white/70 backdrop-blur-md border border-[#e6ded6] rounded-3xl p-10 shadow-xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeInUp,
            className: "text-center mb-8",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-[BrandonBold] text-[#2a2520]", children: "Vamos conversar?" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-[#6b5d52] mt-2 font-[BrandonRegular]", children: "Preencha seus dados e entrarei em contato para agendarmos seu atendimento." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            onSubmit: handleSubmit,
            className: "flex flex-col gap-6",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeInUp,
            children: [
              /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1 text-sm font-[BrandonRegular] text-[#5a5047]", children: [
                "Nome",
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    className: "border border-[#ddd3c8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8b7355] transition bg-white font-[BrandonRegular]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1 text-sm font-[BrandonRegular] text-[#5a5047]", children: [
                "E-mail",
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    className: "border border-[#ddd3c8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8b7355] transition bg-white font-[BrandonRegular]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex items-start flex-row gap-2 text-xs font-[BrandonRegular] text-[#6b5d52]", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: "consent",
                    checked: formData.consent,
                    onChange: handleChange,
                    className: "mt-1 accent-[#8b7355]"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Autorizo o Instituto de Psicologia Ser e Sentido a entrar em contato para agendamento e estou de acordo com a",
                  " ",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "/termos-e-privacidade",
                      className: "underline hover:text-[#8b7355]",
                      children: "política de privacidade"
                    }
                  ),
                  "."
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                motion.button,
                {
                  type: "submit",
                  whileTap: { scale: 0.96 },
                  disabled: isSubmitting,
                  className: clsx(
                    "mt-2 bg-[#d7a21e] text-white py-3 rounded-full font-[BrandonMedium] tracking-wide transition",
                    isSubmitting && "opacity-60 cursor-not-allowed"
                  ),
                  children: isSubmitting ? "Enviando..." : "Agendar conversa"
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: submitStatus && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: -6 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -6 },
                  className: clsx(
                    "text-xs text-center mt-2 font-[BrandonRegular]",
                    submitStatus === "success" ? "text-green-600" : "text-red-500"
                  ),
                  children: submitStatus === "success" ? "Mensagem enviada com carinho 🤍 Em breve você receberá retorno." : submitStatus === "consent_error" ? "É necessário autorizar o contato." : "Não foi possível enviar. Tente novamente."
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
};

export { ContactForm as C };
