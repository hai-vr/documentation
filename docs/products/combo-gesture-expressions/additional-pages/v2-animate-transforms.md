---
title: V2 - Animate Transforms
---

import styles from '../styles.module.css';

#  V2 - Animate cat ears, wings and more

:::danger
This is part of the manual for ComboGestureExpressions V2, also known as the Gesture Playable Layer *Old style*.

The steps described below are no longer needed in ComboGestureExpressions V3.
:::

<iframe src="https://streamable.com/e/uo3kut?loop=0" width="816" height="512" frameborder="0" allowfullscreen></iframe>
*(A [longer tutorial with audio commentary](./tutorial#animate-cat-ears-wings-and-more-tutorial-with-audio-commentary) is available)*

In Avatars 3.0, animations that modify transforms belong in the [Gesture playable layer](https://docs.vrchat.com/docs/playable-layers#gesture). In face expression animations, this is most often used to animate ears, wings, tails...

**Skip this step** if you use ComboGestureExpressions V3. The steps below only apply to ComboGestureExpressions V2.

- In ComboGestureExpressions V3, the Gesture Playable Layer is no longer used.
- All transform animations are handled for you in the FX layer instead.

**Skip this step** if you do not have such animations. You should only enable Gesture Playable Layer Support if you do animate those in your face expressions animations.

Note that finger poses and humanoid muscle poses will be ignored by this process. Animating finger poses is done by modifying the Gesture layers, which is outside the scope of this documentation.

If you do not have a gesture layer, duplicate one of the VRChat SDK examples and assign to the Gesture playable layer of your avatar:
- `Assets/VRCSDK/Examples3/Animation/Controllers/vrc_AvatarV3HandsLayer2` for feminine hand poses,
- `Assets/VRCSDK/Examples3/Animation/Controllers/vrc_AvatarV3HandsLayer` for masculine hand poses.

Select the `ComboGestureExpressions` object of the prefab. In the inspector, tick the `Gesture playable layer support` checkbox, and assign your [Gesture playable layer](https://docs.vrchat.com/docs/playable-layers#gesture) animator to the `Gesture Animator Controller` slot. **This asset will be modified: New layers and parameters will be added when synchronizing animations.** I recommend you to **make backups** of a that Gesture Animator Controller!

Depending on how your animator is built, choose the correct setting in `Gesture Playable Mode`: Choose Write Defaults OFF if you are following VRChat recommendations. Try to be consistent throughout your animator.

Handling the Gesture Playable is very tricky, and extra precautions need to be taken:

- **You will see a red warning regarding Avatar Masks if *ComboGestureExpressions* detects that your FX Playable Layer may be incompatible with your Gesture Playable Layer**, in which case it will suggest you a fix. If that's the case, click <span class={styles.hai_btn}>Add missing masks</span>. This will add a mask to the layers of your FX Playable Layer that do not yet have an Avatar mask.
- If you add new layers to the FX Playable Layer, you may have to click <span class={styles.hai_btn}>Add missing masks</span> if you see the red warning again.
- If you modify the FX Playable Layer, and <span class={styles.hai_btn}>Synchronize Animator FX and Gesture layers</span> every time you do a change in the FX Playable Layer. That is because the mask is generated based on the animations within the FX Playable layer.
- You should not share your Gesture Playable Layer between two very different avatars that do not have the same base, because the avatar is being used to capture the default bone positions of the avatar when it is at rest, so that animated transforms can reset to a base position when they are not being used.

*If you would like to know why an Avatar mask is needed on layers of the FX Playable Layer, [you may find additional information here](./writedefaults).*
