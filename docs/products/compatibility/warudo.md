---
title: Warudo
---
# Warudo Character Mods
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

<HaiTags>
<HaiTag requiresWarudo={true} />
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
- Open the downloaded archive of the product, and install the .unitypackage in your Warudo project.
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