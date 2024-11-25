import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# HaiXT Generate Blendshapes for Face Tracking Extensions

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

If you have an avatar that already supports face tracking, this will generate additional non-standard blendshapes for use with [HaiXT Face Tracking Extensions](../vrchat/haixt-face-tracking-extensions).

When your eyes are closed, the shape of your eyes will change when you're smiling.

<HaiVideo src="../img/smile-f.mp4"></HaiVideo>

:::warning
If you use FaceTra Shape Creator, you do not need this component as this feature already exists within FaceTra Shape Creator.

However, on the VRChat platform, you will still need the [HaiXT Face Tracking Extensions](../vrchat/haixt-face-tracking-extensions) component.
:::

## How to use

To use this component:

- Add a "PA HaiXT Generate Blendshapes for Face Tracking Extensions" component anywhere in your avatar.
- Choose which blendshapes close the eyes with a smiling shape.

On the VRChat platform, you will need to add a [HaiXT Face Tracking Extensions](../vrchat/haixt-face-tracking-extensions) component to create the animator layers.

<HaiVideo src="../img/yMoiPf8x3S.mp4" autoWidth={true}></HaiVideo>

## Versions

- **1.5.0**: Added.

Classification: *This component is application-agnostic.*
