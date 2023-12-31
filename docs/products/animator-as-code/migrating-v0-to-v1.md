﻿---
sidebar_position: 9
---

# Migrating from V0 to V1

:::danger
This is the work-in-progress documentation for Animator As Code **V1**, which has not yet been released. The last public version of Animator As Code is V0.
:::

AnimatorAsCode V1 introduces the following main breaking changes:
- VRChat Avatars is now an optional dependency. AnimatorAsCode can now be used in non-VRChat projects.
    - All VRChat-related functions have been split between two classes of extension methods.
- You are now encouraged to use a non-destructive workflow by generating an animator controller asset without relying on an existing animator controller asset.
    - VRChat methods that use a destructive workflow, such as `AacFlBase.CreateMainFxLayer()` are located on their own class of extension methods.

## Assembly definition

If you use assembly definitions, change the assembly reference from `AnimatorAsCodeFramework` to the following:
- `AnimatorAsCode.V1` in all cases.
- `AnimatorAsCode.V1.VRChat` if you depend on VRChat.
- `AnimatorAsCode.V1.VRChatDestructiveWorkflow` also if you need to edit the playable layers of the avatar directly.
    - *Consider switching to a non-destructive workflow using VRCFury or Modular Avatar! See below.*

## Code changes

### Code

- Change `AacV0` to `AacV1`
- Change `using AnimatorAsCode.V0;` to `using AnimatorAsCode.V1;`
- If your project depends on VRChat, you will need to use extension methods.
    - Add `using AnimatorAsCode.V1.VRC;` in your class imports to use the VRChat extension methods.
        - The extension methods are contained within the class `AnimatorAsCode.V1.VRC.AacVRCExtensions`.
    - Add `using AnimatorAsCode.V1.VRCDestructiveWorkflow;` in your class imports to use the VRChat destructive workflow extension methods.
        - The extension methods are contained within the class `AnimatorAsCode.V1.VRCDestructiveWorkflow.AacVRCDestructiveWorkflowExtensions`
- Change `TrackingElement` to `AacAv3.Av3TrackingElement`

### TODO

- TODO: Check TrackingElement being renamed to AacAv3.Av3TrackingElement

### AacConfiguration

Since `AacConfiguration` no longer contains the avatar descriptor, you will need to use the extension method `AacConfiguration.WithAvatarDescriptor(VRCAvatarDescriptor)` to define the avatar in the configuration.

If you decide to migrate your scripts to a non-destructive workflow, this step is not necessary:
You can remove the avatar descriptor from the configuration.

For example:

```csharp
using AnimatorAsCode.V1;
using AnimatorAsCode.V1.VRCDestructiveWorkflow;
// ...

AacV1.Create(new AacConfiguration
{
    SystemName = systemName,
    AnimatorRoot = avatar.transform,
    DefaultValueRoot = avatar.transform,
    AssetContainer = assetContainer,
    AssetKey = assetKey,
    DefaultsProvider = new AacDefaultsProvider(writeDefaults: options.WriteDefaults)
}.WithAvatarDescriptor(avatar)); // The avatar descriptor is now defined by invoking an extension method.
```

## Non-destructive workflow

Animator As Code V1 encourages the use of a non-destructive workflow.

## Miscellaneous contract changes

- `AacFlLayer`, `AacFlClip`, and `AacFlEditClip` are now classes instead of structs.
- `AacFlFloatParameterGroup.ToList()` now correctly returns the `List<AacFlFloatParameter>` instead of `List<AacFlBoolParameter>`.
- `AacFlIntParameterGroup.ToList()` now correctly return the `List<AacFlIntParameter>` instead of `List<AacFlBoolParameter>`.
