---
title: Lightbox Viewer for URP
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

*Lightbox Viewer* can work on URP <HaiTag requiresBasis={true} short={true} /> projects in Unity 6.

:::warning[Compatibility notes]
It has been tested to work on Unity 6 only. It may not work on older versions.
:::

:::warning
The current version of the Lightbox URP scene requires projects that has **Adaptive Probe Volumes** enabled.
:::

## Download

The tool is free for download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Lightbox Viewer URP for the Basis framework* to your project using ALCOM.

## Adaptive Probe Volumes

The current version of the Lightbox URP scene requires projects that has **Adaptive Probe Volumes** enabled.

It will only work with shaders that supports Adaptive Probe Volumes.
- **Poiyomi URP**: ✅ As of 2025-07-10, it will only work with Poiyomi URP *070825* or above.
- **lilToon URP**: ❌ As of 2025-07-10, it does not yet work with lilToon URP, as lilToon seems to support URP with traditional Light Probes only.
