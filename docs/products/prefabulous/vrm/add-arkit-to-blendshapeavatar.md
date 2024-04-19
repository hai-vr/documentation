import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 📹 Add ARKit to BlendShapeAvatar

<HaiTags>
<HaiTag requiresVRM={true} compatibleWithVSFAvatar={true} />
</HaiTags>

:::warning
The following describes a future component and is not available yet.
:::

Automatically links all Unified Expressions or ARKit-named blendshapes found in your meshes as ARKit-named BlendShapeClips into the [VRM BlendShapeAvatar asset](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/#blendshapeavatar)
used by your avatar [VRMBlendShapeProxy component](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/#vrmblendshapeproxy).

## How to use

This component automatically creates ARKit-named BlendShapeClips into the BlendShapeAvatar asset used by your avatar VRMBlendShapeProxy component.
- Any mesh that contains Unified Expressions or ARKit blendshapes will be linked to an ARKit-named BlendShapeClip.
- If both blendshapes for Unified Expressions *and* ARKit exist on the same mesh, only one of them will be linked to the ARKit-named BlendShapeClip.

If a VRMBlendShapeProxy component does not exist, the VRMBlendShapeProxy component and the VRM BlendShapeAvatar asset will be created for you.

To use this component:
- Add a "PA Add ARKit to BlendShapeAvatar" component anywhere in your avatar.

## Versions

- **2.0.0**: Added.

Classification: *This component is **📹 VRM Only**.*
