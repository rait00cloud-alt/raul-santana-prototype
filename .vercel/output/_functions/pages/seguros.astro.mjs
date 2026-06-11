import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CN65emZX.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function BackgroundVideo({
  desktopSrc = "/videos/instituto-ser-e-sentido.mp4",
  mobileSrc = "/videos/instituto-ser-e-sentido.mp4"
}) {
  const ref = useRef(null);
  const [videoSrc, setVideoSrc] = useState(desktopSrc);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateSrc = () => setVideoSrc(mediaQuery.matches ? mobileSrc : desktopSrc);
    updateSrc();
    mediaQuery.addEventListener("change", updateSrc);
    return () => mediaQuery.removeEventListener("change", updateSrc);
  }, [desktopSrc, mobileSrc]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref,
      className: "relative w-full h-[480px] sm:h-[720px] overflow-hidden bg-black",
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            src: videoSrc,
            className: "absolute inset-0 w-full h-full object-cover",
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            preload: "metadata"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 flex w-full h-full justify-end items-end sm:justify-start sm:items-end px-8 py-8 md:px-32 md:py-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            style: { y: textY, opacity: textOpacity },
            className: "flex flex-col gap-6 max-w-lg text-white",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-4xl font-[BrandonBold] tracking-tight text-[#E4D1A1]", children: "Instituto de Psicologia Ser e Sentido" }),
                /* @__PURE__ */ jsx("h2", { className: "text-base md:text-lg font-[BrandonBold] text-white", children: "Clínica de Psicologia" }),
                /* @__PURE__ */ jsx("h2", { className: "text-base md:text-lg font-[BrandonBold] text-[#F4E1C1]", children: "em Bragança Paulista" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "tracking-tight text-sm md:text-xl leading-relaxed font-[BrandonRegular]", children: "Aqui, cada conversa é um convite para olhar com gentileza para sua história, suas emoções e suas possibilidades de mudança." }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-2 justify-center items-center sm:justify-start ", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://wa.me/5511943860734",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center justify-center p-4 bg-[#F4E1C1]/50 border backdrop-blur-xs border-white/70 rounded-full hover:bg-[#00FF00]/70 transition-colors",
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/logos/whatsapp.png",
                        alt: "WhatsApp",
                        className: "w-4 h-4 invert"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "tel:+5511943860734",
                    className: "flex items-center justify-center p-4 bg-[#F4E1C1]/50 backdrop-blur-xs border border-white/70 rounded-full hover:bg-[#ff0000]/70 transition-colors",
                    children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "/logos/phone-call.png",
                        alt: "Telefone",
                        className: "w-4 h-4 invert"
                      }
                    )
                  }
                )
              ] })
            ]
          }
        ) })
      ]
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Trabalhe no Jap\xE3o" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full justify-center items-center overflow-x-hidden"> <div class="relative w-full flex justify-center items-center bg-black"> ${renderComponent($$result2, "BackgroundVideo", BackgroundVideo, { "desktopSrc": "/videos/desktop.mp4", "mobileSrc": "/videos/unimaq-01.mp4", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/UI/bgVideo", "client:component-export": "default" })} </div> </div> ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/seguros/index.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/seguros/index.astro";
const $$url = "/seguros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
