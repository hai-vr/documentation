---
title: FaceTra Shape Creator
---

## 0.5.0-2024-01-08-0549

- Add option for a less greedy vertex selection:
  - On some models, the tongue may share vertices with the rest of the face.
  - Add an option on each vertex selection section to switch to a less greedy vertex selection.

- The documentation has been moved from Notion to [this location](/docs/products/facetra-shape-creator),
  with additional illustrations.


## 0.4.0-2024-01-05-0349

- Change mesh calibration to support meshes that have a non-zero origin (offset).
    - Mesh calibration is now done by converting vertices to avatar space through the 0th bindpose, which is generally the hip bone.
    - ⚠️⚡ This means **if the user shifts the hip up or down**, this could cause existing FaceTra rigs to cease functioning as expected.
      - Contact me on [Discord](/docs/other/discord) if this happens to you.
    - For this reason there is now a "Override Bone Zero" option in mesh calibration to recalibrate the existing FaceTra data if necessary.
    - Existing mesh calibration options have been grayed out.

- Make vertex selection more aggressive.
    - Vertex selection will now add neighbours of vertices that have the exact same position.
    - This is intended to correct for teeth/tongue selection issues some users were having.
    - ⚠️⚡ Since the selection is more aggressive, **this might expand the existing selections**.
      - Contact me on [Discord](/docs/other/discord) if this happens to you.

- Add FTWireMeshDebugger component for support requests.

## 0.3.0-2023-11-13-2123

- (fix) The component is now removed from the baked version
- Add experimental option to deepen the eye socket
    - Eye socket vertices can now be projected into a plane to deepen it
    - This is meant to help if the iris is clipping into the eye socket when using eye tracking


## 0.2.0-2023-11-12-1935

### Fixes
- (fix) MouthApeShape now uses the same pullers as MouthClosed
    - ⚠️⚡ *The appearance of MouthApeShape will change, but most face tracking animators do not use this shape.*
- (fix) originalMesh must now be non-null for our systems to run
- Add error messages when configuration may be incorrect

### Better handling of Jaw (Lower) movement
- "Teeth Selection" renamed to "Teeth Upper Selection"
- Add new "Teeth Lower Selection"
- "Puller Only Lower" renamed to "Exclude Upper Mouth"
- Add "Exclude Upper Mouth" to JawOpen
- Add new "Include Teeth Lower" to all Jaw* shapes
- Add new "Include Tongue Lower" to all Jaw* shapes
- Add blendshape construction to JawOpen for Teeth Upper, Teeth Lower, and Tongue

### Some of the Mouth shapes can have blendshapes
- Add Mouth Upper and Mouth Lower blendshapes construction
    - Add to all Lip* and Mouth* shapes that use the left/right divider except MouthPress

### Neck can be ignored on face meshes that contains the upper body
- Add Neck Separator
    - The neck separator is by default OFF
    - Use the neck separator if your head mesh is merged with the rest of the body
    - Use it to prevent jaw movement from affecting the rest of your body

### Nose can be excluded from Mouth Left/Mouth Right
- Add Nose projection
    - The nose projection is by default OFF
    - Use the nose projection if the nose needs to be excluded from some shapes
- Add Exclude Nose Power to Mouth Left/MouthRight
    - Cancels the movement of the nose by the given power


## 0.1.0-2023-11-09-0044

- Add a opt-in checkbox so that the Jaw puller on JawLeftRight and JawForward only affect the lower part of the mouth divider on avatars with large jaws
- Add support for non-1 scaled meshes
- Add support for optional EyeLook pupil blendshapes:
    - EyeLook Up/Down/In/Out now have additional optional blendshapes for moving the pupil Up/Down/In/Out
    - EyeLook In/Out should now have two additional optional blendshapes to move the left pupil and the right pupil individually
    - This is to allow converting traditional LookLeft/LookRight blendshapes to EyeLookIn/EyeLookOut
- Organize mesh data calibration into its own category
    - Opening that category will show debug data in the scene
- Newtonsoft.Json is no longer required to use the tool for Resonite/VRM:
    - Newtonsoft.Json is no longer required
    - This allows using the tool for Resonite or VRM projects in a new Unity project


## 0.0.5-2023-11-08-0052
- (bug) Fix eye divider was incorrect is now mirrored on the X axis
  ⚠️⚡ **Fixes the incorrect appearance of all Eye shapes**: Please reupload your avatar on your respective platforms
- (bug) Fix null dereference on serialized object

- MouthClosed now has its own shapes for the mouth, and only reuses JawOpen's Jaw Puller
  ⚠️⚡ **Changes the appearance of MouthClosed**: You **must** check MouthClosed again.
- Overwrite and choose which blendshapes to export
    - Existing blendshapes are now overwritten instead of skipped
    - In the component, the new Output section can be used to choose which shapes to write
- Add a huge space at the bottom of the editor to allow double clicking foldouts without scrolling


## 0.0.4-2023-11-07-1618
- Fix MouthLowerDown and MouthUpperUp were not processed using Left/Right dividers


## 0.0.3-2023-11-07-0201
- Fix vertex display was incorrect on Blender coordinate system
- On Editor Enable, require generation of the mesh
- Show less vertices on dividers


## 0.0.2-2023-11-07-0046
- Fix an issue where vertices could not be selected if the avatar mesh is using Blender coordinate system


## 0.0.1

Beginning of trials.