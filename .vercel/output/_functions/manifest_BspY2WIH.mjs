import 'kleur/colors';
import { o as decodeKey } from './chunks/astro/server_BLKbdJU0.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Vc32wnue.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/","cacheDir":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/node_modules/.astro/","outDir":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/dist/","srcDir":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/","publicDir":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/public/","buildClientDir":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/dist/client/","buildServerDir":"file:///C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/contato","isIndex":true,"type":"page","pattern":"^\\/contato\\/?$","segments":[[{"content":"contato","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contato/index.astro","pathname":"/contato","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/seguros","isIndex":true,"type":"page","pattern":"^\\/seguros\\/?$","segments":[[{"content":"seguros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/seguros/index.astro","pathname":"/seguros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/servicos/atendimento-brasileiros-exterior","isIndex":false,"type":"page","pattern":"^\\/servicos\\/atendimento-brasileiros-exterior\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}],[{"content":"atendimento-brasileiros-exterior","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicos/atendimento-brasileiros-exterior.astro","pathname":"/servicos/atendimento-brasileiros-exterior","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/servicos/avaliacao-psicologica-adulto","isIndex":false,"type":"page","pattern":"^\\/servicos\\/avaliacao-psicologica-adulto\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}],[{"content":"avaliacao-psicologica-adulto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicos/avaliacao-psicologica-adulto.astro","pathname":"/servicos/avaliacao-psicologica-adulto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/servicos/avaliacao-psicologica-infantil","isIndex":false,"type":"page","pattern":"^\\/servicos\\/avaliacao-psicologica-infantil\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}],[{"content":"avaliacao-psicologica-infantil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicos/avaliacao-psicologica-infantil.astro","pathname":"/servicos/avaliacao-psicologica-infantil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/servicos/orientacao-a-pais","isIndex":false,"type":"page","pattern":"^\\/servicos\\/orientacao-a-pais\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}],[{"content":"orientacao-a-pais","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicos/orientacao-a-pais.astro","pathname":"/servicos/orientacao-a-pais","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/servicos","isIndex":false,"type":"page","pattern":"^\\/servicos\\/?$","segments":[[{"content":"servicos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicos.astro","pathname":"/servicos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/sobre","isIndex":true,"type":"page","pattern":"^\\/sobre\\/?$","segments":[[{"content":"sobre","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sobre/index.astro","pathname":"/sobre","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/termos-e-privacidade","isIndex":false,"type":"page","pattern":"^\\/termos-e-privacidade\\/?$","segments":[[{"content":"termos-e-privacidade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/termos-e-privacidade.astro","pathname":"/termos-e-privacidade","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.D19wkU8Q.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/contato/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/seguros/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/atendimento-brasileiros-exterior.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/avaliacao-psicologica-adulto.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/avaliacao-psicologica-infantil.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/servicos/orientacao-a-pais.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/sobre/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/pages/termos-e-privacidade.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contato/index@_@astro":"pages/contato.astro.mjs","\u0000@astro-page:src/pages/seguros/index@_@astro":"pages/seguros.astro.mjs","\u0000@astro-page:src/pages/servicos/atendimento-brasileiros-exterior@_@astro":"pages/servicos/atendimento-brasileiros-exterior.astro.mjs","\u0000@astro-page:src/pages/servicos/avaliacao-psicologica-adulto@_@astro":"pages/servicos/avaliacao-psicologica-adulto.astro.mjs","\u0000@astro-page:src/pages/servicos/avaliacao-psicologica-infantil@_@astro":"pages/servicos/avaliacao-psicologica-infantil.astro.mjs","\u0000@astro-page:src/pages/servicos/orientacao-a-pais@_@astro":"pages/servicos/orientacao-a-pais.astro.mjs","\u0000@astro-page:src/pages/servicos@_@astro":"pages/servicos.astro.mjs","\u0000@astro-page:src/pages/sobre/index@_@astro":"pages/sobre.astro.mjs","\u0000@astro-page:src/pages/termos-e-privacidade@_@astro":"pages/termos-e-privacidade.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BspY2WIH.mjs","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BckYemV2.mjs","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Contato/Form":"_astro/Form.C5G74HoT.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/UI/bgVideo":"_astro/bgVideo.IMm6ZB2D.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Contato/FormContact":"_astro/FormContact.DhTjHqWP.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/UI/bgImageAbout":"_astro/bgImageAbout.CYhsxepI.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/HeroSection":"_astro/HeroSection.DiQ3T7mT.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/ReleaseSection":"_astro/ReleaseSection.C1NQ0Ehk.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/ServicesSection":"_astro/ServicesSection.CyFrIoK1.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/CursosSection":"_astro/CursosSection.xbO6-Z4H.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/Home/InteresseSection":"_astro/InteresseSection.Cn3aaNmX.js","C:/Users/evaro/OneDrive/Documentos/industrie/prototypes/raul-santana-static-website/src/components/UI/HeaderWithI18n.tsx":"_astro/HeaderWithI18n.DAWBKXqG.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.D19wkU8Q.css","/favicon.svg","/fonts/BasicCommercialLT-Black.ttf","/fonts/BasicCommercialLT-Bold.ttf","/fonts/BasicCommercialLT-Light.ttf","/fonts/BasicCommercialLT-Roman.ttf","/logo/star.png","/job-files/job-01.jpg","/job-files/job-02.jpg","/job-files/job-03.png","/job-files/job-04.png","/job-files/job-05.png","/job-files/job-06.png","/job-files/job-07.png","/logos/logo-1.png","/logos/phone-call.png","/logos/whatsapp.png","/noticias/correio-brasiliense.png","/noticias/record.png","/noticias/sbt.mp4","/photos/10.jpg","/photos/hands.jpeg","/photos/lesoes.jpeg","/photos/raul-01.jpeg","/photos/raul-02.jpeg","/photos/raul-02.png","/photos/raul-santana.jpeg","/socials/line.png","/socials/whatsapp.png","/videos/full-video-v2.mp4","/videos/full-video.mp4","/_astro/bgImageAbout.CYhsxepI.js","/_astro/bgVideo.IMm6ZB2D.js","/_astro/client.BPIbHqJh.js","/_astro/clsx.B-dksMZM.js","/_astro/CursosSection.xbO6-Z4H.js","/_astro/Form.C5G74HoT.js","/_astro/FormContact.DhTjHqWP.js","/_astro/HeaderWithI18n.DAWBKXqG.js","/_astro/HeroSection.DiQ3T7mT.js","/_astro/index.07W2g6gp.js","/_astro/index.BVOCwoKb.js","/_astro/InteresseSection.Cn3aaNmX.js","/_astro/proxy.B50Cgc7s.js","/_astro/ReleaseSection.C1NQ0Ehk.js","/_astro/ServicesSection.CyFrIoK1.js","/_astro/use-in-view.MHKPSoed.js","/_astro/use-scroll.Da3Xlx02.js","/_astro/use-transform.Ds-dJiH1.js","/_astro/useTranslation.CRwOaFQ9.js","/photos/atuacao/01.jpeg","/photos/atuacao/02.jpeg","/photos/atuacao/03.jpeg","/photos/atuacao/04.jpeg","/photos/atuacao/05.jpeg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"dKK1Nbdbe0lZHZEqbG7gcLS0nPrWtupvN98ARv44PNo="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
