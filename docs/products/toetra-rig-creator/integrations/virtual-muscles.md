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

### Pitch

Range:
- 1 is 180 degrees in the curling direction.
- 0 is the rest pose at 0 degrees.
- -1 is 180 degrees in the lifting direction.

Parameters:
- `HaiToeTraV1/Animation/Left/1_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Left/1_Proximal_Pitch`
- `HaiToeTraV1/Animation/Left/1_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Left/1_Distal_Pitch`
- `HaiToeTraV1/Animation/Left/2_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Left/2_Proximal_Pitch`
- `HaiToeTraV1/Animation/Left/2_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Left/2_Distal_Pitch`
- `HaiToeTraV1/Animation/Left/3_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Left/3_Proximal_Pitch`
- `HaiToeTraV1/Animation/Left/3_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Left/3_Distal_Pitch`
- `HaiToeTraV1/Animation/Left/4_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Left/4_Proximal_Pitch`
- `HaiToeTraV1/Animation/Left/4_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Left/4_Distal_Pitch`
- `HaiToeTraV1/Animation/Left/5_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Left/5_Proximal_Pitch`
- `HaiToeTraV1/Animation/Left/5_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Left/5_Distal_Pitch`
- `HaiToeTraV1/Animation/Right/1_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Right/1_Proximal_Pitch`
- `HaiToeTraV1/Animation/Right/1_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Right/1_Distal_Pitch`
- `HaiToeTraV1/Animation/Right/2_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Right/2_Proximal_Pitch`
- `HaiToeTraV1/Animation/Right/2_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Right/2_Distal_Pitch`
- `HaiToeTraV1/Animation/Right/3_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Right/3_Proximal_Pitch`
- `HaiToeTraV1/Animation/Right/3_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Right/3_Distal_Pitch`
- `HaiToeTraV1/Animation/Right/4_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Right/4_Proximal_Pitch`
- `HaiToeTraV1/Animation/Right/4_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Right/4_Distal_Pitch`
- `HaiToeTraV1/Animation/Right/5_Metatarsal_Pitch`
- `HaiToeTraV1/Animation/Right/5_Proximal_Pitch`
- `HaiToeTraV1/Animation/Right/5_Intermediate_Pitch`
- `HaiToeTraV1/Animation/Right/5_Distal_Pitch`

### Yaw

Range:
- 1 is 180 degrees in the inwards direction (towards your head when looking down).
- 0 is the rest pose at 0 degrees.
- -1 is 180 degrees in the outwards direction (away from your head when looking down).

Parameters:
- `HaiToeTraV1/Animation/Left/1_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Left/1_Proximal_Yaw`
- `HaiToeTraV1/Animation/Left/1_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Left/1_Distal_Yaw`
- `HaiToeTraV1/Animation/Left/2_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Left/2_Proximal_Yaw`
- `HaiToeTraV1/Animation/Left/2_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Left/2_Distal_Yaw`
- `HaiToeTraV1/Animation/Left/3_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Left/3_Proximal_Yaw`
- `HaiToeTraV1/Animation/Left/3_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Left/3_Distal_Yaw`
- `HaiToeTraV1/Animation/Left/4_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Left/4_Proximal_Yaw`
- `HaiToeTraV1/Animation/Left/4_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Left/4_Distal_Yaw`
- `HaiToeTraV1/Animation/Left/5_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Left/5_Proximal_Yaw`
- `HaiToeTraV1/Animation/Left/5_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Left/5_Distal_Yaw`
- `HaiToeTraV1/Animation/Right/1_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Right/1_Proximal_Yaw`
- `HaiToeTraV1/Animation/Right/1_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Right/1_Distal_Yaw`
- `HaiToeTraV1/Animation/Right/2_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Right/2_Proximal_Yaw`
- `HaiToeTraV1/Animation/Right/2_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Right/2_Distal_Yaw`
- `HaiToeTraV1/Animation/Right/3_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Right/3_Proximal_Yaw`
- `HaiToeTraV1/Animation/Right/3_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Right/3_Distal_Yaw`
- `HaiToeTraV1/Animation/Right/4_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Right/4_Proximal_Yaw`
- `HaiToeTraV1/Animation/Right/4_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Right/4_Distal_Yaw`
- `HaiToeTraV1/Animation/Right/5_Metatarsal_Yaw`
- `HaiToeTraV1/Animation/Right/5_Proximal_Yaw`
- `HaiToeTraV1/Animation/Right/5_Intermediate_Yaw`
- `HaiToeTraV1/Animation/Right/5_Distal_Yaw`

### Roll

Range for the left foot:
- 1 is 180 degrees counter-clockwise on the left foot, when looking down with the feet pointing down.
- 0 is the rest pose at 0 degrees.
- -1 is 180 degrees clockwise on the left foot, when looking down with the feet pointing down.

Range for the right foot:
- 1 is 180 degrees clockwise on the right foot, when looking down with the feet pointing down.
- 0 is the rest pose at 0 degrees.
- -1 is 180 degrees counter-clockwise on the right foot, when looking down with the feet pointing down.

Parameters:
- `HaiToeTraV1/Animation/Left/1_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Left/1_Proximal_Roll`
- `HaiToeTraV1/Animation/Left/1_Intermediate_Roll`
- `HaiToeTraV1/Animation/Left/1_Distal_Roll`
- `HaiToeTraV1/Animation/Left/2_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Left/2_Proximal_Roll`
- `HaiToeTraV1/Animation/Left/2_Intermediate_Roll`
- `HaiToeTraV1/Animation/Left/2_Distal_Roll`
- `HaiToeTraV1/Animation/Left/3_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Left/3_Proximal_Roll`
- `HaiToeTraV1/Animation/Left/3_Intermediate_Roll`
- `HaiToeTraV1/Animation/Left/3_Distal_Roll`
- `HaiToeTraV1/Animation/Left/4_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Left/4_Proximal_Roll`
- `HaiToeTraV1/Animation/Left/4_Intermediate_Roll`
- `HaiToeTraV1/Animation/Left/4_Distal_Roll`
- `HaiToeTraV1/Animation/Left/5_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Left/5_Proximal_Roll`
- `HaiToeTraV1/Animation/Left/5_Intermediate_Roll`
- `HaiToeTraV1/Animation/Left/5_Distal_Roll`
- `HaiToeTraV1/Animation/Right/1_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Right/1_Proximal_Roll`
- `HaiToeTraV1/Animation/Right/1_Intermediate_Roll`
- `HaiToeTraV1/Animation/Right/1_Distal_Roll`
- `HaiToeTraV1/Animation/Right/2_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Right/2_Proximal_Roll`
- `HaiToeTraV1/Animation/Right/2_Intermediate_Roll`
- `HaiToeTraV1/Animation/Right/2_Distal_Roll`
- `HaiToeTraV1/Animation/Right/3_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Right/3_Proximal_Roll`
- `HaiToeTraV1/Animation/Right/3_Intermediate_Roll`
- `HaiToeTraV1/Animation/Right/3_Distal_Roll`
- `HaiToeTraV1/Animation/Right/4_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Right/4_Proximal_Roll`
- `HaiToeTraV1/Animation/Right/4_Intermediate_Roll`
- `HaiToeTraV1/Animation/Right/4_Distal_Roll`
- `HaiToeTraV1/Animation/Right/5_Metatarsal_Roll`
- `HaiToeTraV1/Animation/Right/5_Proximal_Roll`
- `HaiToeTraV1/Animation/Right/5_Intermediate_Roll`
- `HaiToeTraV1/Animation/Right/5_Distal_Roll`
