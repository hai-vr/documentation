---
unlisted: true
title: Denormalized Avatar Exporter
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

# Denormalized Avatar Exporter

<HaiTags>
<HaiTag compatibleWithVNyan={true} compatibleWithWarudo={true} />
</HaiTags>

**Denormalized Avatar Exporter** lets you export avatars normally designed for use in VRChat into VTubing apps, without the disruptive pre-processing steps that would normally be needed:
- using the [VSFAvatar](https://www.vseeface.icu/#vsfavatar) format used in the **[VNyan](https://suvidriel.itch.io/vnyan)** VTubing app,
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

## Usage in VNyan

<HaiTags>
<HaiTag compatibleWithVNyan={true} />
</HaiTags>

Normally, exporting a VSFAvatar to VNyan requires you to [export your avatar to VRM first, and then reimport it back into Unity](https://www.vseeface.icu/#vsfavatar).
With Denormalized Avatar Exporter, **those steps are not needed**.

However, please understand that this tool will modify your avatar in such a way that it may introduce incompatibilities that would not be
normally found in a traditional avatar, so the quality of the results may vary.

## Usage in Warudo

<HaiTags>
<HaiTag compatibleWithWarudo={true} />
</HaiTags>

Normally, exporting a Character Mod to Warudo requires you to normalize your avatar bones first using the [Setup Character step](https://docs.warudo.app/docs/modding/character-mod#step-2-setup-character).
With Denormalized Avatar Exporter, **this step is not needed**.

However, please understand that this tool will modify your avatar in such a way that it may introduce incompatibilities that would not be
normally found in a traditional avatar, so the quality of the results may vary.
