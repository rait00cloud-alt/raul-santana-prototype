import{j as t,m as x}from"./proxy.B50Cgc7s.js";import{r as o}from"./index.BVOCwoKb.js";import{u as h}from"./useTranslation.CRwOaFQ9.js";import{u as p}from"./use-scroll.Da3Xlx02.js";import{u as s}from"./use-transform.Ds-dJiH1.js";function y({desktopSrc:i,mobileSrc:c}){const l=o.useRef(null),[r,m]=o.useState(!1),{t:v}=h();o.useEffect(()=>{const a=window.matchMedia("(max-width: 768px)"),n=()=>m(a.matches);return n(),a.addEventListener("change",n),()=>a.removeEventListener("change",n)},[]);const{scrollYProgress:e}=p({target:l,offset:["start start","end start"]}),f=s(e,[0,1],[1,.8]),u=s(e,[0,1],["0rem","2rem"]);s(e,[0,.6],[1,0]),s(e,[0,1],[0,r?0:120]),s(e,[0,1],[0,r?120:0]);const d=r?c:i;return t.jsx("div",{ref:l,className:"relative w-full flex justify-center",children:t.jsxs("div",{className:"relative w-full max-h-[720px] overflow-hidden flex justify-center",children:[t.jsx(x.img,{src:d,alt:"",style:{scale:f,borderRadius:u},className:`\r
            absolute inset-0\r
            w-full h-full\r
            object-cover\r
            origin-center\r
          `}),t.jsx("div",{className:"relative w-full h-[640px] flex z-1"})]})})}export{y as default};
