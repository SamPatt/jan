"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Anatomy of \ud83d\udc4bJan"},o=void 0,s={unversionedId:"developers/apps/app-anatomy",id:"developers/apps/app-anatomy",title:"Anatomy of \ud83d\udc4bJan",description:"This page explains all the architecture of Jan.",source:"@site/docs/developers/apps/app-anatomy.md",sourceDirName:"developers/apps",slug:"/developers/apps/app-anatomy",permalink:"/developers/apps/app-anatomy",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/developers/apps/app-anatomy.md",tags:[],version:"current",lastUpdatedBy:"Daniel",lastUpdatedAt:1699109684,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{title:"Anatomy of \ud83d\udc4bJan"},sidebar:"devSidebar",previous:{title:"Nitro",permalink:"/nitro"},next:{title:"Build an app",permalink:"/developers/apps/build-an-app"}},l={},p=[{value:"Synchronous architecture",id:"synchronous-architecture",level:2},{value:"Overview",id:"overview",level:3},{value:"BackEnd and FrontEnd",id:"backend-and-frontend",level:3},{value:"Plugins and Apps",id:"plugins-and-apps",level:3},{value:"Asynchronous architecture",id:"asynchronous-architecture",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Components",id:"components",level:3},{value:"Results",id:"results",level:4},{value:"Events",id:"events",level:4},{value:"Plugins",id:"plugins",level:4},{value:"Flow",id:"flow",level:3},{value:"Jan workflow",id:"jan-workflow",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Prompt Template",id:"prompt-template",level:3},{value:"Large Language Model",id:"large-language-model",level:3},{value:"Output Parser",id:"output-parser",level:3},{value:"Apps",id:"apps",level:3},{value:"Jan Platform",id:"jan-platform",level:2},{value:"Overview",id:"overview-3",level:3},{value:"FrontEnd",id:"frontend",level:4},{value:"Middleware",id:"middleware",level:4},{value:"BackEnd",id:"backend",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page explains all the architecture of ",(0,r.kt)("a",{parentName:"p",href:"https://Jan/"},"Jan"),"."),(0,r.kt)("h2",{id:"synchronous-architecture"},"Synchronous architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Synchronous architecture",src:a(8669).Z,width:"621",height:"371"})),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The architecture of the Jan application is designed to provide a seamless experience for the users while also being modular and extensible."),(0,r.kt)("h3",{id:"backend-and-frontend"},"BackEnd and FrontEnd"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BackEnd:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The BackEnd serves as the brain of the application. It processes the information, performs computations, and manages the main logic of the system.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is like an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Operating_system"},"OS (Operating System)")," in the computer.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FrontEnd:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The FrontEnd is the interface that users interact with. It takes user inputs, displays results, and communicates with the BackEnd through Inter-process communication bi-directionally.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is like ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," application")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inter-process communication:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A mechanism that allows the BackEnd and FrontEnd to communicate in real time. It ensures that data flows smoothly between the two, facilitating rapid response and dynamic updates.")),(0,r.kt)("h3",{id:"plugins-and-apps"},"Plugins and Apps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Plugins:")),(0,r.kt)("p",null,"In Jan, Plugins contains all the core features. They could be Core Plugins or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/janhq/nitro"},"Nitro")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Load:")," This denotes the initialization and activation of a plugin when the application starts or when a user activates it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Implement:"),' This is where the main functionality of the plugin resides. Developers code the desired features and functionalities here. This is a "call to action" feature.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dispose:")," After the plugin's task is completed or deactivated, this function ensures that it releases any resources it uses, providing optimal performance and preventing memory leaks."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is like ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/VSCode"},"Extensions")," in VSCode.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apps:")),(0,r.kt)("p",null,"Apps are basically Plugin-like. However, Apps can be built by users for their own purposes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, users can build a ",(0,r.kt)("inlineCode",{parentName:"p"},"Personal Document RAG App")," to chat with specific documents or articles.")),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"Plugins and Apps"),", users can build a broader ecosystem surrounding Jan."),(0,r.kt)("h2",{id:"asynchronous-architecture"},"Asynchronous architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Asynchronous architecture",src:a(8669).Z,width:"621",height:"371"})),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("p",null,"The asynchronous architecture allows Jan to handle multiple operations simultaneously without waiting for one to complete before starting another. This results in a more efficient and responsive user experience. The provided diagram breaks down the primary components and their interactions."),(0,r.kt)("h3",{id:"components"},"Components"),(0,r.kt)("h4",{id:"results"},"Results"),(0,r.kt)("p",null,"After processing certain tasks or upon specific triggers, the backend can broadcast the results. This could be a processed data set, a calculated result, or any other output that needs to be shared."),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)("p",null,"Similar to broadcasting results but oriented explicitly towards events. This could include user actions, system events, or notifications that other components should be aware of."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Notify:"))),(0,r.kt)("p",null,"Upon the conclusion of specific tasks or when particular triggers are activated, the system uses the Notify action to send out notifications from the ",(0,r.kt)("strong",{parentName:"p"},"Results"),". The Notify action is the conduit through which results are broadcasted asynchronously, whether they concern task completions, errors, updates, or any processed data set."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Listen:"))),(0,r.kt)("p",null,"Here, the BackEnd actively waits for incoming data or events. It is geared towards capturing inputs from users or updates from plugins."),(0,r.kt)("h4",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,'These are modular components or extensions designed to enhance the application\'s functionalities. Each plugin possesses a "Listen" action, enabling it to stand by for requests emanating from user inputs.'),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Input is provided by the user or an external source."),(0,r.kt)("li",{parentName:"ol"},"This input is broadcasted as an event into the ",(0,r.kt)("strong",{parentName:"li"},"Broadcast event"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"BackEnd")," processes the event. Depending on the event, it might interact with one or several Plugins."),(0,r.kt)("li",{parentName:"ol"},"Once processed, ",(0,r.kt)("strong",{parentName:"li"},"Broadcast result")," can be sent out asynchronously through multiple notifications via Notify action.")),(0,r.kt)("h2",{id:"jan-workflow"},"Jan workflow"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workflow",src:a(8763).Z,width:"1221",height:"409"})),(0,r.kt)("h3",{id:"overview-2"},"Overview"),(0,r.kt)("p",null,'The architecture of the Jan desktop application is structured into four primary modules: "Prompt Template," "Language Model," "Output Parser," and "Apps." Let\'s break down each module and understand its components.'),(0,r.kt)("h3",{id:"prompt-template"},"Prompt Template"),(0,r.kt)("p",null,"This is where predefined templates are stored. It sets the format and structure for user interactions. It contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Character's definition:"))),(0,r.kt)("p",null,"Definitions of various characters or entities that may be interacted with or invoked during user requests (e.g., name, personality, and communication style)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model's definition:"))),(0,r.kt)("p",null,"Definitions related to the different language models (e.g., objectives, capabilities, and constraints)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples:"))),(0,r.kt)("p",null,"Sample inputs and outputs for guidance. If given good examples, LLM could enable basic reasoning or planning skills."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Input:"))),(0,r.kt)("p",null,"The actual user query or request that is being processed."),(0,r.kt)("h3",{id:"large-language-model"},"Large Language Model"),(0,r.kt)("p",null,"This processes the input provided."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Local models:"))),(0,r.kt)("p",null,"These are the downloaded models that reside within the system. They can process requests without the need to connect to external resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenAI:"))),(0,r.kt)("p",null,"This will connect you with OpenAI API, allowing the application to utilize powerful models like GPT-3.5 and GPT-4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use OpenAI models, you must have an OpenAI account and secret key. You can get your ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"OpenAI key")," here.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom Agents:"))),(0,r.kt)("p",null,"These are user-defined or third-party models that can be integrated into the Jan system for specific tasks."),(0,r.kt)("h3",{id:"output-parser"},"Output Parser"),(0,r.kt)("p",null,"Language models produce textual content. However, often, there's a need for more organized data instead of plain text. This is achieved using output parsers."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parser:"))),(0,r.kt)("p",null,"This component ensures that the output conforms to the desired structure and format, removing unwanted information or errors."),(0,r.kt)("h3",{id:"apps"},"Apps"),(0,r.kt)("p",null,"This represents applications or extensions that can be integrated with Jan."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Characters:")," Characters or entities that can be utilized within the applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Models:")," Different Large Language Models, Large Multimodal Models, and Stable Diffusion models that the apps might use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RAG:"),' Represents a "Retrieval Augmented Generation" functionality, which helps in fetching relevant data and generating responses based on it.'))),(0,r.kt)("h2",{id:"jan-platform"},"Jan Platform"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Platform",src:a(6214).Z,width:"1261",height:"421"})),(0,r.kt)("h3",{id:"overview-3"},"Overview"),(0,r.kt)("p",null,"The architecture of Jan can be thought of as a layered system, comprising of the FrontEnd, Middleware, and BackEnd. Each layer has distinct components and responsibilities, ensuring a modular and scalable approach."),(0,r.kt)("h4",{id:"frontend"},"FrontEnd"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"FrontEnd")," is the visible part of Jan that interacts directly with the user."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Controller:")," This is the main control unit of the FrontEnd. It processes the user's inputs, handles UI events, and communicates with other layers to fetch or send data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apps:")," This represents applications or extensions that can be integrated with Jan.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Execute Request")," act as the initial triggers to initiate processes within the application."))),(0,r.kt)("h4",{id:"middleware"},"Middleware"),(0,r.kt)("p",null,"It's a bridge between the FrontEnd and BackEnd. It's responsible for translating requests and ensuring smooth data flow."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SDK:")," Stands for Software Development Kit. It provides a set of tools, libraries, and guidelines for developers to build and integrate custom applications or features with Jan.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Core:")," It's tasked with managing the connections between the FrontEnd and BackEnd. It ensures data is routed correctly and efficiently between the two.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Local Native:")," Refers to the connectors that enable communication with local services or applications. This will use your own hardware to ddeploy models.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cloud Native:")," As the name suggests, these connectors are tailored for cloud-based interactions, allowing Jan to leverage cloud services or interact with other cloud-based applications."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Middleware communicates with the BackEnd primarily through ",(0,r.kt)("strong",{parentName:"p"},"IPC")," for Local and ",(0,r.kt)("strong",{parentName:"p"},"Http")," for Cloud.")),(0,r.kt)("h4",{id:"backend"},"BackEnd"),(0,r.kt)("p",null,"It is responsible for data processing, storage, and other core functionalities."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Plugins:")," Extendable modules that can be added to the Jan system to provide additional functionalities or integrations with third-party applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nitro:")," This is a high-performance engine or a set of services that power specific functionalities within Jan. Given its placement in the architecture, it's reasonable to assume that Nitro provides acceleration or optimization capabilities for tasks."))))}d.isMDXComponent=!0},8669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arch-async.drawio-5277ec3e2db7a0ec9cc12489ef570b88.png"},6214:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arch-connection.drawio-37ef76f897a1f264508132c9d190fdb7.png"},8763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/arch-flow.drawio-b4f72f6eaab5bb158d389334f3a2fda1.png"}}]);