"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7415],{5167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(74848),a=t(28453);const s={sidebar_position:6},r="Reference manual",o={id:"products/animator-as-code/reference",title:"Reference manual",description:"This is the work-in-progress documentation for Animator As Code V1, which has not yet been released. The last public version of Animator As Code is V0.",source:"@site/docs/products/animator-as-code/reference.md",sourceDirName:"products/animator-as-code",slug:"/products/animator-as-code/reference",permalink:"/docs/products/animator-as-code/reference",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/products/animator-as-code/getting-started"},next:{title:"Base functions",permalink:"/docs/products/animator-as-code/functions/base"}},l={},d=[{value:"Create states",id:"create-states",level:2},{value:"Creating parameters for use within layers",id:"creating-parameters-for-use-within-layers",level:2},{value:"Forcing the value of parameters",id:"forcing-the-value-of-parameters",level:2},{value:"Visually organize your states",id:"visually-organize-your-states",level:2},{value:"Create an animation",id:"create-an-animation",level:2},{value:"Create transitions and define conditions",id:"create-transitions-and-define-conditions",level:2},{value:"When(), And(), and Or() operators",id:"when-and-and-or-operators",level:2},{value:"Conditions that generate multiple transitions",id:"conditions-that-generate-multiple-transitions",level:2},{value:"Use the WhenConditions() operator to build in a <code>for</code> loop",id:"use-the-whenconditions-operator-to-build-in-a-for-loop",level:2},{value:"Create many-to-one transitions using a <code>foreach</code> loop",id:"create-many-to-one-transitions-using-a-foreach-loop",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"reference-manual",children:"Reference manual"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["This is the work-in-progress documentation for Animator As Code ",(0,i.jsx)(n.strong,{children:"V1"}),", which has not yet been released. The last public version of Animator As Code is V0."]})}),"\n",(0,i.jsx)(n.h2,{id:"create-states",children:"Create states"}),"\n",(0,i.jsx)(n.p,{children:"Using your layer, you may now create states. Your state will be configured with defaults based on your AAC configuration, most notably, the Write Defaults setting."}),"\n",(0,i.jsx)(n.p,{children:"By default, states have a dummy animation that lasts one frame (1/60th of a second)."}),"\n",(0,i.jsx)(n.p,{children:"It is intended to create the animation clip directly while declaring the state, this will be explained later on."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var hidden = fx.NewState("Hidden")\n    .WithAnimation(aac.NewClip().Toggling(my.item, false));\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-parameters-for-use-within-layers",children:"Creating parameters for use within layers"}),"\n",(0,i.jsx)(n.p,{children:"Using your layer, you can create parameters."}),"\n",(0,i.jsx)(n.p,{children:"The parameter will be added to the animator the layer belongs to."}),"\n",(0,i.jsx)(n.p,{children:"If you need to reuse a parameter across multiple layers, you need to invoke it on all relevant layers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"(Once done, you are not forced to reuse the resulting parameter instance on the same layer it was created from)"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'\nfx.NewState("Motion")\n    // This creates a Float parameter on the FX layer.\n    .MotionTime(fx.FloatParameter("WedgeAmount"))\n    // ...\n'})}),"\n",(0,i.jsx)(n.p,{children:"If a parameter with the same name already exists in the animator, it will not be created again."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This is also true if the animator already has a parameter with the same name but with a different type, and no error will be raised."})}),"\n",(0,i.jsx)(n.p,{children:"There are also dedicated functions to obtain Avatars 3.0 parameters, such as."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var gestureLeftWeight = fx.Av3().GestureLeftWeight\n"})}),"\n",(0,i.jsx)(n.h2,{id:"forcing-the-value-of-parameters",children:"Forcing the value of parameters"}),"\n",(0,i.jsx)(n.p,{children:"In some rare cases you may wish to override the default value of animator parameters, for example in use for special conditions, for use in blend trees as a constant value."}),"\n",(0,i.jsx)(n.p,{children:"Using your layer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'fx.OverrideValue(fx.FloatParameter("SmoothingAmount"), 0.7f)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"visually-organize-your-states",children:"Visually organize your states"}),"\n",(0,i.jsx)(n.p,{children:"By default, a newly created state will be visually placed under the previously created state."}),"\n",(0,i.jsxs)(n.p,{children:["For more control, states have ",(0,i.jsx)(n.code,{children:"LeftOf"}),", ",(0,i.jsx)(n.code,{children:"RightOf"}),", ",(0,i.jsx)(n.code,{children:"Over"}),", ",(0,i.jsx)(n.code,{children:"Under"}),", ",(0,i.jsx)(n.code,{children:"Shift"})," operators, which let you move a state to be visually next to another state."]}),"\n",(0,i.jsx)(n.p,{children:"The value is in grid units."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Untitled",src:t(18397).A+"",width:"536",height:"249"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var init = fx.NewState("Init"); // This is the first state. By default it is at (0, 0)\nvar a = fx.NewState("A"); // This will be placed under Init.\nvar b = fx.NewState("B"); // This will be placed under A.\nvar c = fx.NewState("C").RightOf(a); // This will be placed right of A.\nvar d = fx.NewState("D"); // This will be placed under C.\nvar e = fx.NewState("E").RightOf(); // This will be placed right of D.\nvar alternate = fx.NewState("Alternate").Over(c); // This will be placed over C.\n\n// This will be placed relative to Alternate: 2 blocks over, and 1 to the right.\nvar reset = fx.NewState("Reset").Shift(alternate, 1, -2);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"create-an-animation",children:"Create an animation"}),"\n",(0,i.jsxs)(n.p,{children:["By default, states have a dummy animation that lasts one frame (1/60th of a second). If you want the state to play an animation of your choice, there is usually an invocation to the ",(0,i.jsx)(n.code,{children:".WithAnimation(...)"})," function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'var hidden = fx.NewState("Hidden")\n    .WithAnimation(aac.NewClip().Toggling(my.item, false));\n'})}),"\n",(0,i.jsx)(n.p,{children:"The invocation uses AAC to create a new clip inside the asset container. You don\u2019t need to specify a name for this clip, it is irrelevant."}),"\n",(0,i.jsx)(n.p,{children:"Animations use object references instead of paths. They are converted to paths in the animation clip asset by resolving the relative path to the animator root of the AAC configuration."}),"\n",(0,i.jsx)(n.p,{children:"Most of the functions lets you create single-frame constant animations."}),"\n",(0,i.jsxs)(n.p,{children:["For more complex animations, use the ",(0,i.jsx)(n.code,{children:".Animating(...)"})," function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'fx.NewState("Motion")\n    .WithAnimation(aac.NewClip().Animating(clip =>\n    {\n        clip.Animates(my.wedgeMesh, "blendShape.Wedge").WithFrameCountUnit(keyframes =>\n            keyframes.Easing(0, 100f).Easing(28, 0).Easing(29, 0).Easing(30, 0).Easing(31, 0).Easing(32, 0).Easing(60, 100f)\n        );\n        clip.Animates(my.wedgeMesh, "material._Metallic").WithFrameCountUnit(keyframes =>\n            keyframes.Constant(0, 1f).Constant(28, 0).Constant(60, 0)\n        );\n    }))\n'})}),"\n",(0,i.jsx)(n.h2,{id:"create-transitions-and-define-conditions",children:"Create transitions and define conditions"}),"\n",(0,i.jsx)(n.p,{children:"Using the states, you can create transitions between states. Your transition will be configured with defaults based on your AAC configuration, defined within the DefaultsProvider."}),"\n",(0,i.jsxs)(n.p,{children:["To create a transition from Any, Exit, or Entry, there are some functions in the states like ",(0,i.jsx)(n.code,{children:".TransitionsFromAny()"})," or ",(0,i.jsx)(n.code,{children:".Exits()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Start defining conditions for that transition using the ",(0,i.jsx)(n.code,{children:".When(...)"})," operator."]}),"\n",(0,i.jsx)(n.p,{children:"Parameters have functions that generate conditions once invoked."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'reevaluating.TransitionsTo(state)\n    // Use ".Av3" to access VRChat standard parameters.\n    // Accessing these parameters will create the corresponding parameter in the animator.\n    .When(layer.Av3().GestureLeft.IsEqualTo(left))\n    .And(layer.Av3().GestureRight.IsEqualTo(right));\nstate.TransitionsTo(reevaluating)\n    .When(layer.Av3().GestureLeft.IsNotEqualTo(left))\n    .Or()\n    .When(layer.Av3().GestureRight.IsNotEqualTo(right));\n'})}),"\n",(0,i.jsx)(n.h2,{id:"when-and-and-or-operators",children:"When(), And(), and Or() operators"}),"\n",(0,i.jsx)(n.p,{children:"In animator transitions, all conditions must be verified for the transition to occur; this is effectively a \u201cAND\u201d of all of the conditions (A && B && C)."}),"\n",(0,i.jsxs)(n.p,{children:["This is done by using the ",(0,i.jsx)(n.code,{children:".And(...)"})," operator: ",(0,i.jsx)(n.code,{children:".When(A).And(B).And(C)"})]}),"\n",(0,i.jsx)(n.p,{children:"To represent \u201cOR\u201d, new transitions need to be created; ((A && B && C) || (D && E)) results in:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Transition 1: (A && B && C)"}),"\n",(0,i.jsx)(n.li,{children:"Transition 2: (D && E)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This is done by using the ",(0,i.jsx)(n.code,{children:".Or(...)"})," operator: ",(0,i.jsx)(n.code,{children:".When(A).And(B).And(C).Or().When(D).And(E)"})]}),"\n",(0,i.jsx)(n.p,{children:"From this limitation, conditions with nested OR cannot be expressed easily, such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud83d\udeab (F && (G || H) && (J || K))"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conditions-that-generate-multiple-transitions",children:"Conditions that generate multiple transitions"}),"\n",(0,i.jsxs)(n.p,{children:["Some conditions generate multiple transitions, such as ",(0,i.jsx)(n.code,{children:"boolParameters.IsAnyFalse()"})]}),"\n",(0,i.jsx)(n.p,{children:"In order to still let you express these expressions easily, the following applies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["These conditions can only be used in a ",(0,i.jsx)(n.code,{children:".When(...)"})," operator, and not within a ",(0,i.jsx)(n.code,{children:".And(...)"})]}),"\n",(0,i.jsxs)(n.li,{children:["If such a condition is used, calling ",(0,i.jsx)(n.code,{children:".And(...)"})," will apply the condition to all transitions generated by the ",(0,i.jsx)(n.code,{children:".When(...)"})," operator up until the next ",(0,i.jsx)(n.code,{children:"Or(...)"})," operator if any exists.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For example:\n",(0,i.jsx)(n.code,{children:".When(fx.BoolParameters(I, J).IsAnyFalse()).And(K.IsTrue())"})]}),"\n",(0,i.jsxs)(n.li,{children:["Is equivalent to:\n",(0,i.jsx)(n.code,{children:".When(I.IsFalse()).And(K.IsTrue()).Or().When(J.IsFalse()).And(K.IsTrue())"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"use-the-whenconditions-operator-to-build-in-a-for-loop",children:["Use the WhenConditions() operator to build in a ",(0,i.jsx)(n.code,{children:"for"})," loop"]}),"\n",(0,i.jsxs)(n.p,{children:["The presence of the ",(0,i.jsx)(n.code,{children:".When(...)"})," operator can make it difficult to build conditions iteratively in a ",(0,i.jsx)(n.code,{children:"for"})," loop."]}),"\n",(0,i.jsxs)(n.p,{children:["For this purpose, use the ",(0,i.jsx)(n.code,{children:".WhenConditions()"})," operator. This will let you build conditions using the ",(0,i.jsx)(n.code,{children:".And(...)"})," operator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"var conditions = state.TransitionsFromEntry().WhenConditions();\nfor (var i = 0; i < numberOfBits; i++)\n{\n   conditions.And(parameter[i].IsEqualTo(bitMask[i]));\n}\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"create-many-to-one-transitions-using-a-foreach-loop",children:["Create many-to-one transitions using a ",(0,i.jsx)(n.code,{children:"foreach"})," loop"]}),"\n",(0,i.jsx)(n.p,{children:"There is no facility to create multiple identical transitions from multiple states to another state."}),"\n",(0,i.jsxs)(n.p,{children:["Use a regular ",(0,i.jsx)(n.code,{children:"foreach"})," loop to achieve this."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"foreach (var cancelWhenNotAllowed in new[] {auto, reverse, manual, custom, done})\n{\n    cancelWhenNotAllowed.TransitionsTo(idle).When(allowSystemParameter.IsFalse());\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},18397:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/155912996-89369e2d-435d-4619-b5ee-3ac4b6f8827c-da41a4680cf4123353e56c745980edf9.png"}}]);