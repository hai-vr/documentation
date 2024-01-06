---
sidebar_position: 6
---

# Mouth Closed

:::danger
The documentation page is currently being written.
:::

:::warning
**Are you familiar with making face tracking shapes?**

If you are not familiar with creating shapes yourself, the [Unified Expressions documentation on VRCFaceTracking](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes)
can be a good reference.

Feel free to ask on Discord about it.
:::

If you are familiar with rigging ArKit face tracking blendshapes in a traditional 3D modelling editor like Blender, you know that Mouth Closed is one of the unusual shapes, because as a technicality, it morphs vertices relatively to the Jaw Open shape.

You can ignore this technicality in the editor. **The preview you see in the editor scene is not the MouthClosed blendshape on its own.** The scene shows the MouthClosed blendshape while the JawOpen shape is playing, and the JawOpen Jaw Puller is active.

The same face pulling deformation of the Jaw Open shape is already visibly applied in the editor, and the blendshapes defined inside the Jaw Open shape is already cancelled.

You will need to assemble blendshapes that represents the mouth being closed.
