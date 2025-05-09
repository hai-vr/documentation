---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Retexturing Assistant

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

When you are **editing your textures using a traditional image editing tool** such as Photoshop or GIMP,
*Retexturing Assistant* will help you:
- visually identify UV islands and their meshes,
- select UV islands from Unity to your image editor through the Windows clipboard,
- create texture masks that may have been tedious to make by hand.

This tool does not modify your avatar, and it does not contain any non-destructive workflow components.
It is merely an aid for traditional texture editing workflows.

You must already be familiar with image editing tools (such as Photoshop). This tool does not replace them
in any way.

:::tip[Compatibility notes]
- It has been tested to work on Unity 2022, and should work on newer versions.
- This does not require VRChat to run.
:::

## Download

???

## How to use

### Initialize the component

To use this component:
- Create a new GameObject anywhere in your scene. It can also be inside your avatar.
- Add a "Retexturing Assistant" component to that new GameObject.
- ...
- ...
- ...
- If you have no intention to continue editing, you can remove the *Retexturing Assistant* component, or you can keep it.
    - This component has no effect during builds.

### Scrub between 3D and UV


### Select UV islands in your image editor


### Create masks

