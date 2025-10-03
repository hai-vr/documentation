---
sidebar_position: 30
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Guide for using Modular Avatar on Basis projects

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

*Modular Avatar* is not officially supported on Basis projects.

This page is an unsanctioned guide to get a working version of Modular Avatar on Basis projects.

:::danger
You should **never** install the VRChat SDK in Basis projects. If you do, **it will mangle the project settings, and this is not reversible**.

This is because the VRChat SDK prepares the Unity project settings specifically so that assets and shaders can be built to work inside the
VRChat platform.
:::

TODO

- Install the patch for Basis projects.
- Install **NDMF 1.10.0-beta.0**
- Do not install Modular Avatar. Instead, install the modified version of Modular Avatar.

WIP