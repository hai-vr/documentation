"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2403],{65440:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>_});var s=i(74848),t=i(28453),r=i(89618),n=i(85041),h=i(66926);const l={},c="\ud83d\udcac HaiXT Face Tracking Extensions",o={id:"products/prefabulous/vrchat/haixt-face-tracking-extensions",title:"\ud83d\udcac HaiXT Face Tracking Extensions",description:"Adds a new FX layer containing support for the non-standard face tracking blendshapes.",source:"@site/docs/products/prefabulous/vrchat/haixt-face-tracking-extensions.md",sourceDirName:"products/prefabulous/vrchat",slug:"/products/prefabulous/vrchat/haixt-face-tracking-extensions",permalink:"/docs/products/prefabulous/vrchat/haixt-face-tracking-extensions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcac Blank Gesture Animator",permalink:"/docs/products/prefabulous/vrchat/blank-gesture-animator"},next:{title:"\ud83d\udcac Import Expression Parameters",permalink:"/docs/products/prefabulous/vrchat/import-expression-parameters"}},d={},_=[{value:"Use with FaceTra Shape Creator",id:"use-with-facetra-shape-creator",level:2},{value:"Create blendshapes yourself in Blender",id:"create-blendshapes-yourself-in-blender",level:2},{value:"HaiXT_EyeClosedInverse_Smile*",id:"haixt_eyeclosedinverse_smile",level:3},{value:"Versions",id:"versions",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"-haixt-face-tracking-extensions",children:"\ud83d\udcac HaiXT Face Tracking Extensions"}),"\n",(0,s.jsx)(r.w,{children:(0,s.jsx)(n.F,{requiresVRChat:!0})}),"\n",(0,s.jsx)(a.p,{children:"Adds a new FX layer containing support for the non-standard face tracking blendshapes."}),"\n",(0,s.jsx)(a.admonition,{type:"warning",children:(0,s.jsxs)(a.p,{children:["The layer is only compatible with ",(0,s.jsx)(a.a,{href:"https://github.com/Adjerry91/VRCFaceTracking-Templates",children:"Adjerry91's VRCTraceTracking-Templates"})," animators."]})}),"\n",(0,s.jsx)(a.p,{children:"When your eyes are closed, the shape of your eyes will change when you're smiling."}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Add another component called ",(0,s.jsx)(a.a,{href:"../universal/haixt-generate-blendshapes-for-face-tracking-extensions",children:"HaiXT Generate Blendshapes for Face Tracking Extensions"}),", which can create those blendshapes for you."]}),"\n",(0,s.jsx)(a.li,{children:"If you use FaceTra Shape Creator, these blendshapes are already created for you, see below."}),"\n"]}),"\n",(0,s.jsx)(h.U,{src:"../img/smile-f.mp4"}),"\n",(0,s.jsx)(a.h2,{id:"use-with-facetra-shape-creator",children:"Use with FaceTra Shape Creator"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/docs/products/facetra-shape-creator",children:"FaceTra Shape Creator"})," has a section called ",(0,s.jsx)(a.em,{children:"Non-standard shapes (Experimental)"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"This section is dedicated to the creation of non-standard face tracking blendshapes."}),"\n",(0,s.jsx)(a.p,{children:"For instance, it can create a blendshape that changes the shape of the eyelids when the eyes are closed and the mouth is smiling simultaneously."}),"\n",(0,s.jsx)(a.p,{children:"Use that section to configure your avatar and generate the blendshapes that will be used by the Face Tracking Extensions."}),"\n",(0,s.jsx)(a.h2,{id:"create-blendshapes-yourself-in-blender",children:"Create blendshapes yourself in Blender"}),"\n",(0,s.jsx)(a.p,{children:"You can still create this non-standard face tracking blendshape in Blender or the editor of your choice."}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsxs)(a.p,{children:["Strongly consider using the ",(0,s.jsx)(a.a,{href:"../universal/haixt-generate-blendshapes-for-face-tracking-extensions",children:"HaiXT Generate Blendshapes for Face Tracking Extensions"})," component."]})}),"\n",(0,s.jsx)(a.h3,{id:"haixt_eyeclosedinverse_smile",children:"HaiXT_EyeClosedInverse_Smile*"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.code,{children:"HaiXT_EyeClosedInverse_SmileLeft"})," and ",(0,s.jsx)(a.code,{children:"HaiXT_EyeClosedInverse_SmileRight"})," blendshapes are:"]}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"An artist-authored blendshape which closes the eyes with the eyelids going up, like the ^_^ smiley,"}),"\n",(0,s.jsxs)(a.li,{children:["combined with the ",(0,s.jsx)(a.strong,{children:"inverse"})," of the standard ",(0,s.jsx)(a.a,{href:"https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes#ue-base-shapes",children:"EyeClosed blendshape"}),"."]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"(Left eyelid and Right eyelid animated separately)"}),"\n",(0,s.jsx)(a.p,{children:"This effectively makes it into a new blendshape capable of morphing the standard EyeClosed blendshape into the artist-authored ^_^ blendshape."}),"\n",(0,s.jsx)(a.h2,{id:"versions",children:"Versions"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"1.2.0"}),": Added."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["Classification: ",(0,s.jsxs)(a.em,{children:["This component is ",(0,s.jsx)(a.strong,{children:"\ud83d\udcac VRChat Only"}),"."]})]})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},85041:(e,a,i)=>{i.d(a,{F:()=>n});i(96540);var s=i(20053);const t={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var r=i(74848);function n(e){let{requiresVRChat:a,isUniversal:i,notVRChat:n,requiresResonite:h,requiresSteamVR:l,requiresChilloutVR:c,requiresVRM:o,compatibleWithVSFAvatar:d,compatibleWithVSeeFace:_,compatibleWithWarudo:p,compatibleWithBeatSaber:u,requiresWarudo:g,notCompatibleWithGltf:m,compatibleWithVNyan:x,short:v,supporter:f}=e,b=v?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Compatible with "}),j=v?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:"Requires "});return(0,r.jsxs)("span",{children:[a?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_requires_vrchat),children:["\ud83d\udcac ",j,"VRChat"]}):"",h?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_requires_resonite),children:["\u26a1 ",j,"Resonite"]}):"",o?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",j,"VRM"]}):"",l?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_requires_steamvr),children:[j,"SteamVR"]}):"",c?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",j,"ChilloutVR"]}):"",d?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_compatible_with_vsfavatar),children:[b,"VSFAvatar"]}):"",_?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_compatible_with_vsfavatar),children:[b,"VSeeFace"]}):"",x?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_compatible_with_vnyan),children:[b,"VNyan"]}):"",p?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_compatible_with_warudo),children:[b,"Warudo"]}):"",u?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_compatible_with_beatsaber),children:[b,"Beat Saber"]}):"",m?(0,r.jsx)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,r.jsx)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",i?(0,r.jsx)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",n?(0,r.jsx)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",f?(0,r.jsxs)("div",{className:(0,s.A)(t.hai_tag,t.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,r.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,i)=>{i.d(a,{w:()=>t});i(96540);var s=i(74848);function t(e){let{children:a}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:a})})}},66926:(e,a,i)=>{i.d(a,{U:()=>n});i(96540);var s=i(74848);const t="https://downscale.srv.hai-vr.dev",r=t+"/assets/docs/";function n(e){const a=null!=e.cdn?t+e.cdn:r+e.src.substring(e.src.lastIndexOf("/")+1);return(0,s.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,s.jsx)("source",{src:a})})}}}]);