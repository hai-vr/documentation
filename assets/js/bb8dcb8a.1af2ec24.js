"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5613],{54389:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>_,default:()=>d,frontMatter:()=>h,metadata:()=>o,toc:()=>c});var i=t(74848),r=t(28453),s=t(89618),n=t(85041);const h={},_="\ud83d\udcac Blank Gesture Animator",o={id:"products/prefabulous/vrchat/blank-gesture-animator",title:"\ud83d\udcac Blank Gesture Animator",description:"Replaces the Gesture animator of the avatar with a blank one, as early as possible.",source:"@site/docs/products/prefabulous/vrchat/blank-gesture-animator.md",sourceDirName:"products/prefabulous/vrchat",slug:"/products/prefabulous/vrchat/blank-gesture-animator",permalink:"/docs/products/prefabulous/vrchat/blank-gesture-animator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcac Blank FX Animator",permalink:"/docs/products/prefabulous/vrchat/blank-fx-animator"},next:{title:"\ud83d\udcac HaiXT Face Tracking Extensions",permalink:"/docs/products/prefabulous/vrchat/haixt-face-tracking-extensions"}},l={},c=[{value:"Versions",id:"versions",level:2}];function u(a){const e={admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...a.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"-blank-gesture-animator",children:"\ud83d\udcac Blank Gesture Animator"}),"\n",(0,i.jsx)(s.w,{children:(0,i.jsx)(n.F,{requiresVRChat:!0})}),"\n",(0,i.jsx)(e.p,{children:"Replaces the Gesture animator of the avatar with a blank one, as early as possible."}),"\n",(0,i.jsx)(e.p,{children:"This ensures that Gesture layers created by other non-destructive tooling will begin with a blank state."}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"This component exists so that you can drop a prefab containing this component into an avatar in order to reset it,\nwithout having to modify the original avatar descriptor by hand."})}),"\n",(0,i.jsx)(e.h2,{id:"versions",children:"Versions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"1.10.0"}),": Blank Gesture Animator now generates one animator layer that VRChat requires, instead of zero layers."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"1.2.0"}),": Added."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["Classification: ",(0,i.jsxs)(e.em,{children:["This component is ",(0,i.jsx)(e.strong,{children:"\ud83d\udcac VRChat Only"}),"."]})]})]})}function d(a={}){const{wrapper:e}={...(0,r.R)(),...a.components};return e?(0,i.jsx)(e,{...a,children:(0,i.jsx)(u,{...a})}):u(a)}},85041:(a,e,t)=>{t.d(e,{F:()=>n});t(96540);var i=t(20053);const r={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var s=t(74848);function n(a){let{requiresVRChat:e,isUniversal:t,requiresBasis:n,notVRChat:h,requiresResonite:_,requiresSteamVR:o,requiresChilloutVR:l,requiresVRM:c,compatibleWithVSFAvatar:u,compatibleWithVSeeFace:d,compatibleWithWarudo:m,compatibleWithBeatSaber:g,requiresWarudo:p,notCompatibleWithGltf:v,compatibleWithVNyan:b,short:x,supporter:j}=a,w=x?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Compatible with "}),f=x?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Requires "});return(0,s.jsxs)("span",{children:[e?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_vrchat),children:["\ud83d\udcac ",f,"VRChat"]}):"",_?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_resonite),children:["\u26a1 ",f,"Resonite"]}):"",n?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_basis),children:["\ud83d\udd3a ",f,"Basis"]}):"",c?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",f,"VRM"]}):"",o?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_steamvr),children:[f,"SteamVR"]}):"",l?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",f,"ChilloutVR"]}):"",u?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[w,"VSFAvatar"]}):"",d?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[w,"VSeeFace"]}):"",b?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_vnyan),children:[w,"VNyan"]}):"",m?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:[w,"Warudo"]}):"",g?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_beatsaber),children:[w,"Beat Saber"]}):"",v?(0,s.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",p?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:["\ud83d\udcf9 ",f,"Warudo"]}):"",t?(0,s.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",h?(0,s.jsx)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",j?(0,s.jsxs)("div",{className:(0,i.A)(r.hai_tag,r.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,s.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(a,e,t)=>{t.d(e,{w:()=>r});t(96540);var i=t(74848);function r(a){let{children:e}=a;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:e})})}}}]);