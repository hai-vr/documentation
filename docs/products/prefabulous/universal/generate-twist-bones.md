﻿import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Generate Twist Bones (Alpha)

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

This component will generate twist bones, which improves the look of the elbow joint by twisting the part of the lower arm that is closer to the elbow.

It creates new twist bones with constraints, and automatically repaints the bones weights of all meshes of the avatar which use that bone.

:::warning
**🚧🚧🚧 This component is currently in an alpha phase. 🚧🚧🚧**

At the moment, it only fully supports meshes that are part of the base mesh armature.

The current version **will not** be able to generate twist bones for additional meshes used by [VRCFury Armature Link](https://vrcfury.com/components/armature-link/),
and **may not** be able to generate twist bones for additional meshes used by [Modular Avatar Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature).

Both are intended to be supported in the future, but it's significantly harder to do so.
The component is still released in this state of development as it is beneficial for the bare skin of your avatar.

Thank you for your understanding.
:::

<video controls muted width="816">
    <source src={require('../img/5BVQrRO3s5.mp4').default}/>
</video>

<video controls muted width="816">
    <source src={require('../img/auto-twist-f.mp4').default}/>
</video>
*Comparison before, and then, after twist bones are added on the arm. Notice how the outlines bite on the elbow joint.*

## How to use

To use this component:
- Add a "PA Generate Twist Bones" component anywhere in your avatar.
- The tool will be setup to handle the elbow joint by twisting the part of the lower arm that is closer to the elbow.

![Unity_N37ilQuCVl.png](..%2Fimg%2FUnity_N37ilQuCVl.png)

:::warning
**🚧🚧🚧 This component is currently in an alpha phase. 🚧🚧🚧**

At the moment, it only fully supports meshes that are part of the base mesh armature.

The current version **will not** be able to generate twist bones for additional meshes used by [VRCFury Armature Link](https://vrcfury.com/components/armature-link/),
and **may not** be able to generate twist bones for additional meshes used by [Modular Avatar Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature).

Both are intended to be supported in the future, but it's significantly harder to do so.
The component is still released in this state of development as it is beneficial for the bare skin of your avatar.

Thank you for your understanding.
:::

## Option: Custom weight distribution

Vertices that are located inside the space between the lower arm bone and the hand bone are repainted based on their distance to the lower arm bone.

The component will use a linear weight distribution by default, meaning that the weight is directly proportional to that distance.

You can choose a custom weight distribution in the *transfer* curve. The X axis of the curve represents the normalized distance to the lower arm bone.

The curve should look like a slope going uphill. Always keep the (0,0) and (1,1) points where they are.

![tLLlJZ4XEX.png](..%2Fimg%2FtLLlJZ4XEX.png)![rR2EJxtTwA.png](..%2Fimg%2FrR2EJxtTwA.png)

## Option: Bracelets and Wristwatches

If you're wearing arm bracelets, or a wristwatch, or any rigid object which is part of your arm as a SkinnedMeshRenderer (simple MeshRenderers do not count),
you need to specify blendshapes that either show or hide those bracelets. These blendshapes are used to figure out which vertices are part of that bracelet.

## Performance considerations

Each twist bone:
- Adds one bone to the avatar's main Armature that is used by mesh skinning, and
- Adds one constraint.

By default, the component adds one twist bone for each arm, making for a total of 2 bones used by mesh skinning, and 2 constraints.

If there are multiple components that create the same twist bone on different SkinnedMeshRenderers armatures, but it's effectively the same bone
when the armatures are merged together, then only one constraint is created.

## Versions

- **1.11.0**: Added.

Classification: *This component is application-agnostic, however, the quality and relevance of the generated twist bones
heavily depends on the inverse kinematics strategy or animation system used by your target platform or app, as different platforms and apps
may orient the arm bones differently for a given arm position. This can make the generated twist bones irrelevant on some platforms or apps.*