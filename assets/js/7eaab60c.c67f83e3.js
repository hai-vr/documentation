"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4582],{28206:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>h,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=s(74848),n=s(28453),a=s(89618),r=s(85041),l=s(66926);const o={title:"Assign UV Tile (UDIM)"},h="Assign UV Tile",c={id:"products/prefabulous/universal/assign-uv-tile",title:"Assign UV Tile (UDIM)",description:"Sets the UV Tile of vertices that are moved by a blendshape, or optionally an entire mesh.",source:"@site/docs/products/prefabulous/universal/assign-uv-tile.md",sourceDirName:"products/prefabulous/universal",slug:"/products/prefabulous/universal/assign-uv-tile",permalink:"/docs/products/prefabulous/universal/assign-uv-tile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Assign UV Tile (UDIM)"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf0a Universal Components",permalink:"/docs/products/prefabulous/universal"},next:{title:"Change Avatar Scale",permalink:"/docs/products/prefabulous/universal/change-avatar-scale"}},d={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"About &quot;Entire Mesh&quot; mode",id:"about-entire-mesh-mode",level:2},{value:"Shader-specific uses",id:"shader-specific-uses",level:2},{value:"Poiyomi Toon &quot;UV Tile Discard&quot;",id:"poiyomi-toon-uv-tile-discard",level:3},{value:"lilToon &quot;UV Tile Discard&quot;",id:"liltoon-uv-tile-discard",level:3},{value:"SCSS &quot;Inventory System&quot;",id:"scss-inventory-system",level:3},{value:"Option: Keep Partial Polygons",id:"option-keep-partial-polygons",level:2},{value:"Special thanks",id:"special-thanks",level:2},{value:"Versions",id:"versions",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"assign-uv-tile",children:"Assign UV Tile"}),"\n",(0,t.jsx)(a.w,{children:(0,t.jsx)(r.F,{isUniversal:!0})}),"\n",(0,t.jsx)(i.p,{children:"Sets the UV Tile of vertices that are moved by a blendshape, or optionally an entire mesh."}),"\n",(0,t.jsx)(i.p,{children:"This is meant to be used in tandem with shader features, especially:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"}),","]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon 1.7.1 and above using UV Tile Discard"})," since mid-January 2024."]}),"\n"]}),"\n",(0,t.jsx)(l.U,{src:"../img/13rQ7HGwPr.mp4"}),"\n",(0,t.jsx)(i.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,t.jsx)(i.p,{children:"This component will assign the UV tile of vertices that are moved by a blendshape, or optionally an entire mesh."}),"\n",(0,t.jsxs)(i.p,{children:["This is meant to be used in tandem with shader features, especially ",(0,t.jsx)(i.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"})," and ",(0,t.jsx)(i.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon UV Tile Discard"}),' (since mid-January 2024),\nwhich in this case "',(0,t.jsx)(i.em,{children:"provides an efficient way to toggle portions of a model on and off at runtime"}),'".']}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Using ",(0,t.jsx)(i.em,{children:(0,t.jsx)(i.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon"})})," or ",(0,t.jsx)(i.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon"})," UV Tile Discard makes this effectively similar to ",(0,t.jsx)(i.a,{href:"./delete-polygons",children:"Delete Polygons"}),",\nexcept that this will ",(0,t.jsx)(i.strong,{children:"not"})," lower your avatar polygon count; instead it will ease the rendering load when the toggle is off."]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsxs)(i.em,{children:["If you do not animate the shader feature, use ",(0,t.jsx)(i.a,{href:"./delete-polygons",children:"Delete Polygons"})," instead, which will lower your avatar polygon count."]})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"To use this component:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Add one or several "PA Assign UV Tile" component anywhere in your avatar.'}),"\n",(0,t.jsxs)(i.li,{children:["Then:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If you want to affect some blendshapes:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Keep the Mode to ",(0,t.jsx)(i.strong,{children:'"Blend Shapes"'}),"."]}),"\n",(0,t.jsx)(i.li,{children:"Add blendshapes which move the polygons that you want shader features to affect. Any SkinnedMeshRenderer that has that blendshape will be affected."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["If you want to affect the entire mesh:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Set the Mode to ",(0,t.jsx)(i.strong,{children:'"Entire Mesh"'}),"."]}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.em,{children:"Meshes"})," to edit the list with the meshes you want to affect (or drag and drop meshes to it)."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["For each component, assign the channel and the corresponding checkbox. The UI is built to closely mirror ",(0,t.jsx)(i.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"}),", and ",(0,t.jsx)(i.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon"}),"'s layout is just as similar."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact."}),"\n",(0,t.jsx)(l.U,{src:"../img/pOxhnkOYpj.mp4"}),"\n",(0,t.jsx)(i.h2,{id:"about-entire-mesh-mode",children:'About "Entire Mesh" mode'}),"\n",(0,t.jsxs)(i.p,{children:['"Entire Mesh" should be used alongside an avatar optimization tool that will merge existing meshes, such as ',(0,t.jsx)(i.a,{href:"https://github.com/d4rkc0d3r/d4rkAvatarOptimizer",children:"d4rkpl4y3r's d4rkAvatarOptimizer"}),"\nor ",(0,t.jsx)(i.a,{href:"https://github.com/anatawa12/AvatarOptimizer",children:"anatawa12's AvatarOptimizer"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Prefabulous does not provide any mesh optimization components that rectifies animation paths at this time."}),"\n",(0,t.jsx)(i.h2,{id:"shader-specific-uses",children:"Shader-specific uses"}),"\n",(0,t.jsx)(i.h3,{id:"poiyomi-toon-uv-tile-discard",children:'Poiyomi Toon "UV Tile Discard"'}),"\n",(0,t.jsxs)(i.p,{children:["If you use ",(0,t.jsx)(i.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi Toon UV Tile Discard"}),":"]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"If you use Poiyomi Toon version 8.0 or lower and you notice an obvious graphical glitch when using UV Tile Discard,\nplease upgrade to Poiyomi Toon version 8.1 or higher."})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.'}),"\n",(0,t.jsx)(i.li,{children:"Use the checkbox grid. The UI is built to closely mirror Poiyomi Toon UV Tile Discard."}),"\n",(0,t.jsxs)(i.li,{children:['Keep the "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Do Not Clear"}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:['If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Set to Zero"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.p,{children:'Using UV0 with "UV Tile Discard" through this component is not recommended, because you cannot partially hide meshes that are part of the body flesh,\nas this would result in the texture visibly warping along the seams of the blendshape; in this case, use UV1, UV2, or UV3.'}),(0,t.jsxs)(i.p,{children:['That said, if you really want to use UV0, then set the "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Shift"}),"."]})]}),"\n",(0,t.jsx)(i.h3,{id:"liltoon-uv-tile-discard",children:'lilToon "UV Tile Discard"'}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If you use ",(0,t.jsx)(i.a,{href:"https://twitter.com/lil_xyzw/status/1747601947069464752",children:"lilToon UV Tile Discard"}),":"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"You must use lilToon 1.7.1 or above."})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:['Set the "UV Channel" to UV1, UV2, or UV3, so that it matches the "Discard UV" setting of your material.',"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["It is ",(0,t.jsx)(i.strong,{children:"strongly recommended"})," that you switch the UV channel of the material to something other than UV0."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Use the checkbox grid to match your setting from the UV Tile Discard tab."}),"\n",(0,t.jsxs)(i.li,{children:['Keep the "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Do Not Clear"}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:['If you are experiencing issues caused by an existing UV channel, change the UV channel, or set "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Set to Zero"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.p,{children:'Using UV0 with "UV Tile Discard" through this component is not recommended, because you cannot partially hide meshes that are part of the body flesh,\nas this would result in the texture visibly warping along the seams of the blendshape; in this case, use UV1, UV2, or UV3.'}),(0,t.jsxs)(i.p,{children:['That said, if you really want to use UV0, then set the "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Shift"}),"."]})]}),"\n",(0,t.jsx)(i.h3,{id:"scss-inventory-system",children:'SCSS "Inventory System"'}),"\n",(0,t.jsxs)(i.p,{children:["If you use ",(0,t.jsx)(i.a,{href:"https://gitlab.com/s-ilent/SCSS/-/wikis/Manual/Inventory-System",children:"SCSS's Inventory System"}),":"]}),"\n",(0,t.jsxs)(i.admonition,{type:"danger",children:[(0,t.jsx)(i.p,{children:"You cannot use the SCSS Inventory System to partially hide meshes that are part of the body flesh, as this would result in the texture visibly warping along the seams of the blendshape."}),(0,t.jsx)(i.p,{children:"In SCSS, this feature should only be used with individual pieces of clothing or accessories."})]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Set the "UV Channel" to UV0.'}),"\n",(0,t.jsxs)(i.li,{children:['Set "Existing UV Data" to ',(0,t.jsx)(i.em,{children:"Shift"}),"."]}),"\n",(0,t.jsx)(i.li,{children:'Set the "U" value to the corresponding Inventory System slot.'}),"\n",(0,t.jsx)(i.li,{children:'Keep the "V" value to zero.'}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"option-keep-partial-polygons",children:"Option: Keep Partial Polygons"}),"\n",(0,t.jsx)(i.p,{children:'If you want to exclude the vertices of polygons that are still connected to the mesh from being affected, check "Keep Partial Polygons".'}),"\n",(0,t.jsx)(i.p,{children:"On blendshapes that shrink the body, this preserves the end caps, so the blendshape still has an effect on the mesh."}),"\n",(0,t.jsx)(i.p,{children:"This might help with some avatar models, however, this will have no effect on blendshapes that have no edge loops separating vertices apart."}),"\n",(0,t.jsx)(l.U,{src:"../img/YkcjjmKw2G.mp4"}),"\n",(0,t.jsx)(i.h2,{id:"special-thanks",children:"Special thanks"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/d4rkc0d3r/",children:"d4rkpl4y3r"})," for the references on ",(0,t.jsx)(i.a,{href:"https://github.com/d4rkc0d3r/d4rkAvatarOptimizer",children:"mesh reconstruction"}),"!"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"versions",children:"Versions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"2.1.0"}),": NDMF Compatibility: This component now runs in the Transforming phase in order to run before VRCFury."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"1.9.0"}),":","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Assign UV Tile can now assign the ",(0,t.jsx)(i.strong,{children:"entire mesh"})," to an UV Tile."]}),"\n",(0,t.jsxs)(i.li,{children:["NDMF Compatibility: This component now runs before ",(0,t.jsx)(i.code,{children:"com.anatawa12.avatar-optimizer"})," in order to make sure meshes are not merged and blendshapes are not lost before this runs."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"1.7.0"}),": Added."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Classification: ",(0,t.jsx)(i.em,{children:"This component is application-agnostic."})]})]})}function m(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85041:(e,i,s)=>{s.d(i,{F:()=>r});s(96540);var t=s(20053);const n={hai_tag:"hai_tag_ZcC4",hai_tag_requires_vrchat:"hai_tag_requires_vrchat_kYpu",hai_tag_requires_resonite:"hai_tag_requires_resonite_AvzK",hai_tag_requires_basis:"hai_tag_requires_basis_QHoe",hai_tag_requires_chilloutvr:"hai_tag_requires_chilloutvr_mrre",hai_tag_requires_vrm:"hai_tag_requires_vrm_wBUl",hai_tag_compatible_with_vsfavatar:"hai_tag_compatible_with_vsfavatar_gZ5Q",hai_tag_compatible_with_vnyan:"hai_tag_compatible_with_vnyan_N46H",hai_tag_compatible_with_warudo:"hai_tag_compatible_with_warudo_YAVq",hai_tag_compatible_with_beatsaber:"hai_tag_compatible_with_beatsaber_Osd6",hai_tag_requires_steamvr:"hai_tag_requires_steamvr_stxM",hai_tag_universal:"hai_tag_universal_aJnK",hai_tag_not_compatible_with_gltf:"hai_tag_not_compatible_with_gltf_wSoo",hai_tag_supporter:"hai_tag_supporter_xAw7"};var a=s(74848);function r(e){let{requiresVRChat:i,isUniversal:s,requiresBasis:r,notVRChat:l,requiresResonite:o,requiresSteamVR:h,requiresChilloutVR:c,requiresVRM:d,compatibleWithVSFAvatar:u,compatibleWithVSeeFace:p,compatibleWithWarudo:m,compatibleWithBeatSaber:x,requiresWarudo:g,notCompatibleWithGltf:_,compatibleWithVNyan:j,short:v,supporter:f}=e,y=v?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Compatible with "}),w=v?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:"Requires "});return(0,a.jsxs)("span",{children:[i?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_vrchat),children:["\ud83d\udcac ",w,"VRChat"]}):"",o?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_resonite),children:["\u26a1 ",w,"Resonite"]}):"",r?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_basis),children:["\ud83d\udd3a ",w,"Basis"]}):"",d?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_vrm),children:["\ud83d\udcf9 ",w,"VRM"]}):"",h?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_steamvr),children:[w,"SteamVR"]}):"",c?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_requires_chilloutvr),children:["\ud83c\udf06 ",w,"ChilloutVR"]}):"",u?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[y,"VSFAvatar"]}):"",p?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_vsfavatar),children:[y,"VSeeFace"]}):"",j?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_vnyan),children:[y,"VNyan"]}):"",m?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:[y,"Warudo"]}):"",x?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_beatsaber),children:[y,"Beat Saber"]}):"",_?(0,a.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_not_compatible_with_gltf),children:"\ud83d\udeab Not compatible with GLB/GLTF format"}):"",g?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_compatible_with_warudo),children:["\ud83d\udcf9 ",w,"Warudo"]}):"",s?(0,a.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform"}):"",l?(0,a.jsx)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_universal),children:"\ud83c\udf0a Any Platform, except VRChat"}):"",f?(0,a.jsxs)("div",{className:(0,t.A)(n.hai_tag,n.hai_tag_supporter),children:["\u2b50 All Supporter tiers ",(0,a.jsx)("a",{href:"https://www.patreon.com/vr_hai",children:"(5\u20ac+)"})]}):""]})}},89618:(e,i,s)=>{s.d(i,{w:()=>n});s(96540);var t=s(74848);function n(e){let{children:i}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:i})})}},66926:(e,i,s)=>{s.d(i,{U:()=>r});s(96540);var t=s(74848);const n="https://large.docs.cdn.hai-vr.dev",a=n+"/assets/docs/";function r(e){const i=null!=e.cdn?n+e.cdn:a+e.src.substring(e.src.lastIndexOf("/")+1);return(0,t.jsx)("video",{controls:!0,muted:!e.sound,width:e.autoWidth?"auto":e.halfWidth?"408":"816",children:(0,t.jsx)("source",{src:i})})}}}]);