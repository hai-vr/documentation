---
unlisted: true
sidebar_position: 1
---
# Reference manual

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

*Starmesh* is a set of non-destructive mesh deformation tools that lets you iterate quickly
on avatar gimmicks.

The operation of *Starmesh* is dictated by the use of two main categories of components:
- **Selector** components lets you select vertices on meshes to affect, such as bones, blendshapes, radius, etc.
- **Operator** components lets you modify the selected meshes.

## Selector components
- **Select Meshes** lets you specify which meshes will be affected, including which bones, and which blendshapes should be considered as applied.
- **Select Radius** lets you select vertices around a radius.
- **Select Line** lets you select vertices in proximity to a line.
- **Select Blendshapes** lets you select vertices affected by a blendshape.
- **Select Plane Divider** lets you select vertices on one side of a plane.
- **Select Left/Right Divider** lets you select vertices on one side of the avatar.
- **Select Box** lets you select vertices located within a box.

## Operator components
- **[Compressive Deform](./compressive-deform)** emulates the effect of a flat surface being compressed against that object.
- **[Paint New Bone](./paint-new-bone)** creates a new bone, and repaints as many meshes of your choosing to that bone.
