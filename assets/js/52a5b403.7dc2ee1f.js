"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||n;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={},s="FAQ",i={unversionedId:"products/double-hip-tracker/faq",id:"products/double-hip-tracker/faq",title:"FAQ",description:"What counts as a loss of tracking?",source:"@site/docs/products/double-hip-tracker/faq.md",sourceDirName:"products/double-hip-tracker",slug:"/products/double-hip-tracker/faq",permalink:"/docs/products/double-hip-tracker/faq",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Double Chest Tracker",permalink:"/docs/products/double-hip-tracker/double-chest-tracker"},next:{title:"Expressions Menu Hierarchy Editor",permalink:"/docs/products/expressions-menu-hierarchy-editor"}},l={},c=[{value:"What counts as a loss of tracking?",id:"what-counts-as-a-loss-of-tracking",level:3},{value:"Can it be used alongside IMU-based trackers/pose estimators?",id:"can-it-be-used-alongside-imu-based-trackerspose-estimators",level:3},{value:"Does it run on Unity?",id:"does-it-run-on-unity",level:3},{value:"Third party acknowledgements",id:"third-party-acknowledgements",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"what-counts-as-a-loss-of-tracking"},"What counts as a loss of tracking?"),(0,o.kt)("p",null,"Whenever a tracker loses sight of the lighthouses, or the tracker loses radio signal, or the tracker turns off, it is considered as a loss of tracking."),(0,o.kt)("p",null,"Double Hip Tracker only makes use of the internal tracker status provided by the driver to figure out if a tracker has been lost (",(0,o.kt)("inlineCode",{parentName:"p"},"Running_OK")," status)."),(0,o.kt)("p",null,"It doesn\u2019t guess if a tracker has been lost in any other way. In particular, if your room has reflective surfaces, or if SteamVR thinks the tracker is healthy but still incorrectly estimates the position of a tracker, Double Hip Tracker will not be able to help during those situations."),(0,o.kt)("h3",{id:"can-it-be-used-alongside-imu-based-trackerspose-estimators"},"Can it be used alongside IMU-based trackers/pose estimators?"),(0,o.kt)("p",null,"No, you should not use it alongside IMU-based trackers or pose estimators. The majority of IMU-based trackers rely on a pose estimator software, so any tracker mixing should be handled on that pose estimator software."),(0,o.kt)("p",null,"If your hip is driven by a lighthouse tracker, then the pose estimator must also reposition your feet accordingly, therefore it is the job of the pose estimator to take into account lighthouse trackers."),(0,o.kt)("p",null,"Also, this application has only been tested with lighthouse-based trackers. I do not know if this system works or not with ",(0,o.kt)("a",{parentName:"p",href:"https://developer.vive.com/resources/tracker/"},"self-tracking trackers"),"."),(0,o.kt)("h3",{id:"does-it-run-on-unity"},"Does it run on Unity?"),(0,o.kt)("p",null,"Double Hip Tracker is not an Unity application."),(0,o.kt)("p",null,"It is written in C#, and uses the OpenVR API directly, with a standalone math library."),(0,o.kt)("p",null,"The idea is to keep Double Hip Tracker as lightweight and as pragmatic as I can."),(0,o.kt)("h3",{id:"third-party-acknowledgements"},"Third party acknowledgements"),(0,o.kt)("p",null,"You can find third party acknowledgements here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.notion.so/Double-Hip-Tracker-Third-party-acknowledgements-cefe0ac8d42a4f5d9b2e3a8e4154b9e1?pvs=21"},"Double Hip Tracker: Third party acknowledgements")))}d.isMDXComponent=!0}}]);