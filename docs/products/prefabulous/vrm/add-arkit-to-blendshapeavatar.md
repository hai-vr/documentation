import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# 📹 Add ARKit to BlendShapeAvatar

<HaiTags>
<HaiTag requiresVRM={true} compatibleWithVSeeFace={true} compatibleWithVNyan={true} compatibleWithWarudo={true} />
</HaiTags>

Automatically links all blendshapes found in your meshes which follow the Unified Expressions naming convention or ARKit naming convention,
as ARKit-named BlendShapeClips into the [VRM BlendShapeAvatar asset](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/#blendshapeavatar)
used by your avatar [VRMBlendShapeProxy component](https://vrm.dev/en/univrm/blendshape/univrm_blendshape/#vrmblendshapeproxy).

<HaiVideo src="../img/vrm/D5H4ofatKD.mp4"></HaiVideo>

## How to use

This component automatically creates ARKit-named BlendShapeClips into the BlendShapeAvatar asset used by your avatar VRMBlendShapeProxy component.
- Any mesh that contains Unified Expressions or ARKit blendshapes will be linked to an ARKit-named BlendShapeClip.
- If both blendshapes for Unified Expressions *and* ARKit exist on the same mesh, only one of them will be linked to the ARKit-named BlendShapeClip.

[//]: # (If a VRMBlendShapeProxy component does not exist, the VRMBlendShapeProxy component and the VRM BlendShapeAvatar asset will be created for you.)

To use this component:
- Add a "PA-VRM Add ARKit to BlendShapeAvatar" component anywhere in your avatar.

NDMF is required in your VTubing project:
- You need to export the avatar using the [Denormalized Avatar Exporter](/docs/products/denormalized-avatar-exporter) tool.
- You need NDMF.

## Versions

- **2.0.0**: Added.

Classification: *This component is **📹 VRM Only**.*
