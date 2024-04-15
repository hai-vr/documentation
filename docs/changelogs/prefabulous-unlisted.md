---
title: Prefabulous (Unlisted)
unlisted: true
---

## Universal-2.0.0, VRChat-2.0.0 (Planned)

:::warning
The following describes a future change.
:::

Prefabulous Avatar is split into two packages:
- **Prefabulous Universal** which requires NDMF (but does not require VRChat), and
- **Prefabulous for VRChat** which requires Prefabulous Universal, VRChat Avatars SDK, Modular Avatar, and Animator As Code.

Prefabulous Avatar is now called **Prefabulous**.

Prefabulous for VRChat inherits the same internal package name that Prefabulous Avatar bore prior to 2.0.0.

The following components from Prefabulous Avatar have been moved to Prefabulous Universal:
- Change Avatar Scale
- Edit All Mesh Anchor Override
- Edit All Mesh Bounds
- Assign UV Tile
- Convert Blendshape Conventions
- Delete Polygons
- HaiXT Generate Blendshapes for Face Tracking Extensions
- Recalculate Normals
- Replace Textures
- Generate Twist Bones

The following components from Prefabulous Avatar have been moved to Prefabulous for VRChat:
- HaiXT Face Tracking Extensions
- Lock Locomotion Menu Item
- Mass Blendshape Sync
- Import Expression Parameters
- Blank Expressions Menu and Parameters
- Blank FX Animator
- Blank Gesture Animator
- Replace Action Animator
- Replace Locomotion Animator
