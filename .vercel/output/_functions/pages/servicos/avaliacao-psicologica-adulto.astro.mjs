import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CN65emZX.mjs';
import { C as ContactForm } from '../../chunks/Form_op_8hwT0.mjs';
export { renderers } from '../../renderers.mjs';

const $$AvaliacaoPsicologicaAdulto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Avalia\xE7\xE3o Psicol\xF3gica Adulto - Instituto Ser e Sentido" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-screen bg-white">  <section class="relative w-full h-[400px] md:h-[500px]"> <img src="/photos/04.jpg" alt="Avaliação Psicológica Adulto" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 px-8 md:px-16 py-12"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl md:text-5xl font-[BrandonBold] text-white mb-4">
Avaliação Psicológica Adulto
</h1> <p class="text-lg md:text-xl text-white/90 font-[BrandonRegular]">
Processo completo de avaliação para compreender aspectos emocionais, cognitivos e comportamentais
</p> </div> </div> </section>  <section class="w-full py-16 px-8 md:px-16"> <div class="max-w-4xl mx-auto space-y-8"> <div class="space-y-4"> <h2 class="text-3xl font-[BrandonBold] text-[#5a4a3a]">
O que é a Avaliação Psicológica?
</h2> <p class="text-lg text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
A avaliação psicológica é um processo científico e sistemático que utiliza diferentes instrumentos, 
            como testes psicológicos, entrevistas e observações, para compreender o funcionamento emocional, 
            cognitivo e comportamental de uma pessoa.
</p> </div> <div class="space-y-4"> <h2 class="text-3xl font-[BrandonBold] text-[#5a4a3a]">
Para quem é indicada?
</h2> <p class="text-lg text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
A avaliação é indicada para adultos que buscam autoconhecimento, precisam de diagnóstico diferencial, 
            estão em processo de escolha profissional, necessitam de laudos para fins específicos ou desejam 
            compreender melhor suas potencialidades e dificuldades.
</p> </div> <div class="space-y-4"> <h2 class="text-3xl font-[BrandonBold] text-[#5a4a3a]">
Como funciona o processo?
</h2> <ul class="space-y-3 text-lg text-[#6a5a4a] font-[BrandonRegular]"> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Entrevista inicial para compreensão da demanda</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Aplicação de testes psicológicos validados</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Análise e interpretação dos resultados</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Entrevista devolutiva com orientações</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Elaboração de relatório ou laudo psicológico</span> </li> </ul> </div> <div class="bg-[#faf8f5] rounded-2xl p-8 mt-12"> <h3 class="text-2xl font-[BrandonBold] text-[#5a4a3a] mb-4">
Benefícios da Avaliação
</h3> <p class="text-lg text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
Através da avaliação psicológica, você terá uma compreensão profunda sobre seu funcionamento psíquico, 
            identificará recursos e potencialidades, receberá orientações personalizadas e terá subsídios para 
            tomadas de decisão mais conscientes em sua vida pessoal e profissional.
</p> </div> </div> </section>  ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Contato/Form", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/avaliacao-psicologica-adulto.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/avaliacao-psicologica-adulto.astro";
const $$url = "/servicos/avaliacao-psicologica-adulto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AvaliacaoPsicologicaAdulto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
