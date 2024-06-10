---
title: Resonite
unlisted: true
---
# Resonite Meshes
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

<HaiTags>
<HaiTag requiresResonite={true} />
</HaiTags>

To export meshes into Resonite, you can either reuse an existing VRChat project in Unity 2022, or create a new Unity project.

### Using a new project

If you want to use a new project rather than an existing VRChat project, you will need the Unity Editor. It is recommended to use Unity 2022.

- Install [the UniVRM package](https://github.com/vrm-c/UniVRM/releases) for your Unity version, most likely the latest one.
- Install **[Chillaxins](/docs/products/chillaxins)**, which can only be used in projects that don't have the VRChat SDK.
- Download the **[NDMF](https://github.com/bdunderscore/ndmf/releases/tag/1.4.1)** .zip file.
    - Unzip it somewhere outside your project.
    - In your Resonite Unity project, go to *Window > Package Manager*.
    - In the Package Manager window, press the *+* button at the top left, select *Add package from disk...*
    - Locate the folder you unzipped, and inside that folder, select the `package.json` file.
- Open the downloaded archive and install the .unitypackage in your Resonite project.
- Close your Unity project.
- Reopen your Unity project.

:::tip
If you use the [ALCOM](/docs/products/vcc) package manager, you can instead add the following packages:
- *"Haï ~ Chillaxins"* package from **[our listing](/docs/products/vcc)**, and
- *"Non-Destructive Modular Framework"* package from the **[Modular Avatar listing](https://modular-avatar.nadena.dev/)**.
  - Add this listing in the *VPM Repositories* section of ALCOM: `https://vpm.nadena.dev/vpm.json`
:::

### Using an existing VRChat project

You will need the Unity Editor. The minimum version of Unity depends on the product:

- If you don't already have any Unity Editor installed anywhere, you can install Unity 2022.
- Otherwise, check the Unity requirements of the product you are trying to use:
  - If Unity 2019 is missing from those requirements, you will need to install Unity 2022.
  - Otherwise, you can use an existing project in Unity 2019, Unity 2021, or Unity 2022.

Install UniVRM for your Unity version:

- If you are using Unity Editor **2019**, download and install the UniVRM [v0.99.4](https://github.com/vrm-c/UniVRM/releases/tag/v0.99.4) package.
- If you are NOT using Unity Editor 2019, [download the UniVRM package](https://github.com/vrm-c/UniVRM/releases) for your Unity version, most likely the latest one.

Then:

- Download NDMF from VCC or ALCOM, or using the **[NDMF](https://github.com/bdunderscore/ndmf/releases/tag/1.4.1)** .zip file.
  - Unzip it somewhere outside your project.
  - In your Resonite Unity project, go to *Window > Package Manager*.
  - In the Package Manager window, press the *+* button at the top left, select *Add package from disk...*
  - Locate the folder you unzipped, and inside that folder, select the `package.json` file.
- Open the downloaded archive and install the .unitypackage in your Resonite project.

:::tip
If you use VCC or the [ALCOM](/docs/products/vcc) package manager, you can instead add the following packages:
- *"Non-Destructive Modular Framework"* package from the **[Modular Avatar listing](https://modular-avatar.nadena.dev/)**.
  - Add this listing in the *VPM Repositories* section of ALCOM: `https://vpm.nadena.dev/vpm.json`
:::
