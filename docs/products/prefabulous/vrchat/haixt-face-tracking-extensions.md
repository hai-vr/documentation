import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# 💬 HaiXT Face Tracking Extensions

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Adds a new FX layer containing support for the non-standard face tracking blendshapes.

:::warning
The layer is only compatible with [Adjerry91's VRCTraceTracking-Templates](https://github.com/Adjerry91/VRCFaceTracking-Templates) animators.
:::

When your eyes are closed, the shape of your eyes will change when you're smiling.

- Add another component called [HaiXT Generate Blendshapes for Face Tracking Extensions](../universal/haixt-generate-blendshapes-for-face-tracking-extensions), which can create those blendshapes for you.
- If you use FaceTra Shape Creator, these blendshapes are already created for you, see below.

<video controls muted width="816">
<source src={require('../img/smile-f.mp4').default}/>
</video>

## Use with FaceTra Shape Creator

[FaceTra Shape Creator](/docs/products/facetra-shape-creator) has a section called *Non-standard shapes (Experimental)*.

This section is dedicated to the creation of non-standard face tracking blendshapes.

For instance, it can create a blendshape that changes the shape of the eyelids when the eyes are closed and the mouth is smiling simultaneously.

Use that section to configure your avatar and generate the blendshapes that will be used by the Face Tracking Extensions.

## Create blendshapes yourself in Blender

You can still create this non-standard face tracking blendshape in Blender or the editor of your choice.

:::info
Strongly consider using the [HaiXT Generate Blendshapes for Face Tracking Extensions](../universal/haixt-generate-blendshapes-for-face-tracking-extensions) component.
:::

### HaiXT_EyeClosedInverse_Smile*

The `HaiXT_EyeClosedInverse_SmileLeft` and `HaiXT_EyeClosedInverse_SmileRight` blendshapes are:

- An artist-authored blendshape which closes the eyes with the eyelids going up, like the ^_^ smiley,
- combined with the **inverse** of the standard [EyeClosed blendshape](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes#ue-base-shapes).

(Left eyelid and Right eyelid animated separately)

This effectively makes it into a new blendshape capable of morphing the standard EyeClosed blendshape into the artist-authored ^_^ blendshape.

## Versions

- **1.2.0**: Added.

Classification: *This component is **💬 VRChat Only**.*
