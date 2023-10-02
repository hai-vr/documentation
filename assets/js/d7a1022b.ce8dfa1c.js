"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Non-Destructive Dependencies"},o="Non-Destructive Dependencies",s={unversionedId:"products/vixen/non-destructive-dependencies",id:"products/vixen/non-destructive-dependencies",title:"Non-Destructive Dependencies",description:"This page is only destined for module developers.",source:"@site/docs/products/vixen/non-destructive-dependencies.md",sourceDirName:"products/vixen",slug:"/products/vixen/non-destructive-dependencies",permalink:"/docs/products/vixen/non-destructive-dependencies",draft:!1,tags:[],version:"current",frontMatter:{title:"Non-Destructive Dependencies"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd12 Vixen Control",permalink:"/docs/products/vixen/"}},l={},c=[{value:"Vixen Cache Object Default State",id:"vixen-cache-object-default-state",level:2},{value:"Vixen Create Animations",id:"vixen-create-animations",level:2},{value:"Vixen Intermodule",id:"vixen-intermodule",level:2},{value:"Vixen Create Modular Avatar Components",id:"vixen-create-modular-avatar-components",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"non-destructive-dependencies"},"Non-Destructive Dependencies"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This page is only destined for module developers.")),(0,a.kt)("p",null,"The following sections describe parts of the Vixen Processor."),(0,a.kt)("mermaid",{value:"graph TD;\n%%{init:{'flowchart':{'nodeSpacing': 80, 'rankSpacing': 30}}}%%\n    VRCF_FOS[VRCFury Force Object State]:::vrcf --\x3e |Scene state ready|V_CODS[Vixen Cache Object Default State]:::vixen;\n    V_CODS --\x3e |Properties cached|V_CA[Vixen Create Animations]:::vixen;\n    V_CA --\x3e |Animations generated|V_IM[Vixen Intermodule]:::vixen;\n    V_CA --\x3e |Animations generated|V_CAR[Vixen Create Animators]:::vixen;\n    V_AC[Vixen As Code]:::vixen --\x3e |Blend trees and animators generated|V_CAR;\n    V_IM --\x3e |Animation assets exported|VRCF_T[VRCFury Toggle]:::vrcf;\n    V_CAR --\x3e |Animators generated|V_CMAC[Vixen Create Modular Avatar Components]:::vixen;\n    V_CMAC --\x3e |Merge Animator declared|MA_MA[Modular Avatar Merge Armature]:::ma;\n    V_CMAC --\x3e |Merge Animator declared|MA_BP[Modular Avatar Bone Proxy]:::ma;\n    MA_MA --\x3e |Objects at their final locations|MergeAnimators;\n    MA_BP --\x3e |Objects at their final locations|MergeAnimators;\n    VRCF_T --\x3e |Toggle fully declared|MergeAnimators;\n    subgraph MergeAnimators[Merge Animators]\n        direction LR\n        VRCF_FC[VRCFury Full Controller]:::vrcf --- MA_MAA[Modular Avatar Merge Animator]:::ma;\n    end\n    MergeAnimators --\x3e |Playable layers generated|Optimizers:::optsub;\n    subgraph Optimizers\n        direction LR\n        DARK[d4rkpl4y3r's Avatar Optimizer]:::opt --- ANAT[Anatawa12's Avatar Optimizer]:::ma;\n        ANAT:::opt --- VRCF_DTO[VRCFury Direct Tree Optimizer]:::vrcf;\n    end\n    \n    classDef vrcf fill:#FDC,stroke:#CBA\n    classDef vixen fill:#FCF,stroke:#CAC\n    classDef ma fill:#CCF,stroke:#AAC\n    classDef opt fill:#CCC,stroke:#777\n    classDef optsub fill:#EEE,stroke:#AAA"}),(0,a.kt)("h2",{id:"vixen-cache-object-default-state"},"Vixen Cache Object Default State"),(0,a.kt)("p",null,"This is part of the main Vixen Processor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vixen will cache all needed object default states, which will be used to generate animations for the inactive states (i.e. when a toggle is turned off).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This includes material changes, as the default values within those materials will be sampled."),(0,a.kt)("li",{parentName:"ul"},"This includes turning on or off GameObject or Components."),(0,a.kt)("li",{parentName:"ul"},"Vixen does not treat objects differently whether they're tagged EditorOnly or not in the scene."))),(0,a.kt)("li",{parentName:"ul"},"For this reason, Vixen needs to run ",(0,a.kt)("em",{parentName:"li"},"after")," properties are changed in the scene.")),(0,a.kt)("h2",{id:"vixen-create-animations"},"Vixen Create Animations"),(0,a.kt)("p",null,"This is part of the main Vixen Processor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vixen uses GetComponentsInChildren to find components to animate, when the Selection setting of an object group is set to Everything or Recursive Search."),(0,a.kt)("li",{parentName:"ul"},"The behaviour of GetComponentsInChildren should be based on the structure of the avatar hierarchy during Edit mode. "),(0,a.kt)("li",{parentName:"ul"},"For this reason, Vixen needs to run ",(0,a.kt)("em",{parentName:"li"},"before")," other modules rearrange the structure of the avatar hierarchy in such a way that GetComponentsInChildren would return different results.")),(0,a.kt)("h2",{id:"vixen-intermodule"},"Vixen Intermodule"),(0,a.kt)("p",null,"This is part of the main Vixen Processor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vixen exports animations into known asset references for other modules to use."),(0,a.kt)("li",{parentName:"ul"},"For this reason, Vixen needs to run ",(0,a.kt)("em",{parentName:"li"},"before")," other modules that rely on those asset references.")),(0,a.kt)("h2",{id:"vixen-create-modular-avatar-components"},"Vixen Create Modular Avatar Components"),(0,a.kt)("p",null,"This is part of the main Vixen Processor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vixen creates Modular Avatar components to be used by Modular Avatar."),(0,a.kt)("li",{parentName:"ul"},"For this reason, Vixen needs to run ",(0,a.kt)("em",{parentName:"li"},"before")," Modular Avatar.")))}p.isMDXComponent=!0}}]);