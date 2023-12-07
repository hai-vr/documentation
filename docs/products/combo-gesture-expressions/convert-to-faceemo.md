# Convert to FaceEmo

:::danger
This functionality is not released yet.
:::

You can convert ComboGestureExpressions to **[FaceEmo](https://suzuryg.github.io/face-emo/)**
if you still have the ComboGesture components in your scene.

Conversion to FaceEmo has the following limitations:

- ComboGestureDynamics are not converted at all.
- Puppets cannot be converted. We will select only one animation from the puppet.
  - If a puppet is 2D, the animation at the origin is used, otherwise the first animation is used.
  - If a puppet is 1D, the rightmost animation is used.
- Fist animations are converted, but blinking prevention of analog fist animations will not carry over.
  - You can choose to ignore analog fists entirely, which will make the Fist animation play even when the trigger is not pressed.
