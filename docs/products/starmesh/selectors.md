---
unlisted: true
sidebar_position: 1
---
# Selectors

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

## Select Meshes

Specify which meshes will be affected.

### Skinned Meshes

- **Skinned Mesh Renderers**: Select SkinnedMeshRenderer components.
- **Split Left/Right**: Mark this selection has having a Left/Right counterpart.
- **Bones (Left/Right)**: Only the vertices attached to these bones will be selected. If there are no bones selected, then all vertices will be selected.
  - *Use other Selector components below to reduce the selection.*
- **Bone Weight Curve**: After all bones are selected, the weight will be remapped using this curve.
- **Initial Blendshapes**: During the calculations, these blendshapes will be emulated to be active as part of the operations.

### Non-Skinned Meshes

- **Mesh Renderers**: Select all vertices of MeshRenderer components.

## Select Radius

Reduces the current selection so that only vertices within a radius around a point will be selected.

- **Radius**: The radius of this point.
- **Selection Curve**: The normalized distance will be remapped to this curve.

## Select Line

Reduces the current selection so that only vertices in proximity to a line will be selected.

- **Radius A**: The radius of the line at point A.
- **Radius B**: The radius of the line at point B.
- **Selection Curve A**: Vertices on the A side will have their normalized distance will be remapped to this curve.
- **Selection Curve B**: Vertices on the B side will have their normalized distance will be remapped to this curve.

Vertices between A and B will be will have their normalized distance will be remapped to both this curve and the Selection Curve B,
based on the projection of that vertex on that line.

## Select Blendshapes

Reduces the current selection so that only vertices affected by a blendshape will be selected.

## Select Plane Divider

Reduces the current selection so that only vertices on one side of a plane will be selected.
- **Radius**: The proximity to that plane.
- **Selection Curve**: The normalized distance will be remapped to this curve.

## Select Left/Right Divider

Reduces the current selection so that only vertices on one side of the avatar will be selected, left or right.
- **Radius**: The proximity to the plane that divides the avatar between and right.
- **Selection Curve**: The normalized distance will be remapped to this curve.

## Select Box

Reduces the current selection so that only vertices within a box will be selected.
