---
sidebar_position: 1
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Install

:::tip
This does not require VRChat to run. It has been tested to work on Unity 2021 and 2022, and should work on newer versions.

NDMF is required.
:::

## Download

The tool is available to [Patreon supporters](https://www.patreon.com/vr_hai).

If you use this tool, it is highly recommended that you join the [Discord server](https://discord.com/invite/58fWAUTYF8) in order to stay up to date and get support as this tool will be rough to use at first.

- For users using Japanese currency:
    - Patreonをご利用になりたくないサポーターの方は、同じコンテンツにアクセスするために[pixivFANBOX (https://hai-vr.fanbox.cc/)](https://hai-vr.fanbox.cc/)でサポートを選択できます。
        - ソフトウェアへのアクセスの最低ティアは1000JPY 🌙⭐ です。

## Install for VRChat

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

This requires the use of the VRChat Creator Companion in order to automatically build the mesh before upload.

- Add **[Modular Avatar listing](https://modular-avatar.nadena.dev/)** by clicking on *Download (using ALCOM or VCC).*
- In VCC, add the **"Non-Destructive Modular Framework"** package to your project.
- Open the downloaded archive from Patreon/pixivFANBOX and install the .unitypackage in your VRChat project.

:::danger
If you use a third-party tool called *DexProtect*, **then you must update DexProtect to version 2.2.3 or higher**.

*Ripple Wave* and *Compressive Deform* will not work properly with a lower version of *DexProtect*.
:::

## Install for ChilloutVR

<HaiTags>
<HaiTag requiresChilloutVR={true} />
</HaiTags>

:::warning
Support for ChilloutVR is new. You may encounter some issues.

If you need help, please check out the [Discord server](/docs/other/discord).
:::

To use this tool in ChilloutVR, you need to have [Chillaxins](/docs/products/chillaxins) in your project first.

[//]: # (You have two ways to install Chillaxins and Starmesh in a ChilloutVR project:)

[//]: # (- Either install files by hand, or)

[//]: # (- Use VCC or ALCOM. ALCOM is an open-source alternate implementation of VCC capabilities.)

[//]: # (:::tip)

[//]: # (The ALCOM and VCC package managers can be used in non-VRChat projects, which could be useful if you want to use liltoon,)

[//]: # (or other packages in non-VRChat projects.)

[//]: # ()
[//]: # (*If you're interested in using VCC, but you don't play VRChat, strongly consider using the [open-source version of VCC called ALCOM]&#40;/docs/products/vcc#alcom&#41;, which does not require you to create a VRChat account)

[//]: # (as part of their Materials License Agreement &#40;and therefore does not require you to accept the VRChat Terms of Use&#41;.*)

[//]: # (:::)

[//]: # (### Using files)

[//]: # ()
[//]: # (<HaiTags>)

[//]: # (<HaiTag requiresChilloutVR={true} />)

[//]: # (</HaiTags>)

- Install **[Chillaxins](/docs/products/chillaxins)**.
- Download the **[NDMF](https://github.com/bdunderscore/ndmf/releases/tag/1.4.1)** .zip file.
  - Unzip it somewhere outside your project.
  - In your ChilloutVR Unity project, go to *Window > Package Manager*.
  - In the Package Manager window, press the *+* button at the top left, select *Add package from disk...*
  - Locate the folder you unzipped, and inside that folder, select the `package.json` file.
- Open the downloaded archive from Patreon/pixivFANBOX and install the .unitypackage in your ChilloutVR project.
- Close your Unity project.
- Reopen your Unity project.

:::tip
If you use the [ALCOM](/docs/products/vcc) package manager, you can instead add the following packages:
- *"Haï ~ Chillaxins"* package from **[our listing](/docs/products/vcc)**, and
- *"Non-Destructive Modular Framework"* package from the **[Modular Avatar listing](https://modular-avatar.nadena.dev/)**.
  - `https://vpm.nadena.dev/vpm.json`
:::

[//]: # (### Using ALCOM/VCC)

[//]: # ()
[//]: # (<HaiTags>)

[//]: # (<HaiTag requiresChilloutVR={true} />)

[//]: # (</HaiTags>)

[//]: # ()
[//]: # (:::danger)

[//]: # (This documentation is a work in progress.)

[//]: # (:::)

[//]: # ()
[//]: # (You need to add **two** listings:)

[//]: # ()
[//]: # (- Add the Modular Avatar listing:)

[//]: # (  - If you use ALCOM, by adding `https://vpm.nadena.dev/vpm.json` in the VPM Repositories,)

[//]: # (  - If you use VCC, by going to **[Modular Avatar listing]&#40;https://modular-avatar.nadena.dev/&#41;** and then clicking on *Download &#40;using VCC&#41;.*)

[//]: # (- also **[install Haï~'s listing]&#40;/docs/products/vcc&#41;**.)

[//]: # ()
[//]: # (Then:)

[//]: # (- In ALCOM/VCC, add the **"Haï ~ Chillaxins"** package to your project.)

[//]: # (- In ALCOM/VCC, add the **"Non-Destructive Modular Framework"** package to your project.)

[//]: # (- Open the downloaded archive from Patreon/pixivFANBOX and install the .unitypackage in your ChilloutVR project.)

## Install for Warudo

<HaiTags>
<HaiTag compatibleWithWarudo={true} />
</HaiTags>

:::warning
Support for Warudo is new. You may encounter some issues.

If you need help, please check out the [Discord server](/docs/other/discord).
:::

To use this tool in Warudo, you need to have [Chillaxins](/docs/products/chillaxins) and [Denormalized Avatar Exporter](/docs/products/denormalized-avatar-exporter) in your project first.

- Install **[Chillaxins](/docs/products/chillaxins)** *(This will add a DLL and the Burst package to your project)*.
- Read through and install the **[Denormalized Avatar Exporter](/docs/products/denormalized-avatar-exporter)**.
- Download the **[NDMF](https://github.com/bdunderscore/ndmf/releases/tag/1.4.1)** .zip file.
  - Unzip it somewhere outside your project.
  - In your Warudo Unity project, go to *Window > Package Manager*.
  - In the Package Manager window, press the *+* button at the top left, select *Add package from disk...*
  - Locate the folder you unzipped, and inside that folder, select the `package.json` file.
- Open the downloaded archive from Patreon/pixivFANBOX and install the .unitypackage in your Warudo project.
- Close your Unity project.
- Reopen your Unity project.
- To build your character mod, you will need to use the Denormalized Avatar Exporter UI rather than Warudo's own UI.

:::tip
If you use the [ALCOM](/docs/products/vcc) package manager, you can instead add the following packages:
- *"Haï ~ Chillaxins"* package from **[our listing](/docs/products/vcc)**, and
- *"Haï ~ Denormalized Avatar Exporter"* package from **[our listing](/docs/products/vcc)**, and
- *"Non-Destructive Modular Framework"* package from the **[Modular Avatar listing](https://modular-avatar.nadena.dev/)**.
  - `https://vpm.nadena.dev/vpm.json`
:::

## Install for VNyan

<HaiTags>
<HaiTag compatibleWithVNyan={true} />
</HaiTags>

:::danger
This documentation is a work in progress.
:::

:::danger
This tool is not compatible with VSeeFace, because VSeeFace requires Unity 2019, which adds complications.
:::

## Install for other apps

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

:::tip
This does not require VRChat to run. It has been tested to work on Unity 2021 and 2022, and should work on newer versions.

NDMF is required.
:::

:::danger
This documentation is a work in progress.
:::
