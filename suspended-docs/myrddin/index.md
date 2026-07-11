---
unlisted: true
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Myrddin

<HaiTags>
<HaiTag requiresVRChat={true} />
</HaiTags>

Welcome to the *Myrddin* page.

*Myrddin* is an experimental project that aims to bring you a little bit closer to standalone VR game development by letting you
completely **ditch Udon using a killswitch**.

By suspending Udon, your UdonSharp behaviours become regular Unity behaviours. You can then use the usual debugging techniques on those
behaviours such as breakpoints, stepping, [pausepoints](https://blog.jetbrains.com/dotnet/2020/06/11/introducing-unity-pausepoints-for-rider/),
but also make edits to the code of your behaviours and [hot reload](https://hotreload.net/) them while Play Mode is still running.

In addition, it also attempts to let you **test VR controls in-editor**, and functions alongside ClientSim.

When you are done iterating, release the killswitch, and build or upload your VRChat world as usual; but now that Udon is not really necessary in-editor,
consider giving VR standalone development a chance, so that you can create content without being limited by the VRChat platform.

## Discord

This project is experimental. Please discuss on [Discord](/docs/other/discord) in the `#let-me-see` channel.

## How to use

:::danger
You've been handed out this experimental project, there are risks associated with it: **prefab corruption**, loss of assigned fields in components, etc.

If you're trying this project, make backups, and use a separate project at first.
:::

Go to *Tools > Myrddin*.

### Killswitch

The Killswitch button lets you suspend Udon systems, so that MonoBehaviour will execute instead.

- When it is OFF, no alterations are made to the project.
- When it is ON, hooks will be enabled that will change the behaviour of Udon-related systems.
  - The UdonManager will be turned off, so that Udon programs will not execute.
  - UdonSharp will be prevented from muting its own methods, so that MonoBehaviours will execute.
  - UdonSharp will no longer prevent from entering Play Mode if there are U# compilation errors.
  - Some methods from UdonBehaviour components will be rerouted to their UdonSharpBehaviour equivalents.
  - Some methods from UdonSharpBehaviour will be rerouted to spawn coroutines.
  - We will plug our own component for handling *PostLateUpdate()*.
  - Some methods within ClientSim systems will be rerouted to invoke equivalent functions in UdonSharpBehaviours.
  - Since the UdonBehaviour is dormant, UdonSharp will no longer reflect program variables from the dormant UdonBehaviour back to the UdonSharpBehaviour.
  - UdonSharp custom inspector will be suspended.
  - Builds are prevented.
  - The `MYRDDIN_ACTIVE` scripting define will be made available.

:::warning
You cannot build your world while the killswitch in ON.
:::

### ClientSim VR

The ClientSim VR checkbox lets you enable a rudimentary VR mode.

- When it is OFF, no alterations are made to the project.
- When it is ON, hooks will be enabled that will change the behaviour of ClientSim and VR systems.
  - ClientSim will be injected a custom prefab that will handle VR controls.
  - XR Plug-in management will initialize the VR system when entering Play Mode.
  - OpenXR will be set as the active loader.
  - Calls to `Input.GetAxis("...")` will execute custom code sourcing from the controller inputs.

## Adaptations

### Use `#if !COMPILER_UDONSHARP` to execute non-UdonSharp code

You can execute non-UdonSharp code, or code that should only execute when the Myrddin Killswitch is ON, by using `#if !COMPILER_UDONSHARP`

Example:

```csharp
#if !COMPILER_UDONSHARP
    // No optimization needed here, we're in C#.
    var players = new VRCPlayerApi[VRCPlayerApi.GetPlayerCount()];
    VRCPlayerApi.GetPlayers(players);
    
    // We have access to lambdas and other stuff unusable in UdonSharp.
    var strings = players.Select(api => api.displayName).ToArray();
    var joined = string.Join(',', strings);
    Debug.Log($"Player names: {joined}");
#endif
```

Such code will not become part of the compiled Udon program.

[//]: # (### Use `#if MYRDDIN_ACTIVE` to execute Myrddin code)

[//]: # ()
[//]: # (If for any reason you need to invoke *Myrddin* library functions, use `#if MYRDDIN_ACTIVE`)

[//]: # ()
[//]: # (This differs from `#if !COMPILER_UDONSHARP` in that it wouldn't fail to compile for users who don't have *Myrddin*.)

### OnEnable and Awake don't execute the same way

There are some areas where methods such as `OnEnable` and `Awake` won't execute in the same order as in-editor Udon, or in-game.

In the meantime, you may have to use `#if !COMPILER_UDONSHARP` to insert *Myrddin*-specific fixes.

### VRCPlayerApi.UseAttachedStation() needs to be replaced

For complicated reasons, `VRCPlayerApi.UseAttachedStation()` needs to be replaced.

Replace:

```csharp
    Networking.LocalPlayer.UseAttachedStation();
```

with the following:

```csharp
#if COMPILER_UDONSHARP
    Networking.LocalPlayer.UseAttachedStation();
#elif MYRDDIN_ACTIVE
    Hai.Myrddin.Core.Runtime.MyrddinHelpers.UseStation(this);
#endif
```

The reason is that `VRCPlayerApi.UseAttachedStation()` is a weird function originally made for Udon Graphs, which once invoked
needs to know where it was called from.

Getting the caller instance of a function is *really* hard to do using native code (stack traces only provide the calling type and method,
not instance). AFAIK The other ways to solve this are very invasive for little benefit, so it is not done. Please just use this snippet.

We use `#elif MYRDDIN_ACTIVE` instead of just using `#else` so that this doesn't fail to compile for users who don't have *Myrddin*.
