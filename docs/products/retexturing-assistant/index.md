---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Retexturing Assistant

<HaiTags>
<HaiTag isUniversal={true} />
<HaiTag compatibleWithPhotoshop={true} short={true} />
<HaiTag compatibleWithGIMP={true} short={true} />
</HaiTags>

When you are **editing your textures using a traditional image editing tool** such as Photoshop or GIMP,
using *Retexturing Assistant* in Unity will help you:
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
- When using Photoshop, support for external transparent pictures stored inside the clipboard is confirmed in Photoshop 2024.
    - It may work on other versions, but this remains unconfirmed in older versions.
- When using GIMP, support for external transparent pictures stored inside the clipboard is confirmed.
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

### Identifying texture regions

TODO scrubber

### Isolating texture regions

TODO UV Island category

### Painting gradients

TODO

#### Flood fill gradient

Great for models with curves and spirals, the flood fill is a gradient that travels along the geometry of the 3D mesh.

This is the recommended option for most models.

These gradients can be used as a [path map in Poiyomi Shader](https://www.poiyomi.com/special-fx/pathing).

#### Radial gradient

Radial gradient paints the 3D mesh based on the distance to that point.

### Image editing programs

By default, the tool is configured to export only to Photoshop (to optimize for speed). If you need to support another editor,
change the *Clipboard Format* field to one of the options below.

- **Generic**: Writes DIBV5, DIB, and PNG formats to the clipboard. **This is the slowest**, but works on many programs, including Discord.
- **Photoshop**: Writes DIBV5 format to the clipboard, which is preferred by Photoshop.
- **GIMP**: Writes PNG format to the clipboard, which is preferred by GIMP.
- **DIB**: Writes DIB format, which sometimes used.

:::tip[Compatibility notes]
- When using Photoshop, support for external transparent pictures stored inside the clipboard is confirmed in Photoshop 2024,
  and may work on other versions, but remains unconfirmed in older versions.
:::
