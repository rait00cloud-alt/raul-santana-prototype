import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D4ovZhDT.mjs';
import { manifest } from './manifest_BspY2WIH.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/contato.astro.mjs');
const _page3 = () => import('./pages/seguros.astro.mjs');
const _page4 = () => import('./pages/servicos/atendimento-brasileiros-exterior.astro.mjs');
const _page5 = () => import('./pages/servicos/avaliacao-psicologica-adulto.astro.mjs');
const _page6 = () => import('./pages/servicos/avaliacao-psicologica-infantil.astro.mjs');
const _page7 = () => import('./pages/servicos/orientacao-a-pais.astro.mjs');
const _page8 = () => import('./pages/servicos.astro.mjs');
const _page9 = () => import('./pages/sobre.astro.mjs');
const _page10 = () => import('./pages/termos-e-privacidade.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/contato/index.astro", _page2],
    ["src/pages/seguros/index.astro", _page3],
    ["src/pages/servicos/atendimento-brasileiros-exterior.astro", _page4],
    ["src/pages/servicos/avaliacao-psicologica-adulto.astro", _page5],
    ["src/pages/servicos/avaliacao-psicologica-infantil.astro", _page6],
    ["src/pages/servicos/orientacao-a-pais.astro", _page7],
    ["src/pages/servicos.astro", _page8],
    ["src/pages/sobre/index.astro", _page9],
    ["src/pages/termos-e-privacidade.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "08e5067b-211b-490d-90f4-04641b64a4cd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
