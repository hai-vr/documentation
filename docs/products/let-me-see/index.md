# LetMeSee

*LetMeSee* is a Unity Editor tool that lets you see your content in VR within the Unity Editor, even if you're not a VR game dev.

You can see your content in Edit mode. There is no need to enter Play mode.

:::danger
This tool has been tested using **Unity 2022**. It does not work in Unity 2019.
:::

## Download

The tool is free for download using VCC.

### VCC

- Use this link to **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ LetMeSee* to your project using VCC.

## How to use

:::warning
There is a higher risk than usual for issues being caused by the installation of this tool, as the installation of this tool will cause
the XR Plugin Management and the OpenXR Plugin to be installed into the project, which may modify the behaviour of your project.

Consider making a backup of your project before installing this tool, or try this on a small project first.

Please seek for support on the [Discord server](/docs/other/discord) if you encounter any issues with the tool.
:::

<video controls width="816">
    <source src={require('./img/Unity_iniKDmMzca.mp4').default}/>
</video>

### First time setup

- Open *Tools > LetMeSee > Edit Settings*.
- If the warning "OpenXR is missing from the project" shows up, press the "**Install OpenXR**" button.
  - Wait a few seconds for the OpenXR plugin to install.

![Unity_aHGC9nsgmW.png](img%2FUnity_aHGC9nsgmW.png)

- In your scene, make sure that you have a Camera object, and that Camera object has the *MainCamera* tag.

![Unity_LRfUJL5Y4S.png](img%2FUnity_LRfUJL5Y4S.png)

### Start VR

- Make sure the Game tab is open **and visible** in the Unity Editor. It cannot be merely open and hidden as a secondary tab.

![Unity_BJy2gyCSBa.png](img%2FUnity_BJy2gyCSBa.png) ![Unity_K1zPuSCzOl.png](img%2FUnity_K1zPuSCzOl.png)

- Make sure your VR headset is turned on, and SteamVR (or your OpenXR runtime) is running.
- Press the "**Run**" button.
- Put your headset on, look forward, and press the "**Recenter view**" button.

- Move the camera of the Scene view to move around.

## Options

- **Freeze camera**: Keep the camera in-place. The camera still moves when you move your head around.
- **Recenter view**: Recenter the HMD to be at the same location and rotation as the scene view.

### IPD and Scale

- **Edit your height**: Define your real-world height.
- **Rescaled height and slider**: Scale yourself taller or smaller than your real-world height.
- **Reset scale**: Reset your scale back to match your real-world height.

### Alignment

- **Camera mode**:
  - When set to **Scene View**, the camera will move to match the Scene tab.
  - When set to **Local Space**, the camera will move with the parent GameObject of the main camera in the scene.
  - When set to **Local Position**, the position of the camera will stay relative to the position of the main camera in the scene, ignoring the rotation.
- **Move camera up**: When using the *Local Space* or *Local Position* camera modes, this moves the camera upwards to match your height and scale, as a multiplier.
- **Do not switch Scene tabs**: If you have multiple Scene tabs open, the camera will not switch between the Scene tabs if this button is pressed.
