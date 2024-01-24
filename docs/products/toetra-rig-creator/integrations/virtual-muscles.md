---
sidebar_position: 3
---

# Virtual muscles

:::danger
This tool is currently not available, and this documentation is currently being written.
:::

The default angle of toe bones are determined by the relative position of the joints and tip during rigging, therefore they're different for each avatar.

In order to facilitate animation of the toe bones using a common base, the tool will expose virtual muscles through which you can control the angle of the toes
as if they were muscles, where 0 represents the neutral pose.

:::warning
These parameters are for the purposes of reusing animation files across different avatars and different armature hierarchies.

**These are not OSC parameter routes.** For OSC routes, see [Metatarsal Input](./toe-tracking).
:::

## Absolute rotations

:::danger
This is a work in progress.
:::

### Pitch (Up/Down)

Range:
- 1 is 180 degrees in the curling direction (down).
- 0 is the rest pose at 0 degrees.
- -1 is 180 degrees in the lifting direction (up).

Parameters:
- `HaiToeTraV1/Animation/Left/1_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Left/1_Proximal_UpDown`
- `HaiToeTraV1/Animation/Left/1_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Left/1_Distal_UpDown`
- `HaiToeTraV1/Animation/Left/2_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Left/2_Proximal_UpDown`
- `HaiToeTraV1/Animation/Left/2_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Left/2_Distal_UpDown`
- `HaiToeTraV1/Animation/Left/3_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Left/3_Proximal_UpDown`
- `HaiToeTraV1/Animation/Left/3_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Left/3_Distal_UpDown`
- `HaiToeTraV1/Animation/Left/4_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Left/4_Proximal_UpDown`
- `HaiToeTraV1/Animation/Left/4_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Left/4_Distal_UpDown`
- `HaiToeTraV1/Animation/Left/5_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Left/5_Proximal_UpDown`
- `HaiToeTraV1/Animation/Left/5_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Left/5_Distal_UpDown`
- `HaiToeTraV1/Animation/Right/1_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Right/1_Proximal_UpDown`
- `HaiToeTraV1/Animation/Right/1_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Right/1_Distal_UpDown`
- `HaiToeTraV1/Animation/Right/2_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Right/2_Proximal_UpDown`
- `HaiToeTraV1/Animation/Right/2_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Right/2_Distal_UpDown`
- `HaiToeTraV1/Animation/Right/3_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Right/3_Proximal_UpDown`
- `HaiToeTraV1/Animation/Right/3_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Right/3_Distal_UpDown`
- `HaiToeTraV1/Animation/Right/4_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Right/4_Proximal_UpDown`
- `HaiToeTraV1/Animation/Right/4_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Right/4_Distal_UpDown`
- `HaiToeTraV1/Animation/Right/5_Metatarsal_UpDown`
- `HaiToeTraV1/Animation/Right/5_Proximal_UpDown`
- `HaiToeTraV1/Animation/Right/5_Intermediate_UpDown`
- `HaiToeTraV1/Animation/Right/5_Distal_UpDown`

### Chiral Yaw (In/Out)

Range:
- 1 is 180 degrees in the outwards direction (towards your head when looking down).
    - On the left foot, it aims the toes to the left.
    - On the right foot, it aims the toes to the right.
- 0 is the rest pose at 0 degrees.
- -1 is 180 degrees in the inwards direction (away from your head when looking down).
    - On the left foot, it aims the toes to the right.
    - On the right foot, it aims the toes to the left.

Parameters:
- `HaiToeTraV1/Animation/Left/1_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Left/1_Proximal_InOut`
- `HaiToeTraV1/Animation/Left/1_Intermediate_InOut`
- `HaiToeTraV1/Animation/Left/1_Distal_InOut`
- `HaiToeTraV1/Animation/Left/2_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Left/2_Proximal_InOut`
- `HaiToeTraV1/Animation/Left/2_Intermediate_InOut`
- `HaiToeTraV1/Animation/Left/2_Distal_InOut`
- `HaiToeTraV1/Animation/Left/3_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Left/3_Proximal_InOut`
- `HaiToeTraV1/Animation/Left/3_Intermediate_InOut`
- `HaiToeTraV1/Animation/Left/3_Distal_InOut`
- `HaiToeTraV1/Animation/Left/4_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Left/4_Proximal_InOut`
- `HaiToeTraV1/Animation/Left/4_Intermediate_InOut`
- `HaiToeTraV1/Animation/Left/4_Distal_InOut`
- `HaiToeTraV1/Animation/Left/5_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Left/5_Proximal_InOut`
- `HaiToeTraV1/Animation/Left/5_Intermediate_InOut`
- `HaiToeTraV1/Animation/Left/5_Distal_InOut`
- `HaiToeTraV1/Animation/Right/1_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Right/1_Proximal_InOut`
- `HaiToeTraV1/Animation/Right/1_Intermediate_InOut`
- `HaiToeTraV1/Animation/Right/1_Distal_InOut`
- `HaiToeTraV1/Animation/Right/2_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Right/2_Proximal_InOut`
- `HaiToeTraV1/Animation/Right/2_Intermediate_InOut`
- `HaiToeTraV1/Animation/Right/2_Distal_InOut`
- `HaiToeTraV1/Animation/Right/3_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Right/3_Proximal_InOut`
- `HaiToeTraV1/Animation/Right/3_Intermediate_InOut`
- `HaiToeTraV1/Animation/Right/3_Distal_InOut`
- `HaiToeTraV1/Animation/Right/4_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Right/4_Proximal_InOut`
- `HaiToeTraV1/Animation/Right/4_Intermediate_InOut`
- `HaiToeTraV1/Animation/Right/4_Distal_InOut`
- `HaiToeTraV1/Animation/Right/5_Metatarsal_InOut`
- `HaiToeTraV1/Animation/Right/5_Proximal_InOut`
- `HaiToeTraV1/Animation/Right/5_Intermediate_InOut`
- `HaiToeTraV1/Animation/Right/5_Distal_InOut`

### Chiral Roll (Twist)

:::danger
Due to technical limitations, animating the toe roll is not supported.
:::

[//]: # (Range for the left foot:)

[//]: # (- 1 is 180 degrees counter-clockwise on the left foot, when looking down with the feet pointing down.)
[//]: # (- 0 is the rest pose at 0 degrees.)
[//]: # (- -1 is 180 degrees clockwise on the left foot, when looking down with the feet pointing down.)

[//]: # ()
[//]: # (Range for the right foot:)

[//]: # (- 1 is 180 degrees clockwise on the right foot, when looking down with the feet pointing down.)
[//]: # (- 0 is the rest pose at 0 degrees.)
[//]: # (- -1 is 180 degrees counter-clockwise on the right foot, when looking down with the feet pointing down.)

Parameters:
- `HaiToeTraV1/Animation/Left/1_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Left/1_Proximal_Twist`
- `HaiToeTraV1/Animation/Left/1_Intermediate_Twist`
- `HaiToeTraV1/Animation/Left/1_Distal_Twist`
- `HaiToeTraV1/Animation/Left/2_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Left/2_Proximal_Twist`
- `HaiToeTraV1/Animation/Left/2_Intermediate_Twist`
- `HaiToeTraV1/Animation/Left/2_Distal_Twist`
- `HaiToeTraV1/Animation/Left/3_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Left/3_Proximal_Twist`
- `HaiToeTraV1/Animation/Left/3_Intermediate_Twist`
- `HaiToeTraV1/Animation/Left/3_Distal_Twist`
- `HaiToeTraV1/Animation/Left/4_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Left/4_Proximal_Twist`
- `HaiToeTraV1/Animation/Left/4_Intermediate_Twist`
- `HaiToeTraV1/Animation/Left/4_Distal_Twist`
- `HaiToeTraV1/Animation/Left/5_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Left/5_Proximal_Twist`
- `HaiToeTraV1/Animation/Left/5_Intermediate_Twist`
- `HaiToeTraV1/Animation/Left/5_Distal_Twist`
- `HaiToeTraV1/Animation/Right/1_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Right/1_Proximal_Twist`
- `HaiToeTraV1/Animation/Right/1_Intermediate_Twist`
- `HaiToeTraV1/Animation/Right/1_Distal_Twist`
- `HaiToeTraV1/Animation/Right/2_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Right/2_Proximal_Twist`
- `HaiToeTraV1/Animation/Right/2_Intermediate_Twist`
- `HaiToeTraV1/Animation/Right/2_Distal_Twist`
- `HaiToeTraV1/Animation/Right/3_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Right/3_Proximal_Twist`
- `HaiToeTraV1/Animation/Right/3_Intermediate_Twist`
- `HaiToeTraV1/Animation/Right/3_Distal_Twist`
- `HaiToeTraV1/Animation/Right/4_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Right/4_Proximal_Twist`
- `HaiToeTraV1/Animation/Right/4_Intermediate_Twist`
- `HaiToeTraV1/Animation/Right/4_Distal_Twist`
- `HaiToeTraV1/Animation/Right/5_Metatarsal_Twist`
- `HaiToeTraV1/Animation/Right/5_Proximal_Twist`
- `HaiToeTraV1/Animation/Right/5_Intermediate_Twist`
- `HaiToeTraV1/Animation/Right/5_Distal_Twist`
