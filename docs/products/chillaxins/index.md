import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Chillaxins

<HaiTags>
<HaiTag requiresChilloutVR={true} compatibleWithWarudo={true} />
</HaiTags>

*Chillaxins* is a Unity Editor tool for the [ChilloutVR CCK](https://developers.abinteractive.net/cck/) that lets you use other non-destructive tools based on the **[Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf)**.

This lets you use some of my products in ChilloutVR, like **[⭐ Starmesh](/docs/products/starmesh)**, **[⭐ FaceTra Shape Creator](/docs/products/facetra-shape-creator)**,
and **[Prefabulous Universal](/docs/products/prefabulous)**.

*Chillaxins* is also compatible with Warudo projects if you use the [Denormalized Avatar Exporter](/docs/products/denormalized-avatar-exporter).

To some extent, it *might* let you use platform-agnostic components of other tools
such as *[Modular Avatar Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature)* and *[Modular Avatar Bone Proxy](https://modular-avatar.nadena.dev/docs/reference/bone-proxy)*.

*Some NDMF tools are not compatible if they directly depend on other incompatible SDKs.*

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

:::info
**This tool is bundled with DLLs!**

Although the source code of this tool is free and open source under the MIT License, this tool does come bundled with DLLs,
because NDMF depends on the [System.Collections.Immutable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.immutable?view=net-8.0) classes,
which are not available in Unity by default.

For convenience of installation, these DLLs are bundled into Chillaxins.

If you're concerned about safety, [download the required DLLs on your own](https://www.nuget.org/packages/System.Collections.Immutable/).
:::
