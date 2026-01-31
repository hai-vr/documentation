# Avatarlike

An Avatarlike is a component that sets up all the facilities needed to puppeteer an [Avatar](../ugc/avatar).

It contains an IK solver and [physics animation](./physics-animation) components (if enabled).

It may be used to represent a **User**, but also **NPCs**.
Since an avatarlike is not necessarily tied to a person, it does **not** contain a character controller nor calibration data.

## Adding an Avatarlike in the scene

![Unity_TMrQnc9AqE.png](img/Unity_TMrQnc9AqE.png)

If you add an Avatarlike component on its own in the scene, that Avatarlike will be treated as an **inanimate NPC**.

- If you want to load an avatar present in the scene, set the **Provided Instance** to an avatar present in the scene.
- Otherwise, specify an *HVR AssetBundleLoader* component, which will load a built avatar.
- If you want the Avatarlike to be [physically simulated](./physics-animation), enable **Use Physics Animation**.

When the scene is started, this component will set up the provided instance, and you will be able to manipulate it.

Then, in the hierarchy of the *HVR Avatarlike* object:
- Go to *HVRMultipurposeRig → HVRIK → RuntimeTargets*. Move and rotate the child targets to define a new pose.
- If you want to fiddle with physics animation, head over to the [physics animation](./physics-animation) page.
