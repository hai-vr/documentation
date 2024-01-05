---
sidebar_position: 1
---

# Eye Shapes: Building new shapes from existing ones

:::danger
The documentation page is currently being written.
:::

:::warning
**Are you familiar with making face tracking shapes?**

If you are not familiar with creating shapes yourself, the [Unified Expressions documentation on VRCFaceTracking](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes)
can be a good reference.

Feel free to ask on Discord about it.
:::


Most eye shapes consist in assembling existing blendshapes into a new shape.

For instance, **Eye Look Up** is a shape that generally (depending on your style):

- Moves the top eyelid slightly up,
- and also moves the bottom eyelid slightly up.

However, artist-authored blendshapes rarely have such a setup.

For this reason, you can assemble this **Eye Look Up** shape by adding shapes together:

- Taking the top part of an existing blendshape that makes the eyelids wider, like a surprise blendshape.
- Taking the bottom part of an existing blendshape that makes the eyelids narrower, like a squinting blendshape.

![Unity_UWZzBcGd54.png](..%2Fimg%2Fshapes%2FUnity_UWZzBcGd54.png)

In some cases, you avatar may not have an appropriate blendshape. If that happens, you can try to improvise by using another blendshape in a way that is not intended:

A negative value will make the blendshape move in the opposite direction. If a blendshape makes something big, putting a negative value will make it small. There are some limitations of this approach, but it can help if your avatar doesn’t have the necessary blendshapes.

![Unity_1saR1S7Mxg.png](..%2Fimg%2Fshapes%2FUnity_1saR1S7Mxg.png)
