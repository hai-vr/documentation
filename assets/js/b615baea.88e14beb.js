"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1948],{19667:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=t(74848),n=t(28453);const l={sidebar_position:1},r="Selectors",c={id:"products/starmesh/selectors",title:"Selectors",description:"This tool is currently not available, and this documentation is currently being written.",source:"@site/docs/products/starmesh/selectors.md",sourceDirName:"products/starmesh",slug:"/products/starmesh/selectors",permalink:"/docs/products/starmesh/selectors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2b50 Starmesh",permalink:"/docs/products/starmesh/"},next:{title:"Compressive Deform",permalink:"/docs/products/starmesh/operators/compressive-deform"}},o={},d=[{value:"Select Meshes",id:"select-meshes",level:2},{value:"Select Bones",id:"select-bones",level:2},{value:"Select Point Radius",id:"select-point-radius",level:2},{value:"Select Line Radius",id:"select-line-radius",level:2}];function h(e){const s={admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"selectors",children:"Selectors"}),"\n",(0,i.jsx)(s.admonition,{type:"danger",children:(0,i.jsx)(s.p,{children:"This tool is currently not available, and this documentation is currently being written."})}),"\n",(0,i.jsx)(s.h2,{id:"select-meshes",children:"Select Meshes"}),"\n",(0,i.jsx)(s.p,{children:"Specify which meshes will be affected."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Skinned Mesh Renderers"}),": Select SkinnedMeshRenderer components."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Initial Blendshapes"}),": During the calculations, these blendshapes will be emulated to be active as part of the operations."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"select-bones",children:"Select Bones"}),"\n",(0,i.jsx)(s.p,{children:"Reduces the current selection so that only vertices weights to the specified bones will be affected."}),"\n",(0,i.jsx)(s.p,{children:"The weight is the sum of all bones that match."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Bone Weight Curve"}),": After all bones are selected, the weight will be remapped using this curve."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"select-point-radius",children:"Select Point Radius"}),"\n",(0,i.jsx)(s.p,{children:"Reduces the current selection so that only vertices within a radius around a point will be selected."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Radius"}),": The radius of this point."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Selection Curve"}),": The normalized distance will be remapped to this curve."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"select-line-radius",children:"Select Line Radius"}),"\n",(0,i.jsx)(s.p,{children:"Reduces the current selection so that only vertices in proximity to a line will be selected."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Radius A"}),": The radius of the line at point A."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Radius B"}),": The radius of the line at point B."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Selection Curve A"}),": Vertices on the A side will have their normalized distance will be remapped to this curve."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Selection Curve B"}),": Vertices on the B side will have their normalized distance will be remapped to this curve."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Vertices between A and B will be will have their normalized distance will be remapped to both this curve and the Selection Curve B,\nbased on the projection of that vertex on that line."})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);