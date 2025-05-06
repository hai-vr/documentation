---
sidebar_position: -1
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Install

:::tip[Compatibility notes]
This does not require VRChat to run. It has been tested to work on Unity 2019 and Unity 2022, and should work on newer versions.

*To install without VRChat support, you must follow special installation instructions described below.*
:::

## Download

The tool is available to [Patreon supporters](https://www.patreon.com/vr_hai), **but it is currently a work in progress** as part of the [Face Tracking Trials](https://www.notion.so/f4032b4827e146fe9d2d3776e5da0f3b?pvs=21).

If you use this tool, it is highly recommended that you join the [Discord server](https://discord.com/invite/58fWAUTYF8) in order to stay up to date and get support as this tool will be rough to use at first.

- For users using Japanese currency:
    - Patreonをご利用になりたくないサポーターの方は、同じコンテンツにアクセスするために[pixivFANBOX (https://hai-vr.fanbox.cc/)](https://hai-vr.fanbox.cc/)でサポートを選択できます。
        - ソフトウェアへのアクセスの最低ティアは1000JPY 🌙⭐ です。

## Install for VRChat

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

This requires the use of the VRChat Creator Companion in order to automatically build the mesh before upload.

- Add **[Modular Avatar listing](https://modular-avatar.nadena.dev/)** to ALCOM by clicking on *Download (using V<!-- -->CC).*
- In ALCOM, add the **"Non-Destructive Modular Framework"** package to your project.
- Open the downloaded archive and install the .unitypackage in your project.

![Untitled.png](img/Untitled.png)

## Install for ChilloutVR

<HaiTags>
<HaiTag requiresChilloutVR={true} />
</HaiTags>

:::warning
Support for ChilloutVR is new. You may encounter some issues.

If you need help, please check out the [Discord server](/docs/other/discord).
:::

Please follow the [**ChilloutVR Compatibility** documentation](/docs/products/compatibility/chilloutvr) to use FaceTra Shape Creator in ChilloutVR projects.

Counter-intuitively, during installation, **keep** the folder called *dev.hai-vr.facetra-shape-creator.vrc* **checked**.

## Install for Resonite or other apps

<HaiTags>
<HaiTag notVRChat={true} />
</HaiTags>

You can start a new Unity project in Unity 2022, or reuse a VRChat project in Unity 2022 or Unity 2019.

Open the downloaded archive and install the .unitypackage in your project, but during installation, uncheck the folder called *dev.hai-vr.facetra-shape-creator<u><strong>.vrc</strong></u>*

If you want to install for Resonite or other apps, I’m interested, please ping me on the [Discord server](https://discord.com/invite/58fWAUTYF8).
