"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2993],{84827:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(85893),n=t(11151);const r={},i="Coordinate spaces",o={id:"resilience/rep/coordinate-spaces",title:"Coordinate spaces",description:"In order to favor experimentation \ud83e\uddea, Resilience has several interpretations for what is normally referred to as the playspace.",source:"@site/docs/resilience/rep/coordinate-spaces.md",sourceDirName:"resilience/rep",slug:"/resilience/rep/coordinate-spaces",permalink:"/docs/resilience/rep/coordinate-spaces",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"resilienceSidebar",previous:{title:"Mementos",permalink:"/docs/resilience/early-testers/sdk/mementos"}},c={},l=[{value:"Camera space and Avatar space",id:"camera-space-and-avatar-space",level:2}];function p(e){const a={em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"coordinate-spaces",children:"Coordinate spaces"}),"\n",(0,s.jsx)(a.p,{children:"In order to favor experimentation \ud83e\uddea, Resilience has several interpretations for what is normally referred to as the playspace."}),"\n",(0,s.jsx)(a.p,{children:"In the real-world playspace, the center of the playspace is at (0,0,0), and 1 meter is 1 unit.\nThis space contains representations of the hardware placed in the physical world."}),"\n",(0,s.jsxs)(a.p,{children:["The objects in this real-world playspace are copied to both the ",(0,s.jsx)(a.strong,{children:"Camera space"})," and the ",(0,s.jsx)(a.strong,{children:"Avatar space"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"camera-space-and-avatar-space",children:"Camera space and Avatar space"}),"\n",(0,s.jsx)(a.p,{children:"Most of the time, the Camera space and Avatar space will be the same: Your camera (HMD) will be the point of view of your avatar."}),"\n",(0,s.jsx)(a.p,{children:"However, in Resilience, the two spaces can be separated."}),"\n",(0,s.jsx)(a.p,{children:"For example, it is possible to switch to a third-person view, where you can observe your avatar in VR while being outside of it."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.em,{children:"(It might even be possible to envision a scenario where a single user could puppeteer multiple avatars at the same time,\nbut for now we should only assume that there is only one Avatar space active at one time)"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"The position will differ when separating."}),"\n",(0,s.jsx)(a.li,{children:"The rotation may be different between the two spaces, so you could look at your avatar from the front."}),"\n",(0,s.jsx)(a.li,{children:"The scale may be different between the two spaces, so the avatar would look smaller or bigger."}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:"In this case, systems need to take this into account:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"When calibrating for full body tracking, hardware measurements made in relation with the avatar will be done in Avatar space."}),"\n",(0,s.jsx)(a.li,{children:"Some UI panels may need to be displayed and move in Camera space instead of Avatar space."}),"\n",(0,s.jsx)(a.li,{children:"Interacting with UI panels is likely to be done in Camera space, but it might be necessary to keep it in Avatar space for some contexts."}),"\n",(0,s.jsx)(a.li,{children:"Interactions with objects located in the world are likely to happen in World space using the avatar movement in Avatar space,\nbut some interactions with objects located in the world might happen with the hardware movement in Camera space."}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);