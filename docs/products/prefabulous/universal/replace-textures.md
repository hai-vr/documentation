import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Replace Textures

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Replaces textures inside materials with other ones.

This can be used to quickly create a version of your avatar with lower resolution textures, while still letting you upload an avatar with its original textures.

![Unity_lJ03XfMYPW.png](..%2Fimg%2FUnity_lJ03XfMYPW.png)

## How to use

This component will find materials that are configured to use a texture, and replaces those textures with other ones.

This is non-destructive: the materials in your project are not modified.

:::warning
Materials located inside animations are not currently supported:
The textures contained inside those animations will not be replaced.
:::

To use this component:
- Add a "PA-H Replace Textures" component anywhere in your avatar.
- The component will list all textures found inside renderers your avatar, as long as the renderer or any of its parents is not inside an "Editor Only"-tagged object.
- Press "+ Add" on any texture that you would like to replace.
- Provide a new texture in the field located below "Replace with".

## Danger: Execute in Play Mode

**By default, this component will not be executed in Play Mode.**

In order to use this component, we must create copies of all materials on your avatar.
Since they are copies, any edits made to the materials Play Mode would not be saved.

If you are normally used to editing your avatar materials in Play Mode, this could be very disruptive for your workflow.
For this reason, this component will NOT be executed in Play Mode by default.

Check the *"(DANGER) Execute in Play Mode"* checkbox to execute it anyways.

## Versions

- **1.10.3**: Fix Replace Textures should no longer ignore disabled objects.
- **1.10.0**: Added.

Classification: *This component is application-agnostic.*