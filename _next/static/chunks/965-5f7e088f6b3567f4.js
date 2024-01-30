"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{1691:function(e,t,s){s.r(t),s.d(t,{default:function(){return r},useAppProvider:function(){return i}});var l=s(9268),n=s(6006);let a=(0,n.createContext)({sidebarOpen:!1,setSidebarOpen:()=>!1});function r(e){let{children:t}=e,[s,r]=(0,n.useState)(!1);return(0,l.jsx)(a.Provider,{value:{sidebarOpen:s,setSidebarOpen:r},children:t})}let i=()=>(0,n.useContext)(a)},6965:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var l=s(9268),n=s(6006),a=s(1691),r=s(6008),i=s(7861),c=s(8587),d=s.n(c),o=s(9079),x=s.n(o);let h=d()(x()),p=e=>{let t=h.theme.screens[e];return+t.slice(0,t.indexOf("px"))},u=()=>{let e;let t=0,s=window.innerWidth;for(let l of Object.keys(h.theme.screens)){let n=p(l);n>t&&s>=n&&(t=n,e=l)}return e};function m(e){let{children:t,open:s=!1}=e,[a,r]=(0,n.useState)(s);return(0,l.jsx)("li",{className:"px-3 py-2 rounded-sm mb-0.5 last:mb-0 group is-link-group ".concat(s&&"bg-slate-900"),children:t(()=>{r(!a)},a)})}var g=s(5846),f=s.n(g);function j(e){let{children:t,href:s}=e,n=(0,r.usePathname)(),{setSidebarOpen:i}=(0,a.useAppProvider)();return(0,l.jsx)(f(),{className:"block text-slate-200 hover:text-white transition duration-150 truncate ".concat(n===s?"group-[.is-link-group]:text-indigo-500":"group-[.is-link-group]:text-slate-400 hover:text-slate-200 hover:group-[.is-link-group]:text-slate-200"),href:s,onClick:()=>i(!1),children:t})}function b(){return(0,l.jsx)(f(),{className:"block",href:"/",children:(0,l.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 623 621",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},children:(0,l.jsx)("g",{transform:"matrix(1,0,0,1,0,-1756.55)",children:(0,l.jsxs)("g",{transform:"matrix(0.324313,0,0,0.574978,0,1756.55)",children:[(0,l.jsx)("rect",{id:"Green-Thick-No-Text",x:"0",y:"0",width:"1920",height:"1080",style:{fill:"none"}}),(0,l.jsx)("clipPath",{id:"_clip1",children:(0,l.jsx)("rect",{id:"Green-Thick-No-Text1",x:"0",y:"0",width:"1920",height:"1080"})}),(0,l.jsx)("g",{"clip-path":"url(#_clip1)",children:(0,l.jsxs)("g",{transform:"matrix(3.08344,0,0,1.7392,-2001.19,-398.296)",children:[(0,l.jsx)("g",{transform:"matrix(1,0,0,1,55.3182,28.483)",children:(0,l.jsx)("circle",{cx:"904.682",cy:"511.517",r:"310.488",style:{fill:"rgb(3,140,76)",stroke:"black",strokeWidth:"1px"}})}),(0,l.jsx)("g",{transform:"matrix(0.968055,0,0,0.968055,84.2182,44.8234)",children:(0,l.jsx)("circle",{cx:"904.682",cy:"511.517",r:"310.488",style:{fill:"none",stroke:"rgb(242,242,242)",strokeWidth:"6.9px"}})}),(0,l.jsx)("g",{transform:"matrix(0.560114,0,0,0.560114,763.958,383.168)",children:(0,l.jsx)("path",{d:"M649.27,301.84L585.692,301.199L585.692,43.029L649.911,43.029C661.47,43.029 671.102,33.397 671.102,21.838C671.102,10.279 661.469,0.647 649.911,0.647L478.451,0.003L477.81,0.003C475.24,0.003 472.674,0.643 470.748,1.288C467.533,3.214 465.607,4.499 463.037,6.425L255.607,214.495L50.097,214.495C38.538,214.495 28.906,224.128 28.906,235.686C28.906,247.244 38.539,256.877 50.097,256.877L114.316,256.877L114.316,516.967L50.097,516.967C38.538,516.971 28.906,526.603 28.906,538.807C28.906,551.01 38.539,559.998 50.097,559.998L263.947,559.998C269.728,559.998 274.865,557.427 279.361,553.576L487.431,344.216L649.911,344.216C661.47,344.216 671.102,333.943 671.102,322.38C671.106,310.821 660.829,301.189 649.27,301.833L649.27,301.84ZM477.8,303.125C472.019,303.125 466.882,305.695 463.03,309.547L255.6,516.977L157.342,516.977L157.342,256.887L264.592,256.887C270.373,256.887 275.51,254.317 280.006,250.465L487.436,43.035L542.666,43.035L542.666,303.765L477.8,303.125Z",style:{fill:"rgb(242,242,242)",fillRule:"nonzero"}})})]})})]})})})})}function v(){let e=(0,n.useRef)(null),{sidebarOpen:t,setSidebarOpen:s}=(0,a.useAppProvider)(),[c,d]=(0,n.useState)(!1),o=(0,r.useSelectedLayoutSegments)(),[x,h]=(0,n.useState)(u()),p=!c&&("lg"===x||"xl"===x);(0,n.useEffect)(()=>{let l=l=>{let{target:n}=l;e.current&&(!t||e.current.contains(n)||s(!1))};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)}),(0,n.useEffect)(()=>{let e=e=>{let{keyCode:l}=e;t&&27===l&&s(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)});let g=()=>{h(u())};return(0,n.useEffect)(()=>(window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}),[x]),(0,l.jsxs)("div",{className:"min-w-fit ".concat(c?"sidebar-expanded":""),children:[(0,l.jsx)(i.u,{className:"fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto",show:t,enter:"transition-opacity ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-out duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0","aria-hidden":"true"}),(0,l.jsxs)(i.u,{show:t,unmount:!1,as:"div",id:"sidebar",ref:e,className:"flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:[(0,l.jsxs)("div",{className:"flex justify-between mb-10 pr-3 sm:px-2",children:[(0,l.jsxs)("button",{className:"lg:hidden text-slate-500 hover:text-slate-400",onClick:()=>s(!t),"aria-controls":"sidebar","aria-expanded":t,children:[(0,l.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,l.jsx)("svg",{className:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"})})]}),(0,l.jsx)(b,{})]}),(0,l.jsx)("div",{className:"space-y-8",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("h3",{className:"text-xs uppercase text-slate-500 font-semibold pl-3",children:[(0,l.jsx)("span",{className:"hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6","aria-hidden":"true",children:"•••"}),(0,l.jsx)("span",{className:"lg:hidden lg:sidebar-expanded:block 2xl:block",children:"Pages"})]}),(0,l.jsx)("ul",{className:"mt-3",children:(0,l.jsx)(m,{open:o.includes("dashboard"),children:(e,t)=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{href:"#0",className:"block text-slate-200 truncate transition duration-150 ".concat(o.includes("dashboard")?"hover:text-slate-200":"hover:text-white"),onClick:t=>{t.preventDefault(),p?d(!0):e()},children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsxs)("svg",{className:"shrink-0 h-6 w-6",viewBox:"0 0 24 24",children:[(0,l.jsx)("path",{className:"fill-current ".concat(o.includes("dashboard")?"text-indigo-500":"text-slate-400"),d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"}),(0,l.jsx)("path",{className:"fill-current ".concat(o.includes("dashboard")?"text-indigo-600":"text-slate-600"),d:"M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"}),(0,l.jsx)("path",{className:"fill-current ".concat(o.includes("dashboard")?"text-indigo-200":"text-slate-400"),d:"M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"})]}),(0,l.jsx)("span",{className:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"UML Classes"})]}),(0,l.jsx)("div",{className:"flex shrink-0 ml-2",children:(0,l.jsx)("svg",{className:"w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ".concat(t&&"rotate-180"),viewBox:"0 0 12 12",children:(0,l.jsx)("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"})})})]})}),(0,l.jsx)("div",{className:"lg:hidden lg:sidebar-expanded:block 2xl:block",children:(0,l.jsx)("ul",{className:"pl-9 mt-1 ".concat(!t&&"hidden"),children:(0,l.jsx)("li",{className:"mb-1 last:mb-0",children:(0,l.jsx)(j,{href:"/dashboard",children:(0,l.jsx)("span",{className:"text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"List"})})})})})]})})})]})}),(0,l.jsx)("div",{className:"pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto",children:(0,l.jsx)("div",{className:"px-3 py-2",children:(0,l.jsxs)("button",{onClick:()=>d(!c),children:[(0,l.jsx)("span",{className:"sr-only",children:"Expand / collapse sidebar"}),(0,l.jsxs)("svg",{className:"w-6 h-6 fill-current sidebar-expanded:rotate-180",viewBox:"0 0 24 24",children:[(0,l.jsx)("path",{className:"text-slate-400",d:"M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"}),(0,l.jsx)("path",{className:"text-slate-600",d:"M3 23H1V1h2z"})]})]})})})]})]})}},9079:function(e,t,s){let l=s(3787);e.exports={content:["./app/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],darkMode:"class",theme:{extend:{boxShadow:{DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)"},outline:{blue:"2px solid rgba(0, 112, 244, 0.5)"},fontFamily:{inter:["var(--font-inter)","sans-serif"]},fontSize:{xs:["0.75rem",{lineHeight:"1.5"}],sm:["0.875rem",{lineHeight:"1.5715"}],base:["1rem",{lineHeight:"1.5",letterSpacing:"-0.01em"}],lg:["1.125rem",{lineHeight:"1.5",letterSpacing:"-0.01em"}],xl:["1.25rem",{lineHeight:"1.5",letterSpacing:"-0.01em"}],"2xl":["1.5rem",{lineHeight:"1.33",letterSpacing:"-0.01em"}],"3xl":["1.88rem",{lineHeight:"1.33",letterSpacing:"-0.01em"}],"4xl":["2.25rem",{lineHeight:"1.25",letterSpacing:"-0.02em"}],"5xl":["3rem",{lineHeight:"1.25",letterSpacing:"-0.02em"}],"6xl":["3.75rem",{lineHeight:"1.2",letterSpacing:"-0.02em"}]},screens:{xs:"480px"}}},plugins:[s(3759),l(e=>{let{addVariant:t,e:s}=e;t("sidebar-expanded",e=>{let{modifySelectors:t,separator:l}=e;t(e=>{let{className:t}=e;return".sidebar-expanded .".concat(s("sidebar-expanded".concat(l).concat(t)))})})})]}}}]);