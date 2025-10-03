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

Both *Adaptive Probe Volumes* and *Light Probes* are supported, based on the Quality settings.

:::warning[Compatibility notes]
It has been tested to work on Unity 6 only. It may not work on older versions.
:::

## Download

The tool is free for download using ALCOM.

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Lightbox Viewer URP for the Basis framework* to your project using ALCOM.

## Adaptive Probe Volumes

If your quality settings use **Adaptive Probe Volumes**, you must use shaders that support Adaptive Probe Volumes.

- **Poiyomi URP**: ✅ As of 2025-07-10, APVs will only work with Poiyomi URP *070825* or above.
- **lilToon URP**: ❌ As of 2025-07-10, APVs do not yet work with lilToon URP, as lilToon seems to support URP with legacy *Light Probes* only.
