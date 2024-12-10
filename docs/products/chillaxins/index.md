import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Chillaxins

<HaiTags>
<HaiTag requiresChilloutVR={true} short={true} />
<HaiTag requiresWarudo={true} short={true} />
<HaiTag requiresBasis={true} short={true} />
</HaiTags>

*Chillaxins* is a Unity Editor package that lets you use non-destructive tools on **[ChilloutVR](https://developers.abinteractive.net/cck/)** avatars, **[Basis](https://github.com/dooly123/Basis)** avatars, and **[Warudo](https://warudo.app/)** character mods.

Using this, you can use some of my products in ChilloutVR, like **[⭐ Starmesh](/docs/products/starmesh)**, **[⭐ FaceTra Shape Creator](/docs/products/facetra-shape-creator)**,
and **[Prefabulous Universal](/docs/products/prefabulous)**.


Notes:
- The non-destructive tools must be based on the **[Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf)**, and they must not depend on other incompatible SDKs, such as the VRChat SDK.
- To some extent, it *might* let you use platform-agnostic components of other tools
such as *[Modular Avatar Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature)* and *[Modular Avatar Bone Proxy](https://modular-avatar.nadena.dev/docs/reference/bone-proxy)*.
- *Chillaxins* is compatible with Warudo projects if you use the [Denormalized Avatar Exporter](/docs/products/denormalized-avatar-exporter).

## Install

:::warning
Support for ChilloutVR is new. You may encounter some issues.

If you need help, please check out the [Discord server](/docs/other/discord).
:::

- Download the **[.unitypackage file (Direct Download)](https://github.com/hai-vr/chillaxins/releases/download/1.1.0/dev.hai-vr.chillaxins-1.1.0.unitypackage)** from GitHub.
  - Current version is **V1.1.0**
- Install it in your project.
- Close your Unity project.
- Reopen your Unity project.

:::tip
If you use the [ALCOM](/docs/products/listing) package manager, you can add the *Haï ~ Chillaxins* package from **[our listing](/docs/products/listing)**.
:::

## What does this do?

It prevents compilation errors due to missing programming libraries:
- This includes the *System.Collections.Immutable* DLL, because *NDMF* uses it.
- This includes the *Lib.Harmony* DLL, because *NDMF 1.5* will use it.
- This creates a dependency on *Unity Burst* 1.6.6 for Unity 2021, because *Modular Avatar* uses it.

On ChilloutVR projects, it hooks into the avatar build process:
- If the project is a CCK project *and* NDMF is installed, when you try to upload an avatar using ChilloutVR CCK interface,
  it will execute the non-destructive avatar processors.

## About the DLL files

This tool contains DLL files because NDMF depends on a [programming library](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable?view=net-8.0)
which is not available in Unity by default, and a [patching library](https://www.nuget.org/packages/Lib.Harmony). For convenience of installation, these DLLs are included in Chillaxins.

If you're concerned about safety, you can download the required DLLs on your own from Microsoft NuGet ([System.Collections.Immutable](https://www.nuget.org/packages/System.Collections.Immutable/), [Lib.Harmony](https://www.nuget.org/packages/Lib.Harmony/)).
