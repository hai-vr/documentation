---
unlisted: true
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# ⛔ Transfer Blendshape

The *Starmesh Op. Transfer Blendshape* component **attempts** to create a blendshape on a costume that mimics the movement
of a blendshape from another mesh.

Try using this to transfer nail deformations, chest deformations, or hip deformations (i.e. `Hip_big`) from a base mesh to a costume.

Combine it with other Selectors to limit the areas affected by the transferred deformations.

:::warning
**This component may not always produce good results.**

In addition, if you use other tools that attempt to fit a costume on an avatar it was not designed for, it will probably not work as
this operator expects the mesh data to overlap, regardless of how bones are arranged in the scene.
:::

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

## How to use

The Transfer Blendshape operator is particularly slow to compute. The larger your mesh is, the longer it will take to calculate the blendshape.

It may not always produce good results, if at all.

### Create the operator and selectors

- Add a *Starmesh Op. Transfer Blendshape* component on a new GameObject in your avatar.
- In the selectors of this component, add a *Starmesh Select Meshes*, or choose one that you already have.
    - Configure the *Select Meshes* selector so that it affects the relevant meshes.
- You can further restrict the area where the blendshape will be applied. For example, you may want deformations applied to a skirt to only
  apply on the hip area.
    - If you choose to do so, then, add other selectors, for instance, a *Starmesh Select Line Radius*.

### Configure the operator

- In the Operator, choose the source mesh to bind from.
    - The mesh to bind from is typically the mesh that contains the skin of your torso.
- Define the name of the blendshape that will be transferred.
- Choose a name for the generated blendshape in the *Shape Name*.
- The *Shape Default Weight* setting is the default value of the blendshape on your SkinnedMeshRenderer component after it is created.
    - By default, the default weight is set to 100. 
    - You may want to set that weight to whatever value your blendshape currently is on the source mesh to bind from.
- If you use *Modular Avatar*, consider adding a [Modular Avatar Blendshape Sync](https://modular-avatar.nadena.dev/docs/reference/blendshape-sync) if you deem it necessary.

### Advanced

By default, the algorithm works by finding the closest face to each vertex, but this search is limited to the triangles associated with the closest 12 vertices.

You may choose to increase or decrease the search limit and see how it affects the quality of the transfer.
