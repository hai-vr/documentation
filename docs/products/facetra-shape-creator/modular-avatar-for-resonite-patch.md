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

The blendshapes created by FaceTra Shape Creator can be exported to <HaiTag requiresResonite={true} short={true} /> through Modular Avatar for Resonite,
but the FaceTra software must be patched in order to enable this compatibility.

The patch is provided here to all users who already have a copy of FaceTra.

If you are a developer, the patch consists in adding the attribute `[RunsOnAllPlatforms]` to the *HFTSCPlugin* class in `HFTSCPlugin.cs`:

```csharp
    [RunsOnAllPlatforms]
    public class HFTSCPlugin : Plugin<HFTSCPlugin>
    {
```

## Install the patch

You will need to install the correct package below on top of your existing FaceTra installation. Do not remove any FaceTra from your existing project.

Depending on your version of FaceTra Shape Creator, download the corresponding patch, and install the .unitypackage in your project:

### 0.9.0 (November 2024)

If you use version 0.9.0 (November 2024):

(Conditional compilation, is another file)

### 0.0.5 to 0.8.0 (2024)

If you use version 0.0.5 to 0.8.0 (2024):

(GenerateProductionPipeline)

### 0.0.1 to 0.0.4 (2023)

If you use version 0.0.1 to 0.0.4 (2023):

(GenerateMeshAndSet)
