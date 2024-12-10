---
title: Basis
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Basis with Non-Destructive components

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

Some of the products are qualified as *non-destructive*. This means that all changes are done when entering Play Mode, or when building the avatar.
This workflow has been made popular by tools such as [Modular Avatar](https://modular-avatar.nadena.dev/) and [VRCFury](https://vrcfury.com/).

However, only non-destructive tools based on **NDMF** are compatible, as long as that tool does not require the VRChat SDK.
To be clear, VRCFury is *not* compatible.

## Install

The main branch of Basis already detects the optional presence of NDMF in the project through the *HVRBasisNDMF* package,
which is included by default. However, missing DLLs still need to be installed manually or through *Chillaxins*.

To use non-destructive products that have been confirmed to work in Basis, you can do the following.

### If you use ALCOM / VCC package manager

If you use the [ALCOM](/docs/products/listing) package manager, you can instead add the following packages:
- *"Haï ~ Chillaxins"* package from **[our listing](/docs/products/listing)**, and
- *"Non-Destructive Modular Framework"* package from the **[Modular Avatar listing](https://modular-avatar.nadena.dev/)**.
  - Add this listing in the *VPM Repositories* section of ALCOM: `https://vpm.nadena.dev/vpm.json`
- Close your Unity project.
- Reopen your Unity project.
  - 
### If you don't use a package manager

- Install **[Chillaxins](/docs/products/chillaxins)**.
- Download the **[NDMF](https://github.com/bdunderscore/ndmf/releases/tag/1.4.1)** .zip file.
    - Unzip it somewhere outside your project.
    - In your ChilloutVR Unity project, go to *Window > Package Manager*.
    - In the Package Manager window, press the *+* button at the top left, select *Add package from disk...*
    - Locate the folder you unzipped, and inside that folder, select the `package.json` file.
- Open the downloaded archive of the product, and install the .unitypackage in your Basis project.
- Close your Unity project.
- Reopen your Unity project.
