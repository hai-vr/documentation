"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1933],{1661:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=o(5893),n=o(1151);const a={title:"Auto-remove OSC config"},i=void 0,r={id:"products/auto-remove-osc-config",title:"Auto-remove OSC config",description:"This tool will automatically remove the OSC config after every successful VRChat avatar upload.",source:"@site/docs/products/auto-remove-osc-config.md",sourceDirName:"products",slug:"/products/auto-remove-osc-config",permalink:"/docs/products/auto-remove-osc-config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Auto-remove OSC config"},sidebar:"tutorialSidebar",previous:{title:"Non-destructive workflow examples",permalink:"/docs/products/animator-as-code/examples-maac"},next:{title:"Blendshape Viewer",permalink:"/docs/products/blendshape-viewer"}},l={},c=[{value:"Download",id:"download",level:2},{value:"VCC",id:"vcc",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"When to use this tool?",id:"when-to-use-this-tool",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This tool will automatically remove the OSC config after every successful VRChat avatar upload."}),"\n",(0,s.jsx)(t.h2,{id:"download",children:"Download"}),"\n",(0,s.jsx)(t.p,{children:"The tool is free for download using VCC."}),"\n",(0,s.jsx)(t.h3,{id:"vcc",children:"VCC"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Use this link to ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json",children:"install our listing to VCC"})}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Add ",(0,s.jsx)(t.em,{children:"Ha\xef ~ Auto-remove OSC config"})," to your project using VCC."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Once the package is installed"}),", the OSC config file will be removed after every successful VRChat avatar upload."]}),"\n",(0,s.jsx)(t.p,{children:"Note that if you load your avatar in-game too shortly after the upload, the game might still load the previous version of the avatar, which will cause the OSC config file to be out of date again."}),"\n",(0,s.jsx)(t.h2,{id:"when-to-use-this-tool",children:"When to use this tool?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Auto-remove OSC config"})," is meant to be used by OSC users (face tracking, connected objects, special overlays, and other tricks)."]}),"\n",(0,s.jsxs)(t.p,{children:["When the avatar is loaded for the first time, VRChat generates a JSON file located in ",(0,s.jsx)(t.code,{children:"/Users/{windowsUser}/AppData/LocalLow/VRChat/VRChat/OSC/{userId}/Avatars/{avatarId}.json"})]}),"\n",(0,s.jsx)(t.p,{children:"This file contains information about the current expression parameters of the avatar."}),"\n",(0,s.jsx)(t.p,{children:"This file is not generated again when the avatar is updated. This can cause OSC applications to fail reacting to newly added expressions parameters, such as face tracking parameters for instance."}),"\n",(0,s.jsx)(t.p,{children:'Typically, the fix is to go in VRChat Expressions menu, and click "Reset OSC config" after every meaningful upload.'}),"\n",(0,s.jsx)(t.p,{children:"This tool assumes that you did not manually update this JSON file (this almost never happens), and deletes it after every avatar upload, so that the avatar parameters should work consistently after every new upload."})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>i});var s=o(7294);const n={},a=s.createContext(n);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);