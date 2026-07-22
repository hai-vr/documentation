---
title: Blendshape Viewer
---
import {HaiTags} from "/src/components/HaiTags";
import {HaiTag} from "/src/components/HaiTag";
import {HaiVideo} from "/src/components/HaiVideo";
import HaiLocalization from "/src/components/HaiLocalization";
import HaiSupport from "/docs/_support.mdx";

<HaiTags>
<HaiTag isUniversal={true} />
</HaiTags>

<HaiLocalization languages={['en', 'ja', 'fr', 'ko', 'zh-Hans', 'zh-Hant']} applicationIsLocalized={true} />

*Blendshape Viewer* lets you visualize which area of a model is affected by a blendshape so that you can tweak their values.

:::tip[Compatibility notes]
- It has been tested to work on Unity 2022, and Unity 6.4, and should work on newer versions.
- 🌊 No game-specific SDK is required.
- If you use a version of Unity lower than 2022, you must use version 2.1.2. 
:::

![Unity_Q4csWb8ty6.png](/assets/docs/products/blendshape-viewer/v3/Unity_Q4csWb8ty6.png)

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-25-45_Je9CWGeOH8.mp4"></HaiVideo>

## Download

This tool can be downloaded on [Booth.pm](https://hai-vr.booth.pm/items/3582541).

It can also be installed through ALCOM:
- Use this link to **[install our listing to ALCOM](vcc://vpm/addRepo?url=https://hai-vr.github.io/vpm-listing/index.json)**.
- Add *Haï ~ Blendshape Viewer* to your project using ALCOM.

<HaiSupport/>

## How to use

### Choose which object to preview

Select the *SkinnedMeshRenderer* that you want to preview. In the inspector, click the three dots, and select “Haï Blendshape Viewer”.

![how_to_open](/assets/docs/products/blendshape-viewer/v3/how_to_open.png)

### Align the scene view with your mesh

Look around using the Scene tab to focus on your mesh, then press *Update* to refresh the thumbnails. The thumbnails use the same camera
settings as the scene view.

If you want the thumbnails to be larger, change the *Thumbnail Size* slider, and press the *Update* button again.

:::tip
For better results, remember that you can change the field of view of the Scene camera.

![field_of_view](/assets/docs/products/blendshape-viewer/Untitled_5.png)
:::

### Identify which blendshape affects which area

By default, the thumbnails will display the differences. If you do not want this, uncheck *Show differences*.

While having your cursor inside the *Blendshape Viewer* window, press the ALT key to display the original picture without the blendshape applied.

The function of the ALT key can be changed in the dropdown at the top right:

- To show the original picture when the ALT key is held down, choose *ALT shows original*:
- To highlight the differences in yellow when the ALT key is held down, choose *ALT shows hotspots*:
- Choose *Show hotspots by default* to highlight the differences in yellow; holding the *ALT* key down will show the general area.
- To disable the function of the ALT key, select *ALT does nothing*.

### Search for blendshapes

Type on the *Search* field to filter the results by blendshape name.

You can separate search terms with a space. The search query `eye down` can find results like `eye_lookdown`.

### Copy a blendshape name

Click on the **clipboard icon** to copy the blendshape name.

Alternatively, you can also select the text that contains the blendshape name.

### Change the value of a blendshape

The slider under each blendshape will modify the value of that blendshape in your scene.

This can also be used while recording an animation.

<HaiVideo src="./blendshape-viewer-img/sx_2022-01-15_00-18-15_4Kdbs1Hlck.mp4"></HaiVideo>

## Special thanks

- [Pema](https://github.com/pema99/) for the [Compute Shader](https://github.com/hai-vr/blendshape-viewer/commit/46db696df8be42d251f59c3f0fb240b117905c76)!