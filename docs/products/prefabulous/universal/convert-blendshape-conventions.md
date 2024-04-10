import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Convert Blendshape Conventions

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

Copies blendshapes from one naming convention to another naming convention.

![Unity_Kwht5QWD83.png](..%2Fimg%2FUnity_Kwht5QWD83.png)

## How to use

This component will copy existing blendshapes and gives them new names.

You can use this if you need to convert a lot of blendshapes from one naming convention to another naming convention.

For instance, you can convert [Unified Expressions](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/unified-blendshapes) blendshapes into [ARKit](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/arkit) blendshapes. 

This process does not overwrite blendshapes that already exist.

To use this component:
- Add a "PA-H Convert Blendshape Conventions" component anywhere in your avatar.
- In the "Key Value Mapping" field, in each line, provide two blendshape names separated with the character of your choice.
- In the "Key Value Separator", specify the character of your choice.
  - Press the "Use TAB as separator" if you are using TAB-separated values.
- By default, the left side will be the name to copy, and the right-hand side will be the name to write to.
  - You can reverse this using the "Reverse" checkbox.

## Example: Convert Unified Expressions to ARKit

The following list is a copy of the blendshape table located in [VRCFaceTracking's ARKit documentation](https://docs.vrcft.io/docs/tutorial-avatars/tutorial-avatars-extras/compatibility/arkit).

This allows you to convert Unified Expressions blendshapes to ARKit blendshapes, or inversely if you use the "Reverse" checkbox.

- Key Value Separator: `=`
- Key Value Mapping:

```ini
EyeLookUpRight=eyeLookUpRight
EyeLookDownRight=eyeLookDownRight
EyeLookInRight=eyeLookInRight
EyeLookOutRight=eyeLookOutRight
EyeLookUpLeft=eyeLookUpLeft
EyeLookDownLeft=eyeLookDownLeft
EyeLookInLeft=eyeLookInLeft
EyeLookOutLeft=eyeLookOutLeft
EyeClosedRight=eyeBlinkRight
EyeClosedLeft=eyeBlinkLeft
EyeSquintRight=eyeSquintRight
EyeSquintLeft=eyeSquintLeft
EyeWideRight=eyeWideRight
EyeWideLeft=eyeWideLeft
BrowDownRight=browDownRight
BrowDownLeft=browDownLeft
BrowInnerUp=browInnerUp
BrowOuterUpRight=browOuterUpRight
BrowOuterUpLeft=browOuterUpLeft
NoseSneerRight=noseSneerRight
NoseSneerLeft=noseSneerLeft
CheekSquintRight=cheekSquintRight
CheekSquintLeft=cheekSquintLeft
CheekPuff=cheekPuff
JawOpen=jawOpen
MouthClosed=mouthClose
JawRight=jawRight
JawLeft=jawLeft
JawForward=jawForward
LipSuckUpper=mouthRollUpper
LipSuckLower=mouthRollLower
LipFunnel=mouthFunnel
LipPucker=mouthPucker
MouthUpperUpRight=mouthUpperUpRight
MouthUpperUpLeft=mouthUpperUpLeft
MouthLowerDownRight=mouthLowerUpRight
MouthLowerDownLeft=mouthLowerUpLeft
MouthSmileRight=mouthSmileRight
MouthSmileLeft=mouthSmileLeft
MouthFrownRight=mouthFrownRight
MouthFrownLeft=mouthFrownLeft
MouthStretchRight=mouthStretchRight
MouthStretchLeft=mouthStretchLeft
MouthDimpleRight=mouthDimpleRight
MouthDimpleLeft=mouthDimpleLeft
MouthRaiserUpper=mouthShrugUpper
MouthRaiserLower=mouthShrugLower
MouthPressRight=mouthPressRight
MouthPressLeft=mouthPressLeft
TongueOut=tongueOut
```

## Versions

- **1.10.0**: Added.

Classification: *This component is application-agnostic.*