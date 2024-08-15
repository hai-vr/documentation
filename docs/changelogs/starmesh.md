﻿---
title: Starmesh
---

## 1.5.0

- *Ripple Wave* now has a *minimum amount*, so that the ripple already starts away from the center. 
- **Add VRChat prefabs:**
  - Non-destructive prefabs designed for Starmesh can now be installed inside a VRChat avatar.
  - The animators and animations of those prefabs do not need to be edited by hand.
  - **Modular Avatar is required for prefabs to work**.
  - If you don't need prefabs, then you don't need to have Modular Avatar installed.
  - *Modular Avatar Merge Animator* components will affect the meshes selected by *Starmesh Select Meshes*.
  - See [VRChat prefabs](/docs/products/starmesh/prefabs/vrc) documentation.
- When a Shape Name is empty, generate the name uniquely in order to favour the creation of independent prefabs.
- Warn the user where there are no meshes in the selector.

Fixes:

- Prevent non-blocking error message from appearing when painting vertices to 5 bones or more, by trimming on our side:
  - Previously, painting vertices to 5 bones or more causes Unity to show a non-blocking error message on platforms that have a 4-bone limit.
  - This error message is now prevented from appearing by trimming the painted bones down to 4 on our side, and then rescaling the weights.
- If *Prefabulous Universal* is installed in the project, building an avatar will delegate the recalculation of normals to *Prefabulous Universal* in order to avoid copying all blendshapes of the mesh twice.

## 1.4.0

This update attempts to make the deletion of Operators more robust, so that the reference to the "Original Mesh" is not lost while editing.

A new component "StarmeshOriginalMeshData" will be automatically added inside SkinnedMeshRenderers used by a StarmeshSelectMeshes component, which will preserve the reference to the "Original Mesh" even after Operators are removed from the avatar.

- Attempt to fix a major issue where users would delete the Starmesh Operator hierarchy in such a way that Starmesh won't be able to restore the original mesh asset into the SkinnedMeshRenderer.
  - This causes subsequent addition of new Starmesh Operators to fail initializing because the reference to the original mesh was lost.
  - Every SkinnedMeshRenderer that has been associated into a StarmeshSelectMeshes component will now have a StarmeshOriginalMeshData component attached to it.
  - The purpose of this component is to remember what was the original mesh, so that it has a chance of restoring the original mesh into the skinned mesh even if the user deletes all the Starmesh operators from the avatar.
  - The user should be able to delete that new component safely from the avatar after all Operators have been removed and the orange button "Restore mesh into SkinnedMeshRenderer" has been pressed.
- Attempt to fix an issue where coordinate system transformations would not be possible because the user would set the bones of secondary Armatures to EditorOnly.
  - The StarmeshOriginalMeshData now stores the bone zero transformation matrix as a fallback solution in case this happens.

## 1.3.0

- Estimated VRAM cost is now shown inside Operators.
- Added the ability to reduce the number of frames generated by a multi-frame Operator.
- ⚡ Compressive Deform now generates 15 frames by default instead of 25.

## 1.2.1

- Fix compilation errors happening in ChilloutVR projects.
  - *VRChat users do not need to update from 1.2.0 to 1.2.1*.

## 1.2.0

- Added buttons to create a temporary animation clip. This animation clip is not stored anywhere.
  - You should copy the properties from that temporary animation clip to your own (real) animation clips.

## 1.1.0

- Added [Starmesh Op. Ripple Wave](/docs/products/starmesh/operators/ripple-wave) component.

## 1.0.2

- Fix a possible compilation error caused by the use of `AnimationUtility` in a component.

## 1.0.2

- Fix an issue with meshes that were exported from Maya or with different coordinate spaces.

## 1.0.1

- Fix an error with the tool so that it no longer requires Prefabulous Universal in the project.

## 1.0.0

- Soft release.