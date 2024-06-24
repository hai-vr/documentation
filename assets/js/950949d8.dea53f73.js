"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8001],{41826:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>h,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453),r=t(89618),n=t(85041);const o={sidebar_position:6},h="Integration",c={id:"products/starmesh/examples",title:"Integration",description:"This documentation is currently being written.",source:"@site/docs/products/starmesh/examples.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/examples",permalink:"/docs/products/starmesh/examples",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Animation",permalink:"/docs/products/starmesh/animation"},next:{title:"FAQ",permalink:"/docs/products/starmesh/faq"}},d={},l=[{value:"Unity integration: Constraints",id:"unity-integration-constraints",level:2},{value:"VRChat integration: PhysBones and Contacts",id:"vrchat-integration-physbones-and-contacts",level:2},{value:"Using Contacts to estimate thigh-knee angle",id:"using-contacts-to-estimate-thigh-knee-angle",level:3},{value:"Using PhysBone squish to detect pressing",id:"using-physbone-squish-to-detect-pressing",level:3},{value:"Warudo integration: Create a Mod",id:"warudo-integration-create-a-mod",level:2}];function _(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(a.admonition,{type:"danger",children:(0,i.jsx)(a.p,{children:"This documentation is currently being written."})}),"\n",(0,i.jsx)(a.p,{children:"Starmesh does only one thing: it creates blendshapes and bones on your avatar, reducing the cost of experimentation."}),"\n",(0,i.jsx)(a.p,{children:"It is up to you to decide what those blendshapes and bones are going to do."}),"\n",(0,i.jsx)(a.p,{children:"To make your avatar actually make use of those fresh new blendshapes and bones, you need to integrate with your\npreferred application (VRChat, VNyan, Warudo, ...)."}),"\n",(0,i.jsx)(a.p,{children:"Starmesh does not handle any integration, but you may find examples of integrations on this page."}),"\n",(0,i.jsx)(a.h2,{id:"unity-integration-constraints",children:"Unity integration: Constraints"}),"\n",(0,i.jsx)(r.w,{children:(0,i.jsx)(n.F,{isUniversal:!0})}),"\n",(0,i.jsx)(a.p,{children:"Constraints can be used to create bones which can relax parts of your avatar when two bones rotate at a heavy angle in relation to each other."}),"\n",(0,i.jsx)(a.p,{children:"This may be used to fix heavy pinching of some bones, such as the kneecap."}),"\n",(0,i.jsx)(a.h2,{id:"vrchat-integration-physbones-and-contacts",children:"VRChat integration: PhysBones and Contacts"}),"\n",(0,i.jsx)(r.w,{children:(0,i.jsx)(n.F,{requiresVRChat:!0})}),"\n",(0,i.jsx)(a.h3,{id:"using-contacts-to-estimate-thigh-knee-angle",children:"Using Contacts to estimate thigh-knee angle"}),"\n",(0,i.jsxs)(a.p,{children:["By adding a named ",(0,i.jsx)(a.a,{href:"https://creators.vrchat.com/avatars/avatar-dynamics/contacts#receiver",children:"Contact Receiver of type Proximity"}),",\nyou can to estimate an angle between two articulated bones."]}),"\n",(0,i.jsxs)(a.p,{children:["This can be used in conjunction with the ",(0,i.jsx)(a.a,{href:"./operators/compressive-deform",children:"Compressive Deform"})," operator to squish the skin the more\nacute angle those bones are."]}),"\n",(0,i.jsx)(a.h3,{id:"using-physbone-squish-to-detect-pressing",children:"Using PhysBone squish to detect pressing"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.a,{href:"https://creators.vrchat.com/avatars/avatar-dynamics/physbones/#options",children:"PhysBone _Squish"})," parameter can be used to detect when an area is being pressed in a specific direction."]}),"\n",(0,i.jsxs)(a.p,{children:["This can be used in conjunction with the ",(0,i.jsx)(a.a,{href:"./operators/compressive-deform",children:"Compressive Deform"})," operator to squish the skin the more\nthat area is being pressed."]}),"\n",(0,i.jsx)(a.h2,{id:"warudo-integration-create-a-mod",children:"Warudo integration: Create a Mod"}),"\n",(0,i.jsx)(r.w,{children:(0,i.jsx)(n.F,{requiresWarudo:!0})}),"\n",(0,i.jsxs)(a.p,{children:["If you're familiar with Unity development (or UdonSharp), you can ",(0,i.jsx)(a.a,{href:"https://docs.warudo.app/docs/modding/mod-sdk#custom-scripts",children:"create mods"}),"\nby adding C# scripts in the folder of your Character Mod, which will animate the generated blendshapes of your avatar."]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}},85041:(e,a,t)=>{t.d(a,{F:()=>n});t(96540);var i=t(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=t(74848);function n(e){let{requiresVRChat:a,isUniversal:t,notVRChat:n,requiresResonite:o,requiresSteamVR:h,requiresChilloutVR:c,requiresVRM:d,compatibleWithVSFAvatar:l,compatibleWithVSeeFace:_,compatibleWithWarudo:u,compatibleWithBeatSaber:p,requiresWarudo:m,notCompatibleWithGltf:g,compatibleWithVNyan:v,short:b,supporter:x}=e,j=b?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),w=b?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",w,"VRChat"]}):"",o?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",w,"Resonite"]}):"",d?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",w,"VRM"]}):"",h?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[w,"SteamVR"]}):"",c?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",w,"ChilloutVR"]}):"",l?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[j,"VSFAvatar"]}):"",_?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[j,"VSeeFace"]}):"",v?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[j,"VNyan"]}):"",u?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[j,"Warudo"]}):"",p?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[j,"Beat Saber"]}):"",g?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",m?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",t?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,r.jsx)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",x?(0,r.jsxs)("div",{className:(0,i.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,t)=>{t.d(a,{w:()=>s});t(96540);var i=t(74848);function s(e){let{children:a}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:a})})}}}]);