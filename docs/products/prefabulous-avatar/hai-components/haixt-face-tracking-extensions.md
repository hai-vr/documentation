# HaiXT Face Tracking Extensions

Adds a new FX layer containing support for the non-standard face tracking blendshapes used in FaceTra Shape Creator.

## Use with FaceTra Shape Creator

[FaceTra Shape Creator](/docs/products/facetra-shape-creator) has a section called *Non-standard shapes (Experimental)*.

This section is dedicated to the creation of non-standard face tracking blendshapes.

For instance, it can create a blendshape that changes the shape of the eyelids when the eyes are closed and the mouth is smiling simultaneously.

Use that section to configure your avatar and generate the blendshapes that will be used by the Face Tracking Extensions.

## Create blendshapes yourself in Blender

If you don't use *FaceTra Shape Creator*, you can still create this non-standard face tracking blendshape in Blender or the editor of your choice.

### HaiXT_EyeClosedInverse_Smile*

The `HaiXT_EyeClosedInverse_SmileLeft` and `HaiXT_EyeClosedInverse_SmileRight` blendshapes are:

- An artist-authored blendshape which closes the eyes with the eyelids going up, like the ^_^ smiley,
- combined with the **inverse** of the standard [EyeClosed blendshape](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes#ue-base-shapes).

(Left eyelid and Right eyelid animated separately)

This effectively makes it into a new blendshape capable of morphing the standard EyeClosed blendshape into the artist-authored ^_^ blendshape.