---
title: ComboGestureExpressions
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

*ComboGestureExpressions* is a Unity Editor tool that lets you attach face expressions to hand gestures, and make it react to other *Avatars 3.0*'s features, including *Contacts*, *PhysBones* and *OSC*.

:::warning[Compatibility notes]
This tool requires <HaiTag requiresVRChat={true} short={true} />, and is incompatible with other apps and platforms.
:::

It is bundled with *Visual Expressions Editor*, an animation editor that lets you create face expressions with the help of previews.

<HaiVideo src="../../../static/unsorted_ghc/githubio/cge2-rc-github.mp4"></HaiVideo>

[//]: # (<iframe src="https://streamable.com/e/t19nkm?loop=0" width="408" height="256" frameborder="0" allowfullscreen></iframe> <iframe src="https://streamable.com/e/bg1uoj?loop=0" width="408" height="256" frameborder="0" allowfullscreen></iframe>)

<HaiVideo src="/static/unsorted_ghc/streamable/t19nkm.mp4" halfWidth={true}></HaiVideo>
<HaiVideo src="/static/unsorted_ghc/streamable/bg1uoj.mp4" halfWidth={true}></HaiVideo>

With *ComboGestureExpressions*:

- PhysBones, Contacts and OSC can be used to blend in face expressions.
- The pressure on your controller triggers can be used to animate your face.
- Attach multiple expressions on a single gesture by switching between different moods using the Expressions Menu.
- Eyes will no longer blink whenever the avatar has a face expression with eyes closed.
- Puppets and blend trees are integrated into the tool.
- Animations triggered by squeezing the controller trigger will look smooth to outside observers.

*(Most illustrations in this documentation use [Saneko avatar (さねこ) by ひゅうがなつ](https://booth.pm/en/items/2322146))*

## Download

The tool is free to download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ ComboGestureExpressions* to your project using ALCOM.

[//]: # (![EeCgeLogo3.png]&#40;EeCgeLogo3.png&#41;)
