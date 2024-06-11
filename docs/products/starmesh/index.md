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
This does not require VRChat to run. It has been tested to work on Unity 2021 and 2022, and should work on newer versions.

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
