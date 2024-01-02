"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1574],{81346:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=t(85893),n=t(11151);const o={title:"Assign UV Tile (UDIM)"},a="Assign UV Tile",r={id:"products/prefabulous-avatar/hai-components/assign-uv-tile",title:"Assign UV Tile (UDIM)",description:"Sets the UV Tile of vertices that are moved by a blendshape.",source:"@site/docs/products/prefabulous-avatar/hai-components/assign-uv-tile.md",sourceDirName:"products/prefabulous-avatar/hai-components",slug:"/products/prefabulous-avatar/hai-components/assign-uv-tile",permalink:"/docs/products/prefabulous-avatar/hai-components/assign-uv-tile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Assign UV Tile (UDIM)"},sidebar:"tutorialSidebar",previous:{title:"Ha\xef~ Components",permalink:"/docs/products/prefabulous-avatar/hai-components"},next:{title:"Delete Polygons",permalink:"/docs/products/prefabulous-avatar/hai-components/delete-polygons"}},l={},h=[{value:"How to use",id:"how-to-use",level:2},{value:"Option: Keep Partial Polygons",id:"option-keep-partial-polygons",level:2},{value:"Special thanks",id:"special-thanks",level:2},{value:"Versions",id:"versions",level:2}];function c(e){const s={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"assign-uv-tile",children:"Assign UV Tile"}),"\n",(0,i.jsx)(s.p,{children:"Sets the UV Tile of vertices that are moved by a blendshape."}),"\n",(0,i.jsxs)(s.p,{children:["This is meant to be used in tandem with shader features, especially ",(0,i.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi's UV Tile Discard"}),"."]}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:t(59671).Z})}),"\n",(0,i.jsx)(s.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,i.jsx)(s.p,{children:"This component will assign the UV tile of vertices that are moved by a blendshape."}),"\n",(0,i.jsxs)(s.p,{children:["This is meant to be used in tandem with shader features, especially ",(0,i.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi's UV Tile Discard"}),',\nwhich in this case "',(0,i.jsx)(s.em,{children:"provides an efficient way to toggle portions of a model on and off at runtime"}),'".']}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Using ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi's UV Tile Discard"})})," makes this effectively similar to ",(0,i.jsx)(s.a,{href:"./delete-polygons",children:"Delete Polygons"}),",\nexcept that this will ",(0,i.jsx)(s.strong,{children:"not"})," lower your avatar polygon count; instead it will ease the rendering load when the toggle is off."]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.em,{children:["If you do not animate the shader feature, use ",(0,i.jsx)(s.a,{href:"./delete-polygons",children:"Delete Polygons"})," instead, which will lower your avatar polygon count."]})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"To use this component:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'Add one or several "PA-H Assign UV Tile" component anywhere in your avatar.'}),"\n",(0,i.jsx)(s.li,{children:"Add blendshapes which move the polygons that you want shader features to affect. Any SkinnedMeshRenderer that has that blendshape will be affected."}),"\n",(0,i.jsxs)(s.li,{children:["For each component, assign the channel. The UI is built to closely mirror ",(0,i.jsx)(s.a,{href:"https://www.poiyomi.com/special-fx/uv-tile-discard",children:"Poiyomi's UV Tile Discard"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact."}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:t(93023).Z})}),"\n",(0,i.jsx)(s.h2,{id:"option-keep-partial-polygons",children:"Option: Keep Partial Polygons"}),"\n",(0,i.jsx)(s.p,{children:'If you want to exclude the vertices of polygons that are still connected to the mesh from being affected, check "Keep Partial Polygons".'}),"\n",(0,i.jsx)(s.p,{children:"On blendshapes that shrink the body, this preserves the end caps, so the blendshape still has an effect on the mesh."}),"\n",(0,i.jsx)(s.p,{children:"This might help with some avatar models, however, this will have no effect on blendshapes that have no edge loops separating vertices apart."}),"\n",(0,i.jsx)("video",{controls:!0,muted:!0,width:"816",children:(0,i.jsx)("source",{src:t(45752).Z})}),"\n",(0,i.jsx)(s.h2,{id:"special-thanks",children:"Special thanks"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/d4rkc0d3r/",children:"d4rkpl4y3r"})," for the references on ",(0,i.jsx)(s.a,{href:"https://github.com/d4rkc0d3r/d4rkAvatarOptimizer",children:"mesh reconstruction"}),"!"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"versions",children:"Versions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"1.7.0"}),": Added."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},59671:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/medias/13rQ7HGwPr-ec5d550ea5727a70033b65daa55d19b7.mp4"},45752:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/medias/YkcjjmKw2G-3b7706e7e78e9616e228b4090ed209c3.mp4"},93023:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/medias/pOxhnkOYpj-883feecc7587a41344c18c262c87efd2.mp4"}}]);