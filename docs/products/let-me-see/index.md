import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";

# LetMeSee

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

*LetMeSee* (LMS) is a Unity Editor tool that lets you see your content in VR within the Unity Editor, even if you're not a VR game dev.

You can see your content in Edit mode. There is no need to enter Play mode.

The Scene tab is used as the camera viewpoint. You can use this to fly through avatars and worlds.

:::danger
This tool has been tested using **Unity 2022**. It does not work in Unity 2019.
:::

<video controls width="816">
    <source src={require('./img/lms1-f.mp4').default}/>
</video>
*Using LMS for worlds and level design.*

<video controls width="816">
    <source src={require('./img/lms0-f.mp4').default}/>
</video>
*Using LMS for avatars.*

## Download

The tool is free for download using ALCOM or VCC.

### VCC

- Use this link to **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ LetMeSee* to your project using VCC.

:::tip
If you use the [ALCOM](/docs/products/listing) package manager, you can add the *Haï ~ LetMeSee* package from **[our listing](/docs/products/listing)**.
:::

## How to use

:::warning
There is a higher risk than usual for issues being caused by the installation of this tool: 
The XR Plugin Management and the OpenXR Plugin will be installed into the project, which may modify the behaviour of your project.

Consider making a backup of your project before installing this tool, or try this on a small project first.

Please seek for support on the [Discord server](/docs/other/discord) if you encounter any issues with the tool.
:::

<video controls width="816">
    <source src={require('./img/Unity_iniKDmMzca.mp4').default}/>
</video>

### First time setup

- Open *Tools > LetMeSee > Edit Settings*.

![mspaint_LU6EmSiAEe.png](img%2Fmspaint_LU6EmSiAEe.png)

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

<HaiSupport />

## Options

- **Freeze camera**: Keep the camera in-place. The camera still moves when you move your head around.
- **Recenter view**: Recenter the HMD to be at the same location and rotation as the scene view.

### IPD and Scale

- **Edit your height**: Define your real-life height.
- **Rescaled height and slider**: Scale yourself taller or smaller than your real-world height.
- **Reset scale**: Reset your scale back to match your real-world height.

You can use these settings to make yourself shorter or taller than your real-life height.
- Change your scale smaller to see small objects as gigantic.
- Change your scale taller to see worlds and avatars as miniatures.

<video controls width="816">
    <source src={require('./img/miniature-f.mp4').default}/>
</video>
*This is one of these things that a flat screen completely fails to describe. Give it a try.*

### Alignment

- **Camera mode**:
  - When set to **Scene View**, the camera will move to match the Scene tab.
  - When set to **Local Space**, the camera will match its position and rotation with the parent GameObject of the main camera in the scene.
  - When set to **Local Position**, the camera will match its position with the parent GameObject of the main camera in the scene, but the rotation of the camera remains unaffected.
- **Move camera up**: When using the *Local Space* or *Local Position* camera modes, this moves the camera upwards to match your height and scale, as a multiplier.
- **Do not switch Scene tabs**: If you have multiple Scene tabs open, the camera will not switch between the Scene tabs if this button is pressed.
- **Show cursor**: Show a cursor while in VR.
- **Cursor color**: Change the transparency and color of the cursor.

### Advanced

- **Force use OpenXR**: Force the XR Management to always use OpenXR Loader when running.
  - Some plugins and SDKs may try to override the XR Loader with another incompatible loader. Checking this option attempts to prevent this from happening.
- **(DEBUG) Initialize XR at startup**: This mirrors a checkbox in the XR Project settings: Changes the XR Management setting of the same name.
  - When checked, the XR Loader will automatically start when entering Play mode, regardless of whether *LetMeSee* is running.
  - This can be a problem in most projects as it may be undesirable for the user to enter VR mode when entering Play mode.
  - By default, XR Project settings sets this checkbox. *LetMeSee* unchecks this box the first time it is run in the project in order to accomodate the main use case of the users of this tool.

About OpenXR: You are not obligated to use the OpenXR Loader, it just so happens to be the most sane option for most users.

If you really want to, you could use the OpenVR Loader (i.e. if you need to also support testing overlays in your project). In this case, uncheck the *Force use OpenXR* setting.
