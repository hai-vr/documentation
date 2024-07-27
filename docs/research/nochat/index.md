---
sidebar_position: 2
---
# Nochat

This page records my attempts to run VRChat prefabs with the Unity Editor in VR, without the VRChat SDK installed.

This project is specific to world content.

<video controls width="816">
    <source src={require('./img/nochat-f.mp4').default}/>
</video>

## Introduction

Unity VR game developers usually create and test all of their content within the Unity Editor, in VR, including VR controls.

However, **VRChat world creators do not test VR controls within the Unity Editor**.
They don't even view their VR content within the Unity Editor (although [I'm trying to make this more accessible using LetMeSee](/docs/products/let-me-see)).

Testing native Unity VR games in-editor provides several benefits:
- Testing VR doesn't require building the scene.
- Testing VR doesn't require loading the content in an external app.
- You can use the scene view just as you would when testing content for a flatscreen desktop app.
- Entering Play Mode is fast.
- You can pause the scene.
- You can use regular code debugging tools.
- You can use tools to [hot-reload modifications made to the code while the game is still running](https://hotreload.net/).

In the current VRChat SDK, none of this is doable if you want to test VR content.

**VRChat world creators are just standalone Unity VR creators with restrictions.** So how can we get there?

## Two approaches

In the current meta, VRChat content creators rely on ClientSim (or CyanEmu) for testing worlds in editor, in desktop mode.

We could try to modify ClientSim to support VR. However, I've decided to take another approach: **Remove the VRChat SDK.**
Execute UdonSharp scripts as if they were just C# scripts.

Removing the VRChat SDK provides the following immediate advantages compared to modifying ClientSim:
- Entering Play Mode is fast.
- You can use regular code debugging tools.
- You can use tools to [hot-reload modifications made to the code while the game is still running](https://hotreload.net/).

However, it would have the following disadvantages compared to ClientSim:
- **Only UdonSharp content can be tested.** CyanTrigger and UdonGraphs are not usable.
- If the scripts are modified in a non-VRChat project, it might be incompatible with UdonSharp (i.e. accessing unavailable APIs, or using C# syntax unsupported in UdonSharp).
- ClientSim (or CyanEmu) systems, such as locomotion, are not available.
- Although ClientSim has no parity guarantee with the VRChat client, it would be even less true with this approach.

There are long-term or future advantages compared to modifying ClientSim:
- Prefabs can be more easily ported into standalone applications, completely separate from VRChat.
- Users may be able to add additional packages for multiplayer use.
- There is an opportunity for testing networking using multiple Unity Editor instances.

I am also taking this approach because as I'm planning my long-term exit from VRChat content creation (at this time of writing, July 2024),
turning VRChat prefabs into VR prefabs is more aligned with my objectives. If VRChat wants a ClientSim VR implementation, then they should be the ones doing it.

## Rebuilding external calls from compilation errors

Rather than take the entire VRChat API [just like Android took the entire Java API](https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America%2C_Inc.),
I'm going to take existing popular VRChat prefabs, and focus on make it work without the VRChat SDK installed, one prefab at a time.

Ideally, this should only require minimal modifications to the original prefab so that it may still continue to be used in VRChat.

I will not look at how the VRChat SDK works internally, none of its code. Instead, **I will use the C# compilation errors produced by the prefabs to replace** parts of the API
that are actually used.

This means there will be errors in the method signatures, possibly class members with the incorrect attributes (i.e. property instead of field), enumerations in the incorrect order,
but as long as the prefab is made testable in VR within the Unity Editor, it's good enough.

This approach gives me immediate feedback on how the project is going, and provides quick and manageable milestones, to check if this proof-of-concept is worth continuing.

### Billards: Pickup, grip and trigger buttons

<video controls width="816">
    <source src={require('./img/nochat-f.mp4').default}/>
</video>

First, [billiards](https://github.com/Sacchan-VRC/MS-VRCSA-Billiards). This will let me add controllers, pickups, handle grip and trigger buttons,
and nothing more. I won't do UI raycasts for now, that will still be done using the game view.

To do this, I'm using a straightforward approach to get it done:
- Use OpenXR.
- Use a *[Legacy Tracked Pose Driver](https://docs.unity3d.com/Packages/com.unity.xr.legacyinputhelpers@2.1/api/UnityEngine.SpatialTracking.TrackedPoseDriver.html)* component to handle the camera moving with the head.
  - *In retrospect, there might be no reason to use the Legacy version of it.*
- Use a *[Tracked Pose Driver (Input System)](https://docs.unity3d.com/Packages/com.unity.inputsystem@1.7/api/UnityEngine.InputSystem.XR.TrackedPoseDriver.html)* component to handle the left and right controller pose.
- Using [a custom behaviour](https://github.com/hai-vr/nochat/blob/main/Packages/dev.hai-vr.nochat-script/Scripts/Runtime/Core/NochatController.cs), use [XR Input](https://docs.unity3d.com/Manual/xr_input.html#:~:text=Example%20for%20primaryButton) to get the trigger and grip button states.
- Using [a custom behaviour](https://github.com/hai-vr/nochat/blob/main/Packages/dev.hai-vr.nochat-script/Scripts/Runtime/Core/NochatUpdateCoordinator.cs#L95), handle grabbing pickups whenever the grip state changes.
- Using [a custom behaviour](https://github.com/hai-vr/nochat/blob/main/Packages/dev.hai-vr.nochat-script/Scripts/Runtime/Core/NochatUpdateCoordinator.cs#L41), handle triggering the pickup drag/drop/use events of the *UdonSharpBehaviour* replacement.

All compilation errors must be fixed in the prefab. During this iteration, we focus on:
- Adding missing classes and methods.
  - All networking methods are not implemented, or return sensible values for a scenario in a 1-player instance (local player is master and owns everything).
- Replacing the concept of program variables with getting and setting C# class fields through reflection.
- Replacing the concept of custom events with invoking C# methods through reflection.
  - Delayed events are replaced with coroutines.
  - If invoking these methods fail, it doesn't interrupt the execution of the caller's code.

UI buttons in VRChat prefabs rely on Unity Events to trigger the `SendCustomEvent` on the original UdonBehaviour, not the UdonSharpBehaviour.
Due to this, I am forced to keep the original UdonBehaviour GUID around in the project, even if it's practically an empty class. I'm not sure of a good way to fix this at the moment.

### SaccFlight: Tracking data, controller axis

<video controls width="816">
    <source src={require('./img/saccflight-novrc-f2.mp4').default}/>
</video>

Secondly, I wanted to try a complex vehicle system, like Sacchan and Varneon prefabs. I'm starting with [SaccFlight](https://github.com/Sacchan-VRC/SaccFlightAndVehicles)
because it was unclear whether Varneon's vehicle prefabs were downloadable from Patreon, and SaccFlight is readily available.

This lets me test head and hand tracking data, and analog controller inputs such as trigger, grip, and thumbstick directions.

To get this done:
- Don't try to have a locomotion system, just [add a button in the Unity Editor inspector](https://github.com/hai-vr/nochat/blob/main/Packages/dev.hai-vr.nochat-script/Scripts/Runtime/StubBehaviour/NochatStation.cs) to enter the station directly.
  - We are not trying to make CyanEmu 2 here, this is a blank Unity OpenXR project, so it's like we're building a standalone game.
- Input systems in this prefab use `Input.GetAxisRaw("Oculus_CrossPlatform_PrimaryIndexTrigger")` and similar to get analog inputs.
  - To avoid log spam, add those inputs in the project. [CyanEmu has a script](https://github.com/CyanLaser/CyanEmu/blob/master/CyanEmu/Scripts/CyanEmuInputAxesSettings.cs) to do this.
  - I have no idea how to feed values into these inputs myself. I really don't, and was not able to figure it out.
  - For now, as a replacement, I'm modifying the original prefab script to redirect `Input.GetAxisRaw(...)` invocations to [a custom static script](https://github.com/hai-vr/nochat/blob/main/Packages/dev.hai-vr.nochat-script/Scripts/Runtime/Core/NochatInput.cs).
  - Using the previously created custom behaviour for XR Input, [this static script is being fed with the axis values](https://github.com/hai-vr/nochat/blob/main/Packages/dev.hai-vr.nochat-script/Scripts/Runtime/Core/NochatUpdateCoordinator.cs#L20).

All compilation errors must be fixed in the prefab. During this iteration, we focus on:
- Adding missing classes and methods.
- Fixing coroutines for delayed events triggered on disabled objects:
  - Coroutines cannot be run on disabled objects, so instead, I'm bypassing this by creating a new object that will hold the coroutine for us.
- Linking tracking data with the controllers position and rotation (which is just the *Tracked Pose Driver* from the previous prefab).

There some are additional surprises in this iteration:
- Execution order is not the same. `OnEnable` seems to execute before `Awake`, or maybe it's the other way around.
  - Either way, the original scripts expect some of their fields to be initialized before some of their methods are invoked.
  - For now, I'm modifying the original script to force `OnEnable` to execute `Awake` if Nochat is running.
- Shaders don't use Single Pass Instanced, so they only render on one eye. I have to [upgrade them myself](https://github.com/cnlohr/shadertrixx?tab=readme-ov-file#alert-for-early-2022).

## Source code

If you want to take a look, this proof-of-concept is on [GitHub](https://github.com/hai-vr/nochat).

Obviously, based on everything I've written above, don't install it in your project and expect it to just work, this is an experimental project.
