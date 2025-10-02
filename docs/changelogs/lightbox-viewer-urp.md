---
title: Lightbox Viewer URP
---

import {HaiVideo} from "/src/components/HaiVideo";

## 1.0.0-alpha.6

- Re-bake scene in Unity 6.2.

## 1.0.0-alpha.5

- Fix package.json now specifies Unity 6.

## 1.0.0-alpha.4

- Require Lightbox Viewer 2.4.1-alpha.2 minimum.

## 1.0.0-alpha.3

- Require Lightbox Viewer 2.4.2-alpha.2 minimum.

## 1.0.0-alpha.2

- Fix reflection probe box size no longer causes sheen.

## 1.0.0-alpha.2

- Start adding URP lightbox scene with APVs:
  - This uses URP Adaptive Probe Volumes instead of light probes. It will only work with shaders that supports APVs.
  - Poiyomi URP: As of 2025-07-10, it will only work with Poiyomi URP *070825* or above.
  - lilToon URP: As of 2025-07-10, it does not yet work with lilToon URP.
