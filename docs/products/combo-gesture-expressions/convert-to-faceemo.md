# Convert to FaceEmo

:::danger
This functionality is not released yet.
:::

You can convert ComboGestureExpressions to **[FaceEmo](https://suzuryg.github.io/face-emo/)**
if you still have the ComboGesture components in your scene.

## Limitations

Conversion to FaceEmo has the following limitations:

- ComboGestureDynamics are not converted at all.
- Puppets cannot be converted. We will select only one animation from the puppet.
  - If a puppet is 2D, the animation at the origin is used, otherwise the first animation is used.
  - If a puppet is 1D, the rightmost animation is used.
- Fist animations are converted, but blinking prevention of analog fist animations will not carry over.
  - You can choose to ignore analog fists entirely, which will make the Fist animation play even when the trigger is not pressed.

## How to use

In VCC, install the additional package *Haï ~ Convert ComboGesture to FaceEmo*.

In the scene that contains the ComboGesture components and your avatar, create a [New Expression Menu in FaceEmo](https://suzuryg.github.io/face-emo/docs/tutorials/simple-menu/)
or reuse the one you have.

Outside the avatar, create a GameObject and add a *ComboGesture to FaceEmo Converter* component.

Specify the ComboGestureCompiler component and the FaceEmo component.

Choose whether you want to ignore fist triggers (see limitations above).

Press Convert.

When satisfied, you can safely delete the *ComboGesture to FaceEmo Converter* component from your scene.
