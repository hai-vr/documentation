---
title: FaceTra compatibility patch (Modular Avatar for Resonite)
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# FaceTra compatibility patch (Modular Avatar for Resonite)

<HaiTags>
<HaiTag requiresResonite={true} />
</HaiTags>

The blendshapes created by FaceTra Shape Creator can be exported to <HaiTag requiresResonite={true} short={true} /> through the experimental
[Modular Avatar for Resonite](https://github.com/bdunderscore/modular-avatar-resonite) introduced in May 2025,
but the **FaceTra Shape Creator software must be patched** in order to enable this compatibility.

The patch is provided for download below to all users who already have a copy of *FaceTra Shape Creator*.

## Install the patch

You will need to install the correct package below on top of your existing *FaceTra Shape Creator* software installation.
Do not remove any FaceTra software file from your existing project.

**NDMF 1.8** or above needs to be installed in your project.

Depending on your version of *FaceTra Shape Creator*, download the corresponding patch, and install the .unitypackage in your project:

### 0.9.0 (November 2024)

If you use version 0.9.0 (November 2024):

- Download [.unitypackage](pathname:///assets/facetra-patch/patch-FaceTra-MA-for-Resonite-0.9.0-only.unitypackage) (*Right-click > Save link as...*)

### 0.0.5 to 0.8.0 (2024)

If you use version 0.0.5 to 0.8.0 (2024):

- Download [.unitypackage](pathname:///assets/facetra-patch/patch-FaceTra-MA-for-Resonite-0.0.5-to-0.8.0.unitypackage) (*Right-click > Save link as...*)

### 0.0.1 to 0.0.4 (2023)

If you use version 0.0.1 to 0.0.4 (2023):

- Download [.unitypackage](pathname:///assets/facetra-patch/patch-FaceTra-MA-for-Resonite-0.0.1-to-0.0.4.unitypackage) (*Right-click > Save link as...*)

## Other notes

:::note
If you are a developer, the patch consists in adding the attribute `[RunsOnAllPlatforms]` to the *HFTSCPlugin* class in `HFTSCPlugin.cs`:

```csharp
    [RunsOnAllPlatforms]
    public class HFTSCPlugin : Plugin<HFTSCPlugin>
    {
```
:::
