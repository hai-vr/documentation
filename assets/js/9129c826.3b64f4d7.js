"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8623],{49145:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>h,default:()=>_,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=a(74848),s=a(28453),r=a(89618),n=a(85041);const l={},h="Chillaxins",o={id:"products/chillaxins/index",title:"Chillaxins",description:"Chillaxins is a Unity Editor package that lets you use non-destructive tools on ChilloutVR avatars, and Warudo character mods.",source:"@site/docs/products/chillaxins/index.md",sourceDirName:"products/chillaxins",slug:"/products/chillaxins/",permalink:"/docs/products/chillaxins/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BlendTree Viewer",permalink:"/docs/products/blendtree-viewer"},next:{title:"Cloth Transfer",permalink:"/docs/products/cloth-transfer"}},c={},d=[{value:"Install",id:"install",level:2},{value:"What does this do?",id:"what-does-this-do",level:2},{value:"About the DLL files",id:"about-the-dll-files",level:2}];function u(e){const i={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"chillaxins",children:"Chillaxins"}),"\n",(0,t.jsx)(r.w,{children:(0,t.jsx)(n.F,{requiresChilloutVR:!0,compatibleWithWarudo:!0})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Chillaxins"})," is a Unity Editor package that lets you use non-destructive tools on ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://developers.abinteractive.net/cck/",children:"ChilloutVR"})})," avatars, and ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://warudo.app/",children:"Warudo"})})," character mods."]}),"\n",(0,t.jsxs)(i.p,{children:["Using this, you can use some of my products in ChilloutVR, like ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/docs/products/starmesh",children:"\u2b50 Starmesh"})}),", ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/docs/products/facetra-shape-creator",children:"\u2b50 FaceTra Shape Creator"})}),",\nand ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/docs/products/prefabulous",children:"Prefabulous Universal"})}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Notes:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["The non-destructive tools must be based on the ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://github.com/bdunderscore/ndmf",children:"Non-Destructive Modular Framework"})}),", and they must not depend on other incompatible SDKs, such as the VRChat SDK."]}),"\n",(0,t.jsxs)(i.li,{children:["To some extent, it ",(0,t.jsx)(i.em,{children:"might"})," let you use platform-agnostic components of other tools\nsuch as ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-armature",children:"Modular Avatar Merge Armature"})})," and ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.a,{href:"https://modular-avatar.nadena.dev/docs/reference/bone-proxy",children:"Modular Avatar Bone Proxy"})}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.em,{children:"Chillaxins"})," is compatible with Warudo projects if you use the ",(0,t.jsx)(i.a,{href:"/docs/products/denormalized-avatar-exporter",children:"Denormalized Avatar Exporter"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(i.admonition,{type:"warning",children:[(0,t.jsx)(i.p,{children:"Support for ChilloutVR is new. You may encounter some issues."}),(0,t.jsxs)(i.p,{children:["If you need help, please check out the ",(0,t.jsx)(i.a,{href:"/docs/other/discord",children:"Discord server"}),"."]})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Download the ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"https://github.com/hai-vr/chillaxins/releases/download/1.1.0/dev.hai-vr.chillaxins-1.1.0.unitypackage",children:".unitypackage file (Direct Download)"})})," from GitHub.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Current version is ",(0,t.jsx)(i.strong,{children:"V1.1.0"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Install it in your project."}),"\n",(0,t.jsx)(i.li,{children:"Close your Unity project."}),"\n",(0,t.jsx)(i.li,{children:"Reopen your Unity project."}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["If you use the ",(0,t.jsx)(i.a,{href:"/docs/products/listing",children:"ALCOM"})," package manager, you can add the ",(0,t.jsx)(i.em,{children:"Ha\xef ~ Chillaxins"})," package from ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/docs/products/listing",children:"our listing"})}),"."]})}),"\n",(0,t.jsx)(i.h2,{id:"what-does-this-do",children:"What does this do?"}),"\n",(0,t.jsx)(i.p,{children:"It prevents compilation errors due to missing programming libraries:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["This includes the ",(0,t.jsx)(i.em,{children:"System.Collections.Immutable"})," DLL, because ",(0,t.jsx)(i.em,{children:"NDMF"})," uses it."]}),"\n",(0,t.jsxs)(i.li,{children:["This includes the ",(0,t.jsx)(i.em,{children:"Lib.Harmony"})," DLL, because ",(0,t.jsx)(i.em,{children:"NDMF 1.5"})," will use it."]}),"\n",(0,t.jsxs)(i.li,{children:["This creates a dependency on ",(0,t.jsx)(i.em,{children:"Unity Burst"})," 1.6.6 for Unity 2021, because ",(0,t.jsx)(i.em,{children:"Modular Avatar"})," uses it."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"On ChilloutVR projects, it hooks into the avatar build process:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If the project is a CCK project ",(0,t.jsx)(i.em,{children:"and"})," NDMF is installed, when you try to upload an avatar using ChilloutVR CCK interface,\nit will execute the non-destructive avatar processors."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"about-the-dll-files",children:"About the DLL files"}),"\n",(0,t.jsxs)(i.p,{children:["This tool contains DLL files because NDMF depends on a ",(0,t.jsx)(i.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable?view=net-8.0",children:"programming library"}),"\nwhich is not available in Unity by default, and a ",(0,t.jsx)(i.a,{href:"https://www.nuget.org/packages/Lib.Harmony",children:"patching library"}),". For convenience of installation, these DLLs are included in Chillaxins."]}),"\n",(0,t.jsxs)(i.p,{children:["If you're concerned about safety, you can download the required DLLs on your own from Microsoft NuGet (",(0,t.jsx)(i.a,{href:"https://www.nuget.org/packages/System.Collections.Immutable/",children:"System.Collections.Immutable"}),", ",(0,t.jsx)(i.a,{href:"https://www.nuget.org/packages/Lib.Harmony/",children:"Lib.Harmony"}),")."]})]})}function _(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85041:(e,i,a)=>{a.d(i,{F:()=>n});a(96540);var t=a(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=a(74848);function n(e){let{requiresVRChat:i,isUniversal:a,notVRChat:n,requiresResonite:l,requiresSteamVR:h,requiresChilloutVR:o,requiresVRM:c,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:u,compatibleWithWarudo:_,compatibleWithBeatSaber:m,requiresWarudo:p,notCompatibleWithGltf:x,compatibleWithVNyan:g,short:j,supporter:v}=e,b=j?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),f=j?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[i?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",f,"VRChat"]}):"",l?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",f,"Resonite"]}):"",c?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",f,"VRM"]}):"",h?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[f,"SteamVR"]}):"",o?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",f,"ChilloutVR"]}):"",d?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[b,"VSFAvatar"]}):"",u?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[b,"VSeeFace"]}):"",g?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[b,"VNyan"]}):"",_?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[b,"Warudo"]}):"",m?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[b,"Beat Saber"]}):"",x?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",p?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",a?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",v?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,i,a)=>{a.d(i,{w:()=>s});a(96540);var t=a(74848);function s(e){let{children:i}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:i})})}}}]);