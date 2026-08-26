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

## Unity 6.5 (version of Basis Framework as of the 26th of August 2026)

As of the 26th of August 2026, the Basis Framework runs in Unity 6.5, but this version of Unity introduces breaking changes.

At this time of writing (26th of August 2026), Modular Avatar and NDMF are not compatible with Unity 6.5.

You may have to install unofficial versions of Modular Avatar and NDMF, as instructed below.

Add this listing to ALCOM:

```
https://hai-vr.github.io/unofficial-modular-avatar-basis-listing/index.json
```

(you may audit by [inspecting the GitHub repository for that listing](https://github.com/hai-vr/unofficial-modular-avatar-basis-listing))

Then, install these versions in ALCOM:
- NDMF **1.14.6-unofficial.basis.1** (hosted at https://github.com/hai-vr/ndmf/releases)
- Modular Avatar **1.18.3-unofficial.basis.1** (hosted at https://github.com/hai-vr/modular-avatar/releases)

And also, install this:
- [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([Download directly here](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))

It may be possible that newer versions of Modular Avatar and NDMF could work, but you have to verify by yourself as installing in
Unity 6.4 or Unity 6.5 is not officially supported by Modular Avatar.

![mspaint_tzwtFeXOnl.png](/assets/docs/basis/mspaint_tzwtFeXOnl.png)

### Do not use Modular Avatar Shape Changer 

Modular Avatar has a component called [Shape Changer](https://modular-avatar.nadena.dev/docs/reference/reaction/shape-changer).

Basis Framework generates simplified versions of the avatar mesh (LODs), but at this time of writing (26th of August 2026), Modular Avatar
is blind to these simplified versions. This may result in the meshes affected by Shape Changer displaying both the simplified versions and the
detailed versions simultaneously.

For this reason, you may not be able to use Modular Avatar Shape Changer nor any other similar mesh alteration tools present in Modular Avatar.

![fTKJolFI4M.png](/assets/docs/basis/fTKJolFI4M.png)

## Unity 6.4 (old versions of Basis Framework)

If you are on an old version of Basis Framework that is still using Unity 6.4, the following versions were known to work:

- [Modular Avatar](https://modular-avatar.nadena.dev/docs/intro) **1.17.0-beta.0**
- [NDMF](https://modular-avatar.nadena.dev/docs/intro) **1.11.0**
- [Chillaxins](https://docs.hai-vr.dev/docs/products/chillaxins) **1.2.0** ([Download directly here](https://github.com/hai-vr/chillaxins/releases/download/1.2.0/dev.hai-vr.chillaxins-1.2.0.unitypackage))
