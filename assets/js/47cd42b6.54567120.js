"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8008],{869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(85893),r=n(11151);const i={title:"Architecture",slug:"/developer/architecture",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},a=void 0,l={id:"developer/overview/architecture",title:"Architecture",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",source:"@site/docs/developer/01-overview/01-architecture.md",sourceDirName:"developer/01-overview",slug:"/developer/architecture",permalink:"/developer/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/developer/01-overview/01-architecture.md",tags:[],version:"current",lastUpdatedBy:"Louis",lastUpdatedAt:1706156083,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:1,frontMatter:{title:"Architecture",slug:"/developer/architecture",description:"Jan is a ChatGPT-alternative that runs on your own computer, with a local API server.",keywords:["Jan AI","Jan","ChatGPT alternative","local AI","private AI","conversational AI","no-subscription fee","large language model"]},sidebar:"developerSidebar",previous:{title:"Overview",permalink:"/developer"},next:{title:"File-based Approach",permalink:"/developer/file-based"}},d={},o=[{value:"Overview",id:"overview",level:2},{value:"Extensions",id:"extensions",level:2},{value:"Modules",id:"modules",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This page is still under construction, and should be read as a scratchpad"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Jan has a modular architecture and is largely built on top of its own modules."}),"\n",(0,s.jsxs)(t.li,{children:["Jan uses a local ",(0,s.jsx)(t.a,{href:"/developer/file-based",children:"file-based approach"})," for data persistence."]}),"\n",(0,s.jsxs)(t.li,{children:["Jan provides an Electron-based ",(0,s.jsx)(t.a,{href:"https://github.com/janhq/jan",children:"Desktop UI"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Jan provides an embeddable inference engine, written in C++, called ",(0,s.jsx)(t.a,{href:"https://nitro.jan.ai/docs/",children:"Nitro"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"extensions",children:"Extensions"}),"\n",(0,s.jsx)(t.p,{children:"Jan has an Extensions API inspired by VSCode. In fact, most of Jan's core services are built as extensions."}),"\n",(0,s.jsx)(t.p,{children:"Jan supports the following OpenAI compatible extensions:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Jan Module"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"API Docs"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Chat"}),(0,s.jsx)(t.td,{children:"Inference"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api-reference/#tag/Chat-Completion",children:"/chats"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Models"}),(0,s.jsx)(t.td,{children:"Models"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api-reference/#tag/Models",children:"/models"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Assistants"}),(0,s.jsx)(t.td,{children:"Apps"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api-reference/#tag/Assistants",children:"/assistants"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Threads"}),(0,s.jsx)(t.td,{children:"Conversations"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api-reference/#tag/Threads",children:"/threads"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Messages"}),(0,s.jsx)(t.td,{children:"Messages"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api-reference/#tag/Messages",children:"/messages"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"modules",children:"Modules"}),"\n",(0,s.jsx)(t.p,{children:"Modules are low level, system services. It is similar to OS kernel modules. Modules provide abstractions to basic, device level functionality like working with the filesystem, device system, databases, AI inference engines, etc."}),"\n",(0,s.jsxs)(t.p,{children:["Jan follows the ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Dependency_inversion_principle",children:"dependency inversion principle"})," such that ",(0,s.jsx)(t.code,{children:"modules"})," expose the interfaces that ",(0,s.jsx)(t.code,{children:"extensions"})," can then implement."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);