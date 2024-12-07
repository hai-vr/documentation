import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Paint New Bone

The *Starmesh Op. Paint New Bone* component creates a new bone, and repaints as many meshes of your choosing to that bone.

By default, the component will unpaint the vertices from other bones based on the weight of each vertex in that selection.

<HaiVideo src="../img/TGeXxK1Tnr.mp4"></HaiVideo>

## How to use

### Create the operator and selectors

- Add a *Starmesh Op. Paint New Bone* component on a new GameObject in your avatar.
- In the selectors of this component, add a *Starmesh Select Meshes*, or choose one that you already have.
    - Configure the *Select Meshes* selector so that it affects the relevant meshes.
- In the selectors of this component, add other selectors, for instance, a *Starmesh Select Point Radius*.

:::tip
You can add selectors as children of this GameObject.
:::

### Configure the operator

#### Set the bone

- Choose the transform of the new bone in the *Bone* field.

:::warning
Please note that many Unity applications (such as VRChat) cannot have more than 4 bones per vertex.
- Try not to paint in highly contentious areas.
- If there are more than 4 bones on a vertex, that vertex may unpaint itself from the weaker bones.
:::

### Test the operator

To test the new bone, you need to process the avatar.

#### VRChat

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Make sure your avatar has a valid VRCAvatarDescriptor component.

If you use *Avatar 3.0 Emulator*, initialize it in your scene, either now, or during Play mode.

Then, enter Play mode. This should create the bone.

#### Other apps

<HaiTags>
<HaiTag notVRChat={true} />
</HaiTags>

- If your app supports NDMF with Play mode, then set up your avatar so that it is a valid avatar for your app, and enter Play mode.
- If your app supports NDMF without Play mode, build your avatar in Edit mode.
- If your app does not support NDMF at all, select your avatar in the scene, and go to *Tools > NDM Framework > Manual bake avatar*.

### Advanced settings

#### Don't unpaint existing

By default, the new bone will be painted by proportionally stealing the weight from any existing bone that was previously painted to it.
This is so that the new bone has full control over the affected vertices.

If you want to keep the influences of the existing bones, check *Do Not Unpaint Existing*.

## Versions

- **1.6.0**: *Paint New Bone* is now processed differently to reduce painting and selection conflicts:
  - *Paint New Bone* is now processed after all shape deformation Operators are completed.
  - *Select Bones* will now collect all information necessary, before any *Paint New Bones* operators are applied.
- **1.0.0**: Added.
