---
sidebar_position: 40
---

import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

# Measure

<HaiTags>
<HaiTag requiresBasis={true} />
<HaiStartingFromTag version={"21st of May 2026"} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} />

The **HVR Measure** component can be used to measure things on the avatar. The resulting values may be used to trigger effects
on your avatar using [Vixxy](/docs/basis/avatar-customization/vixxy).

## Measurement types

Add a *HVR Measure* component on your avatar. The location of that *HVR Measure* component in your hierarchy does not matter.

We offer the following measurement types:

- **Distance**: Measures the distance between two objects.
- **Angle**: Measures the angle between three objects.
- **Rotation Difference**: Measures the difference in the rotation of two objects.

[//]: # (- ~~**Speed**: Measures the movement speed of an object.~~)

[//]: # (- ~~**Raycast**: Measures the raycast distance to a collider~~.)

*Additional measurement types may be available in the future, such as Speed and Raycast.*

Most measurement types can also calculate the rate of change over time, such as the Angle rate of change, or the Distance rate of change between two objects.

The result will be written to the address of your choice by checking the corresponding checkbox in the *Output* section.

## Distance

When the measurement type is set to *Distance*, we measure the distance between *Source* and *Target*.

By default, measurements are done in avatar space, so that the measurement scales with your avatar.
For example, a measurement that depends on your arm length will result in the same value regardless of the avatar scale.

## Measuring angles

There are two ways to measure angles: **Angle**, and **Rotation Difference**. The *Angle* option is probably easier to understand and to use,
but the *Rotation Difference* option can measure something that *Angle* cannot, should the need arise.

### Angle

When the measurement type is set to *Angle*:

*Angle* takes the position of three objects *Origin, Target A, Target B*, and measures the angle formed by Origin-Target A and Origin-Target B.

The result will be given in degrees, so use [Convert Range](#convert-range) options.

:::tip
You can measure the angle of the leg by setting *Origin* to the lower leg bone, *Target A* to the upper leg bone, and *Target B* to the foot bone.
:::

### Rotation Difference

When the measurement type is set to *Rotation Difference*:

*Rotation Difference* takes the absolute rotation of two objects and measures the angle difference between them. The positions of those two objects don't matter.

*Rotation Difference* has a *Roll* option:
- When *Include Roll* is selected, the rotation in all directions matters.
- When *Do Not Include Roll* is selected, the angle is measured by the difference in the forward vector (the blue arrow) of each object.

The result will be given in degrees, so use [Convert Range](#convert-range) options.

[//]: # (## Speed)

[//]: # ()
[//]: # (:::danger)

[//]: # (This option is not currently available.)

[//]: # (:::)

[//]: # ()
[//]: # (*Speed* measures the speed of the *Source* object.)

[//]: # ()
[//]: # (The *Speed Measurement* lets you constrain the measurement to a plane or an axis.)

[//]: # (- *Three Dimensional* measures the speed in three dimensions.)

[//]: # (- *Project On Plane 2D* measures the speed in the two dimensions. This can be used to exclude an axis, such as the vertical axis to ignore jumps.)

[//]: # (- *Project On Line 1D* measures the speed in one dimension. This can be used to only include one axis, such as the vertical axis to only measure jumps.)

[//]: # ()
[//]: # (By definition, speed is never negative.)

[//]: # ()
[//]: # (## Raycast)

[//]: # ()
[//]: # (:::danger)

[//]: # (This option is not currently available.)

[//]: # (:::)

## Convert range

The measured value can be converted from the input range to the output range. This can be used to define a minimum and maximum distance or angle.

When using an *Angle* measurement, it is strongly recommended to make use of the *Convert range* function to convert from degrees down to a usable range.

For example, in the case of an *Angle* measurement, converting from (30, 180) to (0, 1) will make the angle of
30 degrees output 0.0, and the angle of 180 degrees output 1.0. The angle of 105 degrees, which is halfway between 30 degrees and 180 degrees, will be 0.5.

The *Clamp to bounds* checkbox limits the output range to that specific range. Taking the same example as above, an angle of 0 degrees would become 0.0 when *Clamp to bounds* is checked,
or an angle of 0 degrees would become -0.2 when *Clamp to bounds* is unchecked.

## Connecting to Vixxy Control

The measurement can be used to trigger effects on your avatar using **[Vixxy](/docs/basis/avatar-customization/vixxy)**.

After configuring the *Measure* component, go to the **Vixxy Control** component and press the *Select...* button.
The address will be available in the *Measurements* category.
