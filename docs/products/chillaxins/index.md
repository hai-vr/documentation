import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Chillaxins

<HaiTags>
<HaiTag requiresChilloutVR={true} compatibleWithWarudo={true} />
</HaiTags>

*Chillaxins* is a Unity Editor package lets you use non-destructive tools for **[ChilloutVR](https://developers.abinteractive.net/cck/)** avatars, and **[Warudo](https://warudo.app/)** character mods.

This lets you use some of my products in ChilloutVR, like **[⭐ Starmesh](/docs/products/starmesh)**, **[⭐ FaceTra Shape Creator](/docs/products/facetra-shape-creator)**,
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

- Download the **[.unitypackage file (Direct Download)](https://github.com/hai-vr/chillaxins/releases/download/1.0.1/dev.hai-vr.chillaxins-1.0.1.unitypackage)** from GitHub.
  - Current version is V1.0.1
- Install it in your project.
- Close your Unity project.
- Reopen your Unity project.

:::tip
If you use the [ALCOM](/docs/products/vcc) package manager, you can add the *Haï ~ Chillaxins* package from **[our listing](/docs/products/vcc)**.
:::

## About the DLL file

This tool contains a DLL file because NDMF depends on a [programming library](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable?view=net-8.0),
which is not available in Unity by default.

For convenience of installation, this DLL is included in Chillaxins.

If you're concerned about safety, you can [download the required DLL on your own from Microsoft NuGet](https://www.nuget.org/packages/System.Collections.Immutable/).
