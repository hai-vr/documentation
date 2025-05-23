﻿import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Delete Polygons

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Delete polygons that are moved by a blendshape.

![delete-polygons-compare.png](../img/delete-polygons-compare.png)

## How to use

This component will delete all polygons that are moved by a blendshape. This can be used to remove polygons affected by conflict prevention blendshapes,
and also to remove unused decorations hidden inside the mesh, such as eye decorations, blush patterns, piercings, earrings, bandages, or other clothing accessories.

This will lower your avatar polygon count.

To use this component:
- Add a "PA Delete Polygons" component anywhere in your avatar.
- Add blendshapes which move the polygons that you want to delete. Any SkinnedMeshRenderer that has that blendshape will be affected.
- *(added in 1.7.0)* If you want to keep the polygons that are still connected to the mesh, check "Keep Partial Polygons".

Enter Play Mode or upload the avatar to test the results: as this is a non-destructive component, the original mesh remains intact.

<HaiVideo src="../img/Unity_bcEzE8pap9.mp4"></HaiVideo>

## Option: Keep Partial Polygons

*This feature was added in 1.7.0*.

If you want to keep the polygons that are still connected to the mesh, check "Keep Partial Polygons".

On blendshapes that shrink the body, this preserves the end caps, so the blendshape still has an effect on the mesh.

This might help with some avatar models.

<HaiVideo src="../img/YkcjjmKw2G.mp4"></HaiVideo>

## Special thanks

- [d4rkpl4y3r](https://github.com/d4rkc0d3r/) for the references on [mesh reconstruction](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer)!

## Versions

- **2.1.0**: NDMF Compatibility: This component now runs in the Transforming phase in order to run before VRCFury.
- **1.9.0**: NDMF Compatibility: This component now runs before `com.anatawa12.avatar-optimizer` in order to make sure meshes are not merged and blendshapes are not lost before this runs.
- **1.7.0**: Add "Keep Partial Polygons" option.
- **1.6.0**: Added.

Classification: *This component is application-agnostic.*
