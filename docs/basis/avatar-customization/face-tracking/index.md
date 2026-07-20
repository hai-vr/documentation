---
sidebar_position: 20
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

# Face tracking

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

If your avatar has blendshapes designed for face tracking, you need to add a component for Basis to recognize them. 

This requires the [VRCFaceTracking software](https://docs.vrcft.io/). This guide assumes you're already familiar with VRCFaceTracking and your own hardware.

## Set up your avatar

To set up your avatar:

- Create a new GameObject inside your avatar. Give it a name of your choice, like *FaceTracking*.
- Add the **Automatic Face Tracking** component.
- In the inspector of the *Automatic Face Tracking* component, press the *"Create VRCFaceTracking JSON file"* button.

<HaiVideo src="./img/ShWakJTG9n.mp4" halfWidth={true}></HaiVideo>

When you added the *Automatic Face Tracking* component, it should have added a prefab in your avatar called *HVR.Networking*.
This component is responsible for the network communication of your avatar. Keep this prefab at the root.

The setup is complete. *Automatic Face Tracking* will detect all meshes on the avatar that have face tracking blendshapes
which follow either the [*Unified Expressions*](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes), *ARKit*, or *SRAnipal* naming conventions.

:::danger
The face tracking implementation does not use the Animator system. **Do not use face tracking animator templates designed for VRC**,
they won't do anything and might even interfere.
:::

## Testing

To test your avatar before building it:

- *Make sure you don't have any other social VR application currently running, as other apps may capture the face tracking data.*
- Start VRCFaceTracking.
- Enter Play Mode, and in the *Basis Avatar* component at the root of your avatar, press the **Test in Editor** button.
- If everything worked, the VRCFaceTracking software should now say that it detected an avatar called *HVR.Basis Fake Client*.
- Wear your headset and look at your own avatar's face, see how it moves.

When you load into your avatar, the following thing will happen:
- Basis will create an OSC server on port 9000 and then send a message to port 9001 (where VRCFaceTracking is running),
  telling it that the avatar has changed. Old versions of VRCFaceTracking will react to that message.
- We will also start a fake OSCQuery server on a random port. The Steam version of VRCFaceTracking will detect this OSCQuery server.
- VRCFaceTracking will start to communicate with Basis by sending face tracking parameters.
- You should see the following in the VRCFaceTracking window if this is successful:
![basisfakeclient.png](/assets/docs/basis/avatar-customization/basisfakeclient.png)

Then in the scene view, look at your own avatar's face, see how it moves.

## Technical specifications

We support [most of the addresses](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters). EyeY is used instead of EyeLeftY and EyeRightY.

All addresses are transmitted using 1 byte per address.

Linear quantization is used on the available range, so they all have acceptable precision for face tracking purposes.

- For values that go between 0.0 and 1.0, the step is approximately 0.004, which is 0.4%.
- For values that go between -1.0 and 1.0, the step is approximately 0.008, which is 0.8%.
- The values of -1.0, 1.0, and 0.0 are guaranteed to stay the same after quantization.

If the connected hardware doesn't support an address, networking is not consumed by that address. <HaiStartingFromTag version={"21st of May 2026"} small={true} />

Face tracking is interpolated by default for remote users.