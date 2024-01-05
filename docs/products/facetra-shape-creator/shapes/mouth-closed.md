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

## Jaw Left/Jaw Right and Jaw Forward

These shapes allow you to move the jaw, but by default, this includes the upper side of the mouth in order to create smoother deformations on anime-style avatars.

If your avatar has a very large jaw as it is the case with the face structure of some furry avatars, you can check the “Jaw … Puller Only Lower” checkbox so that the Jaw puller will only change the lower part of the mouth divider.

<video controls muted width="816">
    <source src={require('../img/shapes/Unity_sD62flWJ7S.mp4').default}/>
</video>
