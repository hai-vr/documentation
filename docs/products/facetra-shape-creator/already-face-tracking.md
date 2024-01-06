# My avatar already has face tracking

:::danger
The documentation page is currently being written.
:::

If your avatar already has face tracking, you can use FaceTra Shape Creator to partially overwrite existing face tracking blendshapes.

You can use this to tweak some shapes that you are not satisfied with.

:::warning
It is not possible to edit existing blendshapes, FaceTra Shape Creator can only override them.
:::

## How to use

If your model already has face tracking blendshapes using the Unified Expressions naming convention,
you can choose which ones you want to overwrite in the Output section.

- In the Output section, uncheck “Rewrite all shapes”.
- Select the facial features that you’d like to rewrite on your avatar.
    - This implicitly includes all related blendshapes (such as Left/Right, UpperLeft/UpperRight, LowerLeft/LowerRight).

Note that this is still a non-destructive operation, your mesh will not be written on disk, so you will not be able to edit those in Blender.

![already-face-tracking.png](img%2Falready-face-tracking.png)

:::note
If you need to edit them back in Blender, please ping me on Discord so that we can discuss ways to do this using GLB export (same export method as Resonite).
:::