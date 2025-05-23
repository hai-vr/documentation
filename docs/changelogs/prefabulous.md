﻿---
title: Prefabulous
---

import {HaiVideo} from "/src/components/HaiVideo";

## 2.2.0-alpha.0

Support [Modular Avatar for Resonite](https://github.com/bdunderscore/modular-avatar-resonite):
- Add support for cross-application build compatibility being introduced in NDMF 1.8.
- Conditionally compiled when NDMF 1.8.0-alpha.0 is installed:
  - Prefabulous Universal still needs to be compatible with VNyan (Unity 2020) and Warudo (Unity 2021), meaning we still need to support NDMF 1.4 (last known working version in Unity 2020).

## 2.1.0

- Modify the behaviour of *Generate Twist Bones* on VRChat projects:
  - If VRChat 3.7.0 or above is installed in the project, we will generate a *VRC Aim Constraint* component instead of a Unity *Aim Constraint*.
- To try resolving an execution ordering issue with VRCFury, Delete Polygons, Assign UV Tile, and Replace Textures no longer run in the Optimizing phase.

## 2.1.0-beta.4

- To try resolving an execution ordering issue with VRCFury, Delete Polygons, Assign UV Tile, and Replace Textures no longer run in the Optimizing phase.

## 2.1.0-beta.3

- Remove Convert back to Unity Constraints (inter-release):
  - Convert back to Unity Constraints is being moved to a specialized package, to separate Conversion tooling from Universal tooling.

## 2.1.0-beta.2

### ~~☀️ New component: Convert back to Unity Constraints~~

~~A new component, Convert back to Unity Constraints, has been added to Prefabulous Universal.~~

It converts VRC Constraint components back to native Unity Constraints, to the extent applicable.

- VRC-specific features (local axis, freeze to world) are not supported.
- The VRChat SDK assemblies and DLLs do not need to be installed in the project, as long as the types exist, so they could be mere stubs.

## 2.1.0-beta.1

- Modify the behaviour of *Generate Twist Bones* on VRChat projects: 
  - If VRChat 3.7.0 or above is installed in the project, we will generate a *VRC Aim Constraint* component instead of a Unity *Aim Constraint*.

## 2.0.3

- Compilation should no longer fail in non-VRChat projects that still have the `VRC_SDK_VRCSDK3` scripting define around.
  - Components now extend VRChat's `IEditorOnly` class only if the VRChat Avatars SDK is installed.
- Delete Polygons should now run before AAO.

## 2.0.2

Fix Assign UV Tile "Entire Mesh" no longer fails to process meshes that were set to EditorOnly.

## 2.0.1

Hide all Prefabulous icons from the scene in Unity 2022 or above.

## 2.0.0 Prefabulous Universal

Prefabulous has been split into:
- *Prefabulous Universal* (this page)
- *[Prefabulous for VRChat](./prefabulous-for-vrchat)*
- *[Prefabulous for VRM](./prefabulous-for-vrm)*

See [update](/updates/2024/06/13/p0) page.

## 1.11.2

Fix Prefabulous was not able to compile because it was using a deprecated define `VRC_SDK_VRCSDK3` that was missing on some users' projects.

## 1.11.1

Fix Generate Twist Bones help URL no longer points to localhost.

## 1.11.0

### ☀️ New component: [Generate Twist Bones (Alpha)](/docs/products/prefabulous/universal/generate-twist-bones)

A new component, [Generate Twist Bones (Alpha)](/docs/products/prefabulous/universal/generate-twist-bones), has been added to Prefabulous.

This component will generate twist bones, which improves the look of the elbow joint by twisting the part of the lower arm that is closer to the elbow.

It creates new twist bones with constraints, and automatically repaints the bones weights of all meshes of the avatar which use that bone.

:::warning
**🚧🚧🚧 This component is currently in an alpha phase. 🚧🚧🚧**

At the moment, it only fully supports meshes that are part of the base mesh armature.

The current version **will not** be able to generate twist bones for additional meshes used by [VRCFury Armature Link](https://vrcfury.com/components/armature-link/),
and **may not** be able to generate twist bones for additional meshes used by [Modular Avatar Merge Armature](https://modular-avatar.nadena.dev/docs/reference/merge-armature).

Both are intended to be supported in the future, but it's significantly harder to do so.
The component is still released in this state of development as it is beneficial for the bare skin of your avatar.

Thank you for your understanding.
:::

<HaiVideo src="/docs/products/prefabulous/img/ByAzbmmx4w.mp4"></HaiVideo>

<HaiVideo src="/docs/products/prefabulous/img/auto-twist-f.mp4"></HaiVideo>

## 1.10.3

Fix Replace Textures should no longer ignore disabled objects.

## 1.10.2

This is a technical update for Prefabulous:
- This version now requires Modular Avatar V1.9.9 minimum.
- Modular Avatar V1.9.9 requires NDMF V1.4.0 minimum.
- Integrate [Import Expression Parameters](/docs/products/prefabulous/vrchat/import-expression-parameters) with Modular Avatar Information.
  - The number of synced bits used by Import Parameters is now shown in the Modular Avatar Information panel.

![2024-03-27-p1-Unity_yH0bzcLRVK.png](..%2F..%2Fupdates%2Fimg%2F2024-03-27-p1-Unity_yH0bzcLRVK.png)

## 1.10.1

Three new components have been added to Prefabulous.

### ☀️ New component: [Replace Textures](/docs/products/prefabulous/universal/replace-textures)

This component lets you upload multiple versions of your avatar but with different textures, without needing to duplicate the materials.

It also displays which materials use which textures, although you could also be using lilAvatarUtils for this.

![Unity_lJ03XfMYPW.png](..%2Fproducts%2Fprefabulous%2Fimg%2FUnity_lJ03XfMYPW.png)

### ☀️ New component: [Convert Blendshape Conventions](/docs/products/prefabulous/universal/convert-blendshape-conventions)

This component lets you convert blendshapes from one naming convention to another naming convention, such as converting Unified Expressions blendshapes to ARKit blendshapes.

![Unity_Kwht5QWD83.png](..%2Fproducts%2Fprefabulous%2Fimg%2FUnity_Kwht5QWD83.png)

### ☀️ New component: [Mass Blendshape Sync](/docs/products/prefabulous/vrchat/mass-blendshape-sync)

This component will synchronize all blendshapes that two meshes share in common.

This is ideally used with renderers that have a massive quantity of blendshapes that need to be synced, such as face tracking.

![Unity_kmeSxcDqt8.png](..%2Fproducts%2Fprefabulous%2Fimg%2FUnity_kmeSxcDqt8.png)

### Other

- All Prefabulous components will now be removed after baking, so that uploading a baked avatar will not bake them twice.
- Blank Gesture Animator now generates one animator layer that VRChat requires, instead of zero layers.
- The dependency to "Animator As Code - NDMF Processor (Alpha)" has been removed.
- Don't warn when using NDMF 1.4.x
- Don't warn when using Modular Avatar 1.9.x

## 1.9.1

- Update dependencies to allow NDMF 1.3

## 1.9.0

### Update [Assign UV Tile](/docs/products/prefabulous/universal/assign-uv-tile)

Add "Entire Mesh" mode to "Assign UV Tile":
- UV Tile can now be assigned to an entire MeshRenderer or SkinnedMeshRenderer.
- There is now a mode selection between BlendShapes and EntireMesh.
- If a mesh is used by both a EntireMesh component and a BlendShapes component, EntireMesh is applied first, so that the BlendShapes components can further refine into other UV tiles.

(NDMF Compatibility) Make sure UV Tile assignments are done before any large scale mesh optimization causes a loss of reference:
- Delete Polygons now runs before com.anatawa12.avatar-optimizer
- Assign UV Tile now runs before com.anatawa12.avatar-optimizer

![2024-01-18-p2-Unity_OLXaqgjeBM.png](..%2F..%2Fupdates%2Fimg%2F2024-01-18-p2-Unity_OLXaqgjeBM.png)

:::tip
"Entire Mesh" should be used alongside an avatar optimization tool that will merge existing meshes, such as [d4rkpl4y3r's d4rkAvatarOptimizer](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer)
or [anatawa12's AvatarOptimizer](https://github.com/anatawa12/AvatarOptimizer).

Prefabulous does not provide any mesh optimization components that rectifies animation paths at this time.
:::

## 1.8.0

### Update [Recalculate Normals](/docs/products/prefabulous/universal/recalculate-normals)

Recalculate Normals should now properly work on avatars that were not posed like the model, or had a different orientation than the model.

## 1.7.1

Assign UV tile has been rectified to work with shaders like SCSS that expect the UVs to be shifted rather than overridden.

This patch was pushed before any 1.7.0 social media announcement.

## 1.7.0

### ☀️ New component: [Assign UV Tile](/docs/products/prefabulous/universal/assign-uv-tile)

A new component, [Assign UV Tile](/docs/products/prefabulous/universal/assign-uv-tile), has been added to Prefabulous.

Sets the UV Tile of vertices that are moved by a blendshape.

This is meant to be used in tandem with shader features, especially [Poiyomi Toon UV Tile Discard](https://www.poiyomi.com/special-fx/uv-tile-discard),
and may also be used with [SCSS's Inventory System](https://gitlab.com/s-ilent/SCSS/-/wikis/Manual/Inventory-System).

<HaiVideo src="/docs/products/prefabulous/img/13rQ7HGwPr.mp4"></HaiVideo>

### Technical notes

Add Assign UV Tile:
- Assign UV Tile will change the UVs of vertices moved by a blendshape.
- This component is built to closely match Poiyomi "UV Tile Discard" feature.
- It uses the same vertex selection algorithm as Delete Polygons.
- The UV tile has an offset of 0.5.

### Update [Delete Polygons](/docs/products/prefabulous/universal/delete-polygons)

Delete Polygons now has Keep Partial Polygons option:
- Add "Keep Partial Polygons" option.
- When "Keep Partial Polygons" is enabled, vertices of blendshapes that are marked as such will be preserved if that vertex is still connected to a triangle that has at least one vertex that is not deleted.
- In effect, this preserves polygons that are still connected to the rest of the mesh.
- This might help with some avatar models that rely on the conflict prevention blendshape to intersect polygons with clothing.

## 1.6.0

### ☀️ New component: [Delete Polygons](/docs/products/prefabulous/universal/delete-polygons)

A new component, [Delete Polygons](/docs/products/prefabulous/universal/delete-polygons), has been added to Prefabulous.

Delete polygons affected by conflict prevention blendshapes, and other unused decorations hidden inside the mesh
(such as star-shaped eyes and other eye decorations; piercings, bandages, and other accessories).

![delete-polygons-compare.png](../products/prefabulous/img/delete-polygons-compare.png)

### Technical notes

Add Delete Polygons:
- Delete Polygons will delete polygons associated with moved vertices of a blendshape.
- It will not delete polygons if the vertex of that blendshape is not moved, even if the normal or tangent changes.
- Portions of d4rkpl4y3r's https://github.com/d4rkc0d3r/d4rkAvatarOptimizer (MIT License) is used as a reference for the mesh reconstruction.

### Other

Make Recalculate Normals editor animator introspection aware of Prefabulous components:
- Recalculate Normals editor introspects animators from the descriptor, however, it was not aware of Prefabulous Blank/Replace Animator components.
- It no longer introspects playable layers affected by Blank Animator components.
- It no longer introspects playable layers affected by Replace Animator components.
- It now introspects the controllers from Replace Animator components.

### Special thanks

- [d4rkpl4y3r](https://github.com/d4rkc0d3r/) for the references on [mesh reconstruction](https://github.com/d4rkc0d3r/d4rkAvatarOptimizer)!

## 1.5.0

### ☀️ New component: [HaiXT Generate Blendshapes for Face Tracking Extensions](/docs/products/prefabulous/universal/haixt-generate-blendshapes-for-face-tracking-extensions)

A new component, [HaiXT Generate Blendshapes for Face Tracking Extensions](/docs/products/prefabulous/universal/haixt-generate-blendshapes-for-face-tracking-extensions), has been added to Prefabulous.

If you have an avatar that already supports face tracking, this will generate additional non-standard blendshapes for use with [HaiXT Face Tracking Extensions](/docs/products/prefabulous/vrchat/haixt-face-tracking-extensions).

When your eyes are closed, the shape of your eyes will change when you're smiling.

<HaiVideo src="/docs/products/prefabulous/img/smile-f.mp4"></HaiVideo>

### Fixes

- Try to fix compatibility issues with Unity 2019.

### Technical notes

Add Generate Blendshapes for Face Tracking Extensions:

- Generate Blendshapes for Face Tracking Extensions can add extension blendshapes to avatar that already support face tracking.
- Add support for generating the HaiXT_EyeClosedInverse_Smile blendshapes.
- The blendshapes will be generated only under these conditions:
  - the face mesh must be called Body, and
  - the avatar must already have EyeClosedLeft or EyeClosedRight blendshapes, and
  - the avatar must NOT already have the HaiXT_EyeClosedInverse_SmileLeft or HaiXT_EyeClosedInverse_SmileRight blendshapes
- All of these evaluations are done right before this NDMF handler executes:
  - These conditions do not need to be true during Edit mode.
  - A non-destructive processor running before this NDMF handler may still be able to cause these conditions to pass, or conversely, invalidate it.

In addition:
- Recalculate Normals NDMF handler is now constrainted to run after PrefabulousHaiGenerateBlendshapesFTEPlugin.

## 1.4.0

### Update [Recalculate Normals](/docs/products/prefabulous/universal/recalculate-normals)

Recalculate Normals now has [Erase Custom Split Normals](/docs/products/prefabulous/universal/recalculate-normals#option-erase-custom-split-normals) option:
- Add "Erase Custom Split Normals" option.
- When "Erase Custom Split Normals" is enabled, the recalculation will perform a second pass where all vertices that have a non-zero delta pos or a non-zero recalculated delta normals will have new deltas calculated: instead of calculating the difference from the base recalculated mesh, it will calculate the difference from the original mesh.
- In effect, this erases custom split normals data for that blendshape.
- Since this only affects some vertices (non-zero delta pos or a non-zero recalculated delta normals), this prevents incorrect delta normals from contaminating unrelated vertices in the mesh.

:::danger
Enabling Erase Custom Split Normals can lead to **worse results** in meshes that don't have custom split normals.

Only give this a try on blendshapes where shading defects are clearly visible only after you've tried Recalculate Normals first without this option.

In all other cases, **keep this option off!**

For more details, [please consult the Erase Custom Split Normals documentation](/docs/products/prefabulous/universal/recalculate-normals#option-erase-custom-split-normals).
:::

### Update [Change Avatar Scale](/docs/products/prefabulous/universal/change-avatar-scale)

Change Avatar Scale now uses the Avatar Descriptor view position as the source size:
- ChangeAvatarScale reads the Avatar Descriptor view position Y coordinate and uses it as the source size.
- This is now the default behaviour.
- Old behaviour can be restored by checking "Custom Source Size".

### Fixes

- Edit Mesh Anchor Override: Fix NDMF PrefabulousEditAllMeshAnchorOverridePlugin build step is now correctly named "Edit Mesh Anchor Override".
- Update Recalculate Normals conflict prevention filter to include "hidemesh_".
- Fix Recalculate Normals will no longer process the same blendshapes multiple times when they are specified multiple times.

## 1.3.0

### ☀️ New component: [Recalculate Normals](/docs/products/prefabulous/universal/recalculate-normals)

A new component, [Recalculate Normals](/docs/products/prefabulous/universal/recalculate-normals), has been added to Prefabulous.

This component improves the shading of SkinnedMeshRenderers by recalculating select blendshape normals (and tangents).

<HaiVideo src="/docs/products/prefabulous/img/mS1cQ7EheE.mp4"></HaiVideo>

### Technical notes

- Recalculate Normals will recalculate select blendshape normals of SkinnedMeshRenderers (and tangents).
- Blendshape delta normals (and tangents) are usually zero on avatar uploads.
  - This may cause the avatar shading to look abnormal, especially on blendshapes that flatten part of the body, or significantly push it out.
- This component attempts to recalculate normals of individual blendshapes by doing the following:
  - Bake a static mesh of a SMR mesh when 0 blendshapes are running
  - Build a data structure describing vertices that have same position and normal
  - Use [RecalculateNormals](https://docs.unity3d.com/ScriptReference/Mesh.RecalculateNormals.html). This is done even when 0 blendshapes are active, so that the delta is calculated based on Unity's judgement of what's the normal data at rest.
  - Using that previous data structure, rebuild normal data by averaging and renormalizing vertex normals that had the same position and normal
    - This is done to fix an issue where an artist-authored vertex is part of an UV seam, causing the mesh data to split that vertex into multiple, effectively causing the RecalculateNormals output to have different normals for that vertex.
  - Use [RecalculateTangents](https://docs.unity3d.com/ScriptReference/Mesh.RecalculateTangents.html).
  - Do all of the above again for each blendshape to recalculate, and use that to calculate a delta normal and a delta tangent.
  - Once all blendshapes are processed, effectively rewrite all of the mesh blendshapes with these modifications.

## 1.2.1

- Fix a compatibility issue with Unity 2022
- Allow installation with VRChat Avatars SDK 3.5.x

## 1.2.0

First public experimental release.
