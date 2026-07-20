---
title: Lightbox Viewer
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import HaiSupport from "/docs/_support.mdx";
import {HaiVideo} from "/src/components/HaiVideo";
import {HaiStartingFromTag} from "/src/components/HaiStartingFromTag";
import HaiLocalization from "/src/components/HaiLocalization";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja']} applicationIsLocalized={false} />

*Lightbox Viewer* lets you simultaneously visualize changes in shader material settings under different lighting conditions.

:::tip[Compatibility notes]
- It has been tested to work on Unity 2019, Unity 2022, and Unity 6, and should work on newer versions.
- 🌊 No game-specific SDK is required.
- For <HaiTag requiresBasis={true} short={true} /> projects, the [URP module](lightbox-viewer/urp) is required.
:::

## Download

The tool is free to download. It can also be downloaded using ALCOM.

### Direct download

- GitHub ([hai-vr/lightbox-viewer](https://github.com/hai-vr/lightbox-viewer))

### ALCOM

- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Lightbox Viewer* to your project using ALCOM.

## How to use

### Testing materials with Lightbox Viewer

To begin, choose an object, and click the three vertical dots `⋮` next to the Transform component, and select *Haï LightboxViewer*.

![image](/unsorted_ghc/168523708-b1f94066-af60-49f2-9d04-73763eba20dc.png)

Then, press *Activate LightboxViewer*. You can now move the scene camera to reframe, move the object around, and do your lighting tests live.

While this mode is active, the editor may slow down. Press *Activate LightboxViewer* again when not in use to improve the performance of the editor.

<HaiVideo src="../../static/unsorted_ghc/githubio/sx_2022-05-16_07-18-28_Sda2clkyuk.mp4"></HaiVideo>

### Testing in Play mode

*Lightbox Viewer* can be used in Play mode. Press *Activate LightboxViewer* before entering Play mode.

<HaiVideo src="../../static/unsorted_ghc/githubio/sx_2022-05-16_07-24-50_VDkm4dNnOs.mp4"></HaiVideo>

<HaiSupport />

### Post Processing

If Post Processing is not installed, you can press *Install Post-processing*. This lets you test color grading, bloom, and other effects.

Use the *Post Processing* checkbox to turn it on and off.

![image](/unsorted_ghc/168622378-444d3c29-f6bc-44ae-aae3-8233ef6f1724.png)

### Lifting small objects off the ground

When testing small objects, they may appear inside the ground. Press *Advanced*, and change the *Vertical Displacement* slider to lift it off the ground.

![image](/unsorted_ghc/168845888-17b8cf4b-de34-4614-b54b-b18a8dd551a9.png)

### Switch between collections of lightboxes

<HaiStartingFromTag version={"2.4.0"} />

On the left, there is a section named *Collections*. You may use this to select between different sets of lightboxes to test with.

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## Advanced usage

### Camera roll

Camera Roll lets you roll the camera. This can be used to test how some shaders behave. Specifically, some matcap shaders can look strange in VR when tilting the head sideways.

By default, the *Counter-rotate* option is enabled, which keeps the preview upright despite the camera rolling.

Press *Reset* to restore the view upright.

<HaiVideo src="../../static/unsorted_ghc/githubio/sx_2022-05-16_07-52-09_k7AkO3iYda.mp4"></HaiVideo>

### Custom camera settings

If you need to tweak the camera settings (such as MSAA, HDR, ...), you can select a reference camera in *Advanced > Reference Camera*.

This will use most camera settings including the near and far clip plane. The scene camera continues to control the camera.

### Realign after object movement

During operation, you can click *Advanced > Realign* to center the lightboxes back to your object after it has moved around.

### Support Depth Texture

<HaiStartingFromTag version={"2.4.0"} />

Some shaders like [Poiyomi SSAO](https://www.poiyomi.com/shading/ssao) need a special prefab to operate.

You can enable *Advanced > Support Depth Texture* to ensure these shader features can operate.

### Mute Lights Inside Object

<HaiStartingFromTag version={"2.4.0"} />

Lights inside your object can interfere with the look of the lightboxes.

If you enable *Advanced > Mute Lights Inside Object*, the previews will temporarily turn the lights inside your object off for rendering the lightboxes.

## Light Volumes

<HaiStartingFromTag version={"2.3.0"} />

If the [Light Volumes](https://github.com/REDSIM/VRCLightVolumes) package (0.7.2 or above) is installed in the project, the lightboxes will support light volumes.

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>
