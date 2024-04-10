﻿---
title: Lightbox Viewer
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

*Lightbox Viewer* lets you simultaneously visualize changes in shader material settings under different lighting conditions.

:::tip
This does not require VRChat to run. It has been tested to work on Unity 2019, and should work on newer versions.
:::

## Download

The tool is free for download. It can also be downloaded using VCC.

### Direct download

- GitHub ([hai-vr/lightbox-viewer](https://github.com/hai-vr/lightbox-viewer))

### VCC

- Use this link to **[install our listing to VCC](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Lightbox Viewer* to your project using VCC.

## How to use

### Testing materials with Lightbox Viewer

To begin, choose an object, and click the three vertical dots `⋮` next to the Transform component, and select *Haï LightboxViewer*.

![image](/unsorted_ghc/168523708-b1f94066-af60-49f2-9d04-73763eba20dc.png)

Then, press *Activate LightboxViewer*. You can now move the scene camera to reframe, move the object around, and do your lighting tests live.

While this mode is active, the editor may slow down. Press *Activate LightboxViewer* again when not in use to improve the performance of the editor.

<video controls width="816" autostart="false">
    <source src="https://hai-vr.github.io/lightbox-viewer/videos/sx_2022-05-16_07-18-28_Sda2clkyuk.mp4" type="video/mp4"/>
</video>

### Testing in Play mode

*Lightbox Viewer* can be used in Play mode. Press *Activate LightboxViewer* before entering Play mode.

<video controls width="816" autostart="false">
    <source src="https://hai-vr.github.io/lightbox-viewer/videos/sx_2022-05-16_07-24-50_VDkm4dNnOs.mp4" type="video/mp4"/>
</video>

### Post Processing

If Post Processing is not installed, you can press *Install Post-processing*. This lets you test color grading, bloom, and other effects.

Use the *Post Processing* checkbox to turn it on and off.

![image](/unsorted_ghc/168622378-444d3c29-f6bc-44ae-aae3-8233ef6f1724.png)

### Lifting small objects off the ground

When testing small objects, they may appear inside the ground. Press *Advanced*, and change the *Vertical Displacement* slider to lift it off the ground.

![image](/unsorted_ghc/168845888-17b8cf4b-de34-4614-b54b-b18a8dd551a9.png)

### Disable a lightbox

After pressing *Activate LightboxViewer*, the lightbox scene will show up in at the bottom of the hierarchy.

Expand the `Lightboxes` object. If you tag one of them as `EditorOnly`, the lightbox will no longer show up.

<video controls width="816" autostart="false">
    <source src="https://hai-vr.github.io/lightbox-viewer/videos/sx_2022-05-16_17-32-21_n4FA3C76cb.mp4" type="video/mp4"/>
</video>

### Enable a lightbox

Likewise, a lightbox can be enabled by marking it as `Untagged`. The default lightbox scene contains a hidden lightbox called *Spotlight Cookie* that you can enable this way.

![image](/unsorted_ghc/168635901-c1f1581f-e20e-496b-bca7-274f5b88db0e.png)

## Advanced usage

### Camera roll

Camera Roll lets you roll the camera. This can be used to test how some shaders behave. Specifically, some matcap shaders can look strange in VR when tilting the head sideways.

By default, the *Counter-rotate* option is enabled, which keeps the preview upright despite the camera rolling.

Press *Reset* to restore the view upright.

<video controls width="816" autostart="false">
    <source src="https://hai-vr.github.io/lightbox-viewer/videos/sx_2022-05-16_07-52-09_k7AkO3iYda.mp4" type="video/mp4"/>
</video>

### Custom camera settings

If you need to tweak the camera settings (such as MSAA, HDR, ...), you can select a reference camera in *Advanced > Reference Camera*.

This will use most camera settings including the near and far clip plane. The scene camera continues to control the camera.

### Realign after object movement

During operation, you can click *Advanced > Realign* to center the lightboxes back to your object after it has moved around.

## Create your own lightbox scene

Lightbox Viewer is shipped with some default lightboxes that you can test your content with.

These lightboxes are contained in a scene called `Lightbox.unity`. You can select a different lightbox scene by creating one, or importing one created by someone else.

### How it works

A lightbox scene is just a series of meshes put side by side with different lighting settings and post-processing settings.

![image](/unsorted_ghc/168620627-d1a7c300-ba8a-4668-b37d-fd8c34571c65.png)

In a lightbox scene, each lightbox is defined in an object in the root called `Lightboxes`. The position and rotation of the lightbox is used to determine where to place the object inside that lightbox.

![image](/unsorted_ghc/168619085-1b2a944d-b769-4551-b80e-2a4559da4483.png)

Each lightbox can contain objects that are only enabled when taking a picture of that lightbox.

In particular, this affects real-time lights and post-processing settings. By putting these objects inside a lightbox, you can ensure that they are only enabled when taking a picture of that lightbox.

You don't need to put meshes, light probes, or reflection probes inside the `Lightboxes` hierarchy, but you can. The default lightbox scene has all the meshes and baked data defined outside the `Lightboxes` hierarchy.

When creating a lightbox scene, the same discipline as creating a world applies:

- Set your world meshes static *Contribute GI* and *Reflection Probe Static*.
- Make sure your world meshes has lightmaps UVs.
- Mark your lights as *Baked*, unless you want to test for real time lighting.
- Place reflection probes and light probes.
- Bake your scene lighting and reflection probes.

### Full mode of operation

When activating LightboxViewer, the following happens:

- The lightbox scene is loaded as an additive scene on top of the current scene.
- Light probes are re-applied (tetrahedralized).

When capturing lightboxes, the following happens:

- If there is a reference camera in the Advanced settings, this camera is temporaily copied, otherwise a new one is temporaily created.
- The camera copies the scene camera settings.
    - If there is a camera in the Advanced settings, the near and far clip plane are copied from that reference camera.
    - If not, the camera copies the near and far clip plane of the scene camera.
- All light sources in the scene are temporaily disabled, except those in the lightbox scene.
- All reflection probes in the scene are temporaily disabled, except those in the lightbox scene.
- All children of the object called `Lightboxes` in the lightbox scene are disabled.

**Each child of the object called `Lightboxes` generates a picture:**

- That child lightbox is enabled. **This effectively enables anything inside of it that can influence the render, such as real time lights or post-processing volumes.**
- The object to be viewed is moved to that lightbox.
- The camera takes a picture.
- That child is disabled again.

If the child is tagged as `EditorOnly`, it will not be used.