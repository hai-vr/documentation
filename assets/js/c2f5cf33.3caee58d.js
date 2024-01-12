"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7823],{48511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=n(85893),a=n(11151);const s=n.p+"assets/medias/sx_2021-12-21_10-53-42_KryfYW7TqN-ec4015c865f00ccc0fd87021af311725.mp4",r={},o="Constraint Track Animation Creator",c={id:"products/constraint-track-animation-creator/index",title:"Constraint Track Animation Creator",description:"Constraint Track Animation Creator is a Unity Editor tool which automates the creation of a gimmick that lets you animate an object to slide along a track using constraints.",source:"@site/docs/products/constraint-track-animation-creator/index.md",sourceDirName:"products/constraint-track-animation-creator",slug:"/products/constraint-track-animation-creator/",permalink:"/docs/products/constraint-track-animation-creator/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Convert to FaceEmo",permalink:"/docs/products/combo-gesture-expressions/convert-to-faceemo"},next:{title:"Reference manual",permalink:"/docs/products/constraint-track-animation-creator/reference"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Principles",id:"principles",level:2},{value:"Should you use a Constraint Track?",id:"should-you-use-a-constraint-track",level:2}];function d(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"constraint-track-animation-creator",children:"Constraint Track Animation Creator"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Constraint Track Animation Creator"})," is a Unity Editor tool which automates the creation of a gimmick that lets you animate an object to slide along a track using constraints."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This tool requires VRChat, and is incompatible with other apps and platforms."})}),"\n",(0,i.jsx)(t.p,{children:"This differs from blend shapes / shape keys, because bones moving along the track will lose their influence from the original bone they belonged from."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["Creating Constraint Track Animations is ",(0,i.jsx)(t.strong,{children:"very hard"}),". You should be familiar with Unity animations and Unity constraint components."]}),"\n",(0,i.jsx)(t.p,{children:"Being comfortable with modeling tools such as Blender will let you achieve better results, since you\u2019ll be able to split a bone in several parts, or add blend shapes. Avatar models are typically not designed to be used this way, so you will need to use your modeling skills at times to fill the gaps."}),"\n",(0,i.jsx)(t.p,{children:"The experience will not be smooth and the mesh will sometimes clip through the model, so you need to accept those imperfections, or if you wish, further use your modeling skills to hide those imperfections by cleverly animating additional shape keys."}),"\n",(0,i.jsx)("video",{controls:!0,width:"816",autostart:"false",children:(0,i.jsx)("source",{src:s})}),"\n",(0,i.jsx)(t.h2,{id:"principles",children:"Principles"}),"\n",(0,i.jsx)(t.p,{children:"In a Constraint Track Animation, you have three things."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Constraint."})," This is a Parent Constraint component that moves along the track."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(35699).Z+"",width:"455",height:"352"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Track."})," These are the transforms through which the Constraint will slide. The track points are parented to various bones of the avatar."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(97456).Z+"",width:"420",height:"514"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"Animation"}),". This animates the Constraint to move along the Track, and also animates the Track to disable them when not in use."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Untitled",src:n(68880).Z+"",width:"1272",height:"404"})}),"\n",(0,i.jsx)(t.p,{children:"The Parent Constraint lets an object move as if it had multiple parents. Each \u201cparent\u201d has a weight representing how much that parent will influence the movement. This weight can be controlled by an animation. By animating the weight, the object will move between the \u201cparents\u201d. Here, each parent of the Constraint is a waypoint in the track."}),"\n",(0,i.jsx)(t.p,{children:"Creating the Constraint, the Track, and the Animation is very hard to create by hand, and can result in mistakes."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"Constraint Track Animation Creator"})," will automate most of the painful process to let you focus on the other difficult parts: Modeling, and composing the Track."]}),"\n",(0,i.jsx)(t.p,{children:"It will also create the Animator layers for you if you intend to use it on VRChat."}),"\n",(0,i.jsx)(t.h2,{id:"should-you-use-a-constraint-track",children:"Should you use a Constraint Track?"}),"\n",(0,i.jsx)(t.p,{children:"Before committing to creating a Constraint Track, ask yourself if you really want to use a Constraint Track."}),"\n",(0,i.jsxs)(t.p,{children:["A Constraint Track is useful when it ",(0,i.jsx)(t.strong,{children:"goes through various other bones that can be deformed relative to each other"}),". If it does not, then you can simply use a Transform animation."]}),"\n",(0,i.jsx)(t.p,{children:"Some effects are more easily done without a track. For example, if you\u2019re building an umbrella, then you probably don\u2019t need a track. You can either use a blend shape / shape key, or just use simple Transform animations."})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},68880:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled 1-93556d5849653ddd05d1a875bb23120d.png"},35699:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-c011eda3992f351baa5b0dc4a7b56a17.gif"},97456:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untitled-33ac2eae1d7666907b2ff4344be2a7c2.png"}}]);