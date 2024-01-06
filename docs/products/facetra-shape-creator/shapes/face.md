---
sidebar_position: 2
---

# Face Shapes: Pulling and twisting

:::danger
The documentation page is currently being written.
:::

:::warning
**Are you familiar with making face tracking shapes?**

If you are not familiar with creating shapes yourself, the [Unified Expressions documentation on VRCFaceTracking](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes)
can be a good reference.

Feel free to ask on Discord about it.
:::


Most other shapes will involve pulling and twisting parts of the mesh. If you’re familiar with Blender, this is somewhat similar to proportional editing.

- Press “Reset position and rotation” to move the handles back to the positions of the construction lines.

:::warning
**When building shapes for the first time, the shapes will look mangled.**
Systematically press the “Reset position and rotation” buttons to fix the shape before you start working on it the first time.

<video controls muted>
<source src={require('../img/shapes/Unity_S2iRD530sU.mp4').default}/>
</video>
:::

- Move the gizmo to pull the vertices.
- Rotate the gizmo to twist the vertices.
- Use the purple cubic handle to increase the range of the selection (the size of the brush).
  The purple circle represents the location where the brush is at 50% of the maximum distance after which vertices will be unaffected.

- The curve in the inspector defines how the vertices are smoothed. The default value should be fine for most, but in some cases like Lip Funnel,
- Lip Pucker, Mouth Upper Up, Mouth Lower Down, and some others, you may want to look into changing that shape.

<video controls muted>
    <source src={require('../img/shapes/2023-11-06_20-04-18_ShareX.mp4').default}/>
</video>