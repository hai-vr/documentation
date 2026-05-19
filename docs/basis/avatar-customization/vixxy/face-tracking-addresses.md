import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Face Tracking addresses

<HaiTags><HaiStartingFromTag version={"NEW_VIXXY_VERSION"} /></HaiTags>

The following addresses can be used in Vixxy.

Their behavior should match the [VRCFaceTracking documentation](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/parameters).

## Networking

All addresses use linear quantization on 1 byte over the available range, so they all have acceptable precision for face tracking purposes.

- For values that go between 0.0 and 1.0, the step is approximately 0.004, which is 0.4%.
- For values that go between -1.0 and 1.0, the step is approximately 0.008, which is 0.8%.
- The values of -1.0, 1.0, and 0.0 are guaranteed to stay the same after quantization.

If the hardware doesn't support some addresses, the unused addresses will not use any continuous network load.
Only addresses that change frequently take a continuous network load.

For example, if your face tracking hardware doesn't support the nose, but you specify the `FT/v2/NoseSneerLeft` address anyway on your avatar,
we will send the value of 0.0 for the nose once to other players, and then never again.

Similarly, if your avatar supports face tracking, but you do not have face tracking hardware plugged in, or you do not have the software running,
none of the addresses will use any continuous network load.

In other words, don't worry about networking.

## Addresses

- `FT/v2/BrowDownLeft`
- `FT/v2/BrowDownRight`
- `FT/v2/BrowInnerUp`
- `FT/v2/BrowInnerUpLeft`
- `FT/v2/BrowInnerUpRight`
- `FT/v2/BrowLowererLeft`
- `FT/v2/BrowLowererRight`
- `FT/v2/BrowOuterUpLeft`
- `FT/v2/BrowOuterUpRight`
- `FT/v2/BrowPinchLeft`
- `FT/v2/BrowPinchRight`
- `FT/v2/CheekPuffSuck`
- `FT/v2/CheekPuffSuckLeft`
- `FT/v2/CheekPuffSuckRight`
- `FT/v2/CheekSquintLeft`
- `FT/v2/CheekSquintRight`
- `FT/v2/EyeLeftX`
- `FT/v2/EyeLidLeft`
- `FT/v2/EyeLidRight`
- `FT/v2/EyeRightX`
- `FT/v2/EyeSquintLeft`
- `FT/v2/EyeSquintRight`
- `FT/v2/EyeY`
- `FT/v2/JawClench`
- `FT/v2/JawMandibleRaise`
- `FT/v2/JawOpen`
- `FT/v2/JawX`
- `FT/v2/JawZ`
- `FT/v2/LipFunnel`
- `FT/v2/LipFunnelLowerLeft`
- `FT/v2/LipFunnelLowerRight`
- `FT/v2/LipFunnelUpperLeft`
- `FT/v2/LipFunnelUpperRight`
- `FT/v2/LipPucker`
- `FT/v2/LipPuckerLowerLeft`
- `FT/v2/LipPuckerLowerRight`
- `FT/v2/LipPuckerUpperLeft`
- `FT/v2/LipPuckerUpperRight`
- `FT/v2/LipSuckCornerLeft`
- `FT/v2/LipSuckCornerRight`
- `FT/v2/LipSuckLower`
- `FT/v2/LipSuckLowerLeft`
- `FT/v2/LipSuckLowerRight`
- `FT/v2/LipSuckUpper`
- `FT/v2/LipSuckUpperLeft`
- `FT/v2/LipSuckUpperRight`
- `FT/v2/MouthClosed`
- `FT/v2/MouthCornerPullLeft`
- `FT/v2/MouthCornerPullRight`
- `FT/v2/MouthCornerSlantLeft`
- `FT/v2/MouthCornerSlantRight`
- `FT/v2/MouthDimpleLeft`
- `FT/v2/MouthDimpleRight`
- `FT/v2/MouthFrownLeft`
- `FT/v2/MouthFrownRight`
- `FT/v2/MouthLowerDownLeft`
- `FT/v2/MouthLowerDownRight`
- `FT/v2/MouthLowerX`
- `FT/v2/MouthPressLeft`
- `FT/v2/MouthPressRight`
- `FT/v2/MouthRaiserLower`
- `FT/v2/MouthRaiserUpper`
- `FT/v2/MouthSmileLeft`
- `FT/v2/MouthSmileRight`
- `FT/v2/MouthStretchLeft`
- `FT/v2/MouthStretchRight`
- `FT/v2/MouthTightenerLeft`
- `FT/v2/MouthTightenerRight`
- `FT/v2/MouthUpperDeepenLeft`
- `FT/v2/MouthUpperDeepenRight`
- `FT/v2/MouthUpperUpLeft`
- `FT/v2/MouthUpperUpRight`
- `FT/v2/MouthUpperX`
- `FT/v2/NasalConstrictLeft`
- `FT/v2/NasalConstrictRight`
- `FT/v2/NasalDilationLeft`
- `FT/v2/NasalDilationRight`
- `FT/v2/NeckFlexLeft`
- `FT/v2/NeckFlexRight`
- `FT/v2/NoseSneerLeft`
- `FT/v2/NoseSneerRight`
- `FT/v2/SoftPalateClose`
- `FT/v2/ThroatSwallow`
- `FT/v2/TongueArchY`
- `FT/v2/TongueOut`
- `FT/v2/TongueRoll`
- `FT/v2/TongueShape`
- `FT/v2/TongueTwistLeft`
- `FT/v2/TongueTwistRight`
- `FT/v2/TongueX`
- `FT/v2/TongueY`