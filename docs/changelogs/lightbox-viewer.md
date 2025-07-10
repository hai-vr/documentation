---
title: Lightbox Viewer
---

import {HaiVideo} from "/src/components/HaiVideo";

## 2.4.1-alpha.2

Add support for URP projects:
- Detect when the project is BIRP.
- If it is not BIRP, don't suggest installing the Post-Processing V2 package.
- If it is not BIRP, load the URP scene, even if the Light Volumes package is installed.

## 2.4.1-alpha.1

- Change Edit mode strategy for performance:
  - Previously, Edit Mode was copying the avatar every frame, so that we don't accidentally cause the avatar to be modified.
  - This change now copies the avatar to a hidden GameObject in the hierarchy and marked non-saved, if the reference to the Object To View does not change.
  - Use object change events to detect when anything changes in the scene. If there is any change that pertains to a non-transform, we destroy the copied object and create a new one.
  - This copied object is moved 10_000 units downwards between render cycles.
  - Don't disable the original avatar between render cycles, because enabling the avatar is slow.
  - In the copy, remove the Animators, because they take time to bind and we don't need them.

- Fix Vertical Displacement could not be reset.

## 2.4.0

- Add Collections of lightboxes. Users may now switch from the default six lightboxes to other more specialized ones.
  - Add special lightboxes specifically for Light Volumes. This requires the Light Volumes package to be installed.
  - Expose the Spotlight Cookie lightbox that was previously hidden.
- Previously, lights inside the object being viewed were disabled. This is no longer the case by default.
- Add option to disable lights inside the object being viewed.
- Add option to support shaders that require a Depth Texture.
  - This uses [Poiyomi's DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) light settings, but repackaged with a different GUID to avoid installation conflicts.
- The Advanced menu is now a sidebar.
- Some settings are now saved editor-wide, instead of being reset when the Lightbox Viewer window is closed.
  - This includes *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*.

![Unity_a6UfNnk6f1.png](..%2Fproducts%2Fimg%2Flightbox-viewer%2FUnity_a6UfNnk6f1.png)

<HaiVideo src="./img/lightbox-viewer/6bNmaNelyD.mp4"></HaiVideo>

## 2.4.0-beta.2

- Fix Play Mode did not show collections when Reload Domain remains default.

## 2.4.0-beta.1

- Add Collections of lightboxes. Users may now switch from the default six lightboxes to other more specialized ones.
  - Add special lightboxes specifically for Light Volumes. This requires the Light Volumes package to be installed.
  - Expose the Spotlight Cookie lightbox that was previously hidden.
- Previously, lights inside the object being viewed were disabled. This is no longer the case by default.
- Add option to disable lights inside the object being viewed.
- Add option to support shaders that require a Depth Texture.
  - This uses [Poiyomi's DepthGet](https://github.com/poiyomi/PoiyomiToonShader/blob/master/_PoiyomiShaders/Prefabs/DepthGet.prefab) light settings, but repackaged with a different GUID to avoid installation conflicts.
- The Advanced menu is now a sidebar.
- Some settings are now saved editor-wide, instead of being reset when the Lightbox Viewer window is closed.
  - This includes *Counter Rotate, Post Processing, Vertical Displacement, Mute Lights Inside Object, Support Depth Texture*.

## 2.3.0

Add support for [Light Volumes](https://github.com/REDSIM/VRCLightVolumes) if it is installed in the project.

The lightboxes themselves do not change, so the differences are subtle.
The Pink scene is the most notable because the left hand will be lit pink and the right hand will be lit purple.

:::warning
If you want the **previews** to use light volumes, please understand that *unlike avatar uploads*, is it not sufficient to have a compatible shader like lilToon 1.10;
you need the actual [Light Volumes package](https://github.com/REDSIM/VRCLightVolumes?tab=readme-ov-file#installation-through-vrchat-creator-companion) installed in your avatar project.
:::

<HaiVideo src="./img/lightbox-viewer/gvIpDdvoyu.mp4" loop={true}></HaiVideo>

*With light volumes:*
![Unity_UWaWszgU9p.png](..%2Fproducts%2Fimg%2Flightbox-viewer%2FUnity_UWaWszgU9p.png)

*Without light volumes:*
![Unity_BuaFhsYHjq.png](..%2Fproducts%2Fimg%2Flightbox-viewer%2FUnity_BuaFhsYHjq.png)

## 2.3.0-beta.2

Fix "Unknown error occurred while loading LightingData.asset":
- Re-bake scene with a separate .lighting file.
- This should address the "Unknown error occurred while loading LightingData.asset" error.

## 2.3.0-beta.1

Add support for Light Volumes if it is installed in the project.

The lightboxes themselves do not change, so the differences are subtle.
The Pink scene is the most notable because the left hand will be lit pink and the right hand will be lit purple.

*With light volumes:*
![Unity_UWaWszgU9p.png](..%2Fproducts%2Fimg%2Flightbox-viewer%2FUnity_UWaWszgU9p.png)

*Without light volumes:*
![Unity_BuaFhsYHjq.png](..%2Fproducts%2Fimg%2Flightbox-viewer%2FUnity_BuaFhsYHjq.png)

- Add scene to support Light Volumes: https://github.com/REDSIM/VRCLightVolumes
  - Scene is baked differently from main scene, as it uses Progressive GPU instead of CPU.
  - Scene has inactive lightboxes with Light Volumes disabled.
- This scene is selected by default if the Light Volumes package version 0.7.2 or higher is installed.

## 2.2.0

Try to improve speed in Edit mode by removing all MonoBehaviours from the copy:
- Try to improve the runtime speed in Edit mode by removing all MonoBehaviours from the copy, so that the OnEnable/OnDestroy don't get invoked.
- This is done by parenting the copy to a disabled parent before removing all MonoBehaviours from the copy.

## 2.1.0

Re-bake lighting of Lightbox scene in Unity 2022:
- The current lightmap seems to misbehave in Unity 2022, especially the White box.
- Lighting has been re-baked in Unity 2022.
- The package is now classified as being a Unity 2022.3 package.

## 2.0.2

- Fix an issue where avatars would fail to upload.
  - Fix scripts now compile when building.

## 2.0.1

- First public VCC release of Lightbox Viewer.
  - VCC install removes previous installations of this tool from Assets/
  - This tool now belongs in Packages/
