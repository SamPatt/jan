"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"Nitro",slug:"/nitro"},i=void 0,l={unversionedId:"nitro/nitro",id:"nitro/nitro",title:"Nitro",description:"Nitro, is the inference engine that powers Jan. Nitro is written in C++, optimized for edge deployment.",source:"@site/docs/nitro/nitro.md",sourceDirName:"nitro",slug:"/nitro",permalink:"/nitro",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/nitro/nitro.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1699109684,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{title:"Nitro",slug:"/nitro"},sidebar:"devSidebar",previous:{title:"Overview",permalink:"/developers/"},next:{title:"Anatomy of \ud83d\udc4bJan",permalink:"/developers/apps/app-anatomy"}},p={},s=[{value:"Dependencies and Acknowledgements:",id:"dependencies-and-acknowledgements",level:2},{value:"Features",id:"features",level:2},{value:"HTTP Interface",id:"http-interface",level:2},{value:"Using Nitro",id:"using-nitro",level:2},{value:"Architecture diagram",id:"architecture-diagram",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nitro, is the inference engine that powers Jan. Nitro is written in C++, optimized for edge deployment."),(0,a.kt)("p",null,"\u26a1 Explore Nitro's codebase: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/janhq/nitro"},"GitHub")),(0,a.kt)("h2",{id:"dependencies-and-acknowledgements"},"Dependencies and Acknowledgements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ggerganov/llama.cpp"},"llama.cpp"),": Nitro wraps Llama.cpp, which runs Llama models in C++"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/drogonframework/drogon"},"drogon"),": Nitro runs Drogon, which is a fast, C++17/20 HTTP application framework."),(0,a.kt)("li",{parentName:"ul"},"(Coming soon) tensorrt-llm support.")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"In addition to the above features, Nitro also provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OpenAI compatibility"),(0,a.kt)("li",{parentName:"ul"},"HTTP interface with no bindings needed"),(0,a.kt)("li",{parentName:"ul"},"Runs as a separate process, not interfering with main app processes"),(0,a.kt)("li",{parentName:"ul"},"Multi-threaded server supporting concurrent users"),(0,a.kt)("li",{parentName:"ul"},"1-click install"),(0,a.kt)("li",{parentName:"ul"},"No hardware dedendencies"),(0,a.kt)("li",{parentName:"ul"},"Ships as a small binary (~3mb compressed on average)"),(0,a.kt)("li",{parentName:"ul"},"Runs on Windows, MacOS, and Linux"),(0,a.kt)("li",{parentName:"ul"},"Compatible with arm64, x86, and NVIDIA GPUs")),(0,a.kt)("h2",{id:"http-interface"},"HTTP Interface"),(0,a.kt)("p",null,"Nitro offers a straightforward HTTP interface. With compatibility for multiple standard APIs, including OpenAI formats."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location \'http://localhost:3928/inferences/llamacpp/chat_completion\' \\\n      --header \'Content-Type: application/json\' \\\n      --header \'Accept: text/event-stream\' \\\n      --header \'Access-Control-Allow-Origin: *\' \\\n      --data \'{\n         "messages": [\n            {"content": "Hello there \ud83d\udc4b", "role": "assistant"},\n            {"content": "Can you write a long story", "role": "user"}\n         ],\n         "stream": true,\n         "model": "gpt-3.5-turbo",\n         "max_tokens": 2000\n      }\'\n')),(0,a.kt)("h2",{id:"using-nitro"},"Using Nitro"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1: Obtain Nitro"),":",(0,a.kt)("br",{parentName:"p"}),"\n","Access Nitro binaries from the release page.",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/janhq/nitro/releases"},"Download Nitro")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2: Source a Model"),":",(0,a.kt)("br",{parentName:"p"}),"\n",'For those interested in the llama C++ integration, obtain a "GGUF" model from The Bloke\'s repository.',(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\udd17 ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/TheBloke"},"Download Model")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3: Initialize Nitro"),":",(0,a.kt)("br",{parentName:"p"}),"\n","Launch Nitro and position your model using the following API call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'http://localhost:3928/inferences/llamacpp/loadmodel\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "llama_model_path": "/path/to/your_model.gguf",\n    "ctx_len": 2048,\n    "ngl": 100,\n    "embedding": true\n  }\'\n')),(0,a.kt)("h2",{id:"architecture-diagram"},"Architecture diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Nitro Architecture",src:n(7629).Z,width:"3618",height:"1394"})))}d.isMDXComponent=!0},7629:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-12cafc3dadf28635070bfeb9493a4817.png"}}]);