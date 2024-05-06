---
sidebar_position: 1
---
# Selectors

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

## Select Meshes

Specify which meshes will be affected.

- **Skinned Mesh Renderers**: Select SkinnedMeshRenderer components.
- **Initial Blendshapes**: During the calculations, these blendshapes will be emulated to be active as part of the operations.

## Select Bones

Reduces the current selection so that only vertices weights to the specified bones will be affected.

The weight is the sum of all bones that match.

- **Bone Weight Curve**: After all bones are selected, the weight will be remapped using this curve.

## Select Point Radius

Reduces the current selection so that only vertices within a radius around a point will be selected.

- **Radius**: The radius of this point.
- **Selection Curve**: The normalized distance will be remapped to this curve.

## Select Line Radius

Reduces the current selection so that only vertices in proximity to a line will be selected.

- **Radius A**: The radius of the line at point A.
- **Radius B**: The radius of the line at point B.
- **Selection Curve A**: Vertices on the A side will have their normalized distance will be remapped to this curve.
- **Selection Curve B**: Vertices on the B side will have their normalized distance will be remapped to this curve.

Vertices between A and B will be will have their normalized distance will be remapped to both this curve and the Selection Curve B,
based on the projection of that vertex on that line.