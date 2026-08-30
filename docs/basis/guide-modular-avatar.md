---
sidebar_position: 30
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";

# Guide for using Modular Avatar on Basis projects

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

*Modular Avatar* is not officially supported on Basis projects.

This page is an unsanctioned guide to get a working version of Modular Avatar on Basis projects.

:::danger
You should **never** install the VRChat SDK in Basis projects. If you do, **it will mangle the project settings, and this is not reversible**.

This is because the VRChat SDK prepares the Unity project settings specifically so that assets and shaders can be built to work inside the
VRChat platform.
:::

As of the 30th of August 2026, the Basis Framework runs in Unity 6.5, but this version of Unity introduces breaking changes.

Modular Avatar is known to work with Basis on Unity 6.5 by default. Use the latest version of Modular Avatar:

- [Modular Avatar](https://modular-avatar.nadena.dev/docs/intro) any version above **1.18.5**
- [NDMF](https://modular-avatar.nadena.dev/docs/intro) any version above**1.14.8**

Still, Modular Avatar and NDMF require DLLs to be installed. You have two options on Windows, either:

- On [GitHub, download the `SetupStandalone.ps1` script](https://github.com/bdunderscore/ndmf), put it inside the NDMF package folder, and execute it with PowerShell as administrator;
- OR, Install [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([Download directly here](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))
