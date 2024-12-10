---
title: 🔒 Starmesh
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Starmesh

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

*Starmesh* is a set of non-destructive mesh deformation tools that lets you iterate quickly
on avatar gimmicks.

:::danger
This documentation is currently being written.
:::

:::tip
This tool has been tested to run on various applications, such as:
- Unity 2021 for <HaiTag requiresChilloutVR={true} short={true} />,
- Unity 2022 for <HaiTag requiresVRChat={true} short={true} />, and
- Unity 6 for <HaiTag requiresBasis={true} short={true} />.

It may also work on applications other than those cited above.

*To install without VRChat support, you must follow special installation instructions described in the [Install](./facetra-shape-creator/install) page.*
:::

NDMF is required.
:::

:::danger
<HaiTags>
<HaiTag notCompatibleWithGltf={true} />
</HaiTags>

Some of the operators of this tool generate multiple frames, which is not supported in the VRM/GLB/GLTF formats (i.e. Resonite).

This can still be used in <HaiTag compatibleWithVNyan={true} short={true} /> and <HaiTag compatibleWithWarudo={true} short={true} />
as long as you use their proprietary avatar formats, instead of the VRM format.
:::

### Third-party acknowledgements

*Starmesh* uses the [viliwonka/KDTree](https://github.com/viliwonka/KDTree) library to perform distance-based polygon search operations.
