"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6185],{62710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>h,metadata:()=>o,toc:()=>d});var s=a(74848),r=a(28453),i=a(89618),n=a(85041);const h={},l="Translate Rotate Scale (TRS)",o={id:"products/starmesh/operators/translate-rotate-scale",title:"Translate Rotate Scale (TRS)",description:"The Starmesh Op. Translate Rotate Scale (TRS) component creates a blendshape that translates, rotates, and scales affected vertices",source:"@site/docs/products/starmesh/operators/translate-rotate-scale.md",sourceDirName:"products/starmesh/operators",slug:"/products/starmesh/operators/translate-rotate-scale",permalink:"/docs/products/starmesh/operators/translate-rotate-scale",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ripple Wave",permalink:"/docs/products/starmesh/operators/ripple-wave"},next:{title:"Selectors",permalink:"/docs/products/starmesh/selectors"}},c={},d=[{value:"How to use",id:"how-to-use",level:2},{value:"Create the operator and selectors",id:"create-the-operator-and-selectors",level:3},{value:"Configure the operator",id:"configure-the-operator",level:3},{value:"Configure the blendshape",id:"configure-the-blendshape",level:4},{value:"Configure the transformation",id:"configure-the-transformation",level:4},{value:"Test the operator",id:"test-the-operator",level:3},{value:"Advanced settings",id:"advanced-settings",level:2},{value:"Recalculate Normals",id:"recalculate-normals",level:3},{value:"Creating prefabs",id:"creating-prefabs",level:2}];function u(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"translate-rotate-scale-trs",children:"Translate Rotate Scale (TRS)"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"Starmesh Op. Translate Rotate Scale (TRS)"})," component creates a blendshape that translates, rotates, and scales affected vertices\nfrom one point to another."]}),"\n",(0,s.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,s.jsx)("source",{src:a(36065).A})}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsx)(t.h3,{id:"create-the-operator-and-selectors",children:"Create the operator and selectors"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Add a ",(0,s.jsx)(t.em,{children:"Starmesh Op. Translate Rotate Scale (TRS)"})," component on a new GameObject in your avatar."]}),"\n",(0,s.jsxs)(t.li,{children:["In the selectors of this component, add a ",(0,s.jsx)(t.em,{children:"Starmesh Select Meshes"}),", or choose one that you already have.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Configure the ",(0,s.jsx)(t.em,{children:"Select Meshes"})," selector so that it affects the relevant meshes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["In the selectors of this component, add other selectors, for instance, a ",(0,s.jsx)(t.em,{children:"Starmesh Select Point Radius"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"You can add selectors as children of this GameObject."})}),"\n",(0,s.jsx)(t.h3,{id:"configure-the-operator",children:"Configure the operator"}),"\n",(0,s.jsx)(t.h4,{id:"configure-the-blendshape",children:"Configure the blendshape"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Choose a name for the generated blendshape in the ",(0,s.jsx)(t.em,{children:"Shape Name"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.em,{children:"Shape Default Weight"})," setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you are going to use that blendshape for scripts or animations, leave the ",(0,s.jsx)(t.em,{children:"Shape Default Weight"})," to 0."]}),"\n",(0,s.jsxs)(t.li,{children:["If you are not going to use that blendshape in any scripts nor animations, set the ",(0,s.jsx)(t.em,{children:"Shape Default Weight"})," to 100."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"configure-the-transformation",children:"Configure the transformation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Make sure you have gizmos enabled in your scene."}),"\n",(0,s.jsxs)(t.li,{children:["In your scene, move the ",(0,s.jsx)(t.strong,{children:"Origin"})," gizmo to the starting position.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you use a ",(0,s.jsx)(t.em,{children:"Starmesh Select Point Radius"})," without an offset, you can set the ",(0,s.jsx)(t.em,{children:"Origin Transform"})," instead to be that ",(0,s.jsx)(t.em,{children:"Select Point Radius component"}),",\nso that the starting point is the same."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("video",{controls:!0,width:"816",autostart:"false",children:(0,s.jsx)("source",{src:a(5252).A})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["In your scene, move and rotate the ",(0,s.jsx)(t.strong,{children:"Destination"})," gizmo to the ending position."]}),"\n",(0,s.jsxs)(t.li,{children:["Keep the ",(0,s.jsx)(t.em,{children:"Destination Scale"})," as it is, or change it."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"test-the-operator",children:"Test the operator"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Move the ",(0,s.jsx)(t.em,{children:"Preview"})," slider at the top to test the blendshape."]}),"\n",(0,s.jsxs)(t.li,{children:["Press the ",(0,s.jsx)(t.em,{children:"Recalculate Normals"})," button to test the blendshape with proper shading. This is slower, so turn it off if you are not testing your materials."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"advanced-settings",children:"Advanced settings"}),"\n",(0,s.jsx)(t.h3,{id:"recalculate-normals",children:"Recalculate Normals"}),"\n",(0,s.jsx)(t.p,{children:"Normals will be automatically recalculated for this blendshape."}),"\n",(0,s.jsx)(t.p,{children:"In general, you should recalculate normals, but there are a few exceptions to consider:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If your blendshape is a conflict prevention blendshape, check ",(0,s.jsx)(t.em,{children:"Do Not Recalculate Normals"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If your blendshape is a face expression, decide if you want to check ",(0,s.jsx)(t.em,{children:"Do Not Recalculate Normals"})," by previewing your avatar with the ",(0,s.jsx)(t.em,{children:"Recalculate Normals"})," button at the top."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-prefabs",children:"Creating prefabs"}),"\n",(0,s.jsx)(i.w,{children:(0,s.jsx)(n.F,{requiresVRChat:!0})}),"\n",(0,s.jsxs)(t.p,{children:["The field ",(0,s.jsx)(t.em,{children:"Animation Repathing"})," is used for the creation of ",(0,s.jsx)(n.F,{requiresVRChat:!0,short:!0})," prefabs using ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/docs/reference/merge-animator",children:"Modular Avatar Merge Animator"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["When this field is not empty, ",(0,s.jsx)(t.em,{children:"Starmesh"})," will generate ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://modular-avatar.nadena.dev/docs/reference/blendshape-sync",children:"Modular Avatar Blendshape Sync"})})," components inside the meshes\nused by ",(0,s.jsx)(t.em,{children:"Starmesh Select Meshes"})," during the build, which will bind the animations targeting the operator's object name with the blendshape defined\nin ",(0,s.jsx)(t.em,{children:"Animation Repathing"})," to the generated blendshapes. For concrete examples, see the ",(0,s.jsx)(t.a,{href:"../prefabs",children:"VRChat prefabs"})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["In addition, if you leave ",(0,s.jsx)(t.em,{children:"Shape Name"})," empty, ",(0,s.jsx)(t.em,{children:"Starmesh"})," will generate a unique blendshape name."]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85041:(e,t,a)=>{a.d(t,{F:()=>n});a(96540);var s=a(20053);const r={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var i=a(74848);function n(e){let{requiresVRChat:t,isUniversal:a,notVRChat:n,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:o,requiresVRM:c,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:u,compatibleWithWarudo:m,compatibleWithBeatSaber:p,requiresWarudo:_,notCompatibleWithGltf:g,compatibleWithVNyan:x,short:j,supporter:v}=e,f=j?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:"Compatible with "}),b=j?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:"Requires "});return(0,i.jsxs)("span",{children:[t?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_vrchat),children:["\ud83d\udcac ",b,"VRChat"]}):"",h?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_resonite),children:["\u26a1 ",b,"Resonite"]}):"",c?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",b,"VRM"]}):"",l?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_steamvr),children:[b,"SteamVR"]}):"",o?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",b,"ChilloutVR"]}):"",d?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[f,"VSFAvatar"]}):"",u?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_vsfavatar),children:[f,"VSeeFace"]}):"",x?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_vnyan),children:[f,"VNyan"]}):"",m?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:[f,"Warudo"]}):"",p?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_beatsaber),children:[f,"Beat Saber"]}):"",g?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",_?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",a?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,i.jsx)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",v?(0,i.jsxs)("div",{className:(0,s.A)(r.hai_tag,r.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,i.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,t,a)=>{a.d(t,{w:()=>r});a(96540);var s=a(74848);function r(e){let{children:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:t})})}},5252:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/medias/D7ZTv8kgch-d3c60d9f257699653757da6602290698.mp4"},36065:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/medias/xN5fmy0syx-c3d2a24246c2cc4288621019c1235e1f.mp4"}}]);