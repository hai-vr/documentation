import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 📹 Add ARKit to BlendShapeAvatar

<HaiTags>
<HaiTag requiresVRM={true} compatibleWithVSFAvatar={true} />
</HaiTags>

Automatically links all ARKit-named blendshapes found in your meshes to the [VRM BlendShapeAvatar asset](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/#blendshapeavatar)
used by your avatar [VRMBlendShapeProxy component](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/#vrmblendshapeproxy).

## How to use

To use this component:
- Add a "PA Add ARKit to BlendShapeAvatar" component anywhere in your avatar.
- The VRMBlendShapeProxy component must already exist in your avatar.

## Versions

- **2.0.0**: Added.

Classification: *This component is **📹 VRM Only**.*
