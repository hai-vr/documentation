---
sidebar_position: 2
---
# Reference manual

:::danger
This documentation is currently being written.
:::

*Starmesh* is a set of non-destructive mesh deformation tools that lets you iterate quickly
on avatar gimmicks.

The operation of *Starmesh* is dictated by the use of two main categories of components:
- **Selector** components lets you select vertices on meshes to affect, such as bones, blendshapes, radius, etc.
- **Operator** components lets you modify the selected vertices.

## Quick start

If you haven't already done it, please read through the [Introduction](./introduction) page.

## Operator components

Operator components lets you modify vertices affected by the specified Selector components.

### Blendshape operators

These components create a blendshape.
- **[Translate Rotate Scale](./operators/translate-rotate-scale)** creates a blendshape that pulls the affected vertices from one point and orientation to another. (🌶️)
- **[Compressive Deform](./operators/compressive-deform)** emulates the effect of a flat surface being compressed against that object. (🌶️🌶️)

### Bone operators

These components create or edit bones.
- **[Paint New Bone](./operators/paint-new-bone)** creates a new bone, and repaints as many meshes of your choosing to that bone. (🌶️)

[//]: # (### Bake operators)

[//]: # ()
[//]: # (:::danger)

[//]: # (These components are not currently available.)

[//]: # (:::)

[//]: # ()
[//]: # (These components edit vertices, but aren't related to blendshapes or bones.)

[//]: # ()
[//]: # (- **[Delete Vertices]&#40;./operators/delete-vertices&#41;** deletes vertices.)

[//]: # (- **[Assign UV Tile]&#40;./operators/assign-uv-tile&#41;** assigns a UV tile.)


## Selector components

Selector components lets you select vertices on meshes to affect.

Vertex selection is not a binary mask, there is a **weight** attached to each selected vertex. The higher the weight, the more it will be
affected by operators. *If you're familiar with Blender, this makes selections very similar to proportional editing and weight painting.*

You must have a [**Select Meshes**](./selectors) component, which lets you specify which meshes will be affected,
and which blendshapes should be considered as applied.

Then, you can refine your selection using the following components:

### Selectors based on geometry data

- [**Select Point Radius**](./selectors) lets you select vertices in proximity to a point, with the weight varying by distance.
- [**Select Line Radius**](./selectors) lets you select vertices in proximity to a line, with the weight varying by distance.

[//]: # (- **Select Angle** lets you select vertices within an angle limit.)
[//]: # ()
[//]: # (  Region:)
[//]: # (- **Select Box** lets you select vertices located within a box.)
[//]: # (- **Select Plane Divider** lets you select vertices on one side of a plane.)
[//]: # (- **Select Left/Right Divider** lets you select vertices on one side of the avatar.)
[//]: # (- **Select Gradient** lets you weight vertices across a region to a gradient.)

### Selectors based on mesh data

- [**Select Bones**](./selectors) lets you select vertices of bones, with the weight varying by the painted weight.
- [**Select Connected Polygons**](./selectors) lets you select all vertices connected to points.
- [**Select Blendshapes**](./selectors) lets you select vertices affected by a blendshape.

[//]: # (- **Select UV Mask** lets you select vertices using a mask texture.)

[//]: # (Finalizers:)
[//]: # (- **Finalize Curve** lets you remap the entire selection. This is executed after all above selectors.)