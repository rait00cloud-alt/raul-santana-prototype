import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BLKbdJU0.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CN65emZX.mjs';
import { C as ContactForm } from '../../chunks/Form_op_8hwT0.mjs';
export { renderers } from '../../renderers.mjs';

const $$OrientacaoAPais = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Orienta\xE7\xE3o a Pais - Instituto Ser e Sentido" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full min-h-screen bg-white"> <section class="relative w-full h-[400px] md:h-[500px]"> <img src="/photos/01.jpg" alt="Orientação a Pais" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 px-8 md:px-16 py-12"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl md:text-5xl font-[BrandonBold] text-white mb-4">
Orientação a Pais
</h1> <p class="text-lg md:text-xl text-white/90 font-[BrandonRegular]">
Suporte e orientação para pais no desenvolvimento saudável e emocional dos filhos
</p> </div> </div> </section> <section class="w-full py-16 px-8 md:px-16"> <div class="max-w-4xl mx-auto space-y-8"> <div class="space-y-4"> <h2 class="text-3xl font-[BrandonBold] text-[#5a4a3a]">
O que é Orientação Parental?
</h2> <p class="text-lg text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
A orientação a pais é um espaço de acolhimento e apoio onde os responsáveis recebem suporte 
            psicológico para lidar com desafios da parentalidade, compreender melhor o comportamento dos 
            filhos e desenvolver estratégias educativas mais efetivas e afetivas.
</p> </div> <div class="space-y-4"> <h2 class="text-3xl font-[BrandonBold] text-[#5a4a3a]">
Para quem é indicada?
</h2> <p class="text-lg text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
Para pais e responsáveis que enfrentam dificuldades no manejo comportamental, questões relacionadas 
            ao desenvolvimento infantil, conflitos familiares, dúvidas sobre limites e educação, ou que desejam 
            fortalecer o vínculo com os filhos e promover um ambiente familiar mais saudável.
</p> </div> <div class="space-y-4"> <h2 class="text-3xl font-[BrandonBold] text-[#5a4a3a]">
Temas abordados
</h2> <ul class="space-y-3 text-lg text-[#6a5a4a] font-[BrandonRegular]"> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Estabelecimento de limites e rotinas</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Comunicação não-violenta com os filhos</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Manejo de birras e comportamentos desafiadores</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Desenvolvimento emocional infantil</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Fortalecimento do vínculo afetivo</span> </li> <li class="flex items-start gap-3"> <span class="text-[#d7a21e] font-bold">•</span> <span>Adaptação a mudanças familiares</span> </li> </ul> </div> <div class="bg-[#faf8f5] rounded-2xl p-8 mt-12"> <h3 class="text-2xl font-[BrandonBold] text-[#5a4a3a] mb-4">
Benefícios
</h3> <p class="text-lg text-[#6a5a4a] font-[BrandonRegular] leading-relaxed">
Através da orientação parental, os pais desenvolvem maior segurança e confiança no exercício da 
            parentalidade, compreendem melhor as necessidades emocionais dos filhos e constroem relações 
            familiares mais harmoniosas e respeitosas.
</p> </div> </div> </section> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Contato/Form", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/orientacao-a-pais.astro", void 0);

const $$file = "C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/orientacao-a-pais.astro";
const $$url = "/servicos/orientacao-a-pais";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OrientacaoAPais,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
