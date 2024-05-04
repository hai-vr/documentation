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

- **Skinned Mesh Renderers**: Select SkinnedMeshRenderer components.
- **Split Left/Right**: Mark this selection has having a Left/Right counterpart.
- **Initial Blendshapes**: During the calculations, these blendshapes will be emulated to be active as part of the operations.

## Select Bones

Reduces the current selection so that only vertices weights to the specified bones will be affected.

The weight is the sum of all bones that match.

- **Bone Weight Curve**: After all bones are selected, the weight will be remapped using this curve.

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

## Select Gradient

Reduces the current selection so that vertices across a region will be subject to a gradient.
- **Selection Curve**: The normalized distance will be remapped to this curve.

## Select Angle

Reduces the current selection so that vertices within an angle will be selected.
- **Angle**: The maximum angle in degrees to select, beyond which vertices will not be selected.
- **Selection Curve**: The normalized angle will be remapped to this curve.

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

## Select UV Mask

Reduces the current selection so that a UV mask is used to select which vertices will be affected.
- **Mask**: The mask texture to use.
- **UV Channel**: The UV channel to use.
- **Selection Curve**: The normalized masked amount will be remapped to this curve.

## Select Flood Fill

Reduces the current selection so that only the network of edges connected to at least one of the points will be affected.
