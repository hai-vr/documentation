---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# ⛔ Generate Twist Bones

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

This component will generate twist bones, which improves the look of the elbow joint by twisting the part of the lower arm that is closer to the elbow.

It creates new twist bones with constraints, and automatically repaints the bones weights of all meshes of the avatar which use that bone.

## How to use

To use this component:
- Add a "PA Generate Twist Bones" component anywhere in your avatar.
- The tool will be setup to handle the elbow joint by twisting the part of the lower arm that is closer to the elbow.

## Option: Custom weight distribution

Vertices that are located inside the space between the lower arm bone and the hand bone are repainted based on their distance to the lower arm bone.

The component will use a linear weight distribution by default, meaning that the weight is directly proportional to that distance.

You can choose a custom weight distribution in the *transfer* curve. The X axis of the curve represents the normalized distance to the lower arm bone.

The curve should look like a slope going uphill. Always keep the (0,0) and (1,1) points where they are.

## Performance considerations

Each twist bone:
- Adds one bone to the avatar's main Armature that is used by mesh skinning, and
- Adds one constraint.

By default, the component adds one twist bone for each arm, making for a total of 2 bones used by mesh skinning, and 2 constraints.

## Versions

- **2.0.0**: Added.

Classification: *This component is application-agnostic, however, the quality and relevance of the generated twist bones
heavily depends on the inverse kinematics strategy or animation system used by your target platform or app, as different platforms and apps
may orient the arm bones differently for a given arm position. This can make the generated twist bones irrelevant on some platforms or apps.*