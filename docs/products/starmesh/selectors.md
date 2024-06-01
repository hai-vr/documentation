﻿---
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

<video controls muted>
    <source src={require('./img/v66A6bxugo.mp4').default}/>
</video>

## Select Bones

Reduces the current selection so that only vertices weights to the specified bones will be affected.

The weight is the sum of all bones that match.

You can match bones by transform, or by object name. Matching by object name can be useful if you want to affect bones across different hierarchies.

- **Bones**: Select the bone transforms that you want to affect.
- **Object Names**: Choose the name of the bone transforms that you want to affect.
- **Include Child Bones**: Also includes all child bones.

<video controls muted>
    <source src={require('./img/SQzLrkRyb2.mp4').default}/>
</video>

## Select Point Radius

Reduces the current selection so that only vertices within a radius around a point will be selected.

- **Offset**: The center of the selection relative to this object, when there is no Transform selected.
- **Distance**: The radius to the center.
- **Curve**: The normalized distance will be remapped to this curve.
- **Root Transform**: *(Optional)* Choose a transform as the point to sample the position from.

<video controls muted>
    <source src={require('./img/oiUmCmWHPk.mp4').default}/>
</video>

## Select Line Radius

Reduces the current selection so that only vertices in proximity to a line will be selected.

- **A Position**: Position of the point A, when there is no Transform selected.
- **B Position**: Position of the point B, when there is no Transform selected.
- **Is Capsule**: Makes the radius and the curve of B identical to A, effectively turning the selection into a capsule shape.
- **Radius A**: The radius to the line at point A.
- **Radius B**: The radius to the line at point B.
- **Selection Curve A**: Vertices on the A side will have their normalized distance remapped to this curve.
- **Selection Curve B**: Vertices on the B side will have their normalized distance remapped to this curve.
- **A Root Transform**: *(Optional)* Choose a transform as the point A to sample the position from.
- **B Root Transform**: *(Optional)* Choose a transform as the point B to sample the position from.

Vertices between A and B will use a proportion of Selection Curve A and Selection Curve B,
based on the projection of that vertex on that line.

<video controls muted>
    <source src={require('./img/zHCaHEnKu3.mp4').default}/>
</video>

## Select Blendshapes

Reduces the current selection so that vertices moved by a blendshape will be selected.

## Select Connected Polygons

Reduces the current selection so that only vertices connected together via a chain of polygons will be selected.

## Selection order

The selection will be done in this order:

- `Union of all Select Meshes`
- multiplied by (`Union of all Select Bones` or 1 if none selected)
- multiplied by ((`Union of all Select Connected Polygons` union with `Union of all Select Blendshapes`) or 1 if none of either)
- multiplied by ((`Sum of all Select Point Radius` added to `Sum of all Select Line Radius`) or 1 if none of either)