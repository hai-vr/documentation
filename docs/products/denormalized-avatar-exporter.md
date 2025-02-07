---
title: Denormalized Avatar Exporter
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";

# Denormalized Avatar Exporter (Beta)

<HaiTags>
<HaiTag compatibleWithVNyan={true} compatibleWithWarudo={true} compatibleWithVSeeFace={true} />
</HaiTags>

**Denormalized Avatar Exporter** lets you export avatars normally designed for use in VRChat into VTubing apps, without the disruptive pre-processing steps that would normally be needed:
- using the [VSFAvatar](https://www.vseeface.icu/#vsfavatar) format used in the **[VNyan](https://suvidriel.itch.io/vnyan)** VTubing app and the **[VSeeFace](https://www.vseeface.icu/)** VTubing app,
- and as a [Character Mod](https://docs.warudo.app/docs/modding/character-mod) for use in the **[Warudo](https://warudo.app/)** VTubing app.

You don't have to normalize your avatar bones, and you don't have to export your avatar to VRM and import that VRM back into Unity.

Normalization is done when the avatar is being exported, so that you can keep editing the original avatar model file or prefabs just like anyone
would normally do for a VRChat avatar.

*Under particular conditions*, it may also permit the use of NDMF (Non-Destructive Modular Framework) and Modular Avatar (and by extension [Prefabulous](/docs/products/prefabulous)), however,
since Modular Avatar is not fully supported outside VRChat, using them requires additional care. VRCFury is not supported.

:::danger
**You must not use a VRChat project** because both VNyan and Warudo require a Unity version lower than VRChat's Unity 2022.

If you were to try, shaders would fail to render in your VTubing app (it would be pink).
:::

<HaiVideo src="./img/denormalized-avatar-exporter/denormalized-f.mp4"></HaiVideo>

## Install

To install, you must use a Unity project that was properly initialized according to your VTubing application of choice.
**You cannot use a VRChat SDK project**, because the Unity version used by VRChat is not the one in use in the currently supported VTubing apps.

Then, download the [Denormalized Avatar Exporter from GitHub](https://github.com/hai-vr/denormalized-avatar-exporter/releases) as a **.unitypackage**,
and install it in your VTubing project.

:::tip
**Do you use V<!-- -->CC/ALCOM?** The V<!-- -->CC and ALCOM package managers can be used in non-VRChat projects, which could be useful if you want to use liltoon,
Modular Avatar, or other packages in non-VRChat projects.

If you use V<!-- -->CC or ALCOM, you can instead use the *Haï ~ Denormalized Avatar Exporter (Beta)* package in my [ALCOM listing](/docs/products/listing).

*If you're interested in using V<!-- -->CC, but you don't play VRChat, strongly consider using the [open-source version of V<!-- -->CC called ALCOM](/docs/products/listing#alcom), which does not require you to create a VRChat account (and therefore
does not require you to accept the VRChat Terms of Use).*
:::

Then:
- [Read the VNyan section below](#usage-in-vnyan) if you are targeting the **VNyan** VTubing app or the **VSeeFace** VTubing app.
- [Read the Warudo section below](#usage-in-warudo) if you are targeting the **Warudo** VTubing app.

## Usage in VNyan

<HaiTags>
<HaiTag compatibleWithVNyan={true} compatibleWithVSeeFace={true} />
</HaiTags>

Normally, exporting a VSFAvatar to VNyan or VSeeFace requires you to [export your avatar to VRM first, and then reimport it back into Unity](https://www.vseeface.icu/#vsfavatar).
With Denormalized Avatar Exporter, **those steps are not needed**.

However, please understand that during the export, this tool will modify your avatar in such a way that it may introduce incompatibilities
that would not be normally found in a traditional avatar, so the quality of the results may vary.

:::warning
Your project needs to be already setup according to the [VNyan manual](https://github.com/Suvidriel/VNyanDoc/wiki/VNyan-SDK) (or the [VSeeFace manual](https://www.vseeface.icu/#vsfavatar), if you use VSeeFace).

This means you already have the correct **UniVRM** version installed in your project.
:::

To use this tool in VNyan:
- Import your Unity avatar in your scene. You do not need to export it to VRM.
- Add a *Haï / Denormalized Avatar Exporter* component to any GameObject on your scene (it could be a new GameObject, or your avatar itself).
- Set *Avatar Root* to be your avatar root.
- Choose an *Export File Name*.

*Customize your avatar as usual by adding a VRM BlendShapeProxy component, etc.*

You can now build the avatar in this way:
- Select the object that contains your *Denormalized Avatar Exporter* component.
- Click the *Build .vsfavatar* button inside the inspector.

## Usage in Warudo

<HaiTags>
<HaiTag compatibleWithWarudo={true} />
</HaiTags>

Normally, exporting a Character Mod to Warudo requires you to normalize your avatar bones first using the [Setup Character step](https://docs.warudo.app/docs/modding/character-mod#step-2-setup-character).
With Denormalized Avatar Exporter, **this step is not needed**.

However, please understand that during the export, this tool will modify your avatar in such a way that it may introduce incompatibilities
that would not be normally found in a traditional avatar, so the quality of the results may vary.

:::warning
Your project needs to be already setup according to the [Warudo Modding manual](https://docs.warudo.app/docs/modding/sdk-installation).

This means you already have the **Warudo SDK** installed in your project.
:::

First of all, when using this tool, **you must not use the Character prefab**. This tool will overwrite the Character prefab in order to build the mod.
- If you're importing a new avatar, simply do not set it up.
- If you're reusing an already set up avatar, rename your Character prefab in your project to something else.
- Create a new Mod, or reuse your existing Character Mod.
  - Please make sure your mod name does not contain any space in it.
- Add a *Haï / Denormalized Avatar Exporter* component to any GameObject on your scene (it could be a new GameObject, or your avatar itself).
- Set *Avatar Root* to be your avatar root.

*Customize your avatar as usual by adding a VRM BlendShapeProxy component, etc.*

You can now build the avatar in this way:
- Select the object that contains your *Denormalized Avatar Exporter* component.
- Click the *Build Warudo mod* button inside the inspector.

## What does this tool really do?

This tool changes a destructive pre-processing step into a non-destructive post-processing step.

### What happens normally?

In a normal avatar setup without this tool, you would be required to pre-process your avatar first.

The pre-processing step is mainly used to recalculate the bones of your avatar so that they all have the same neutral rotation,
presumably so that various animation systems, motion capture, and IK solver middleware can operate on those neutral bones.

Since the bones of the avatar are changed, the meshes used by SkinnedMeshRenderers are usually altered so that they become compatible
with the new orientation of the bones. Since this creates new meshes, it makes the original meshes non-editable, unless the bones are altered at the source to be
in that neutral rotation.

This pre-processing step called **bone normalization** is practically non-existent in some apps such as VRChat, therefore this step
can be very disruptive to a user acquainted with the avatar creation workflow of these social VR apps.

### What changes with this tool?

*Denormalized Avatar Exporter* takes a different approach:

- This tool creates a new humanoid armature with those neutral bones, and then parents the original bones to that new humanoid armature.
    - SkinnedMeshRenderer components continue to use the original model.
- Only the humanoid bones are created; any non-humanoid bone such as hair, tail, skirts, ribbons, keep the original bones with their original orientations.
- This modification is only done when you build the avatar, on a copy of the avatar. Your original avatar remains intact.

Due to this, the avatar may operate slightly differently if you choose to use constraint components, or if you reference original humanoid bones in a particular way.

## Using non-destructive workflow tools (NDMF)

:::warning
This section is not currently available.
:::

At this time of writing, this tool has *some* compatibility with non-destructive workflow tools.

### NDMF

:::warning
This section is not currently available.
:::

Non-Destructive Modular Framework may be installed in your project, however, it requires you to add a `System.Collections.Immutable` DLL
in the `Assets/Plugins` folder of your project.

⚠️ **The exact steps to do this cleanly are not available in this documentation yet.**

Once correctly installed, NDMF will execute automatically when trying to export a .vsfavatar, or when trying to build the Warudo mod.

### Modular Avatar

:::warning
This section is not currently available.
:::

Even though Modular Avatar does not require the VRChat SDK to run, there are some quirks at the moment, so you cannot use it easily
at this time of writing.

⚠️ **If you really want to try** installing Modular Avatar, here's an advanced outline:
- Add the Unity Mathematics package in your project using the Unity package manager.
- Add the Unity Burst package in your project using the Unity package manager.
- Download Modular Avatar on GitHub, and add it to your project using the Unity package manager.
  - Fix around three lines of compilation errors located within Modular Avatar's source code.
