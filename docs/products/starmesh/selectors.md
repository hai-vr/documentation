---
sidebar_position: 4
---
# Selectors

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

## Select Meshes

Specify which meshes will be affected.

- **Skinned Mesh Renderers**: Select SkinnedMeshRenderer components.
- **Active Blendshapes**: During the calculations, these blendshapes will be emulated to be active as part of the operations.

## Select Bones

Reduces the current selection so that only vertices weights to the specified bones will be affected.

The weight is the sum of all bones that match.

You can match bones by transform, or by object name.

- **Bones**: Select the bone transforms that you want to affect.
- **Object Names**: Choose the name of the bone transforms that you want to affect.
- **Include Child Bones**: Also includes all child bones.

[//]: # (- **Bone Weight Curve**: After all bones are selected, the weight will be remapped using this curve.)

## Select Point Radius

Reduces the current selection so that only vertices within a radius around a point will be selected.

- **Radius**: The radius of this point.
- **Selection Curve**: The normalized distance will be remapped to this curve.
- **Root Transform**: *(Optional)* Choose a transform as the point to sample the position from.

## Select Line Radius

Reduces the current selection so that only vertices in proximity to a line will be selected.

- **A Pos**: Position of the point A, when there is no Transform selected.
- **B Pos**: Position of the point B, when there is no Transform selected.
- **Is Capsule**: Makes the radius and the curve of B identical to A, effectively turning the selection into a capsule shape.
- **Radius A**: The radius of the line at point A.
- **Radius B**: The radius of the line at point B.
- **Selection Curve A**: Vertices on the A side will have their normalized distance remapped to this curve.
- **Selection Curve B**: Vertices on the B side will have their normalized distance remapped to this curve.
- **A Transform**: *(Optional)* Choose a transform as the point A to sample the position from.
- **B Transform**: *(Optional)* Choose a transform as the point B to sample the position from.

Vertices between A and B will be will have their normalized distance will be remapped to both this curve and the Selection Curve B,
based on the projection of that vertex on that line.

## Select Connected Polygons

Reduces the current selection so that only vertices connected together via a chain of polygons will be selected.

## Select Blendshapes

Reduces the current selection so that vertices moved by a blendshape will be selected.
