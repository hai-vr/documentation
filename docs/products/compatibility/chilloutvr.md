---
title: ChilloutVR
unlisted: true
---
# ChilloutVR with Non-Destructive components
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

<HaiTags>
<HaiTag requiresChilloutVR={true} />
</HaiTags>

Some of the products are qualified as *non-destructive*. This means that all changes are done when entering Play Mode, or when building the avatar.
This workflow has been made popular by tools such as [Modular Avatar](https://modular-avatar.nadena.dev/) and [VRCFury](https://vrcfury.com/).

To use non-destructive products in ChilloutVR, you can do the following:

- Install **[Chillaxins](/docs/products/chillaxins)**.
- Download the **[NDMF](https://github.com/bdunderscore/ndmf/releases/tag/1.4.1)** .zip file.
    - Unzip it somewhere outside your project.
    - In your ChilloutVR Unity project, go to *Window > Package Manager*.
    - In the Package Manager window, press the *+* button at the top left, select *Add package from disk...*
    - Locate the folder you unzipped, and inside that folder, select the `package.json` file.
- Open the downloaded archive and install the .unitypackage in your ChilloutVR project.
- Close your Unity project.
- Reopen your Unity project.

:::tip
If you use the [ALCOM](/docs/products/vcc) package manager, you can instead add the following packages:
- *"Haï ~ Chillaxins"* package from **[our listing](/docs/products/vcc)**, and
- *"Non-Destructive Modular Framework"* package from the **[Modular Avatar listing](https://modular-avatar.nadena.dev/)**.
  - Add this listing in the *VPM Repositories* section of ALCOM: `https://vpm.nadena.dev/vpm.json`
:::
