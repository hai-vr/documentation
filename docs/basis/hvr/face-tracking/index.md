import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Face Tracking in Basis

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

There is a rudimentary implementation of face tracking avatars in Basis, which I have made to help dooly test out avatar networking packet
communications using a real scenario.

Face Tracking in this implementation is done through a package, rather than through Basis' core source.

It requires the use of VRCFaceTracking, because it's the quickest way to get something working that existing face tracking users may
already have set up on their machine.

## Prepare VRCFaceTracking

To set up face tracking, we need to put a fake OSC file that VRCFaceTracking will read when loading your Basis avatar.
- Download [this JSON file](pathname:///assets/basis-hvr/avtr_00000000-d7dc-4a90-ab09-000000000000.json) (*Right-click > Save link as...*)
- Put this file in the following folder:
  - `C:\Users\<your_user>\AppData\LocalLow\VRChat\vrchat\OSC\usr_<any_vrc_user>\Avatars\`
  - The name of the JSON file must be `avtr_00000000-d7dc-4a90-ab09-000000000000.json`
  
## Set up your avatar

<HaiVideo src="./img/mpVLTgE5UD-trimmed.mp4"></HaiVideo>

:::danger
The face tracking implementation **does not use the Animator system**; do not use face tracking templates designed for VRC,
they won't do anything and might even interfere with the operation.
:::

- Create a new GameObject inside your avatar. Give it a name of your choice, like *FaceTracking*.
- Add the **Blendshape Actuation** component. This will drive the blendshapes of your avatar.
  - Set *Renderers* to the mesh that contains the face tracking blendshapes.
  - Set *Definition File* to either:
    - `FaceTracking-UnifiedExpressions-Simple` if your avatar uses the Unified Expressions blendshape naming convention, or
    - `FaceTracking-ARKit-Simple` if your avatar uses the ARKit blendshape naming convention.

:::warning
If you can't find the file in the project, set the filter to **Packages**.
<HaiVideo src="./img/Unity_VuR5mvNdoH.mp4" autoWidth="{false}"></HaiVideo>
:::

- If you use eye tracking, add the **Eye Tracking Bone Actuation** component.
  - By default, the multiplier value of 1 will rotate the eye bone to match the direction your eyes are looking.
  - You may choose to increase the multiplier if you want a more exaggerated eye look direction. A value of `1.25` will cause a 10deg angle to become 12.5deg.
- Add the **OSC Acquisition** component. This will enable some rudimentary form of OSC communication.
- Finally, in the root of your avatar, add the **Feature Networking** component.

## Testing

:::note
Sorry, there is no guide to test the avatar in the scene without uploading at the moment.

There used to be a way to test, but I don't have up-to-date info right now
as things have changed on the most recent version of Basis.

You'll have to build your avatar for now to test it.
:::

After building and uploading your avatar somewhere:
- Start the VRCFaceTracking app on your machine,
- then start Basis in-editor (using the initialization scene, you may have to refer to the Basis Discord on how to test Basis in general),
- then connect to the server.

When you load into your avatar, the following thing will happen:
- Basis will create an OSC server on port 9000 and then send a message to port 9001 (where VRCFaceTracking is running),
  telling it that the avatar has changed.
- VRCFaceTracking will start to communicate with Basis by sending face tracking parameters.
- You should see the following in the VRCFaceTracking window if this is successful:
![mpc-hc64_bco7oRlmDK.png](img%2Fmpc-hc64_bco7oRlmDK.png)

Then in the scene view, look at your own avatar's face, see how it moves.

Note that in the current implementation, face tracking is not smoothed locally, but it is interpolated on remote users.
Face tracking data is sent to other users 10 times per second (snapshot taken every 0.1 second).
