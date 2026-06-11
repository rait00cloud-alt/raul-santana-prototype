import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CN65emZX.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
export { renderers } from '../renderers.mjs';

const fadeInUp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    marketingConsent: false
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
    const { name, email, marketingConsent } = formData;
    if (!name || !email) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }
    if (!marketingConsent) {
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
        setFormData({ name: "", email: "", marketingConsent: false });
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
      className: " w-full flex relative flex-col p-8 h-full justify-center items-center bg-white",
      children: /* @__PURE__ */ jsxs("div", { className: "bg-black flex flex-col gap-2 relative px-4   border justify-center items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-end flex flex-col justify-end items-end w-full py-4 gap-1",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-[HelveticaNowLight] text-white  uppercase tracking-tighter max-w-[256px]", children: "Performe" }),
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-[HelveticaNowRegular] text-white uppercase tracking-tighter max-w-[256px]", children: "acima da média" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            onSubmit: handleSubmit,
            className: "w-full max-w-sm mx-auto flex flex-col gap-5 text-white text-center py-4 ",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeInUp,
            children: [
              /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1 text-xs tracking-wide font-[HelveticaNowLight] text-left", children: [
                "Nome",
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    name: "name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true,
                    className: "bg-transparent border border-white/40 text-white text-center px-4 py-2 focus:outline-none focus:border-white transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex flex-col gap-1 text-xs tracking-wide font-[HelveticaNowLight] text-left", children: [
                "E-mail",
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    required: true,
                    className: "bg-transparent border border-white/40 text-white text-center px-4 py-2 focus:outline-none focus:border-white transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("label", { className: "flex items-start justify-center gap-3 text-xs tracking-wide font-[HelveticaNowLight] mt-2 cursor-pointer select-none text-center", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    name: "marketingConsent",
                    checked: formData.marketingConsent,
                    onChange: handleChange,
                    className: "w-12 h-5 mt-0.5 appearance-none border-2 border-white bg-transparent checked:bg-white transition text-left"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-left", children: "Ao enviar este formulário, você declara estar ciente e de acordo com nossa Política de Privacidade e autoriza o contato para fins estratégicos e comerciais." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-3 mt-4", children: [
                /* @__PURE__ */ jsx(
                  motion.button,
                  {
                    type: "submit",
                    whileTap: { scale: isSubmitting ? 1 : 0.95 },
                    disabled: isSubmitting,
                    className: clsx(
                      "bg-white text-black px-6 py-2 rounded-sm text-xs uppercase font-[HelveticaNowRegular] transition",
                      isSubmitting && "opacity-60 cursor-not-allowed"
                    ),
                    children: isSubmitting ? t("form_sending_status") : t("contato.enviar")
                  }
                ),
                /* @__PURE__ */ jsx(AnimatePresence, { children: submitStatus && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.3 },
                    className: clsx(
                      "text-xs font-[HelveticaNowLight] px-3 py-1 rounded border",
                      submitStatus === "success" ? "border-green-400 text-green-400" : "border-red-400 text-red-400"
                    ),
                    children: submitStatus === "success" ? t("form_success_message") : submitStatus === "consent_error" ? t("form_consent.required_message") : t("form_error_message")
                  }
                ) })
              ] })
            ]
          }
        )
      ] })
    }
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Mim" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full justify-center items-center overflow-x-hidden"> <!-- Content --> ${renderComponent($$result2, "FormContainer", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Contato/FormContact", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/contato/index.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/contato/index.astro";
const $$url = "/contato";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
