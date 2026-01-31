# Avatarlike

An Avatarlike is a component that represents all the facilities needed to puppeteer an [Avatar](../ugc/avatar), regardless of whether that avatar is controlled
by a person or not.

Thus, an Avatarlike may be used by **People** or **NPCs**. It contains an IK solver, and physics animation components
if physics animation is enabled for that Avatarlike.

It does **not** contain a character controller nor calibration data.

## Adding an Avatarlike in the scene

![Unity_TMrQnc9AqE.png](img/Unity_TMrQnc9AqE.png)

If you add an Avatarlike component on its own in the scene, that Avatarlike will be treated as an **inanimate NPC**.

- If you want to load an avatar present in the scene, set the **Provided Instance** to an avatar present in the scene.
- Otherwise, specify an *HVR AssetBundleLoader* component, which will load a built avatar.
- If you want the Avatarlike to be [physically simulated](physics-animation), enable **Use Physics Animation**.

When the scene is started, this component will set up the provided instance, and you will be able to manipulate it.
