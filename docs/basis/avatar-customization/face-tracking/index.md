---
sidebar_position: 20
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Face tracking

<HaiTags>
<HaiTag requiresBasis={true} />
</HaiTags>

There is a rudimentary implementation of face tracking avatars in Basis, which I have made to help dooly test out avatar networking packet
communications using a real scenario.

This requires the VRCFaceTracking software.

This guide assumes you're already familiar with VRCFaceTracking and your own hardware.

## Set up your avatar

<HaiVideo src="./img/ShWakJTG9n.mp4" halfWidth={true}></HaiVideo>

To set up your avatar:

- Create a new GameObject inside your avatar. Give it a name of your choice, like *FaceTracking*.
- Add the **Automatic Face Tracking** component.
- In the inspector of the *Automatic Face Tracking* component, press the *"Create VRCFaceTracking JSON file"* button.

When you added the Automatic Face Tracking component, it should have added a prefab in your avatar called *HVR.Networking*.
This component is responsible for the network communication of your avatar. Keep this prefab at the root.

:::warning
If you have used previous versions of Face Tracking on Basis, you **need** to press this button anyway.
:::

:::danger
The face tracking implementation does not use the Animator system.

**Do not use face tracking animator templates designed for VRC**, they won't do anything and might even interfere with
the operation as the execution order is not explicitly defined.

Face tracking is interpolated by default for remote users (≈ smoothed).
:::

## Testing

To test your avatar before building it:

- Start VRCFaceTracking.
- Enter Play Mode, and in the *Basis Avatar* component at the root of your avatar, press the **Test in Editor** button.
- If everything worked, the VRCFaceTracking software should now say that it detected an avatar called *HVR.Basis Fake Client*.
- Wear your headset and look at your own avatar's face, see how it moves.

When you load into your avatar, the following thing will happen:
- Basis will create an OSC server on port 9000 and then send a message to port 9001 (where VRCFaceTracking is running),
  telling it that the avatar has changed.
- VRCFaceTracking will start to communicate with Basis by sending face tracking parameters.
- You should see the following in the VRCFaceTracking window if this is successful:
![mpc-hc64_bco7oRlmDK.png](img%2Fmpc-hc64_bco7oRlmDK.png)

Then in the scene view, look at your own avatar's face, see how it moves.
