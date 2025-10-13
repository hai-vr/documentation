# IK

## Options

The *HIK Effectors* component has options that can change the behavior of the solver:

### Hip Position Matters More

- (defaults to false)
- When true, ensures that the hip position is always reached. The head may not longer be aligned with the HMD when it is too far from it.
- When false, ensures that the head position is always reached, even if it means moving the hips away from its effector.
  This is designed to make sure that the head is always attached to the HMD.

### Contortionist

- (defaults to false)
- When true, removes the minimum distance limit between the head and the hips.
- When false, there is a minimum distance between the head and the hips, which depends on the head angle.
  This is designed to avoid odd looking poses where the spine chain is crunched on itself.

### Use Straddling Left/Right Leg

- (defaults to false)
- When true, the upper leg will always point towards the lower leg effector, and the lower leg will point towards the foot effector; the foot position will no longer match.
  This is designed to enable poses where grounding the knees matters more than accurately positioning the feet.
- When false, the lower leg effector only suggests the direction of the bend, and the foot position will match.

### Use Chest

- When closest to 1, the chest position and rotation will be influenced by the chest effector.
- When closest to 0, the chest position and rotation will be chosen by default as if there was no chest effector.

### Also Use Chest to Move Neck

- When this is closest to 1 *and Use Chest* is also closest to 1, the chest position and rotation will influence the position of the neck, which may tilt the upper body.
- Otherwise, the neck position will be solved by default as if there was no chest effector.

### Use L/R Lower Arm

- When closest to 1, the arm will bend towards the lower arm effector.
- When closest to 0, the arm will bend using the default arm bend direction heuristics.


### Do Not Preserve Hips To Neck Curvature Limit *(Not recommended)*

- (defaults to false)
- Many avatars are designed with a spine that is naturally curved. By default (when this option is false), the solver will do its best to preserve that curve.
  That means that, if the head effector target is further away than the hips, we try to avoid making all the bones of the spine (hips-neck chain) point to it as a straight line.
  This option overrides this behaviour so that the spine can become straight, but this is likely to negatively affect the appearance of the avatar mesh.
- When true, we do not preserve the spine curvature by not imposing any maximum distance between the hips and the neck; the maximum distance is effectively the sum of the length of the bones.
- When false, we preserve the spine curvature by limiting the maximum distance between the hips and the head to be smaller than the hips-to-neck length + the neck-to-head length (which is not equal to the sum of the length of the bones).
