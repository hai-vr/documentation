---
sidebar_position: 6
---

# Upload and Export

:::danger
The documentation page is currently being written.
:::

## VRChat

The blendshapes will be created automatically when you enter Play mode or when you build your avatar.

If you use VRCFury **and simultaneously** use Avatars 3.0 Emulator, you must enable Avatars 3.0 Emulator’s “Run Preprocess Avatar Hook” to test the avatar in Play Mode.

However, for the avatar to work in-game, you need a custom animator controller and parameters.

You need to install an existing VRCFaceTracking template on your avatar, for instance:

- Adjerry91's [VRCFaceTracking template](https://github.com/Adjerry91/VRCFaceTracking-Templates)

## Resonite

To use the avatar in Resonite:

- If you are using Unity Editor **2019** (like in an old VRChat 2019 project), download and install the UniVRM [v0.99.4](https://github.com/vrm-c/UniVRM/releases/tag/v0.99.4) package.
- If you are NOT using Unity Editor 2019, [download the UniVRM package](https://github.com/vrm-c/UniVRM/releases) for your Unity version, most likely the latest one.
- In the Hai’s FaceTra Shape Creator component, open “Export to Resonite and VRM”, and press the **“Start Resonite bake mode”** button.

- Export your avatar to the GLB format by using on the top menu “UniGLTF > Export to GLB”.

![Unity_OXYQh0FXzz.png](img%2Fimprovements%2FUnity_OXYQh0FXzz.png)

- Import your GLB avatar mesh into Resonite like you would do for any other avatar. You may need to refer to a Resonite mentor to wire up some of the shapes.