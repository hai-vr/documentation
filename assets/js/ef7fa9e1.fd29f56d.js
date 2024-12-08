"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[985],{76710:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=i(74848),n=i(28453),s=i(89618),r=i(85041),h=i(66926);const l={},c="Face Tracking in Basis",o={id:"basis/hvr/face-tracking/index",title:"Face Tracking in Basis",description:"There is a rudimentary implementation of face tracking avatars in Basis, which I have made to help dooly test out avatar networking packet",source:"@site/docs/basis/hvr/face-tracking/index.md",sourceDirName:"basis/hvr/face-tracking",slug:"/basis/hvr/face-tracking/",permalink:"/docs/basis/hvr/face-tracking/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"basisSidebar",previous:{title:"HVR User Guide",permalink:"/docs/basis/hvr/"},next:{title:"HVR Developer",permalink:"/docs/basis/hvr-tech/"}},d={},u=[{value:"Prepare VRCFaceTracking",id:"prepare-vrcfacetracking",level:2},{value:"If you already play VRC",id:"if-you-already-play-vrc",level:3},{value:"If you don&#39;t play VRC",id:"if-you-dont-play-vrc",level:3},{value:"Set up your avatar",id:"set-up-your-avatar",level:2},{value:"Testing",id:"testing",level:2}];function _(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"face-tracking-in-basis",children:"Face Tracking in Basis"}),"\n",(0,t.jsx)(s.w,{children:(0,t.jsx)(r.F,{requiresBasis:!0})}),"\n",(0,t.jsx)(a.p,{children:"There is a rudimentary implementation of face tracking avatars in Basis, which I have made to help dooly test out avatar networking packet\ncommunications using a real scenario."}),"\n",(0,t.jsx)(a.p,{children:"Face Tracking in this implementation is done through a package, rather than through Basis' core source."}),"\n",(0,t.jsx)(a.p,{children:"It requires the use of VRCFaceTracking, because it's the quickest way to get something working that existing face tracking users may\nalready have set up on their machine."}),"\n",(0,t.jsx)(a.p,{children:"This guide assumes you're already familiar with VRCFaceTracking and your own hardware."}),"\n",(0,t.jsx)(a.h2,{id:"prepare-vrcfacetracking",children:"Prepare VRCFaceTracking"}),"\n",(0,t.jsx)(a.h3,{id:"if-you-already-play-vrc",children:"If you already play VRC"}),"\n",(0,t.jsx)(a.p,{children:"To set up face tracking, we need to put a fake OSC file that VRCFaceTracking will read when loading your Basis avatar."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Download ",(0,t.jsx)(a.a,{href:"pathname:///assets/basis-hvr/avtr_00000000-d7dc-4a90-ab09-000000000000.json",children:"this JSON file"})," (",(0,t.jsx)(a.em,{children:"Right-click > Save link as..."}),")"]}),"\n",(0,t.jsxs)(a.li,{children:["Put this file in the following folder:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"C:\\Users\\<your_user>\\AppData\\LocalLow\\VRChat\\vrchat\\OSC\\usr_<any_vrc_user>\\Avatars\\"})}),"\n",(0,t.jsxs)(a.li,{children:["The name of the JSON file must be ",(0,t.jsx)(a.code,{children:"avtr_00000000-d7dc-4a90-ab09-000000000000.json"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"if-you-dont-play-vrc",children:"If you don't play VRC"}),"\n",(0,t.jsx)(a.p,{children:"If you don't play VRC:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Download ",(0,t.jsx)(a.a,{href:"pathname:///assets/basis-hvr/avtr_00000000-d7dc-4a90-ab09-000000000000.json",children:"this JSON file"})," (",(0,t.jsx)(a.em,{children:"Right-click > Save link as..."}),")"]}),"\n",(0,t.jsxs)(a.li,{children:["Create the following folder structure:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"C:\\Users\\<your_user>\\AppData\\LocalLow\\VRChat\\vrchat\\OSC\\usr_4d5721e5-89b1-4313-aa2d-dfc0e9dbb555\\Avatars\\"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsxs)(a.em,{children:["Note: ",(0,t.jsx)(a.code,{children:"4d5721e5-89b1-4313-aa2d-dfc0e9dbb555"})," is a randomly generated GUID; it really doesn't matter what value is."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Put the JSON in that folder you've just created.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["The name of the JSON file must be ",(0,t.jsx)(a.code,{children:"avtr_00000000-d7dc-4a90-ab09-000000000000.json"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"set-up-your-avatar",children:"Set up your avatar"}),"\n",(0,t.jsx)(h.U,{src:"./img/mpVLTgE5UD-trimmed.mp4"}),"\n",(0,t.jsx)(a.admonition,{type:"danger",children:(0,t.jsxs)(a.p,{children:["The face tracking implementation ",(0,t.jsx)(a.strong,{children:"does not use the Animator system"}),"; do not use face tracking templates designed for VRC,\nthey won't do anything and might even interfere with the operation."]})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Create a new GameObject inside your avatar. Give it a name of your choice, like ",(0,t.jsx)(a.em,{children:"FaceTracking"}),"."]}),"\n",(0,t.jsxs)(a.li,{children:["Add the ",(0,t.jsx)(a.strong,{children:"Blendshape Actuation"})," component. This will drive the blendshapes of your avatar.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Set ",(0,t.jsx)(a.em,{children:"Renderers"})," to the mesh that contains the face tracking blendshapes."]}),"\n",(0,t.jsxs)(a.li,{children:["Set ",(0,t.jsx)(a.em,{children:"Definition File"})," to either:","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"FaceTracking-UnifiedExpressions-Simple"})," if your avatar uses the Unified Expressions blendshape naming convention, or"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"FaceTracking-ARKit-Simple"})," if your avatar uses the ARKit blendshape naming convention."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.admonition,{type:"warning",children:[(0,t.jsxs)(a.p,{children:["If you can't find the file in the project, set the filter to ",(0,t.jsx)(a.strong,{children:"Packages"}),"."]}),(0,t.jsx)(h.U,{src:"./img/Unity_VuR5mvNdoH.mp4",autoWidth:"{false}"})]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["If you use eye tracking, add the ",(0,t.jsx)(a.strong,{children:"Eye Tracking Bone Actuation"})," component.","\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"By default, the multiplier value of 1 will rotate the eye bone to match the direction your eyes are looking."}),"\n",(0,t.jsxs)(a.li,{children:["You may choose to increase the multiplier if you want a more exaggerated eye look direction. A value of ",(0,t.jsx)(a.code,{children:"1.25"})," will cause a 10deg angle to become 12.5deg."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["Add the ",(0,t.jsx)(a.strong,{children:"OSC Acquisition"})," component. This will enable some rudimentary form of OSC communication."]}),"\n",(0,t.jsxs)(a.li,{children:["Finally, in the root of your avatar, add the ",(0,t.jsx)(a.strong,{children:"Feature Networking"})," component."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"testing",children:"Testing"}),"\n",(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.p,{children:"Sorry, there is no guide to test the avatar in the scene without uploading at the moment."}),(0,t.jsx)(a.p,{children:"There used to be a way to test, but I don't have up-to-date info right now\nas things have changed on the most recent version of Basis."}),(0,t.jsx)(a.p,{children:"You'll have to build your avatar for now to test it."})]}),"\n",(0,t.jsx)(a.p,{children:"After building and uploading your avatar somewhere:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Start the VRCFaceTracking app on your machine,"}),"\n",(0,t.jsx)(a.li,{children:"then start Basis in-editor (using the initialization scene, you may have to refer to the Basis Discord on how to test Basis in general),"}),"\n",(0,t.jsx)(a.li,{children:"then connect to the server."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"When you load into your avatar, the following thing will happen:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Basis will create an OSC server on port 9000 and then send a message to port 9001 (where VRCFaceTracking is running),\ntelling it that the avatar has changed."}),"\n",(0,t.jsx)(a.li,{children:"VRCFaceTracking will start to communicate with Basis by sending face tracking parameters."}),"\n",(0,t.jsxs)(a.li,{children:["You should see the following in the VRCFaceTracking window if this is successful:\n",(0,t.jsx)(a.img,{alt:"mpc-hc64_bco7oRlmDK.png",src:i(29005).A+"",width:"746",height:"242"})]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Then in the scene view, look at your own avatar's face, see how it moves."}),"\n",(0,t.jsx)(a.p,{children:"Note that in the current implementation, face tracking is not smoothed locally, but it is interpolated on remote users.\nFace tracking data is sent to other users 10 times per second (snapshot taken every 0.1 second)."})]})}function g(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}},85041:(e,a,i)=>{i.d(a,{F:()=>r});i(96540);var t=i(20053);const n={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var s=i(74848);function r(e){let{requiresVRChat:a,isUniversal:i,requiresBasis:r,notVRChat:h,requiresResonite:l,requiresSteamVR:c,requiresChilloutVR:o,requiresVRM:d,compatibleWithVSFAvatar:u,compatibleWithVSeeFace:_,compatibleWithWarudo:g,compatibleWithBeatSaber:m,requiresWarudo:p,notCompatibleWithGltf:v,compatibleWithVNyan:x,short:j,supporter:f}=e,y=j?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Compatible with "}),b=j?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:"Requires "});return(0,s.jsxs)("span",{children:[a?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_vrchat),children:["\ud83d\udcac ",b,"VRChat"]}):"",l?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_resonite),children:["\u26a1 ",b,"Resonite"]}):"",r?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_basis),children:["\ud83d\udd3a ",b,"Basis"]}):"",d?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",b,"VRM"]}):"",c?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_steamvr),children:[b,"SteamVR"]}):"",o?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",b,"ChilloutVR"]}):"",u?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[y,"VSFAvatar"]}):"",_?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[y,"VSeeFace"]}):"",x?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_vnyan),children:[y,"VNyan"]}):"",g?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:[y,"Warudo"]}):"",m?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_beatsaber),children:[y,"Beat Saber"]}):"",v?(0,s.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",p?(0,s.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:"\ud83d\udcf9 Requires Warudo"}):"",i?(0,s.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",h?(0,s.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",f?(0,s.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,s.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,a,i)=>{i.d(a,{w:()=>n});i(96540);var t=i(74848);function n(e){let{children:a}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:a})})}},66926:(e,a,i)=>{i.d(a,{U:()=>r});i(96540);var t=i(74848);const n="https://downscale.srv.hai-vr.dev",s=n+"/assets/docs/";function r(e){const a=null!=e.cdn?n+e.cdn:s+e.src.substring(e.src.lastIndexOf("/")+1);return(0,t.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,t.jsx)("source",{src:a})})}},29005:(e,a,i)=>{i.d(a,{A:()=>t});const t=i.p+"assets/images/mpc-hc64_bco7oRlmDK-49b5226bb0f4549a0f910d5e332051f6.png"}}]);