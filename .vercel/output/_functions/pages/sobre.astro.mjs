import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CN65emZX.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
export { renderers } from '../renderers.mjs';

function BackgroundImage({ desktopSrc, mobileSrc }) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0rem", "2rem"]);
  useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 120]);
  useTransform(scrollYProgress, [0, 1], [0, isMobile ? 120 : 0]);
  const src = isMobile ? mobileSrc : desktopSrc;
  return /* @__PURE__ */ jsx("div", { ref, className: "relative w-full flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-h-[720px] overflow-hidden flex justify-center", children: [
    /* @__PURE__ */ jsx(
      motion.img,
      {
        src,
        alt: "",
        style: { scale, borderRadius },
        className: "\r\n            absolute inset-0\r\n            w-full h-full\r\n            object-cover\r\n            origin-center\r\n          "
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative w-full h-[640px] flex z-1" })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Mim" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full justify-center items-center overflow-x-hidden"> <div class="relative w-full flex justify-center items-center bg-black"> ${renderComponent($$result2, "BackgroundImage", BackgroundImage, { "mobileSrc": "/photos/about-me-mobile.jpg", "desktopSrc": "/photos/about-me.jpg", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/UI/bgImageAbout", "client:component-export": "default" })} </div> <!-- Content --> </div> ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/sobre/index.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/sobre/index.astro";
const $$url = "/sobre";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
