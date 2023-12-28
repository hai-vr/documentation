"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3328],{86894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});var s=a(85893),o=a(11151);const i={},r="FAQ",n={id:"products/facetra-shape-creator/faq",title:"FAQ",description:"Is this compatible with models edited in Blender?",source:"@site/docs/products/facetra-shape-creator/faq.md",sourceDirName:"products/facetra-shape-creator",slug:"/products/facetra-shape-creator/faq",permalink:"/docs/products/facetra-shape-creator/faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2b50 FaceTra Shape Creator",permalink:"/docs/products/facetra-shape-creator/"},next:{title:"\u2b50 IconGen",permalink:"/docs/products/icon-gen"}},d={},l=[{value:"Is this compatible with models edited in Blender?",id:"is-this-compatible-with-models-edited-in-blender",level:3},{value:"My model already has face tracking. Can I still use this tool?",id:"my-model-already-has-face-tracking-can-i-still-use-this-tool",level:3}];function c(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(t.h3,{id:"is-this-compatible-with-models-edited-in-blender",children:"Is this compatible with models edited in Blender?"}),"\n",(0,s.jsx)(t.p,{children:"Yes, it is compatible."}),"\n",(0,s.jsx)(t.p,{children:"It should not matter whether you are using the original model, or a model edited in Blender, or a model edited by another patch."}),"\n",(0,s.jsx)(t.p,{children:"The asset does not store any vertex data, and it does not rely on vertex IDs. If you add vertices to your mesh (such as edge loops), the tool will continue to function normally and you will not need to rebuild the FaceTra asset (depending on how you saved the file, you may have to reconfigure the Mesh data calibration panel)."}),"\n",(0,s.jsx)(t.p,{children:"When you select vertices using the tool, there is no vertex data stored within the asset. Vertex selections are represented with one position and a radius: the entire selection is recalculated every time from the model using a flood fill algorithm."}),"\n",(0,s.jsx)(t.p,{children:"The tool only stores positions, rotations, radius, distances, and curves."}),"\n",(0,s.jsx)(t.p,{children:"Positions and rotations are always stored in a coordinate space where the character stands in the Y direction and is facing towards the Z direction, independently from the mesh coordinate space."}),"\n",(0,s.jsx)(t.h3,{id:"my-model-already-has-face-tracking-can-i-still-use-this-tool",children:"My model already has face tracking. Can I still use this tool?"}),"\n",(0,s.jsxs)(t.p,{children:["If your model already has face tracking but you want to rewrite some shapes or only use some of the tools' features, you can choose which face tracking shapes to rewrite ",(0,s.jsx)(t.a,{href:"https://hai-vr.notion.site/Ha-s-FaceTra-Shape-Creator-f1d95d4459e54fc3b2f166d9ebb5ebf3#26b24f2414e440898b9573e051f8ba6b",children:"in the Output settings"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);