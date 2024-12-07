---
title: FaceTra Shape Creator
---

import {HaiVideo} from "/src/components/HaiVideo";

## 0.9.0

:::warning
FaceTra now shares code with Starmesh under the *MeshLib* package, which is included in both products.

If you use Starmesh, please update Starmesh to V1.6.0.
:::

### Faster Edit mode performance

The overall performance of the application in Edit mode has been improved.

On my machine, some operations that used to take 110ms now take 15ms.

During uploads and builds, the performance improvements are negligible. It turns out, the majority of the time is spent invoking an internal
Unity function to create blendshapes.

This seemingly cannot be improved in a non-destructive manner as the execution duration entirely depends on the number of vertices
moved by existing blendshapes on the base face mesh.

<HaiVideo src="/updates/img/2024-11-25-p0-6JaYH1MJ0A.mp4"></HaiVideo>

### Additions in generation capabilities

#### Blendshapes for all Shapes

- All shapes can now have blendshapes added to them, including those that don't normally use the Mouth Divider.

#### Deformers are now optional

- Deformers can be turned off per shape, in cases where you only use blendshapes instead of deformers.

#### Tailoring improvements

- The result of Tailoring can now be exported to a new FaceTra File that does not require tailoring.
- Blendshapes from the Adaptive File can now be optionally included.
- Deformers can be overriden per shape.
  - When a deformer is overriden in tailoring mode, a new "Restore from adaptive" button copies the position, rotation, distance, and curve from the tailored version.

#### Construction Pose

- You can now explicitly define base blendshapes that will serve as the rest pose of the face in the Construction Pose panel, located in the construction lines section.
- Deformations will now be applied relative to that Construction Pose.
- The Construction Pose does not necessarily have to be the blendshapes used for the stylization of the avatar, it only needs to be
  the blendshapes used at the time the contents of the FaceTra File is created.

#### Jaw Calibration

- In order to fix a design mistake in all versions of FaceTra prior to 0.9, this update introduces a new construction line called *Jaw Calibration*.
- The *Jaw Calibration* construction line is the blendshape that is going to be used as a base to select features inside the mouth,
  such as the Mouth Divider, Teeth, and Tongue.
- In previous versions, we used to use the same blendshape as the one used for the *JawOpen* shape. This is a problem, because this leads to all
  previous construction lines becoming incorrect as soon as you decide to customize the style of the JawOpen shape.
- In terms of migration:
  - This is not a breaking change. Old FaceTra files will continue to produce the same face as they used to.
  - New FaceTra files will use the new Jaw Calibration by default.
  - Old FaceTra files will not use the new Jaw Calibration. It must be manually enabled by the user.

#### New shape: NoseSneer Left/Right

A new shape has been added: NoseSneer Left/Right.

In VR, this is known to be supported by the Quest Pro headset.

If you choose to define NoseSneer using blendshapes, the left and right blendshapes are separate, and do not use any divider.

#### Other additions

- Upper teeth can now be included in the deformation of Jaw Open, Jaw Left/Right, and Jaw Forward.
- When applying the same FaceTra file on multiple avatars with distinct model files that share the same base (i.e. both avatars are Manuka),
  but the head of the two models have an offset (i.e. because the character wears high heels), the FaceTra Shape Creator component can
  now specify a corrective offset that will be applied to one of the avatars, in order to re-align the head.
  - Since this is set at the component level, this does not modify the contents of the FaceTra file data.
- Add new construction line "Eye Visualization". This construction line has no effect on the final result of the avatar,
  and is only used as a hint to determine which vertices are part of the eyelashes, so that the Eye Divider can show a preview
  before you define the shape later on.

### Fixes

- Fix remapping blendshape conventions should no longer generate incorrect names.
- Support cases where the skinned mesh has no Head bone.
- Support cases where the skinned mesh has no bone number 0 assigned to it.

### UI and Miscellaneous

- You can now hold the ALT key to preview one side of the face or both sides. This can be turned off in the component settings.
- Add a button to bake specifically to perform a VSFAvatar export.
- Gizmos are no longer shown when the component is not selected.
- Gizmos are now forced to be shown when entering Vertex selection.
- In the UI, "Pupil" has been renamed "Pupil and Iris". There is no change in specification, as it was always meant to be both.
- Make it possible to install the NDMF classes of FaceTra even if NDMF is not installed (i.e. for Resonite export).
- FaceTra Shape Creator has internally migrated to part of the codebase used in Starmesh.
- Uninitialized deformers are now ignored instead of causing a deformation.
- Performance improvement details:
  - In Edit mode, we will only create one blendshape per iteration (instead of three per open panel).
    - This is because creating blendshapes is an expensive operation, which entirely depends on the complexity of the existing blendshapes of the current avatar base model.
  - In Edit Mode, will keep a history of the last 60 iterations until the component becomes unselected or a build is triggered.
    - This avoids creating copies of the mesh, which is expensive.
  - Move the generation of the mesh in Edit mode to a dedicated update loop, as some of the previous update locations
    had the possibility of being executed multiple times per frame (i.e. multiple keystrokes since the last frame).
  - In Edit mode, generating meshes will be faster when the construction line panels are closed.
    - This is because there is no need to recalculate masks when construction lines are not changed.
  - Avoid repetitive mesh data access, like vertex count, bones, or bindposes.
  - Avoid repeating vector operations inside for loops.
  - In Edit mode and during builds, skip blendshape removal when not necessary.

## 0.8.0-2024-04-08-2020

### New Construction Line: [Blush Modifier Selection](/docs/products/facetra-shape-creator/construction-lines#optional-blush-modifier-selection)

Many avatars have blendshapes hidden inside the head to make the character blush.

However, when you squint, or when you puff your cheeks, these blush blendshapes will visibly clip through your face expressions.

To address this, Blush Modifier Selection is a new construction line, which can only be selected using blendshapes (it is not a traditional vertex selection).
It can be left empty.

When blendshapes are added to the Blush Modifier Selection, the blendshape will be simulated to be active, so that they will be moved by the following shapes:
- Cheek Squint
- Cheek Puff

Unfortunately, this will not work with all avatar bases. The density of the blush mesh needs to be similar (or half as similar) to the face mesh itself. If it's a gigantic polygon, it will not work so well.

<HaiVideo src="/docs/products/facetra-shape-creator/img/blush-facetra-f.mp4"></HaiVideo>

### Convert from Unified Expressions to ARKit

Functionality almost identical to [Prefabulous Convert Blendshape Conventions](/docs/products/prefabulous/universal/convert-blendshape-conventions) has been added natively to FaceTra Shape Creator, in the Output section.
This only affects blendshapes that FaceTra creates, and will not affect any other non-face tracking related blendshapes.
- Contrary to Prefabulous, the VRChat SDK is not required.
- This allows you to export blendshapes using the ARKit naming convention. It will still be a bit messy as FaceTra creates many more blendshapes than ARKit needs, such as left/right variants for blendshapes that do not have left/right variants in ARKit.
  - The blendshapes will only be converted when entering Play mode, or baking the avatar using NDMF, or preparing a Resonite bake using FaceTra. Edit mode will still display the blendshapes using the Unified Expressions naming convention.

## 0.7.0-2024-03-29-0903

### Major feature: Add [Tailoring](/docs/products/facetra-shape-creator/tailoring)

- Tailoring allows you to transfer a FaceTra file made for one avatar base, to a completely different avatar base.
- For example: Transfer from Karin to Lime, or transfer from Kikyo to Moe.
- Tailoring works by transferring deformations relative to the Construction Lines of the original avatar base, to the Construction Lines of your new avatar base.
  - The difference in size of the Construction Lines is taken into account. For example, when the width of the mouth differs greatly between the two avatar bases, the deformations will be scaled accordingly.
- When using Tailoring, you only need to specify the Construction Lines of your new avatar base, and the blendshapes of your new avatar base.
- This feature is experimental.

<HaiVideo src="/docs/products/facetra-shape-creator/img/tailoring/T5A5uJCB8L.mp4"></HaiVideo>

### Fix: Add workaround for small meshes
- Some meshes exported from Blender have an incorrect scale of 0.01 or similar.
- This triggers an internal conflict with Unity.
- Due to the nature of purchased avatars and reimporting models with different scale or coordinate system, it is preferable not ask the user to fix the export themselves.
- To fix this, if the Workaround for small meshes is enabled in Data Calibration, then:
  - We create a blendshape with a maximum weight of 10000 instead of the usual 100 (a hundred times larger).
  - The components (vertex, normal, tangent) are a hundred times larger.
  - This hundred times factor prevent the vertices from being discarded.
  - Since the controlling animators only animate blendshapes to the value of 100 (and even then, in the case of VRChat, it clamps to 100), the blendshapes are effectively at the expected weight at 100.

### Other fixes
- Unassigning the Face Mesh is now done by pressing a "×" button, so that the face tracking mesh is safely removed from the mesh.
- The user is warned if the model was imported with no normals or tangents, as this is not supported.

## 0.6.0-2024-01-18-0056

- If your model already has face tracking blendshapes, you can now reuse the those existing blendshapes to build new shapes.
  - Previously, using existing face tracking blendshapes was not supported as they were renamed before FaceTra creates its own blendshapes.

## 0.5.1-2024-01-13-1051

Try to fix an issue with direction vectors when the avatar has an offset:
- Direction vectors may have been miscalculated in avatars that have an offset.
- Direction vectors are now converted between spaces by converting the start and end position between spaces.


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