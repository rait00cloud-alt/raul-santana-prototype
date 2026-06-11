import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CN65emZX.mjs';
import { C as ContactForm } from '../chunks/Form_op_8hwT0.mjs';
export { renderers } from '../renderers.mjs';

const $$Servicos = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      slug: "avaliacao-psicologica-adulto",
      title: "Avalia\xE7\xE3o Psicol\xF3gica Adulto",
      description: "Processo completo de avalia\xE7\xE3o para compreender aspectos emocionais, cognitivos e comportamentais.",
      image: "/photos/04.jpg"
    },
    {
      slug: "avaliacao-psicologica-infantil",
      title: "Avalia\xE7\xE3o Psicol\xF3gica Infantil",
      description: "Avalia\xE7\xE3o especializada para crian\xE7as, identificando necessidades e potencialidades do desenvolvimento.",
      image: "/photos/02.jpg"
    },
    {
      slug: "orientacao-a-pais",
      title: "Orienta\xE7\xE3o a Pais",
      description: "Suporte e orienta\xE7\xE3o para pais no desenvolvimento saud\xE1vel e emocional dos filhos.",
      image: "/photos/01.jpg"
    },
    {
      slug: "atendimento-brasileiros-exterior",
      title: "Atendimento de Brasileiros no Exterior",
      description: "Atendimento online especializado para brasileiros que vivem fora do pa\xEDs.",
      image: "/photos/03.jpg"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servi\xE7os - Instituto Ser e Sentido" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-screen bg-[#faf8f5]">  <section class="w-full py-24 px-8 md:px-16 bg-gradient-to-b from-white to-[#faf8f5]"> <div class="max-w-7xl mx-auto text-center"> <h1 class="text-4xl md:text-6xl font-[BrandonBold] text-[#5a4a3a] mb-6">
Nossos Serviços
</h1> <p class="text-lg md:text-xl text-[#6a5a4a] font-[BrandonRegular] max-w-3xl mx-auto">
Oferecemos atendimento psicológico especializado com acolhimento, ética e respeito à singularidade de cada pessoa.
</p> </div> </section>  <section class="w-full py-16 px-8 md:px-16"> <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8"> ${services.map((service) => renderTemplate`<a${addAttribute(`/servicos/${service.slug}`, "href")} class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"> <div class="relative h-64 overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <h2 class="absolute bottom-6 left-6 text-2xl md:text-3xl font-[BrandonBold] text-white"> ${service.title} </h2> </div> <div class="p-6"> <p class="text-[#6a5a4a] font-[BrandonRegular] leading-relaxed mb-4"> ${service.description} </p> <span class="inline-flex items-center gap-2 text-[#d7a21e] font-[BrandonMedium] group-hover:gap-4 transition-all">
Saiba mais
<span>→</span> </span> </div> </a>`)} </div> </section>  ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Contato/Form", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos.astro";
const $$url = "/servicos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Servicos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
