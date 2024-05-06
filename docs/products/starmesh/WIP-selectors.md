---
unlisted: true
sidebar_position: 1
---

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
