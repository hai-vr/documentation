"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3548],{93240:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(74848),s=i(28453);const a={title:"Animator As Code"},r=void 0,l={id:"changelogs/animator-as-code",title:"Animator As Code",description:"1.2.0-beta.1 (Planned)",source:"@site/docs/changelogs/animator-as-code.md",sourceDirName:"changelogs",slug:"/changelogs/animator-as-code",permalink:"/docs/changelogs/animator-as-code",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Animator As Code"},sidebar:"changelogsSidebar",previous:{title:"Animator As Code - VRChat",permalink:"/docs/changelogs/animator-as-code-vrchat"},next:{title:"Auto-reset OSC config",permalink:"/docs/changelogs/auto-reset-osc-config"}},o={},c=[{value:"1.2.0-beta.1 (Planned)",id:"120-beta1-planned",level:2},{value:"1.1.0",id:"110",level:2},{value:"Features in V1 compared to V0",id:"features-in-v1-compared-to-v0",level:3},{value:"VRChat-specific features",id:"vrchat-specific-features",level:3},{value:"Changes in V1.1.0 compared to V1.0.99xx",id:"changes-in-v110-compared-to-v1099xx",level:3},{value:"Future breaking changes in V1.2.0",id:"future-breaking-changes-in-v120",level:3},{value:"1.1.0-beta.9",id:"110-beta9",level:2},{value:"1.1.0-beta.8",id:"110-beta8",level:2},{value:"1.1.0-beta.7",id:"110-beta7",level:2},{value:"1.1.0-beta.6",id:"110-beta6",level:2},{value:"1.1.0-beta.5",id:"110-beta5",level:2},{value:"1.1.0-beta.4",id:"110-beta4",level:2},{value:"1.1.0-beta.3",id:"110-beta3",level:2},{value:"1.1.0-beta.2",id:"110-beta2",level:2},{value:"1.1.0-beta.1",id:"110-beta1",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"120-beta1-planned",children:"1.2.0-beta.1 (Planned)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add support for third-party asset container management.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In preparation for the introduction of ",(0,t.jsx)(n.a,{href:"https://github.com/bdunderscore/ndmf/releases/tag/1.6.0",children:"IAssetSaver in NDMF 1.6.0"}),",\nadd the ability to delegate the management of the asset container to a third party.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No new dependencies are added."}),"\n",(0,t.jsx)(n.li,{children:"By default, the behaviour of Animator As Code is the same as V1.1.0."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Add new optional field ",(0,t.jsx)(n.code,{children:"AacConfiguration.AssetContainerProvider"})," to specify an asset container provider."]}),"\n",(0,t.jsxs)(n.li,{children:["Add new interface ",(0,t.jsx)(n.code,{children:"IAacAssetContainerProvider"})," to abstract asset container management."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The above changes have been contributed by ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/kb10uy",children:"kb10uy (KOBAYASHI Y\u016b)"})})," (first contribution)."]}),"\n",(0,t.jsx)(n.p,{children:"As specified in the changelog for the official release of Animator As Code V1, breaking changes had been planned, and will be applied starting this version:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["AacFlSettingKeyframes constructor is now private.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For compatibility reasons, it was public for the duration of V1.1.x, and was already marked as obsolete in V1.1.x."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["The methods AacFlBase.InternalConfiguration and AacFlBase.InternalDoCreateLayer are now private.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For compatibility reasons, it was public for the duration of V1.1.x, and was already marked as obsolete in V1.1.x."}),"\n",(0,t.jsx)(n.li,{children:"The class AacAccessorForExtensions replaced them."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These breaking changes are meant to be the last breaking changes for the lifetime of Animator As Code V1."}),"\n",(0,t.jsx)(n.h2,{id:"110",children:"1.1.0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["For a full changelog, see the ",(0,t.jsx)(n.a,{href:"/updates/2024/08/21/p0",children:"announcement page"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"Leave Alpha version, by committing some of the last breaking API changes."}),"\n",(0,t.jsx)(n.h3,{id:"features-in-v1-compared-to-v0",children:"Features in V1 compared to V0"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Pull major contributions from ",(0,t.jsx)(n.a,{href:"https://github.com/galister",children:(0,t.jsx)(n.strong,{children:"@galister"})})," which:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:["Adds support for ",(0,t.jsx)(n.a,{href:"/docs/products/animator-as-code/functions/base#layer-aacfllayer",children:(0,t.jsx)(n.strong,{children:"sub-state machines"})})]}),", which is important because it enables the creation of states that evaluate multiple transitions within one frame,\nwhich is not possible to do without sub-state machines (with one exception).","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This trait is already extensively used in ",(0,t.jsx)(n.em,{children:"ComboGestureExpressions V2"})," and above."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Share functionality of state and sub-state machines."}),"\n",(0,t.jsx)(n.li,{children:"Share functionality of Int and Float parameters together."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Make it usable in ",(0,t.jsx)(n.strong,{children:"non-VRChat"})," avatar projects.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"VRChat-related functionality is now exposed as extension functions in a separate package."}),"\n",(0,t.jsx)(n.li,{children:"Also, separate destructive functions and non-destructive functions."}),"\n",(0,t.jsx)(n.li,{children:"Since this no longer requires a VRChat project, this also means it may now be usable in VRChat world projects."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Make it more usable in non-destructive components.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It is already in use in ",(0,t.jsx)(n.em,{children:"Prefabulous"})," and ",(0,t.jsx)(n.em,{children:"Vixen"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Move to packages, for distribution using VCC (and now, ALCOM)."}),"\n",(0,t.jsxs)(n.li,{children:["It is now possible to build Unity ",(0,t.jsxs)(n.a,{href:"/docs/products/animator-as-code/functions/base#blend-trees-aacflblendtree",children:[(0,t.jsx)(n.strong,{children:"BlendTree"})," assets using a fluent interface"]}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"vrchat-specific-features",children:"VRChat-specific features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Animator As Code for VRChat"})," supports for ",(0,t.jsx)(n.strong,{children:"VRCAnimatorPlayAudio"})," through the ",(0,t.jsx)(n.code,{children:"AacFlState.Audio(AudioSource or string, ...)"})," function,\n",(0,t.jsx)(n.a,{href:"/docs/products/animator-as-code/functions/vrchat#audio-editing-aacvrcfleditanimatorplayaudio",children:"which takes a lambda expression as a parameter"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["As ",(0,t.jsx)(n.em,{children:"VRCAvatarParameterDriver"})," has evolved over the years, you can now build multiple ",(0,t.jsx)(n.strong,{children:"VRCAvatarParameterDriver"})," behaviours on the same state\nthrough the ",(0,t.jsx)(n.code,{children:"AacFlState.Driving(...)"})," function, ",(0,t.jsx)(n.a,{href:"/docs/products/animator-as-code/functions/vrchat#driver-editing-aacvrcfleditavatarparameterdriver",children:"which takes a lambda expression as a parameter"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"changes-in-v110-compared-to-v1099xx",children:"Changes in V1.1.0 compared to V1.0.99xx"}),"\n",(0,t.jsx)(n.p,{children:"Animator As Code V1.1.0 contains breaking changes compared to Animator As Code (Alpha) V1.0.99xx."}),"\n",(0,t.jsx)(n.p,{children:"Compared to 1.0.99xx:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Commit breaking changes to fix inconsistencies in the API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"(BREAKING) AacFlController.AnimatorController is no longer settable."}),"\n",(0,t.jsx)(n.li,{children:"(BREAKING) Replace public readonly fields with get-only properties."}),"\n",(0,t.jsx)(n.li,{children:"(BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference."}),"\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Make constructors non-public.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"WARNING: The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0."}),"\n",(0,t.jsx)(n.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Fix inconsistencies in the API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rename AacFlState.WithMotionTime to AacFlState.MotionTime."}),"\n",(0,t.jsx)(n.li,{children:"Rename *Percent to *Normalized."}),"\n",(0,t.jsx)(n.li,{children:"Add additional single-valued and array overloads."}),"\n",(0,t.jsx)(n.li,{children:"Make Component[] methods null-element safe."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Inline documentation pass."}),"\n",(0,t.jsx)(n.li,{children:"Update LICENSE: Add galister for major contributions."}),"\n",(0,t.jsxs)(n.li,{children:["Accomodate new VRCAnimatorPlayAudio requirements:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource)."}),"\n",(0,t.jsx)(n.li,{children:"Nodes need to have the ability to create a New Behaviour, even if one already exists."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Functional fixes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter."}),"\n",(0,t.jsxs)(n.li,{children:["Fix Any state transitions will be created from SSMs:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Due to an implementation error, creating Any state transitions previously did not have any effect in the graph."}),"\n",(0,t.jsx)(n.li,{children:"This now creates Any state from the root machine."}),"\n",(0,t.jsx)(n.li,{children:'Sub-state machines "cannot" have Any state transitions created directly from them.'}),"\n",(0,t.jsx)(n.li,{children:"Internally, Any always comes from the root state machine, but visually in the graph, it will come from the sub-state machine."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Make sure State and SSM names don't contain a period '.':","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If the name of a state contains a period ".", it can cause the animator to misbehave, so sanitize it.'}),"\n",(0,t.jsx)(n.li,{children:"Transitions would not work properly during the runtime execution of the animator."}),"\n",(0,t.jsx)(n.li,{children:"Apparently this is because sub state machines internally use the dot as a separator."}),"\n",(0,t.jsx)(n.li,{children:'Sanitize the name so that menu state names such as "J. Inner" don\'t mess things up.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Fix calling Or() after TransitionsFromEntry().When(...) no longer fails:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Calling Or() after TransitionsFromEntry().When(...) used to fail due to an unexpected internal state."}),"\n",(0,t.jsx)(n.li,{children:"This was due to the implicit conversion operator, which converted a null AnimationState to a AacTransitionEndpoint containing null in it."}),"\n",(0,t.jsx)(n.li,{children:"Fix this by returning null in the implicit conversion operators."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Add AacAccessorForExtensions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add static class AacAccessorForExtensions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provides methods for use by extension functions, exposing methods departing from normal fluent interface usage."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Prepare to make methods marked "Not for public use" private starting from V1.2.0.'}),"\n",(0,t.jsx)(n.li,{children:"Due to their active use in other packages, it is not immediately private."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Other notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Generated assets will now be created with the following prefix: "zAutogenerated/", which may group the animations together in some editor views.',"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This change is a derivative of a suggestion by ",(0,t.jsx)(n.a,{href:"https://github.com/nullstalgia",children:"nullstalgia"})," in the CGE repository."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"future-breaking-changes-in-v120",children:"Future breaking changes in V1.2.0"}),"\n",(0,t.jsx)(n.p,{children:"The AacFlSettingKeyframes constructor will be made private/internal in V1.2.0."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n",(0,t.jsx)(n.li,{children:"It is already marked as obsolete in V1.1.x.\nThe methods AacFlBase.InternalConfiguration and AacFlBase.InternalDoCreateLayer will be made private/internal in V1.2.0."}),"\n",(0,t.jsx)(n.li,{children:"For compatibility reasons it remains public for the duration of V1.1.x."}),"\n",(0,t.jsx)(n.li,{children:"It is already marked as obsolete in V1.1.x."}),"\n",(0,t.jsx)(n.li,{children:"The class AacAccessorForExtensions replaces it."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These are likely going to be the last breaking change in V1's lifetime."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"110-beta9",children:"1.1.0-beta.9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add AacAccessorForExtensions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add static class AacAccessorForExtensions:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provides methods for use by extension functions, exposing methods departing from normal fluent interface usage."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Prepare to make methods marked "Not for public use" private starting from V1.2.0.'}),"\n",(0,t.jsx)(n.li,{children:"Due to their active use in other packages, it is not immediately private."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta8",children:"1.1.0-beta.8"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fix Any state transitions will be created from SSMs:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Due to an implementation error, creating Any state transitions previously did not have any effect in the graph."}),"\n",(0,t.jsx)(n.li,{children:"This now creates Any state from the root machine."}),"\n",(0,t.jsx)(n.li,{children:'Sub-state machines "cannot" have Any state transitions created directly from them.'}),"\n",(0,t.jsx)(n.li,{children:"Internally, Any always comes from the root state machine, but visually in the graph, it will come from the sub-state machine."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Make sure State and SSM names don't contain a period '.':","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If the name of a state contains a period ".", it can cause the animator to misbehave, so sanitize it.'}),"\n",(0,t.jsx)(n.li,{children:"Transitions would not work properly during the runtime execution of the animator."}),"\n",(0,t.jsx)(n.li,{children:"Apparently this is because sub state machines internally use the dot as a separator."}),"\n",(0,t.jsx)(n.li,{children:'Sanitize the name so that menu state names such as "J. Inner" don\'t mess things up.'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Fix calling Or() after TransitionsFromEntry().When(...) no longer fails:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Calling Or() after TransitionsFromEntry().When(...) used to fail due to an unexpected internal state."}),"\n",(0,t.jsx)(n.li,{children:"This was due to the implicit conversion operator, which converted a null AnimationState to a AacTransitionEndpoint containing null in it."}),"\n",(0,t.jsx)(n.li,{children:"Fix this by returning null in the implicit conversion operators."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta7",children:"1.1.0-beta.7"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Keep AacFlSettingKeyframes public until V1.2.0:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Keep AacFlSettingKeyframes public until V1.2.0, where it will be made internal."}),"\n",(0,t.jsx)(n.li,{children:"AacFlSettingKeyframes is still used in CGE, but CGE already accepts AAC V1.1.x."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta6",children:"1.1.0-beta.6"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix Animator Removal constructor actually needs to be public."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta5",children:"1.1.0-beta.5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Replace public readonly fields with properties:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix inconsistency by replacing public readonly fields with getter-only properties."}),"\n",(0,t.jsx)(n.li,{children:"Add PublicAPI annotation where it was missing."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Make constructors non-public:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix inconsistency where constructors were public."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta4",children:"1.1.0-beta.4"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["(BREAKING) Rename AacFlSettingObjectReferenceKeyframes to AacFlSettingKeyframesObjectReference:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This makes it more in line with AacFlSettingKeyframesColor."}),"\n",(0,t.jsx)(n.li,{children:"AacFlSettingObjectReferenceKeyframes was introduced specifically for Vixen, and it is meant to be used as a lambda expression, so the breaking damage should be limited."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta3",children:"1.1.0-beta.3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Add AacFlState.WithMotionTime to replace AacFlState.MotionTime:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add AacFlState.WithMotionTime(...) to replace AacFlState.MotionTime()"}),"\n",(0,t.jsx)(n.li,{children:"This is more in line with the function naming convention"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The previous naming is also preserved not to break existing uses."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Work towards correcting inconsistencies in the API:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rename *Percent to *Normalized."}),"\n",(0,t.jsx)(n.li,{children:"Update inline documentation."}),"\n",(0,t.jsx)(n.li,{children:"Add additional single-valued and array overloads."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveObjectReference.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(n.li,{children:"Add AacFlSettingCurveColor.WithUnit to be on-par with AacFlSettingCurve."}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.em,{children:"The previous naming is also preserved not to break existing uses."})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Make Component[] null-element safe and add missing multi-component:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make Component[] null-element safe."}),"\n",(0,t.jsx)(n.li,{children:"Add missing multi-component variations of existing APIs."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Inline documentation pass."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta2",children:"1.1.0-beta.2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fix AacFlState.WithCycleOffset(AacFlFloatParameter floatParam) now correctly enables the parameter."}),"\n",(0,t.jsx)(n.li,{children:"(BREAKING) Make AacFlController.AnimatorController read-only"}),"\n",(0,t.jsx)(n.li,{children:"Update LICENSE: Add galister for major contributions."}),"\n",(0,t.jsxs)(n.li,{children:["Do a pass on the documentation:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Add and update inline documentation."}),"\n",(0,t.jsx)(n.li,{children:"Mark some inconsistencies."}),"\n",(0,t.jsx)(n.li,{children:"Not everything is reviewed yet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"110-beta1",children:"1.1.0-beta.1"}),"\n",(0,t.jsx)(n.p,{children:"Accomodate new VRCAnimatorPlayAudio requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nodes need to know the Animator Root, so that relative paths can be resolved during the creation of State behaviours (i.e. Relative path of an AudioSource)."}),"\n",(0,t.jsx)(n.li,{children:"Nodes need to have the ability to create a New Behaviour, even if one already exists."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);