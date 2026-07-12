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

<HaiLocalization languages={['en', 'ja']} />

*Modular Avatar* is not officially supported on Basis projects.

This page is an unsanctioned guide to get a working version of Modular Avatar on Basis projects.

:::danger
You should **never** install the VRChat SDK in Basis projects. If you do, **it will mangle the project settings, and this is not reversible**.

This is because the VRChat SDK prepares the Unity project settings specifically so that assets and shaders can be built to work inside the
VRChat platform.
:::

As of the 28th of April 2026, Modular Avatar is known to work in Basis with the following packages installed:

- [Modular Avatar](https://modular-avatar.nadena.dev/docs/intro) **1.17.0-beta.0**
- [NDMF](https://modular-avatar.nadena.dev/docs/intro) **1.11.0**
- [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([Download directly here](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))

They can all be installed through ALCOM if you wish to do so.

It may be possible that newer versions of Modular Avatar and NDMF could work, but you have to verify by yourself as installing in
Unity 6.4 or Unity 6.5 is not officially supported by Modular Avatar; it just so happens that those specific versions can work on it without additional patches.
