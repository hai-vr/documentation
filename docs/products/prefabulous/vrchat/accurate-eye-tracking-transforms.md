---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# ⛔💬 Accurate Eye Tracking Transforms

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Adds a new FX layer that animate 4 custom eye transforms, X and Y being separate transforms, which will be almost as accurate as your hardware allows.

This can be used for creating a visual accessory on your avatar to visualize where you're looking at.

<HaiVideo src="../../../research/toe-tracking/img/lime-toetracking-f.mp4"></HaiVideo>

## How to use

To use this component:
- Add a "PA-VRC Accurate Eye Tracking Transforms" component anywhere in your avatar.
- You need to create transforms in your avatar following this hierarchy structure:
  - *...*
    - *(Head transform of the Avatar)*
      - **AccurateEyeTrackingTransforms**
        - **AccurateLeftEyeYaw**
          - **AccurateLeftEyePitch**
        - **AccurateRightEyeYaw**
          - **AccurateRightEyePitch**
- You don't have to use those names. 
- Make sure that the **AccurateLeftEyeYaw, AccurateLeftEyePitch, AccurateRightEyeYaw, AccurateRightEyePitch** transforms have a local rotation set to zero.
- Make sure that the **AccurateLeftEyePitch, AccurateRightEyePitch** transforms have a position set to zero.
- The **AccurateEyeTrackingTransforms** transform should be roughly located where your viewpoint is.
- The **AccurateLeftEyeYaw, AccurateRightEyeYaw** transform positions should be shifted left and right.
- You are free to use a [Modular Avatar Bone Proxy](https://modular-avatar.nadena.dev/docs/reference/bone-proxy) component to parent the **AccurateEyeTrackingTransforms** transform to your head.
- On the component, assign the *LeftEyeYaw, LeftEyePitch, RightEyeYaw, RightEyePitch* fields accordingly.
- By default, the component is configured to use [Adjerry91's VRCTraceTracking-Templates](https://github.com/Adjerry91/VRCFaceTracking-Templates) animators.
  - If you use a different face tracking animator template, change the *Vendor* to "Custom", and redefine the eye tracking parameters to match your own animator template (which may be smoothed).

## Versions

- **2.1.0**: Added.

Classification: *This component is **💬 VRChat Only**.*
