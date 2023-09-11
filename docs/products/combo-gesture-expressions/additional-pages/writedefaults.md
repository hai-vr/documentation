# Write Defaults

While working on ComboGestureExpressions 1.4, I had a lot of struggles with Write Defaults OFF. I have consolidated everything I've learned along the way on this page.

> ⚠️ The article below was written in March 2021.
> 
> Research on this subject has evolved since then, and as of September 2023, I recommend you [read this other article instead](https://notes.sleightly.dev/write-defaults/).
>
> https://notes.sleightly.dev/write-defaults/

### Animating non-muscle transforms

Write Defaults is a tricky topic. According to the VRChat Documentation, it recommends that in general:

- Write Defaults should be OFF.
- Transform animations belong in the Gesture Playable Layer.
- Muscle animations belong in the Gesture Playable Layer.
- Anything that is not a Transform animation nor a Muscle animation belong in the FX Playable Layer. This includes all Constraint component animation curves and GameObject toggles.

For Transform animations to work in the Gesture Playable Layer:

- The first mask of the Gesture Playable Layer must *allow* all Muscles and all Transforms that are animated by all the layers of the Gesture Playable Layer.
- The other masks of the Gesture Playable Layer should *allow* only the Muscles and Transforms that are animated by the layer on which the mask is on.

However, that is not sufficient. Transform animations in the Gesture Playable Layer will **not** animate if there is at least 1 layer in the FX Playable Layer that match these two conditions:

- If in the FX layer, there is at least 1 layer with 1 active state having Write Defaults OFF, **and**
- That layer has no Avatar Mask, or it has an Avatar Mask that does not *deny* all the transforms that are being animated.

*Additional notes about non-standard configurations: The above is true regardless of whether the Gesture Playable Layer uses Write Defaults OFF. Also, if a layer in the FX Playable Layer only has states with Write Defaults ON, it should not interfere so it doesn't need a mask.*

### Creating an Avatar Mask for the FX Layer

We need to create an Avatar Mask to add in the layers of the FX Playable Layer that match those two conditions. However, that Avatar Mask needs to be crafted carefully:

- If a layer has animations that animates references such as Material swaps, then the Avatar Mask must *allow* that transform in the mask. This is because the Material swap will no longer animate if it not allowed in the mask.
- In the real world, there are prefabs that animate Transforms in the FX Playable Layer. Therefore the mask must *allow* these unusual transforms in order not to break existing prefabs.
- If there are zero transforms that need to be *allowed* by the above rules, then the Avatar Mask must *allow* at least 1 transform (it can be a transform that does not exist), because an Avatar Mask that has 0 transforms is considered to be *allowing all* the transforms.

All of the above are implemented in the Avatar mask generator provided in *ComboGestureExpressions* by clicking <span class="hai-btn">Add missing masks</span>.

*Please note that the default Avatar Mask editor in Unity is not flexible enough to properly build an Avatar Mask that follows the above rules, as it does not have a facility to let you insert arbitrary transforms. If you don't use the Avatar Mask generator in CGE, you may have to create it using a Debug inspector.*

There is an unknown:

- According to the VRChat documentation, the mask of the first layer of the FX Playable Layer will be replaced at runtime. This means I do not know what is the expected behavior of the animator if the base layer has a strange configuration of Write Defaults OFF.

### Quirks

> ⚠️ The article was written in March 2021.
> 
> Research on this subject has evolved since then, and as of September 2023, I recommend you [read this other article instead](https://notes.sleightly.dev/write-defaults/).
>
> https://notes.sleightly.dev/write-defaults/

There are additional precautions that need to be taken for Write Defaults OFF to function properly, but it is outside of the scope of *ComboGestureExpressions*. This list may not be totally accurate:

- All transitions must have an Interruption Source set to None: This is because if a transition from A to B interrupts into a transition from A to C, which then interrupts back to a transition from A to B, it will exhibit a behavior similar to Write Defaults ON.
- Blend trees should not have 0 Motions.
- Animation clips should not have 0 animated curves.
- Avoid Blend trees of type *Direct*.
- Even if a State is not connected to anything in the graph or is unreachable, that state will have an impact on Write Defaults ON/OFF and the behavior of your animator. Consider these unreachable states as if they were reachable.

The following are good practices that may not impact Write Defaults OFF but could be noteworthy:
- All states should have a Motion of at least 2 keyframes for safety, rather than `None (Motion)`.
