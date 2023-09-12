"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Corrections",s={unversionedId:"products/combo-gesture-expressions/additional-pages/corrections",id:"products/combo-gesture-expressions/additional-pages/corrections",title:"Corrections",description:"This section is not a tutorial, but an explanation of the various corrections that ComboGestureExpressions provides.",source:"@site/docs/products/combo-gesture-expressions/additional-pages/corrections.md",sourceDirName:"products/combo-gesture-expressions/additional-pages",slug:"/products/combo-gesture-expressions/additional-pages/corrections",permalink:"/docs/products/combo-gesture-expressions/additional-pages/corrections",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What's new in V2",permalink:"/docs/products/combo-gesture-expressions/v2.0-whats-new"},next:{title:"Integrator",permalink:"/docs/products/combo-gesture-expressions/additional-pages/integrator"}},l={},c=[{value:"Exhaustive animation curves",id:"exhaustive-animation-curves",level:4},{value:"GestureWeight transition correction",id:"gestureweight-transition-correction",level:4},{value:"GestureWeight smoothing correction",id:"gestureweight-smoothing-correction",level:4},{value:"Disabling blinking animation",id:"disabling-blinking-animation",level:4},{value:"Single-keyframe animations correction",id:"single-keyframe-animations-correction",level:4},{value:"Automatic FX Avatar Mask generation",id:"automatic-fx-avatar-mask-generation",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"corrections"},"Corrections"),(0,i.kt)("p",null,"This section is not a tutorial, but an explanation of the various corrections that ComboGestureExpressions provides."),(0,i.kt)("h4",{id:"exhaustive-animation-curves"},"Exhaustive animation curves"),(0,i.kt)("p",null,"The animations you provide are not used directly in animators: I create modified copies of those animations in order to prevent several issues from happening:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There is an issue if the FX layer contains specific states which will mess up the appearance of your face expressions ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/hai-vr/combo-gesture-expressions-av3/issues/22"},"depending on the framerate")," of the person looking at you."),(0,i.kt)("li",{parentName:"ul"},"There is an issue when wiggling a puppet menu too quickly, which will mess up the appearance of your face expressions.")),(0,i.kt)("p",null,"The applied fix is to make sure all FX layer animations will always modify all animated curves. "),(0,i.kt)("h4",{id:"gestureweight-transition-correction"},"GestureWeight transition correction"),(0,i.kt)("p",null,"GestureWeight value depends on how much the trigger is squeezed when the hand is doing a Fist gesture. The value of GestureWeight will always be 1.0 if the hand is not a Fist."),(0,i.kt)("p",null,"This causes an issue right when the hand stops doing a Fist gesture: The animation will transition to another state, but the blend tree read the new GestureWeight value of 1.0 instantly. This causes the face expression to instantly change before the transition starts."),(0,i.kt)("p",null,"The applied fix is to copy the GestureWeight value only as long as the hand is doing a Fist gesture, effectively freezing the last known value when the Fist is no longer doing that gesture. This is done by using a technique with ",(0,i.kt)("em",{parentName:"p"},"Animated Animator Parameters"),", where an Animator parameter is animated using itself as the Normalized Time input."),(0,i.kt)("p",null,"This correction can be installed without ComboGestureExpressions using the ",(0,i.kt)("a",{parentName:"p",href:"./integrator"},"Integrator"),"."),(0,i.kt)("h4",{id:"gestureweight-smoothing-correction"},"GestureWeight smoothing correction"),(0,i.kt)("p",null,"The trigger squeezes smoothly when looking at yourself on mirrors and cameras."),(0,i.kt)("p",null,"However, when other players look at you, the animation looks laggy and jerky, it is not interpolated."),(0,i.kt)("p",null,"The applied fix is to smooth that value by performing a mathematical operation on the received GestureWeight:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SmoothedValue \u2190 TargetValue ",(0,i.kt)("em",{parentName:"p"}," SmoothingFactor + SmoothedValue ")," (1 - SmoothingFactor)")),(0,i.kt)("p",null,"This mathematical operation is implemented using several blend trees."),(0,i.kt)("p",null,"This correction can be installed without ComboGestureExpressions using the ",(0,i.kt)("a",{parentName:"p",href:"./integrator"},"Integrator"),"."),(0,i.kt)("h4",{id:"disabling-blinking-animation"},"Disabling blinking animation"),(0,i.kt)("p",null,"Blinking is detected by attaching an ",(0,i.kt)("em",{parentName:"p"},"Animated Animator Parameter")," to the animation. This parameter is set to 1.0 on all animations that are tagged as blinking, which is then read by a dedicated layer to disable eye tracking."),(0,i.kt)("h4",{id:"single-keyframe-animations-correction"},"Single-keyframe animations correction"),(0,i.kt)("p",null,"Some face expressions are animated over several frames, but some aren't when it's just a static face. For the latter, it is common practice to create animations with a one frame long, which consists on making sure the animation has two keyframes. This is done manually by duplicating the first keyframe."),(0,i.kt)("p",null,"If the animation only has one keyframe, then most of the times it makes the animation last 1 second, which creates an anomaly where face expression transitions last too long."),(0,i.kt)("p",null,"ComboGestureExpressions automatically creates a modified copy of those animations to make sure all animations curves have at least two keyframes. You can safely create animations with only one keyframe."),(0,i.kt)("h4",{id:"automatic-fx-avatar-mask-generation"},"Automatic FX Avatar Mask generation"),(0,i.kt)("p",null,"Due to the nature of Write Defaults OFF, an Avatar Mask is generated when Transform animations are needed. ",(0,i.kt)("a",{parentName:"p",href:"./writedefaults"},"The process of generating the Avatar mask is explained here"),"."))}m.isMDXComponent=!0}}]);