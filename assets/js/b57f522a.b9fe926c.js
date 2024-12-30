"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5993],{73134:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=i(74848),s=i(28453),r=i(89618),n=i(85041);const l={title:"Basis"},h="Basis with Non-Destructive components",o={id:"products/compatibility/basis",title:"Basis",description:"Some of the products are qualified as non-destructive. This means that all changes are done when entering Play Mode, or when building the avatar.",source:"@site/docs/products/compatibility/basis.md",sourceDirName:"products/compatibility",slug:"/products/compatibility/basis",permalink:"/docs/products/compatibility/basis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Basis"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0a Non-VRChat uses",permalink:"/docs/products/compatibility/"},next:{title:"ChilloutVR",permalink:"/docs/products/compatibility/chilloutvr"}},c={},d=[{value:"Install",id:"install",level:2},{value:"If you use ALCOM / VCC package manager",id:"if-you-use-alcom--vcc-package-manager",level:3},{value:"If you don&#39;t use a package manager",id:"if-you-dont-use-a-package-manager",level:3}];function _(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"basis-with-non-destructive-components",children:"Basis with Non-Destructive components"}),"\n",(0,t.jsx)(r.w,{children:(0,t.jsx)(n.F,{requiresBasis:!0})}),"\n",(0,t.jsxs)(a.p,{children:["Some of the products are qualified as ",(0,t.jsx)(a.em,{children:"non-destructive"}),". This means that all changes are done when entering Play Mode, or when building the avatar.\nThis workflow has been made popular by tools such as ",(0,t.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar"})," and ",(0,t.jsx)(a.a,{href:"https://vrcfury.com/",children:"VRCFury"}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["However, only non-destructive tools based on ",(0,t.jsx)(a.strong,{children:"NDMF"})," are compatible, as long as that tool does not require the VRChat SDK.\nTo be clear, VRCFury is ",(0,t.jsx)(a.em,{children:"not"})," compatible."]}),"\n",(0,t.jsx)(a.h2,{id:"install",children:"Install"}),"\n",(0,t.jsxs)(a.p,{children:["The main branch of Basis already detects the optional presence of NDMF in the project through the ",(0,t.jsx)(a.em,{children:"HVRBasisNDMF"})," package,\nwhich is included by default. However, missing DLLs still need to be installed manually or through ",(0,t.jsx)(a.em,{children:"Chillaxins"}),"."]}),"\n",(0,t.jsx)(a.p,{children:"To use non-destructive products that have been confirmed to work in Basis, you can do the following."}),"\n",(0,t.jsx)(a.h3,{id:"if-you-use-alcom--vcc-package-manager",children:"If you use ALCOM / VCC package manager"}),"\n",(0,t.jsxs)(a.p,{children:["If you use the ",(0,t.jsx)(a.a,{href:"/docs/products/listing",children:"ALCOM"})," package manager, you can instead add the following packages:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.em,{children:'"Ha\xef ~ Chillaxins"'})," package from ",(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.a,{href:"/docs/products/listing",children:"our listing"})}),", and"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.em,{children:'"Non-Destructive Modular Framework"'})," package from the ",(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.a,{href:"https://modular-avatar.nadena.dev/",children:"Modular Avatar listing"})}),".","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Add this listing in the ",(0,t.jsx)(a.em,{children:"VPM Repositories"})," section of ALCOM: ",(0,t.jsx)(a.code,{children:"https://vpm.nadena.dev/vpm.json"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Close your Unity project."}),"\n",(0,t.jsx)(a.li,{children:"Reopen your Unity project."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"if-you-dont-use-a-package-manager",children:"If you don't use a package manager"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Install ",(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.a,{href:"/docs/products/chillaxins",children:"Chillaxins"})}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Download the ",(0,t.jsx)(a.strong,{children:(0,t.jsx)(a.a,{href:"https://github.com/bdunderscore/ndmf/releases/tag/1.4.1",children:"NDMF"})})," .zip file.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Unzip it somewhere outside your project."}),"\n",(0,t.jsxs)(a.li,{children:["In your ChilloutVR Unity project, go to ",(0,t.jsx)(a.em,{children:"Window > Package Manager"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["In the Package Manager window, press the ",(0,t.jsx)(a.em,{children:"+"})," button at the top left, select ",(0,t.jsx)(a.em,{children:"Add package from disk..."})]}),"\n",(0,t.jsxs)(a.li,{children:["Locate the folder you unzipped, and inside that folder, select the ",(0,t.jsx)(a.code,{children:"package.json"})," file."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.li,{children:"Open the downloaded archive of the product, and install the .unitypackage in your Basis project."}),"\n",(0,t.jsx)(a.li,{children:"Close your Unity project."}),"\n",(0,t.jsx)(a.li,{children:"Reopen your Unity project."}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}},85041:(e,a,i)=>{i.d(a,{F:()=>n});i(96540);var t=i(20053);const s={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=i(74848);function n(e){let{requiresVRChat:a,isUniversal:i,requiresBasis:n,notVRChat:l,requiresResonite:h,requiresSteamVR:o,requiresChilloutVR:c,requiresVRM:d,compatibleWithVSFAvatar:_,compatibleWithVSeeFace:u,compatibleWithWarudo:p,compatibleWithBeatSaber:g,requiresWarudo:m,notCompatibleWithGltf:j,compatibleWithVNyan:v,short:x,supporter:b}=e,f=x?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),w=x?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrchat),children:["\ud83d\udcac ",w,"VRChat"]}):"",h?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_resonite),children:["\u26a1 ",w,"Resonite"]}):"",n?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_basis),children:["\ud83d\udd3a ",w,"Basis"]}):"",d?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",w,"VRM"]}):"",o?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_steamvr),children:[w,"SteamVR"]}):"",c?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",w,"ChilloutVR"]}):"",_?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",u?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",v?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",p?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",g?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",j?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",m?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_compatible_with_warudo),children:["\ud83d\udcf9 ",w,"Warudo"]}):"",i?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",l?(0,r.jsx)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",b?(0,r.jsxs)("div",{className:(0,t.A)(s.hai_tag,s.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,i)=>{i.d(a,{w:()=>s});i(96540);var t=i(74848);function s(e){let{children:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:a})})}}}]);