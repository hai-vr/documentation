---
sidebar_position: 5
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Animation

:::info
This page only applies to platforms and apps which rely on Animator systems,
such as <HaiTag requiresVRChat={true} short={true} /> and possibly <HaiTag requiresChilloutVR={true} short={true} />.

If you are a platform that does not use animations (i.e. scripting or node systems), this page does not apply to you.
:::

Blendshapes are only created when entering Play mode or when the avatar is being exported.

If you are targeting a platform that uses a Unity animations, you can generate animation clips directly inside the Operator component:
- Make sure you have the Unity Animation editor tab open,
- In the Operator component, click one of the buttons on *Create temporary animation*. This will change the view in the Animation editor.
  - The button labelled *0* will create animated properties with a constant value of 0.
  - The button labelled *100* will create animated properties with a constant value of 100.
  - The button labelled *Linear 0-100* will create animated properties with a value that changes from 0 to 100 linearly.
- In the Animation editor tab, select the properties in that temporary animation clip, and press CTRL-C to copy them.
- Create a new Animation clip, or choose one in your project. Then, in the Animation editor tab press CTRL-V to paste those properties. 

<video controls muted width="816">
    <source src={require('./img/B1If1P3Kv6.mp4').default}/>
</video>
